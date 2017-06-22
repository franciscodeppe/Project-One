var open = false;
$("#header").on("click", function() {
    if (open === false) {
        open = true;
        openNav()
    } else {
        open = false;
        closeNav()
    }
});

function openNav() {
    $("#mySidenav").css('width', '300px')
    $("#main").css('marginLeft', '300px')
    $("#main").css('width', '100%')
    $(".newsDiv").css('width', '40%')
}


function closeNav() {
    $("#mySidenav").css('width', '0')
    $("#main").css('marginLeft', '20px')
    $("#main").css('width', '100%')
    $(".newsDiv").css('width', '40%')
}

// sliders-------------------------------
$("#nytSlider").slider();
$("#nytSlider").on("slide", function(slideEvt) {
    $("#nytSliderVal").text(slideEvt.value)
    num = slideEvt.value;
});

$("#nySliderVal").text($("#nyCurrentSliderValLabel").attr("data-slider-value"))

$("#bbcSlider").slider();
$("#bbcSlider").on("slide", function(slideEvt) {
    $("#bbcSliderVal").text(slideEvt.value)
    num = slideEvt.value;
});

$("#bbcSliderVal").text($("#bbcCurrentSliderValLabel").attr("data-slider-value"))

$("#fortuneSlider").slider();
$("#fortuneSlider").on("slide", function(slideEvt) {
    $("#fortuneSliderVal").text(slideEvt.value)
    num = slideEvt.value;
});

$("#fortuneSliderVal").text($("#fortuneCurrentSliderValLabel").attr("data-slider-value"))

$("#timeSlider").slider();
$("#timeSlider").on("slide", function(slideEvt) {
    $("#timeSliderVal").text(slideEvt.value)
    num = slideEvt.value;
});

$("#timeSliderVal").text($("#timeCurrentSliderValLabel").attr("data-slider-value"))

$("#wsjSlider").slider();
$("#wsjSlider").on("slide", function(slideEvt) {
    $("#wsjSliderVal").text(slideEvt.value)
    num = slideEvt.value;
});

$("#nflSliderVal").text($("#nflCurrentSliderValLabel").attr("data-slider-value"))

$("#nflSlider").slider();
$("#nflSlider").on("slide", function(slideEvt) {
    $("#nflSliderVal").text(slideEvt.value)
    num = slideEvt.value;
});

$("#nflSliderVal").text($("#nflCurrentSliderValLabel").attr("data-slider-value"))

$("#mtvSlider").slider();
$("#mtvSlider").on("slide", function(slideEvt) {
    $("#mtvSliderVal").text(slideEvt.value)
    num = slideEvt.value;
});

$("#cnnSliderVal").text($("#cnnCurrentSliderValLabel").attr("data-slider-value"))

$("#cnnSlider").slider();
$("#cnnSlider").on("slide", function(slideEvt) {
    $("#cnnSliderVal").text(slideEvt.value)
    num = slideEvt.value;
});

$("#cnnSliderVal").text($("#cnnCurrentSliderValLabel").attr("data-slider-value"))


// firebase

var config = {
    apiKey: "AIzaSyB57KQ1u_6kNnlgEGrVMCOeX7YbSxErUJw",
    authDomain: "project-one-49553.firebaseapp.com",
    databaseURL: "https://project-one-49553.firebaseio.com",
    projectId: "project-one-49553",
    storageBucket: "project-one-49553.appspot.com",
    messagingSenderId: "633822167881"
};
firebase.initializeApp(config);

let database = firebase.database()

// database.ref().on('value',function(snapshot) {
// 	stateArr = snapshot.stateArr
// })



// ----------------------------------------
// point to "#main"div on index.html

let stateArr = [false, false, false, false, false, false, false, false, false, false, ];
let titleArr = ['NYT', 'BBC', 'Fortune', 'Time', 'WSJ', 'NFL', 'MTV', 'CNN'];

let togFn = function(x, y, z) { //x= url string, y=index value, z=slider id
    if (stateArr[y] === false) {
        stateArr[y] = true;
        let slVal = $('#' + z).val();
        printNews(x, y, slVal);
    } else {
        stateArr[y] = false;
        $('#newsDiv' + y).remove();
    }
};

let slideChange = function(x, y, z) { //x=url string, y=index value, z= slider value
    if (stateArr[y] === true) {
        printNews(x, y, z);
    } else {
        return false;
    }
};

let printNews = function(x, y, z) { //x=URL string, y=index value , z =slider val
    let newsAPI = '469cf0be81ab487c8d6f31374930c8bd';
    let queryURL = 'https://newsapi.org/v1/articles?source=' + x + '&sortBy=top&apiKey=' + newsAPI;
    $.ajax({
        url: queryURL,
        method: 'GET',
    }).done(function(snapshot) {

        if ($('#newsDiv' + y).length === 0) {
            $('#main').append('<div id="newsDiv' + y + '"></div>')
            $('#newsDiv' + y).addClass('row newsDiv carousel slide');

        } else {
            $('#newsDiv' + y).empty();
            console.log('success');
        }
        $('#newsDiv' + y).append('<h2 class="newsTitle">' + titleArr[y] + '</h2>'); //DO NOT TOUCH
        $('#newsDiv' + y).append(
            '<a class="left carousel-control" href="#newsDiv' + y + '" data-slide="prev">' +
            '<span class="glyphicon glyphicon-chevron-left"></span>' +
            '<span class="sr-only">Previous</span></a>' +

            '<a class="right carousel-control" href="#newsDiv' + y + '" data-slide="next">' +
            '<span class="glyphicon glyphicon-chevron-right"></span>' +
            '<span class="sr-only">Next</span></a>'
        )
        $('#newsDiv' + y).append('<div id="carHolder' + y + '" class="carousel-inner">')

        for (let i = 0; i < z && i < snapshot.articles.length; i++) {
            console.log(i);
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
            $('#carHolder' + y).append(article);

            database.ref().set({
                stateArr: stateArr
            })
        }
        Sortable.create(main, { /*options */ });

    }).fail(function(err) {
        throw err;
    });

};

// Weather

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
      '<p class="info"> Feels like: ' + snapshot.current_observation.temperature_string + '</p>' +
      '<p class="info"> Feels like: ' + snapshot.current_observation.feelslike_string + '</p>' +
      '<p class="info"> Weather: ' + snapshot.current_observation.weather + '</p>' + '</div>' +
      '<div class="col-md- weatherIcon">' + '<img src="' + snapshot.current_observation.icon_url + '" alt="weatherIcon"></div>');
      $('#weatherWell').append(newRow);
  });
}
