// must be in HTTPS
function setup() {
  createCanvas(windowWidth, windowHeight);
  //console.log('starting');
  noStroke();
  // get position once

  if (!navigator.geolocation) {
    background(255,0,0);
    text("navigator.geolocation is not available",30,30);
  }
  navigator.geolocation.getCurrentPosition(setPos);
  setInterval(function () {
    navigator.geolocation.getCurrentPosition(setPos);
  }, 1000)

}

function setPos(position) {
  let lat = position.coords.latitude;
  let lng = position.coords.longitude;
  background(0);
  fill(255);
  textSize(32);
  text(
    "Lat: " + lat + "\nLon: " + lng,
    10,
    height / 2
  );
}
