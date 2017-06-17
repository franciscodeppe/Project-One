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
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
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

$("#twSlider").slider();
$("#twSlider").on("slide", function(slideEvt) {
    $("#twSliderVal").text(slideEvt.value)
	num = slideEvt.value;
});

$("#twSliderVal").text($("#twCurrentSliderValLabel").attr("data-slider-value"))





// ----------------------------------------
// point to "#main"div on index.html

let stateArr = [false, false, false];

let togFn = function (x, y, z) {
  if (stateArr[y] === false) {
    stateArr[y] = true;
    let slVal = $('#' + z).val();
    $('#main').append($('<div id="newsDiv' + y + '"class="col-lg-4">'));
    printNews(x, slVal, y);
  } else {
    stateArr[y] = false;
    $('#newsDiv' + y).remove();

  }
  //console.log(stateArr[x]);
};

let slideChange = function (x, y, z) {
  if (stateArr[y] === true) {
    $('#contentDiv' + y).remove();
    printNews(x, z, y);
  } else {
    return false;
  }
};

let printNews = function (x, y, z) {
  //console.log(x);
  //console.log(y);
  console.log('success');
  let newsAPI = '469cf0be81ab487c8d6f31374930c8bd';
  // let queryURL = 'https://api.nytimes.com/svc/topstories/v2/home.json?' + $.param({
  //   'api-key': "e77c50dfeb48404d9461aad63e81fc72"});
  let queryURL = 'https://newsapi.org/v1/articles?source=' + x + '&sortBy=top&apiKey=' + newsAPI;
  $.ajax({
    url: queryURL,
    method: 'GET',
  }).done(function(snapshot) {
    console.log(snapshot);
    var contentDiv = $('<div id="contentDiv' + z + '"class="col-lg-4">');
    for (let i = 0; i < y && i < snapshot.articles.length; i++) {
      var newsRow = $('<div class="row">');
      var newsImage = $('<img src="' + snapshot.articles[i].urlToImage + '" class="col-lg-5">');
      var content = $('<div class="col-lg-7">');
      content.html('<p class="text-center"><a href="' + snapshot.articles[i].url + '">' + snapshot.articles[i].title + '</a>' +
        '<p class="text-center">' + snapshot.articles[i].description + '</p>');
      newsRow.append(newsImage);
      contentDiv.append(content);
      contentDiv.append(newsRow);
      $('#newsDiv' + z).append(contentDiv);
    }

  }).fail(function(err) {
    throw err;
  });

};
