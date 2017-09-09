
var touching = true;
var seeing = false;
var hearing = false;
var orienting = false;
var moving = false;
var locating = false;

var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

// // // // // // // // // // // // // // // // // // // // Seeing

document.getElementById('liveTouching').style.visibility = "visible";
document.getElementById('touchingLiveButton').style.visibility = "visible";

// // // // // // // // // // // // // // // // // // // // Seeing

var constraintsSee = {
  audio: false,
  video: { }
};

function handleSuccessSee() {
	seeing = true;
	document.getElementById('liveSeeing').style.visibility = "visible";
  document.getElementById('seeingLiveButton').style.visibility = "visible";
}
function handleErrorSee(error) {
  console.log('navigator.getUserMedia error: ', error);
}

if (!isSafari) {
  navigator.mediaDevices.getUserMedia(constraintsSee).then(handleSuccessSee).catch(handleErrorSee);
}

// // // // // // // // // // // // // // // // // // // // Hearing

var constraintsHear = {
  audio: true,
  video: false
};

function handleSuccessHear() {
	hearing = true;
	document.getElementById('liveHearing').style.visibility = "visible";
  document.getElementById('hearingLiveButton').style.visibility = "visible";
}
function handleErrorHear(error) {
  console.log('navigator.getUserMedia error: ', error);
}

if (!isSafari) {
  navigator.mediaDevices.getUserMedia(constraintsHear).then(handleSuccessHear).catch(handleErrorHear);
}

// // // // // // // // // // // // // // // // // // // // Orienting
 
if (!orienting) {
  window.addEventListener('deviceorientation', function(event) {
    
    if (event.alpha !== null) {
    	// orienting = true;
    	document.getElementById('liveOrienting').style.visibility = "visible";
      document.getElementById('orientingLiveButton').style.visibility = "visible";
    }

  });
}  


// // // // // // // // // // // // // // // // // // // // Moving

if (!moving) {
  window.addEventListener('devicemotion', function(event) {
    
    if (event.acceleration.x !== null) {
    	moving = true;
    	document.getElementById('liveMoving').style.visibility = "visible";
      document.getElementById('movingLiveButton').style.visibility = "visible";
    }

  });
} 

// // // // // // // // // // // // // // // // // // // // Locating

navigator.geolocation.getCurrentPosition(function(position) {

  locating = true;

  document.getElementById('liveLocating').style.visibility = "visible";
  document.getElementById('locatingLiveButton').style.visibility = "visible";

});

