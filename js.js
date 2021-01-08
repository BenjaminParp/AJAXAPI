$(document).ready(function () {
  $.ajax({
    url:
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=62351a9b5d7a4d3595717fbd7d638af6",
    type: "GET",
    dataType: "json",
    success: function (data) {
      console.log(data);
      for (i = 0; i < data.articles.length; i++) {
        $("#USA").append(
          '<div class= "item" ><img src=' +
            data.articles[i].urlToImage +
            "></img>" +
            "<h2>" +
            data.articles[i].title +
            "</h2>" +
            data.articles[i].description +
            " <a href=" +
            data.articles[i].url +
            ' onclick="window.open(this.href); return false;"> <input type ="button" class="boutton" value= "Voir article"></div>'
        );
      }
    },
    error: function () {
      alert("Ca marche pas mon cousin");
    },
  });

  $("body > button").click(function () {
    $("body").toggleClass("dark");
    $("body > button").toggleClass("dark");
    $("body > h1").toggleClass("dark")
  });
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}
