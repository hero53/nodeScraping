const cheerio = require("cheerio");
const axios = require("axios");

var url =
  "https://librairie-viedimpact.com/produit/la-vache-pourpre-seth-godin/";
const book_data = [];
const book_url = new Set(); // Utilisation d'un ensemble pour stocker les URLs
const book_url_trouver = new Set(); // Utilisation d'un ensemble pour stocker les URLs

async function getInfo(url, retryCount = 3) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const bookData = $(".single-product-wrapper");
    const autreBook = $(".product-title a");
    bookData.map(function () {
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
      book_data.push(book);
    });

    book_url.add(url); // Utilisation de .add() pour ajouter à l'ensemble
    const links = autreBook.map(function () {
      book_url_trouver.add($(this).attr("href"));
    });

    const diffSet = difference(book_url, book_url_trouver);
    myArray = Array.from(diffSet)[0];
    console.log(book_url_trouver);
    // console.log(book_url_trouver, diffSet.size,myArray = Array.from(diffSet)[0]);
    if (diffSet.size > 0) {
      getInfo(myArray);
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
