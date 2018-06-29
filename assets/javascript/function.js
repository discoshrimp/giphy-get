//button array
var button = [];
var searchTerm;
var queryURL = "";
var apiKey = "&api_key=I82fvTvK3La6kptLUDQNW9TAyxizAT8E";
function gifPrint(){
  var newImg =$("<img>")
  newImg.attr("src" +response.data.url)
}
$(document).ready(function () {
  $("button").on("click", function () {
    
    var movieTitle = $("#search-term").val().trim();

    searchTerm = movieTitle;

    queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + apiKey;

    if(searchTerm===""){
      alert("Please enter a search term")
    }else{
      $("#new-button").append("<button class='btn btn-large btn-secondary' src='" +queryURL+ "'>" +searchTerm+ "</button>");

      $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      button.push(queryURL);
      console.log(response);
    })
    console.log(searchTerm);
    console.log(queryURL);
  }
  })
$(".btn-secondary").on("click", function(){
  gifPrint();
})
}) 


//create a counting variable

//use counter to distinguish different variables in buttona rray

//push queryUrl to button array

//call upon button