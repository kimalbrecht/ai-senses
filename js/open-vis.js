

document.getElementById('touchingLiveButton').addEventListener('click', function() {
	openInNewTab('touching.html')
}, true);

document.getElementById('seeingLiveButton').addEventListener('click', function() {
	openInNewTab('seeing.html')
}, true);

document.getElementById('hearingLiveButton').addEventListener('click', function() {
	openInNewTab('hearing.html')
}, true);

document.getElementById('orientingLiveButton').addEventListener('click', function() {
	openInNewTab('orienting.html')
}, true);

document.getElementById('movingLiveButton').addEventListener('click', function() {
	openInNewTab('moving.html')
}, true);

document.getElementById('locatingLiveButton').addEventListener('click', function() {
	openInNewTab('locating.html')
}, true);

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}