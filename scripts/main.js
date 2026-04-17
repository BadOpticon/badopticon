/* MOBILE NAVBAR TOGGLE */
function navbar() {
    var x = document.getElementById("nav-link");
    if (x.className === "nav-link") {
        x.className = "nav-link responsive";
    } else {
        x.className = "nav-link";
    }
}

/* JUMP */
function jump(h){
    var top = document.getElementById(h).offsetTop;
    window.scrollTo(0, top);
}