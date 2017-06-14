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
var from;
var seats;
var to;


// I would recommend we put our API calls in a unique function and then run those functions on the jquery "click"/submit event. If that makes sense...

$("#search-button").on("click", function(event)  {
  event.preventDefault();
  from = $("#from-input").val().trim().toLowerCase();
  seats = $("#seat-number").val().trim();
  to = $("#to-input").val().trim().toLowerCase();



  localStorage.setItem('departing from', from);
  localStorage.setItem('number of seats', seats);
  localStorage.setItem('destination', to);

  console.log(localStorage.getItem('desparting from'));
  console.log(localStorage.getItem('number of seats'));
  console.log(localStorage.getItem('destination'));


})

database.ref().on("child_added", function(snapshot) {

}, function(errorObject){
  console.log(errorObject.code)
})
