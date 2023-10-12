const cheerio = require("cheerio");
const axios = require("axios");
const Service = require("./comparSet");

var url =
  "https://librairie-viedimpact.com/produit/la-vache-pourpre-seth-godin/";
const dataBookInfo = [];
const OldBookUrlKnow = new Set(); // Utilisation d'un ensemble pour stocker les URLs
const newBookUrlDiscover = new Set(); // Utilisation d'un ensemble pour stocker les URLs
let lastDiffSetSize = null; // Variable pour stocker la taille de diffSet lors de la dernière itération
let consecutiveUnchangedSizeCount = 0; // Compteur pour le nombre de fois où diffSet.size reste inchangée

async function getInfo(url, retryCount = 3) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const dataBookInfoZone = $(".single-product-wrapper");
    const autreBook = $(".product-title a");

    //parcourir zone cible du site et sauvegarder les infos
    //dans un tabbleau d'objet
    dataBookInfoZone.map(function () {
      const book = {};
      book.title = $(this).find(".entry-title").text();
      book.price = $(this).find(".amount bdi:first").text();
      book.isDisponible = $(this).find(".in-stock").text();
      book.category = $(this)
        .find(".posted_in a")
        .map(function () {
          return $(this).text();
        })
        .get()
        .join(", ");
      dataBookInfo.push(book);
    });

    //ajouter notre url au tableau d'url connu
    OldBookUrlKnow.add(url);

    //ajouter les nouvelle url incconu un objet set
    autreBook
      .map(function () {
        newBookUrlDiscover.add($(this).attr("href"));
      })
      .get();
    // console.log(newBookUrlDiscover);

    const diffSet = difference(OldBookUrlKnow, newBookUrlDiscover);
    const compareSets = Service.comparaion(OldBookUrlKnow, newBookUrlDiscover);
    myArray = Array.from(diffSet)[0];
    // Si diffSet.size est la même que la dernière itération, incrémentez le compteur
    if (lastDiffSetSize !== null && compareSets.size === lastDiffSetSize) {
      consecutiveUnchangedSizeCount++;
    } else {
      // Sinon, réinitialisez le compteur
      consecutiveUnchangedSizeCount = 0;
      console.log(compareSets.size);
    }

    // Si le compteur atteint 50, arrêtez la récursion
    if (consecutiveUnchangedSizeCount >= 50) {
      console.log(compareSets.size);

      console.log(
        "Arrêt de la récursion, diffSet.size inchangée pendant 50 itérations."
      );
      return;
    }

    if (diffSet.size > 0) {
      getInfo(myArray);
    } else {
      console.log("finito !!!");
      return;
    }
  } catch (error) {
    console.error(`C'est pas top : ${error}`);
  }
}

function difference(setA, setB) {
  const differenceSet = new Set(setB);
  for (let item of setA) {
    differenceSet.delete(item);
  }
  return differenceSet;
}
getInfo(url);
