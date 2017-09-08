

// var grid = document.querySelector('.grid');

// var iso = new Isotope( grid, {
//   // options
//   itemSelector: '.grid-item',
//   layoutMode: 'masonry' // fitRows // masonry
// });


// imagesLoaded(grid).on('progress', function() {
//   // layout Isotope after each image loads
//   console.log('goo')
//   iso.layout();
// });

var grid = document.querySelector('.grid');
var iso;

imagesLoaded( grid, function() {
  // init Isotope after all images have loaded
  iso = new Isotope( grid, {
    itemSelector: '.grid-item',
    layoutMode: 'masonry'
    // percentPosition: true,
    // masonry: {
    //   columnWidth: '.grid-sizer'
    // }
  });
});



function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

var mobile = isMobileDevice();

var classname = document.getElementsByClassName("grid-item");

var gridClick = function() {

	var openCheck = this.classList.contains('infoOpen');

	if (openCheck) {
		this.classList.remove("infoOpen");

		document.getElementById(this.id+"Descr").style.display = "none";
	    iso.arrange();

	    if (!mobile) {
			document.getElementById(this.id+"Video").pause();
		}
	} else {
		this.className += " infoOpen";

		document.getElementById(this.id+"Descr").style.display = "block";
	    iso.arrange();

	    if (!mobile) {
	    	document.getElementById(this.id+"Video").play();
	    }
	}

};

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', gridClick, false);
}