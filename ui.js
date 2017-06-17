newsAPI = '469cf0be81ab487c8d6f31374930c8bd';
var open = false;
$("#header").on("click", function() {
    if (open === false) {
        open = true;
        openNav()
    } else {
		open= false;
		closeNav()
	}
});

function openNav() {
    document.getElementById("mySidenav").style.width = "325px";
    document.getElementById("main").style.marginLeft = "325px";
}


function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


$("#nytSlider").slider();
$("#nytSlider").on("slide", function(slideEvt) {
    $("#nytSliderVal").text(slideEvt.value)
	num = slideEvt.value;
});

$("#nySliderVal").text($("#nyCurrentSliderValLabel").attr("data-slider-value"))

$("#bfSlider").slider();
$("#bfSlider").on("slide", function(slideEvt) {
    $("#bfSliderVal").text(slideEvt.value)
	num = slideEvt.value;
});

$("#bfSliderVal").text($("#bfCurrentSliderValLabel").attr("data-slider-value"))

$("#wsjSlider").slider();
$("#wsjSlider").on("slide", function(slideEvt) {
    $("#wsjSliderVal").text(slideEvt.value)
	num = slideEvt.value;
});

$("#wsjSliderVal").text($("#wsjCurrentSliderValLabel").attr("data-slider-value"))





// ----------------------------------------
// point to "#main"div on index.html


var nytSwitch;
var nyt = "the-new-york-times";


// let pickNews = function (x, y) {
//   if (x=== "nytimes") nytimes(y);
//   if (x==="buzzfeed") buzzfeed(y);
//   if (x === "twitter") twitter(y);
// };
let printNews = function (x) {
  // let queryURL = 'https://api.nytimes.com/svc/topstories/v2/home.json?' + $.param({
  //   'api-key': "e77c50dfeb48404d9461aad63e81fc72"});
  let queryURL = 'https://newsapi.org/v1/articles?source=' + x + '&sortBy=top&apiKey=' + newsAPI;
  $.ajax({
    url: queryURL,
    method: 'GET',
  }).done(function(snapshot) {
    console.log(snapshot);
    var newsDiv = $('<div id="newsDiv' + x + '"class="col-lg-4">');
    for (let i = 0; i < 10 && i < snapshot.articles.length; i++) {
      var newsRow = $('<div class="row">');
      var newsImage = $('<img src="' + snapshot.articles[i].urlToImage + '" class="col-lg-5">');
      var content = $('<div class="col-lg-7">');
      content.html('<p class="text-center"><a href="' + snapshot.articles[i].url + '">' + snapshot.articles[i].title + '</a>' +
        '<p class="text-center">' + snapshot.articles[i].description + '</p>');
      newsRow.append(newsImage);
      newsDiv.append(content);
      newsDiv.append(newsRow);
      $("#main").append(newsDiv);
    }

  }).fail(function(err) {
    throw err;
  });

};

$('#nytswitch').on('click', function (event) {
  console.log(true);
  // event.preventDefault();
  if (!nytSwitch) {
  nytswitch = true;
  printNews(nyt);
  }
  else {
    nytSwitch = false;
    newsDivnyt.remove();
  }
});
// $(yes/no switch)on("change" function() {
// 	var newsDiv = $("<div>");
// 	newsDiv.addClass("col-lg-4");
// 	for (# of news inputs) {
// 		var newsRow = $("<div>").addClass("row");
// 		var newsImage = img from news source
// 		newsImage.addClass(col-lg-5)
// 		var content = contect from news source
// 		content.addClass(col-lg-7)
// 		newsRow.append(newsImage)
// 		newsRow.append(content)
// 		newsDiv.append(newsRow);
// })
