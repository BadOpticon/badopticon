function navbar() {
    var x = document.getElementById("headNav");
    if (x.className === "headNav") {
        x.className = "headNav responsive";
    } else {
        x.className = "headNav";
    }
    }