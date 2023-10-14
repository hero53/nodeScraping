const cheerio = require("cheerio");
const axios = require("axios");
const https = require("https");

const j2cp = require("json2csv").Parser;
const fs = require("fs");
const path = require("path");
const excel = require("exceljs");
const utile = require("./utile");
const compteur = 3;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const baseUrl =
  "https://www.goafricaonline.com/ci/annuaire-resultat?type=company&whatWho=btp&near=false&companySizes=%5B%5D&";
const dataBookInfo = [];
const getLink = [];

const agent = new https.Agent({
  rejectUnauthorized: false,
});

async function getInfo(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const dataBookInfoZone = $("a.stretched-link.font-bold");

    dataBookInfoZone.each(function () {
      // getLink.push($(this).find("a.stretched-link.font-bold").attr("href"));
      getLink.push($(this).attr("href"));
    });
    console.log("Nombre de liens trouvés : " + getLink.length);
  } catch (error) {
    console.log("C'est pas top : " + error);
  }
}

function getUrlListInfo(objects) {
  objects.map(async (info) => {
    try {
      if (!utile.isURL(info.site)) {
        console.log("L'URL n'est pas valide :", info.site);
        info.email = "-";
        return; // Utilisation de 'return' pour passer à l'itération suivante
      }
      console.log("OK", info.site);

      const productResponse = await axios.get(info.site, { httpsAgent: agent });
      const $ = cheerio.load(productResponse.data);
      const pageText = $("body").text();
      const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}(?![^{]*\})/g;
      // const emailRegex = /\S+@\S+/g;
      const foundEmails = pageText.match(emailRegex) || [];

      if (foundEmails.length > 0) {
        // Si des adresses e-mail sont trouvées, utilisez la première comme adresse e-mail.
        info.email = foundEmails.join(",");
        console.log(`Email ${info.site}: ${info.email}`);
      } else {
        info.email = "-";
        console.log(`Email ${info.site}: ${info.email}`);
      }
    } catch (error) {
      if (error.code === "EPROTO") {
        console.log("Erreur SSL : " + error.message);
      } else {
        console.log("Erreur inattendue : " + error);
      }
      return; //  Passer à l'itération suivante avec 'continue'
    }
  });
}

async function scrapeMultiplePages() {
  for (let i = 1; i <= compteur; i++) {
    const pageUrl = baseUrl + `p=${i}/`;
    await getInfo(pageUrl);
  }
  console.log(getLink);

  // Maintenant, parcourons les liens collectés pour obtenir des informations détaillées.
  for (let i = 0; i < getLink.length; i++) {
    // for (let i = 0; i < 3; i++) {
    try {
      const productUrl = getLink[i];
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
        .join(",");
      // productInfo.reseau = $('.flex.mt-8 a[class^="border-brand-"]')
      //   .map(function () {
      //     return $(this).attr("href");
      //   })
      //   .get()
      // .join(",");
      productInfo.site = $('a[rel="dofollow"]:first').attr("href") ?? "-";
      productInfo.localisation =
        $('a[href^="https://maps."]:first').attr("href") ?? "-";

      dataBookInfo.push(productInfo);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des informations du produit : " + error
      );
    }
  }
  getUrlListInfo(dataBookInfo);

  // console.log(dataBookInfo);
  console.log(dataBookInfo.length);
}

scrapeMultiplePages();
