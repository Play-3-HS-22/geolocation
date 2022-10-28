let pos = {
  lat: 0,
  lng: 0
}

let nogeo = false;
let init = false;

// must be in HTTPS
function setup() {
  createCanvas(windowWidth, windowHeight);
  //console.log('starting');
  noStroke();
  // get position once

  if (!navigator.geolocation) {
    nogeo = true;
  }

  navigator.geolocation.watchPosition(setPos)

  navigator.geolocation.getCurrentPosition(setPos);

  setInterval(function() {
    navigator.geolocation.getCurrentPosition(setPos);
  }, 1000);


  noLoop();
}

function draw() {

  if (nogeo) {
    background(255, 0, 0);
    fill(0);
    noStroke();
    text("navigator.geolocation is not available", 30, 30);
    return;
  }

  if(
    !init
  ){
    background(255, 255, 0);
    fill(0);
    noStroke();
    text("waiting for position", 30, 30);
    return;
  }

  background(0);
  fill(255);
  textSize(32);
  text(
    "Lat: " + pos.lat + "\nLon: " + pos.lng,
    30,
    50
  );


}

function setPos(position) {
  let lat = position.coords.latitude;
  let lng = position.coords.longitude;

  pos.lat = lat;
  pos.lng = lng;

  init = true;

  redraw();


}
