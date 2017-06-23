let artColor; //article background color
let wordColor; //article text color

for (let i = 0; i < newsObj.length; i++) { //Generate news toggle and slider for each newsObj
  $('#mySidenav').append(
    '<a><h2 data-toggle="collapse" data-target="#' + newsObj[i].id + 'options">' +
    newsObj[i].title + '</h2></a>' +
    '<div id="' + newsObj[i].id + 'options" class="collapse">' +
    '<div class="container">' +
    '<div class="row">' +
    '<div class="container switch">' +
    '<p class="dropdown-text">Show:</p>' +
    '<input onchange="togFn(\'' +
    newsObj[i].link + '\', ' + i + ', ' + newsObj[i].id + 'Slider)" type="checkbox" ' +
    'data-toggle="toggle" id="' + newsObj[i].id + 'switch">' +
    '</div></div>' +
    '<div class="row">' +
    '<div class="container number">' +
    '<span class="sliders" id="' + newsObj[i].id + 'CurrentSliderValLabel">' +
    '<p class="dropdown-text">Feed Size: </p><small></small><span id="' +
    newsObj[i].id + 'SliderVal">' +
    '</span></span><br>' +
    '<input id="' + newsObj[i].id + 'Slider" ' +
    'onchange="slideChange(\'' + newsObj[i].link + '\', ' + i + ', ' + 'this.value)" ' +
    'type="text" data-slider-min="1" data-slider-max="10" data-slider-step="1" ' +
    'data-slider-value="5"><br>' +
    '</div></div></div></div><hr>'
  );
}

let open = false; //state of menu
$('#header').on('click', function() { //toggle state of menu
  if (open === false) {
    open = true;
    openNav();
  } else {
    open = false;
    closeNav();
  }
});

function openNav() { //toggle menu open
  $('#mySidenav').css('width', '20%');
  $('#main').css('marginLeft', '20%');
  $('#main').css('width', '80%');
}


function closeNav() { //togle menu closed
  $('#mySidenav').css('width', '0');
  $('#main').css('marginLeft', '20px');
  $('#main').css('width', '100%');
}

// sliders-------------------------------
for (let i = 0; i < newsObj.length; i++) { //text inputs to Sliders for each newsObj item
  $('#' + newsObj[i].id + 'Slider').slider();
  $('#' + newsObj[i].id + 'Slider').on('slide', function(slideEvt) {
    $('#' + newsObj[i].id + 'SliderVal').text(slideEvt.value);
    num = slideEvt.value; //Does num need to be defined?****** seems like no.
  });

  $('#' + newsObj[i].id + 'SliderVal').text($('#' + newsObj[i].id + 'CurrentSliderValLabel').attr('data-slider-value'));
}

// ----------------------------------------
// point to "#main"div on index.html

let togFn = function (x, y, z) { //x= url string, y=index value, z=slider id
  if (newsObj[y].state === false) {
    newsObj[y].state = true;
    printNews(x, y, z.value);
  } else {
    newsObj[y].state = false;
    $('#newsDiv' + y).remove();
  }
};

let slideChange = function (x, y, z) { //x=url string, y=index value, z= slider value
  if (newsObj[y].state === true) {
    newsObj[y].slider = z;
    printNews(x, y, z);
  } else {
    return false;
  }
};

let printNews = function (x, y, z) {//x=URL string, y=index value , z =slider val
  let newsAPI = '469cf0be81ab487c8d6f31374930c8bd';
  let queryURL;
  if (x === 'wirtschafts-woche') { //won't sort by top
    queryURL = 'https://newsapi.org/v1/articles?source=' + x + '&sortBy=latest&apiKey=' + newsAPI;
  } else {
    queryURL = 'https://newsapi.org/v1/articles?source=' + x + '&sortBy=top&apiKey=' + newsAPI;
  }
  $.ajax({
    url: queryURL,
    method: 'GET',
  }).done(function(snapshot) {

    if ($('#newsDiv' + y).length === 0) {
      $('#main').append('<div id="newsDiv'  + y + '"></div>')
      $('#newsDiv' + y).addClass('row newsDiv carousel slide');

    } else {
      $('#newsDiv' + y).empty();
    }
    $('#newsDiv' + y).append('<h2 class="newsTitle">' + newsObj[y].title + '</h2>');
    $('#newsDiv' + y).append(
    '<a class="left carousel-control" href="#newsDiv'+ y +'" data-slide="prev">' +
    '<span class="glyphicon glyphicon-chevron-left"></span>' +
    '<span class="sr-only">Previous</span></a>' +

  '<a class="right carousel-control" href="#newsDiv'+ y +'" data-slide="next">' +
    '<span class="glyphicon glyphicon-chevron-right"></span>' +
    '<span class="sr-only">Next</span></a>'
  )
  $('#newsDiv' + y).append('<div id="carHolder'+ y +'" class="carousel-inner">')

    for (let i = 0; i < z && i < snapshot.articles.length; i++) {
      let articale;
      if (i === 0) {
      article = $('<div class="container newsContent item active list-group-item">');
    } else {
      article = $('<div class="container newsContent item list-group-item">');
    }

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
      $('#carHolder'+ y).append(article);

    }
    Sortable.create(main, { /*options */}); //Click & Drag for news boxes

    if (artColor !== undefined) { //applies color changes if any were defined
      $('.list-group-item.active').css('background-color', artColor);
      $('.list-group-item').css('background-color', artColor);
    }
    if (wordColor !== undefined) {
      $('.list-group-item.active').css('color', wordColor);
      $('.list-group-item').css('color', wordColor);
    }

  }).fail(function(err) {
    throw err;
  });

};

$('.ColorBlotch').on('click', function (event) {
  event.preventDefault();
  let newColor = $(this).css('background-color');
  if ($(this).parent().prop('id') === 'MyColorSelector') {
    artColor = newColor;
    $('.list-group-item.active').css('background-color', artColor);
    $('.list-group-item').css('background-color', artColor);

  } else {
    wordColor = newColor;
    $('.list-group-item.active').css('color', wordColor);
    $('.list-group-item').css('color', wordColor);

  }

});

<<<<<<< HEAD
=======
};

// Weather

>>>>>>> 8b798e615309f66e3ca9319fae11b52cb385d825
let getWeather = function (x) {
  $('#weatherbtn').hide();
  let weatherAPI = "480a2056976635fd";
  let queryURL = "http://api.wunderground.com/api/"+ weatherAPI + "/conditions/settings/q/autoip.json";
  $.ajax({
    url: queryURL,
    method: 'GET'
  }).done(function (snapshot){
    console.log(snapshot);
    var newRow = $('<div>');
    newRow.addClass('row');
    newRow.append('<div class="col-md-8 weatherinfo">' +
      '<p class="info"> City: ' + snapshot.current_observation.display_location.city + '</p>' +
<<<<<<< HEAD
      '<p class="info"> Actual: ' + snapshot.current_observation.temperature_string + '</p>' +
=======
      '<p class="info"> Feels like: ' + snapshot.current_observation.temperature_string + '</p>' +
>>>>>>> 8b798e615309f66e3ca9319fae11b52cb385d825
      '<p class="info"> Feels like: ' + snapshot.current_observation.feelslike_string + '</p>' +
      '<p class="info"> Weather: ' + snapshot.current_observation.weather + '</p>' + '</div>' +
      '<div class="col-md- weatherIcon">' + '<img src="' + snapshot.current_observation.icon_url + '" alt="weatherIcon"></div>');
      $('#weatherWell').append(newRow);
  });
}
