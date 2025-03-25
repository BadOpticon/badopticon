function navbar() {
    var x = document.getElementById("nav-link");
    if (x.className === "nav-link") {
        x.className = "nav-link responsive";
    } else {
        x.className = "nav-link";
    }
    }