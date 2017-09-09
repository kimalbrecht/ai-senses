

document.getElementById('touchingLiveButton').addEventListener('click', function() {
	openInNewTab('touching.html')
});

document.getElementById('seeingLiveButton').addEventListener('click', function() {
	openInNewTab('seeing.html')
});

document.getElementById('hearingLiveButton').addEventListener('click', function() {
	openInNewTab('hearing.html')
});

document.getElementById('orientingLiveButton').addEventListener('click', function() {
	openInNewTab('orienting.html')
});

document.getElementById('movingLiveButton').addEventListener('click', function() {
	openInNewTab('moving.html')
});

document.getElementById('locatingLiveButton').addEventListener('click', function() {
	openInNewTab('locating.html')
});

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}