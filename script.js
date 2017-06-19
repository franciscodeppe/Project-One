let newsAPI = '469cf0be81ab487c8d6f31374930c8bd';

let pickNew = function (x, y) {
  if (x === 'nytimes') nytimes(y);
  if (x === 'theguardian') theguardian(y);
  if (x === 'bbc') bbc(y);
  if (x === 'abc') abc(y);
  if (x === 'dailymail') dailymail(y);
  if (x === 'buzzfeed') buzzfeed(y);
  if (x === 'cnn') cnn(y);
  if (x === 'eW') eW(y);
  if (x === 'espn') espn(y);
  if (x=== 'bbcSport') bbcSport(y);
  if (x=== 'sportBible') sportBible(y);
  if (x === 'businessInsider') businessInsider(y);
  if (x==='cnbc') cnbc(y);
  if (x === 'fortune') fortune(y);
  if (x === 'hacker') hacker(y);
  if (x === 'techCrunch') techCrunch(y);
  if (x === 'associatedPress') associatedPress(y);
  if (x === 'techRadar') techRadar(y);
};

// Politics/News Outlets
let associatedPress = function (x) {
  let queryURL = 'https://newsapi.org/v1/articles?source=associated-press&sortBy=top&apiKey=' + newsAPI;

  $.ajax({
    url: queryURL,
    method: 'GET',
  }).done(function(snapshot) {
    // console.log(snapshot);
    $('#newsDiv' + x + ' .panel-heading').html('<strong>Associated Press</strong>');
    $('#newsDiv' + x + ' .panel-body').html('');
    for (let i = 0; i < 10 && i < snapshot.articles.length; i++) {
      $('#newsDiv' + x + ' .panel-body').append(
        '<p class="text-center"><a href="' + snapshot.articles[i].url + '">' + snapshot.articles[i].title + '</a>' +
        '<br><img width="150px" src="' + snapshot.articles[i].urlToImage + '"></p>'
      );
    }
  }).fail(function(err) {
    throw err;
  });
};
let bbc = function (x) {
  let queryURL = 'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=' + newsAPI;

  $.ajax({
    url: queryURL,
    method: 'GET',
  }).done(function(snapshot) {
    console.log(snapshot);

    $('#newsDiv' + x + ' .panel-heading').html('<strong>BBC</strong>');

    $('#newsDiv' + x + ' .panel-body').html('');

    for (let i = 0; i < 10 && i < snapshot.articles.length; i++) {
      $('#newsDiv' + x + ' .panel-body').append(
        '<p class="text-center"><a href="' + snapshot.articles[i].url + '">' + snapshot.articles[i].title + '</a>' +
        '<br><img width="150px" src="' + snapshot.articles[i].urlToImage + '"></p>'
      );
    }

    $('#newsDiv' + x + ' .panel-footer').html(
      '<p class="text-center"><a href="http://www.bbc.com/news">' +
      '<img width="75px" src="https://pbs.twimg.com/profile_images/662708106/bbc.png">' +
      '</a></p>'
    );
  }).fail(function(err) {
    throw err;
  });

};


let theguardian = function (x) {
  // let hlDate = moment(); //.subtract(1, 'day')
  // hlDate = moment(hlDate).format('YYYY-MM-DD');

  let queryURL = 'https://newsapi.org/v1/articles?source=the-guardian-uk&sortBy=top&apiKey=' + newsAPI;

  $.ajax({
    url: queryURL,
    method: 'GET',
  }).done(function(snapshot) {

        $('#newsDiv' + x + ' .panel-heading').html('<strong>The Guardian (UK)</strong>');

        $('#newsDiv' + x + ' .panel-body').html('');

        for (let i = 0; i < 10 && i < snapshot.articles.length; i++) {
          $('#newsDiv' + x + ' .panel-body').append(
            '<p class="text-center"><a href="' + snapshot.articles[i].url + '">' + snapshot.articles[i].title + '</a>' +
            '<br><img width="150px" src="' + snapshot.articles[i].urlToImage + '"></p>'
          );
        }

    $('#newsDiv' + x + ' .panel-footer').html(
      '<p class="text-center"><a href="https://www.theguardian.com/us">' +
      '<img width="200px" src="http://icould.com/files/2012/01/guardian-logo.jpg">' +
      '</a></p>'
    );


  }).fail(function(err) {
    throw err;
  });

};

