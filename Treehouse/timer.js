

var seconds = 0;
var min = 0; 
var startCounter = 0;  

function timer() { 

var timeDisplay = document.getElementById("time");
     
    // turn seconds into mm:ss
    if (seconds == 60) { 
        seconds = 0; 
        min = min + 1; }
    
    // add a leading zero (as a string value) if seconds less than 10
    
     if (seconds < 10) {
        seconds = "0" + seconds;
        } 
    
// concatenate with colon
    var message = min + ":" + seconds;
    // now change the display
    timeDisplay.innerHTML = message;
    
    seconds++;
          
    } 

window.onload =  function () {
    startCounter = setInterval(timer, 1000);
    }

function toggle(button) {
  if (button.value == "OFF") {
    button.value = "ON";
    startCounter = setInterval(timer, 1000);
    
  } else {
    button.value = "OFF";
    clearInterval(startCounter); 
  }
}

