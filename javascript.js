var config = {
  apiKey: "AIzaSyB57KQ1u_6kNnlgEGrVMCOeX7YbSxErUJw",
  authDomain: "project-one-49553.firebaseapp.com",
  databaseURL: "https://project-one-49553.firebaseio.com",
  projectId: "project-one-49553",
  storageBucket: "project-one-49553.appspot.com",
  messagingSenderId: "633822167881"
};
firebase.initializeApp(config);

var database = firebase.database()
var query;
// I would recommend we put our API calls in a unique function and then run those functions on the jquery "click"/submit event. If that makes sense...

$("#search-button").on("click", function(event)  {
  event.preventDefault();
  query = $("#search-input").val().trim().toLowerCase();
  console.log(query);

  database.ref().push({
    query: query,
  })

})

database.ref().on("child_added", function(snapshot) {
  $("#search-list").prepend("<a>" + "<li>" + snapshot.val().query + "</li>" + "</a>")
}, function(errorObject){
  console.log(errorObject.code)
})

function glassdoor() {

}