let nytimesnews = function (x) {
  // let queryURL = 'https://api.nytimes.com/svc/topstories/v2/home.json?' + $.param({
  //   'api-key': "e77c50dfeb48404d9461aad63e81fc72"});
  let queryURL = 'https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=' + newsAPI;
  $.ajax({
    url: queryURL,
    method: 'GET',
  }).done(function(snapshot) {
    console.log(snapshot);
    // let lastUpdate = moment(snapshot.last_updated).format('MM-DD-YYYY @ HH:mm');
    $('#newsDiv' + x + ' .panel-heading').html('<strong>New York Times</strong>');

    $('#newsDiv' + x + ' .panel-body').html('');

    for (let i = 0; i < 10 && i < snapshot.articles.length; i++) {
      $('#newsDiv' + x + ' .panel-body').append(
        '<p class="text-center"><a href="' + snapshot.articles[i].url + '">' + snapshot.articles[i].title + '</a>' +
        '<br><img width="150px" src="' + snapshot.articles[i].urlToImage + '"></p>'
      );
    }

    $('#newsDiv' + x + ' .panel-footer').html(
      '<p class="text-center"><a href="http://developer.nytimes.com">' +
      '<img src="http://static01.nytimes.com/packages/images/developer/logos/' +
      'poweredby_nytimes_200c.png" alt="New York Times API">'
    );
  }).fail(function(err) {
    throw err;
  });

};

let abc = function (x) {
  let queryURL = 'https://newsapi.org/v1/articles?source=abc-news-au&sortBy=top&apiKey=' + newsAPI;

  $.ajax({
    url: queryURL,
    method: 'GET',
  }).done(function(snapshot) {
    // console.log(snapshot);

    $('#newsDiv' + x + ' .panel-heading').html('<strong>ABC News</strong>');

    $('#newsDiv' + x + ' .panel-body').html('');

    for (let i = 0; i < 10 && i < snapshot.articles.length; i++) {
      $('#newsDiv' + x + ' .panel-body').append(
        '<p class="text-center"><a href="' + snapshot.articles[i].url + '">' + snapshot.articles[i].title + '</a>' +
        '<br><img width="150px" src="' + snapshot.articles[i].urlToImage + '"></p>'
      );
    }

  }).fail(function(err) {
    throw err;
  });
};
let cnn = function (x) {
  let queryURL = 'https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=' + newsAPI;

  $.ajax({
    url: queryURL,
    method: 'GET',
  }).done(function(snapshot) {
    // console.log(snapshot);
    $('#newsDiv' + x + ' .panel-heading').html('<strong>CNN</strong>');
    $('#newsDiv' + x + ' .panel-body').html('');
    for (let i = 0; i < 10 && i < snapshot.articles.length; i++) {
      $('#newsDiv' + x + ' .panel-body').append(
        '<p class="text-center"><a href="' + snapshot.articles[i].url + '">' + snapshot.articles[i].title + '</a>' +
        '<br><img width="150px" src="' + snapshot.articles[i].urlToImage + '"></p>'
      );
    }
  }).fail(function(err) {
    throw err;
  });
};


// Entertainment

let dailymail = function (x) {
  let queryURL = 'https://newsapi.org/v1/articles?source=daily-mail&sortBy=top&apiKey=' + newsAPI;

  $.ajax({
    url: queryURL,
    method: 'GET',
  }).done(function(snapshot) {
    // console.log(snapshot);
    $('#newsDiv' + x + ' .panel-heading').html('<strong>DailyMail</strong>');
    $('#newsDiv' + x + ' .panel-body').html('');
    for (let i = 0; i < 10 && i < snapshot.articles.length; i++) {
      $('#newsDiv' + x + ' .panel-body').append(
        '<p class="text-center"><a href="' + snapshot.articles[i].url + '">' + snapshot.articles[i].title + '</a>' +
        '<br><img width="150px" src="' + snapshot.articles[i].urlToImage + '"></p>'
      );
    }
  }).fail(function(err) {
    throw err;
  });
};
let buzzfeed = function (x) {
  let queryURL = ' https://newsapi.org/v1/articles?source=buzzfeed&sortBy=top&apiKey=' + newsAPI;

  $.ajax({
    url: queryURL,
    method: 'GET',
  }).done(function(snapshot) {
    // console.log(snapshot);
    $('#newsDiv' + x + ' .panel-heading').html('<strong>Buzzfeed</strong>');
    $('#newsDiv' + x + ' .panel-body').html('');
    for (let i = 0; i < 10 && i < snapshot.articles.length; i++) {
      $('#newsDiv' + x + ' .panel-body').append(
        '<p class="text-center"><a href="' + snapshot.articles[i].url + '">' + snapshot.articles[i].title + '</a>' +
        '<br><img width="150px" src="' + snapshot.articles[i].urlToImage + '"></p>'
      );
    }
  }).fail(function(err) {
    throw err;
  });
};
let eW = function (x) {
  let queryURL = 'https://newsapi.org/v1/articles?source=entertainment-weekly&sortBy=top&apiKey=' + newsAPI;

  $.ajax({
    url: queryURL,
    method: 'GET',
  }).done(function(snapshot) {
    // console.log(snapshot);
    $('#newsDiv' + x + ' .panel-heading').html('<strong>Entertainment Weekly</strong>');
    $('#newsDiv' + x + ' .panel-body').html('');
    for (let i = 0; i < 10 && i < snapshot.articles.length; i++) {
      $('#newsDiv' + x + ' .panel-body').append(
        '<p class="text-center"><a href="' + snapshot.articles[i].url + '">' + snapshot.articles[i].title + '</a>' +
        '<br><img width="150px" src="' + snapshot.articles[i].urlToImage + '"></p>'
      );
    }
  }).fail(function(err) {
    throw err;
  });
};

