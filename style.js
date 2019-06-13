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