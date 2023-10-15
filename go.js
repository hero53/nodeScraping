const cheerio = require("cheerio");
const axios = require("axios");
const https = require("https");

const j2cp = require("json2csv").Parser;
const fs = require("fs");
const path = require("path");
const excel = require("exceljs");
const utile = require("./utile");
const compteur = 5;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const baseUrl =
  "https://www.goafricaonline.com/ci/annuaire-resultat?type=company&whatWho=btp&near=false&companySizes=%5B%5D&";
const dataEntrepriseInfo = [];
const newdataEntrepriseInfo = [];
const likeArray = [];

const agent = new https.Agent({
  rejectUnauthorized: false,
});

async function getInfo(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const infoZone = $("a.stretched-link.font-bold");

    infoZone.each(function () {
      // likeArray.push($(this).find("a.stretched-link.font-bold").attr("href"));
      likeArray.push($(this).attr("href"));
    });
    console.log("Nombre de liens trouvés : " + likeArray.length);
  } catch (error) {
    console.log("C'est pas top : " + error);
  }
}

async function scrapeMultiplePages() {
  for (let i = 1; i <= compteur; i++) {
    const pageUrl = baseUrl + `p=${i}/`;
    await getInfo(pageUrl);
  }
  // console.log(likeArray);

  // Maintenant, parcourons les liens collectés pour obtenir des informations détaillées.
  for (let i = 0; i < likeArray.length; i++) {
    // for (let i = 0; i < 3; i++) {
    try {
      const productUrl = likeArray[i];
      console.log(productUrl);
      const productResponse = await axios.get(productUrl);
      const $ = cheerio.load(productResponse.data);
      const productInfo = {};
      productInfo.title = $("h1").text().trim();
      productInfo.type = $(".items-baseline a").text().trim();
      productInfo.description = $("div.text-14.mt-4").text().trim();
      productInfo.gps = $("address").text().trim() ?? "-";
      productInfo.contact = $('a[href^="tel:+225"]')
        .map(function () {
          return $(this)
            .attr("href")
            .replace("tel:+225", "")
            .replace(/\s/g, "");
        })
        .get()
        .filter((value, index, self) => {
          return self.indexOf(value) === index;
        })
        .join(",");
      productInfo.site = $('a[rel="dofollow"]:first').attr("href") ?? "-";
      productInfo.localisation =
        $('a[href^="https://maps."]:first').attr("href") ?? "-";
      productInfo.email = "-";

      dataEntrepriseInfo.push(productInfo);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des informations du produit : " + error
      );
    }
  }

  const workbook = new excel.Workbook();
  const worksheet = workbook.addWorksheet("Products");

  // Ajoutez des en-têtes au fichier Excel.
  worksheet.addRow([
    "Title",
    "type",
    "localisation",
    "contact",
    "email",
    "site",
    "gps",
  ]);
  // dataEntrepriseInfo.forEach(async (object) => {
  //   try {
  //     if (!utile.isURL(object.site)) {
  //       console.log("L'URL n'est pas valide :", object.site);
  //       object.email = "-";
  //       return; // Utilisation de 'return' pour passer à l'itération suivante
  //     }
  //     console.log("OK", object.site);

  //     const productResponse = await axios.get(object.site, {
  //       httpsAgent: agent,
  //     });
  //     const $ = cheerio.load(productResponse.data);
  //     const pageText = $("body").text();
  //     const emailRegex =
  //       /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}(?![^{]*\})/g;
  //     // const emailRegex = /\S+@\S+/g;
  //     const foundEmails = pageText.match(emailRegex) || [];

  //     if (foundEmails.length > 0) {
  //       // Si des adresses e-mail sont trouvées, utilisez la première comme adresse e-mail.
  //       object.email = foundEmails.join(",");
  //       newdataEntrepriseInfo.push(object)

  //       console.log(`Email ${object.site}: ${object.email}`);
  //     } else {
  //       newdataEntrepriseInfo.push(object)

  //       console.log(`Email ${object.site}: ${object.email}`);
  //     }

  //     // Maintenant, parcourons les liens collectés pour obtenir des informations détaillées.
  //     worksheet.addRow([
  //       object.title,
  //       object.type,
  //       object.localisation,
  //       object.contact,
  //       object.email,
  //       object.site,
  //       object.gps,
  //     ]);
  //   } catch (error) {
  //     if (error.code === "EPROTO") {
  //       console.log("Erreur SSL : " + error.message);
  //     } else {
  //       console.log("Erreur inattendue : " + error);
  //     }
  //     return; //  Passer à l'itération suivante avec 'continue'
  //   }
  // });

  for (let i = 0; i < dataEntrepriseInfo.length; i++) {
    const object = dataEntrepriseInfo[i];
    try {
      if (!utile.isURL(object.site)) {
        console.log("L'URL n'est pas valide :", object.site);
        object.email = "-";
        worksheet.addRow([
          object.title,
          object.type,
          object.localisation,
          object.contact,
          object.email,
          object.site,
          object.gps,
        ]);
        continue; // Passez à l'itération suivante avec 'continue'
      }

      console.log("OK", object.site);

      const productResponse = await axios.get(object.site, {
        httpsAgent: agent,
      });
      const $ = cheerio.load(productResponse.data);
      const pageText = $("body").text();
      const emailRegex =
        /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}(?![^{]*\})/g;
      const foundEmails = pageText.match(emailRegex) || [];

      if (foundEmails.length > 0) {
        // Si des adresses e-mail sont trouvées, utilisez la première comme adresse e-mail.
        object.email = foundEmails.join(",");
        newdataEntrepriseInfo.push(object);

        console.log(`Email ${object.site}: ${object.email}`);
      } else {
        object.email = "-";
        newdataEntrepriseInfo.push(object);

        console.log(`Email ${object.site}: ${object.email}`);
      }

      worksheet.addRow([
        object.title,
        object.type,
        object.localisation,
        object.contact,
        object.email,
        object.site,
        object.gps,
      ]);
    } catch (error) {
      if (error.code === "EPROTO") {
        console.log("Erreur SSL : " + error.message);
      } else {
        console.log("Erreur inattendue : " + error);
      }
    }
  }

  console.log(dataEntrepriseInfo);

  const excelFilePath = "products.xlsx";
  await workbook.xlsx.writeFile(excelFilePath);
  console.log("Fichier Excel enregistré avec succès : " + excelFilePath);

  // const outputDir = "./data";
  // if (!fs.existsSync(outputDir)) {
  //   fs.mkdirSync(outputDir, { recursive: true });
  // }

  // const outputFilePath = path.join(outputDir, "book.csv");
  // const parser = new j2cp();
  // const csv = parser.parse(dataEntrepriseInfo);
  // fs.writeFileSync(outputFilePath, csv);
  // console.log("Fichier CSV enregistré avec succès : " + outputFilePath);

  // getUrlListInfo(dataEntrepriseInfo);
}

scrapeMultiplePages();
