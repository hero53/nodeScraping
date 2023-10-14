const cheerio = require("cheerio");
const axios = require("axios");
const https = require("https");

const j2cp = require("json2csv").Parser;
const fs = require("fs");
const path = require("path");
const excel = require("exceljs");
const compteur = 3;

const baseUrl =
  "https://www.goafricaonline.com/ci/annuaire-resultat?type=company&whatWho=btp&near=false&companySizes=%5B%5D&";
const dataBookInfo = [];
const getLink = [];


const agent = new https.Agent({
  rejectUnauthorized: true
});


//parcourir le site
// localiser les liens qui se trouve dans a.stretched-link.font-bold
//sauvegarder les liens dans un tabbleau
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

function isURL(str) {
  // Utilise une expression régulière pour vérifier si str a un format d'URL valide.
  const urlPattern = /^(https?:\/\/)?([\w.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;
  return urlPattern.test(str);
}
function getEntrepriseEmail(){
  
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
      // productInfo.category = $(".posted_in a")
      //   .map(function () {
      //     return $(this).text();
      //   })
      //   .get()
      //   .join(",");
      dataBookInfo.push(productInfo);
      console.log(
        `Informations du produit collectées : ${i + 1} ${productInfo.title}`
      );
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des informations du produit : " + error
      );
    }
  }
  // console.log(dataBookInfo);

  dataBookInfo.map(async (info) => {
    try {
      if (!isURL(info.site)) {
        console.log("L'URL n'est pas valide :", info.site);
        info.email = "-";
        return; // Utilisation de 'return' pour passer à l'itération suivante
      }
  
      const productResponse = await axios.get(info.site,{ httpsAgent: agent });
      const $ = cheerio.load(productResponse.data);
      const pageText = $("body").text();
      const emailRegex = /\S+@\S+/g;
      const foundEmails = pageText.match(emailRegex) || [];
  
      if (foundEmails.length > 0) {
        // Si des adresses e-mail sont trouvées, utilisez la première comme adresse e-mail.
        info.email = foundEmails[0];

      } else {
        info.email = "-";
      }
    } catch (error) {
      console.log(error);
    }
  
  

  });
  console.log(dataBookInfo);
  console.log(dataBookInfo.length);
  
}



scrapeMultiplePages();
