$(document).ready(function(){
    // "sept 29, 2020 20:52:00"
    // 
var countDownDate = new Date("Oct 3, 2020 2:25:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  $("#timer").html(days + "d " + hours + "h "+ minutes + "m " + seconds + "s ");

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    $("#timer").html("Now!");
    $("#zoomBtn").removeClass("hidden")
  }
}, 1000);
  });