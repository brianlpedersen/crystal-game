
//  Step 2:
//  after 5 seconds, execute the fiveSeconds function
//  after 10 seconds, execute the tenSeconds function
//  after 15 seconds, execute the timeUp function
<div class= "question">What is 9*9?</div>
setTimeout(fiveSeconds, 1000 * 5);
setTimeout(tenSeconds, 1000 * 10);
//etTimeout(timeUp, 1000 * 15);

//  Step 3:
//  Fill in the blanks to these functions.
function fiveSeconds() {
  // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
  // console log 10 seconds left
  $("#time-left").append("<h2>About 10 Seconds Left!</h2>");
  console.log("10 seconds left");
}

function tenSeconds() {
  // in the element with an id of time-left add an h2 saying About 5 Seconds Left!
  // console log 5 seconds left
  $("#time-left").append("<h2>About 5 Seconds Left!</h2>");
  console.log("5 seconds left");
}

function timeUp() {
  // in the element with an id of time-left add an h2 saying Time's Up!
  // console log done
  console.log("done");
  $("#time-left").append("<h2>Time's Up!</h2>");
  console.log("time is up");