// Sports

let espn = function (x) {
  let queryURL = 'https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=' + newsAPI;

  $.ajax({
    url: queryURL,
    method: 'GET',
  }).done(function(snapshot) {
    // console.log(snapshot);
    $('#newsDiv' + x + ' .panel-heading').html('<strong>ESPN</strong>');
    $('#newsDiv' + x + ' .panel-body').html('');
    for (let i = 0; i < 10 && i < snapshot.articles.length; i++) {
      $('#newsDiv' + x + ' .panel-body').append(
        '<p class="text-center"><a href="' + snapshot.articles[i].url + '">' + snapshot.articles[i].title + '</a>' +
        '<br><img width="150px" src="' + snapshot.articles[i].urlToImage + '"></p>'
      );
    }
  }).fail(function(err) {
    throw err;
  });
};

let bbcSport = function (x) {
  let queryURL = 'https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=' + newsAPI;

  $.ajax({
    url: queryURL,
    method: 'GET',
  }).done(function(snapshot) {
    // console.log(snapshot);
    $('#newsDiv' + x + ' .panel-heading').html('<strong>BBC Sport</strong>');
    $('#newsDiv' + x + ' .panel-body').html('');
    for (let i = 0; i < 10 && i < snapshot.articles.length; i++) {
      $('#newsDiv' + x + ' .panel-body').append(
        '<p class="text-center"><a href="' + snapshot.articles[i].url + '">' + snapshot.articles[i].title + '</a>' +
        '<br><img width="150px" src="' + snapshot.articles[i].urlToImage + '"></p>'
      );
    }
  }).fail(function(err) {
    throw err;
  });
};

let sportBible = function (x) {
  let queryURL = 'https://newsapi.org/v1/articles?source=the-sport-bible&sortBy=top&apiKey=' + newsAPI;

  $.ajax({
    url: queryURL,
    method: 'GET',
  }).done(function(snapshot) {
    // console.log(snapshot);
    $('#newsDiv' + x + ' .panel-heading').html('<strong>Sport Bible</strong>');
    $('#newsDiv' + x + ' .panel-body').html('');
    for (let i = 0; i < 10 && i < snapshot.articles.length; i++) {
      $('#newsDiv' + x + ' .panel-body').append(
        '<p class="text-center"><a href="' + snapshot.articles[i].url + '">' + snapshot.articles[i].title + '</a>' +
        '<br><img width="150px" src="' + snapshot.articles[i].urlToImage + '"></p>'
      );
    }
  }).fail(function(err) {
    throw err;
  });
};

//Business

let businessInsider = function (x) {
  let queryURL = 'https://newsapi.org/v1/articles?source=business-insider&sortBy=latest&apiKey=' + newsAPI;

  $.ajax({
    url: queryURL,
    method: 'GET',
  }).done(function(snapshot) {
    // console.log(snapshot);
    $('#newsDiv' + x + ' .panel-heading').html('<strong>Business Insider</strong>');
    $('#newsDiv' + x + ' .panel-body').html('');
    for (let i = 0; i < 10 && i < snapshot.articles.length; i++) {
      $('#newsDiv' + x + ' .panel-body').append(
        '<p class="text-center"><a href="' + snapshot.articles[i].url + '">' + snapshot.articles[i].title + '</a>' +
        '<br><img width="150px" src="' + snapshot.articles[i].urlToImage + '"></p>'
      );
    }
  }).fail(function(err) {
    throw err;
  });
};
let cnbc = function (x) {
  let queryURL = 'https://newsapi.org/v1/articles?source=cnbc&sortBy=top&apiKey=' + newsAPI;

  $.ajax({
    url: queryURL,
    method: 'GET',
  }).done(function(snapshot) {
    // console.log(snapshot);
    $('#newsDiv' + x + ' .panel-heading').html('<strong>CNBC</strong>');
    $('#newsDiv' + x + ' .panel-body').html('');
    for (let i = 0; i < 10 && i < snapshot.articles.length; i++) {
      $('#newsDiv' + x + ' .panel-body').append(
        '<p class="text-center"><a href="' + snapshot.articles[i].url + '">' + snapshot.articles[i].title + '</a>' +
        '<br><img width="150px" src="' + snapshot.articles[i].urlToImage + '"></p>'
      );
    }
  }).fail(function(err) {
    throw err;
  });
};
let fortune = function (x) {
  let queryURL = 'https://newsapi.org/v1/articles?source=fortune&sortBy=top&apiKey=' + newsAPI;

  $.ajax({
    url: queryURL,
    method: 'GET',
  }).done(function(snapshot) {
    // console.log(snapshot);
    $('#newsDiv' + x + ' .panel-heading').html('<strong>Fortune</strong>');
    $('#newsDiv' + x + ' .panel-body').html('');
    for (let i = 0; i < 10 && i < snapshot.articles.length; i++) {
      $('#newsDiv' + x + ' .panel-body').append(
        '<p class="text-center"><a href="' + snapshot.articles[i].url + '">' + snapshot.articles[i].title + '</a>' +
        '<br><img width="150px" src="' + snapshot.articles[i].urlToImage + '"></p>'
      );
    }
  }).fail(function(err) {
    throw err;
  });
};

