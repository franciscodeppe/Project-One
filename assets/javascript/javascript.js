



// var config = {
//   apiKey: "AIzaSyB57KQ1u_6kNnlgEGrVMCOeX7YbSxErUJw",
//   authDomain: "project-one-49553.firebaseapp.com",
//   databaseURL: "https://project-one-49553.firebaseio.com",
//   projectId: "project-one-49553",
//   storageBucket: "project-one-49553.appspot.com",
//   messagingSenderId: "633822167881"
// };
// firebase.initializeApp(config);
//
// var database = firebase.database()
// var query;
// var ip;
// // I would recommend we put our API calls in a unique function and then run those functions on the jquery "click"/submit event. If that makes sense...
//
// $("#search-button").on("click", function(event)  {
//   event.preventDefault();
//   query = $("#search-input").val().trim().toLowerCase();
//   console.log(query);
//
//   database.ref().push({
//     query: query,
//   })
//
// })
//
// database.ref().on("child_added", function(snapshot) {
//   $("#search-list").prepend("<a>" + "<li>" + snapshot.val().query + "</li>" + "</a>")
// }, function(errorObject){
//   console.log(errorObject.code)
// })
//
// function glassdoor() {
//   var id = "161248"
//   var key = "eDlz3npEoO3"
//   var ip = "38.122.108.178"
//
//   var glassdoorURL = "http://api.glassdoor.com/api/api.htm?v=1&format=json&t.p=" + id + "t.k=" + key + "&action=salaries&userip=" + ip + "&useragent=Mozilla/%2F4.0"
//
//   $.ajax({
//     url: glassdoorURL,
//     method: "GET",
//   }).done(function(response) {
//     console.log(response)
//   });
//
//
//
//     // add to result <a href='https://www.glassdoor.com/index.htm'>powered by <img src='https://www.glassdoor.com/static/img/api/glassdoor_logo_80.png' title='Job Search' /></a>
// }
// glassdoor()
