import axios from "axios";

// const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
// const APIKEY = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
// const HELPER = "&q=";


export default {
  // Gets all books

  searchArticles: function(query) {
    console.log("https://api.nytimes.com/svc/search/v2/articlesearch.json", { params: query });
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", { params: query });
  },
  getArticle: function() {
    return axios.get("/api/article");
  },
  // Deletes the book with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/article/" + id);
  },
  // Saves a book to the database
  saveArticle: function(articleData) {
    return axios.post("/api/article/", articleData);
  }
};

