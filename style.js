window.addEventListener("load", function () {
    if (!document.querySelector("#loader")) console.log('Loader is not added in this page');
    else {
        const loader = document.querySelector("#loader");
        const html = document.getElementsByTagName("html");
        html[0].removeAttribute("class");
        loader.className += " hidden";
    }
});
// function navbt(){
// 	var a = document.getElementById('nev');
// 	if (a.style.display == "none") {
// 		a.style.display = "block";
// 	}
// }
var box = document.getElementById('navmain');
var nav = document.getElementsByClassName('itm');
var bdy = document.getElementById('body');
function anim(){
 	if (nav[2].style.width == '0px') {
 		for (var i = 0; i < nav.length; i++) {
 	    nav[i].style.width = '80px';
 	    bdy.classList.add("blr");

 	}
 	}else{
 		for (var i = 0; i < nav.length; i++) {
 		nav[i].style.width = '0px'
 		bdy.classList.remove("blr");
 	}

 	}
 	
 };
