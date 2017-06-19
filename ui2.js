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
    $("#mySidenav").css('width', '300px' )
    $("#main").css('marginLeft', '300px' )
    $("#main").css('width', '95%')
	$(".newsDiv").css('width','95%')
}


function closeNav() {
    $("#mySidenav").css('width', '0' )
    $("#main").css('marginLeft', '20px' )
    $("#main").css('width', '95%')
	$(".newsDiv").css('width','95%')
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
let titleArr = ['NYT', 'BBC'];

let togFn = function (x, y, z) { //x= url string, y=index value, z=slider id
  if (stateArr[y] === false) {
    stateArr[y] = true;
    let slVal = $('#' + z).val();
    printNews(x, y, slVal);
  } else {
    stateArr[y] = false;
    $('#newsDiv' + y).remove();
  }
};

let slideChange = function (x, y, z) { //x=url string, y=index value, z= slider value
  if (stateArr[y] === true) {
    printNews(x, y, z);
  } else {
    return false;
  }
};

let printNews = function (x, y, z) {//x=URL string, y=index value , z =slider val
  let newsAPI = '469cf0be81ab487c8d6f31374930c8bd';
  let queryURL = 'https://newsapi.org/v1/articles?source=' + x + '&sortBy=top&apiKey=' + newsAPI;
  $.ajax({
    url: queryURL,
    method: 'GET',
  }).done(function(snapshot) {

    if ($('#newsDiv' + y).length === 0) {
      $('#main').append('<div id="newsDiv' + y + '"></div>')
      $('#newsDiv' + y).addClass('row newsDiv');
    } else {
      $('#newsDiv' + y).empty();
      console.log('success');
    }
      $('#newsDiv' + y).append('<h2>' + titleArr[y] + '</h2>');//DO NOT TOUCH
    for (let i = 0; i < z && i < snapshot.articles.length; i++) {
      console.log(i);
      let article = $('<div class="container newsContent">');

      let image = $('<img src="' + snapshot.articles[i].urlToImage +
      '" class="img-responsive">');

      let content = $('<div class="articleContent">');

      content.html(
        '<p><a href="' + snapshot.articles[i].url + '">' +
        snapshot.articles[i].title + '</a></p>' +
        '<p>' + snapshot.articles[i].description + '</p>'
      );
      article.append(image);
      article.append(content);
      $('#newsDiv' + y).append(article);

    }

  }).fail(function(err) {
    throw err;
  });

};
