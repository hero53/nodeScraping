const cheerio = require("cheerio");
const axios = require("axios");
const j2cp = require("json2csv").Parser;
const fs = require("fs");
const path = require("path");




const baseUrl = "https://librairie-viedimpact.com/boutique/";
const dataBookInfo = [];
const getLink = [];

async function getInfo(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const dataBookInfoZone = $(".product.type-product");

    dataBookInfoZone.each(function () {
      getLink.push($(this).find("a.woocommerce-LoopProduct-link").attr("href"));
    });
    console.log("Nombre de liens trouvés : " + getLink.length);
  } catch (error) {
    console.log("C'est pas top : " + error);
  }
}

async function scrapeMultiplePages() {
  for (let i = 1; i <= 10; i++) {
    const pageUrl = baseUrl + `page/${i}/`;
    await getInfo(pageUrl);
  }

  // Maintenant, parcourons les liens collectés pour obtenir des informations détaillées.
  // for (let i = 0; i < getLink.length; i++) {
    for (let i = 0; i < 5; i++) {
    try {
      const productUrl = getLink[i];
      const productResponse = await axios.get(productUrl);
      const $ = cheerio.load(productResponse.data);
      const productInfo = {};
      productInfo.title = $(".entry-title").text();
      productInfo.price = $(".amount bdi:first").text();
      productInfo.isDisponible = $(".in-stock").text();
      productInfo.category = $(".posted_in a")
        .map(function () {
          return $(this).text();
        })
        .get()
        .join(", ");
      dataBookInfo.push(productInfo);
      console.log("Informations du produit collectées : " + productInfo.title);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des informations du produit : " + error
      );
    }
  }

  // Une fois que toutes les informations ont été collectées, vous pouvez les imprimer ou les traiter comme vous le souhaitez.
  console.log("Total de liens trouvés : " + getLink.length);
  console.log(
    "Total d'informations de produit collectées : " + dataBookInfo.length
  );
  console.log("collection...");




  const outputDir = "./data";
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const outputFilePath = path.join(outputDir, "book.csv");
  const parser = new j2cp();
  const csv = parser.parse(dataBookInfo);
  fs.writeFileSync(outputFilePath, csv);
  console.log("Fichier CSV enregistré avec succès : " + outputFilePath);
}

scrapeMultiplePages();
