let pickNews = function (x, y) {
  if (x === 'nytimes') nytimes(y);
  if (x === 'theguardian') theguardian(y);
  if (x === 'bbc') bbc(y);
};







let bbc = function (x) {
  let queryURL = 'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=469cf0be81ab487c8d6f31374930c8bd';

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
  let hlDate = moment(); //.subtract(1, 'day')
  hlDate = moment(hlDate).format('YYYY-MM-DD');

  let queryURL = 'https://content.guardianapis.com/search?q=headlines&from-date=' + hlDate + '&api-key=526f4f67-ef91-4236-9963-4266645b5ff2';

  $.ajax({
    url: queryURL,
    method: 'GET',
  }).done(function(snapshot) {
    //console.log(snapshot);
    $('#newsDiv' + x + ' .panel-heading').html('<strong>The Guardian</strong>');

    $('#newsDiv' + x + ' .panel-body').html('');

    for (let i = 0; i < 10 && i < snapshot.response.results.length; i++) {
      $('#newsDiv' + x + ' .panel-body').append(
        '<p class="text-center"><a href="' + snapshot.response.results[i].webUrl + '">' + snapshot.response.results[i].webTitle + '</a>' +
        '<br></p>'
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

let nytimes = function (x) {
  let queryURL = 'https://api.nytimes.com/svc/topstories/v2/home.json?' + $.param({
    'api-key': "e77c50dfeb48404d9461aad63e81fc72"});

  $.ajax({
    url: queryURL,
    method: 'GET',
  }).done(function(snapshot) {
    console.log(snapshot);
    let lastUpdate = moment(snapshot.last_updated).format('MM-DD-YYYY @ HH:mm');
    $('#newsDiv' + x + ' .panel-heading').html('<strong>New York Times</strong>');

    $('#newsDiv' + x + ' .panel-body').html('');

    for (let i = 0; i < 10 && i < snapshot.results.length; i++) {
    $('#newsDiv' + x + ' .panel-body').append(
      '<p class="text-center"><a href="' + snapshot.results[i].short_url + '">' + snapshot.results[i].title + '</a>' +
      '<br><img src="' + snapshot.results[i].multimedia[0].url + '"></p>'
    );
    }

    $('#newsDiv' + x + ' .panel-footer').html(
      '<p class="text-center"><a href="http://developer.nytimes.com">' +
      '<img src="http://static01.nytimes.com/packages/images/developer/logos/' +
      'poweredby_nytimes_200c.png" alt="New York Times API">' +
      '</a></p>' + '<p class="text-center">Last Update: ' + lastUpdate + '</p>'
    );
  }).fail(function(err) {
    throw err;
  });

};
