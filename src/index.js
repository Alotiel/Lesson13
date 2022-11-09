let mySeconds;
let intervalHandle;

function tick() {
  var secDisplay = document.getElementById("seconds");
  var minDisplay = document.getElementById("minutes");

  var min = Math.floor(mySeconds / 60);
  var sec = mySeconds - min * 60;

  if (sec < 10) {
    sec = "0" + sec;
  }
  if (min < 10) {
    min = "0" + min;
  }

  setDisplay.innerHTML = sec + "s";
  minDisplay.innerHTML = min + "m";

  if (mySeconds === 0) {
    alert("Done");
    clearInterval(intervalHandle);
  }
  mySeconds--;
}
