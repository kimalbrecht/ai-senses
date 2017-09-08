

var elem = document.querySelector('.grid');
var iso = new Isotope( elem, {
  // options
  itemSelector: '.grid-item',
  layoutMode: 'masonry' // fitRows // masonry
});


var classname = document.getElementsByClassName("grid-item");

var gridClick = function() {

	var openCheck = this.classList.contains('infoOpen');

	if (openCheck) {
		this.classList.remove("infoOpen");

		document.getElementById(this.id+"Descr").style.display = "none";
	    iso.arrange();

		document.getElementById(this.id+"Video").pause();
	} else {
		this.className += " infoOpen";

		document.getElementById(this.id+"Descr").style.display = "block";
	    iso.arrange();

	    document.getElementById(this.id+"Video").play();
	}

};

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', gridClick, false);
}