//button array
var button = [];
var searchTerm = "";
var queryURL = "";
var apiKey = "&api_key=I82fvTvK3La6kptLUDQNW9TAyxizAT8E";
$(document).ready(function () {
  $("button").on("click", function () {
    
    var movieTitle = $("#search-term").val().trim();

    searchTerm = movieTitle;

    queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + apiKey;

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      $("#new-button").append("<button class='btn btn-large btn-secondary'>"+searchTerm+"</button>");
      console.log(response);
    })

    console.log(searchTerm);

    console.log(queryURL);
  })
}) 