//Technology
let engadget = function (x) {
  let queryURL = 'https://newsapi.org/v1/articles?source=engadget&sortBy=top&apiKey=' + newsAPI;

  $.ajax({
    url: queryURL,
    method: 'GET',
  }).done(function(snapshot) {
    // console.log(snapshot);
    $('#newsDiv' + x + ' .panel-heading').html('<strong>Engadget</strong>');
    $('#newsDiv' + x + ' .panel-body').html('');
    for (let i = 0; i < 10 && i < snapshot.articles.length; i++) {
      $('#newsDiv' + x + ' .panel-body').append(
        '<p class="text-center"><a href="' + snapshot.articles[i].url + '">' + snapshot.articles[i].title + '</a>' +
        '<br><img width="150px" src="' + snapshot.articles[i].urlToImage + '"></p>'
      );
    }
  }).fail(function(err) {
    throw err;
  });
};
let hacker = function (x) {
  let queryURL = 'https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&apiKey=' + newsAPI;

  $.ajax({
    url: queryURL,
    method: 'GET',
  }).done(function(snapshot) {
    // console.log(snapshot);
    $('#newsDiv' + x + ' .panel-heading').html('<strong>Hacker News</strong>');
    $('#newsDiv' + x + ' .panel-body').html('');
    for (let i = 0; i < 10 && i < snapshot.articles.length; i++) {
      $('#newsDiv' + x + ' .panel-body').append(
        '<p class="text-center"><a href="' + snapshot.articles[i].url + '">' + snapshot.articles[i].title + '</a>' +
        '<br><img width="150px" src="' + snapshot.articles[i].urlToImage + '"></p>'
      );
    }
  }).fail(function(err) {
    throw err;
  });
};
let techCrunch = function (x) {
  let queryURL = 'https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=' + newsAPI;

  $.ajax({
    url: queryURL,
    method: 'GET',
  }).done(function(snapshot) {
    // console.log(snapshot);
    $('#newsDiv' + x + ' .panel-heading').html('<strong>Tech Crunch</strong>');
    $('#newsDiv' + x + ' .panel-body').html('');
    for (let i = 0; i < 10 && i < snapshot.articles.length; i++) {
      $('#newsDiv' + x + ' .panel-body').append(
        '<p class="text-center"><a href="' + snapshot.articles[i].url + '">' + snapshot.articles[i].title + '</a>' +
        '<br><img width="150px" src="' + snapshot.articles[i].urlToImage + '"></p>'
      );
    }
  }).fail(function(err) {
    throw err;
  });
};
let techRadar = function (x) {
  let queryURL = 'https://newsapi.org/v1/articles?source=techradar&sortBy=top&apiKey=' + newsAPI;

  $.ajax({
    url: queryURL,
    method: 'GET',
  }).done(function(snapshot) {
    // console.log(snapshot);
    $('#newsDiv' + x + ' .panel-heading').html('<strong>Tech Radar</strong>');
    $('#newsDiv' + x + ' .panel-body').html('');
    for (let i = 0; i < 10 && i < snapshot.articles.length; i++) {
      $('#newsDiv' + x + ' .panel-body').append(
        '<p class="text-center"><a href="' + snapshot.articles[i].url + '">' + snapshot.articles[i].title + '</a>' +
        '<br><img width="150px" src="' + snapshot.articles[i].urlToImage + '"></p>'
      );
    }
  }).fail(function(err) {
    throw err;
  });
};
