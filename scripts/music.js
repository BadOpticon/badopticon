/*--------------------/
/      LYRICS LINKS   /
/--------------------*/ 

/* The Bounded World */

function toggleFalling() {
    var element = document.getElementById("lyricsFalling");
    if (element.style.display == "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

/*--------------------/
/      ALBUM ART      /
/--------------------*/ 

/* The Bounded World */

const tbwArt = document.getElementById("tbw-art");
const tbwLink = document.getElementById("tbw-link");
const tbwArtFront = document.getElementById("tbwArtFront");
// const tbwArtInsertL = document.getElementById("tbwArtInsertL");
// const tbwArtInsertR = document.getElementById("tbwArtInsertR");
const tbwArtBack = document.getElementById("tbwArtBack");

tbwArtFront.addEventListener("click", function() {
tbwArt.src = "images/tbw/bounded-world-cover-color-1000.jpg";
tbwLink.href = "images/tbw/bounded-world-cover-color-1000.jpg";
});                        

// tbwArtInsertL.addEventListener("click", function() {
// tbwArt.src = "";
// });

// tbwArtInsertR.addEventListener("click", function() {
// tbwArt.src = "";
// });

tbwArtBack.addEventListener("click", function() {
tbwArt.src = "images/tbw/bounded-world-back-1000.jpg";
tbwLink.href = "images/tbw/bounded-world-back-1000.jpg";
});

/* Pax Americana */

const paxArt = document.getElementById("pax-art");
const paxLink = document.getElementById("pax-link");
const paxArtFront = document.getElementById("paxArtFront");
const paxArtInsertL = document.getElementById("paxArtInsertL");
const paxArtInsertR = document.getElementById("paxArtInsertR");
const paxArtBack = document.getElementById("paxArtBack");

paxArtFront.addEventListener("click", function() {
paxArt.src = "images/pax/pax-americana-cover-1000.png";
paxLink.href = "images/pax/pax-americana-cover-1000.png";
});                        

paxArtInsertL.addEventListener("click", function() {
paxArt.src = "images/pax/pax-americana-insert-l-1000.png";
paxLink.href = "images/pax/pax-americana-insert-l-1000.png";
});

paxArtInsertR.addEventListener("click", function() {
paxArt.src = "images/pax/pax-americana-insert-r-1000.png";
paxLink.href = "images/pax/pax-americana-insert-r-1000.png";
});

paxArtBack.addEventListener("click", function() {
paxArt.src = "images/pax/pax-americana-back-1000.png";
paxLink.href = "images/pax/pax-americana-back-1000.png";
});

/* The Visitor */

const tvArt = document.getElementById("tv-art");
const tvLink = document.getElementById("tv-link")
const tvArtFront = document.getElementById("tvArtFront");
const tvArtInsert = document.getElementById("tvArtInsert");
const tvArtBack = document.getElementById("tvArtBack");

tvArtFront.addEventListener("click", function() {
tvArt.src = "images/visitor/the-visitor-cover-1000.png";
tvLink.href = "images/visitor/the-visitor-cover-1000.png";
});

tvArtInsert.addEventListener("click", function() {
tvArt.src = "images/visitor/the-visitor-insert.png";
tvLink.href = "images/visitor/the-visitor-insert.png";
});

tvArtBack.addEventListener("click", function() {
tvArt.src = "images/visitor/the-visitor-back-1000.png";
tvLink.href = "images/visitor/the-visitor-back-1000.png";
});

/* Warm Strokes of Pragmatism */

const wsopArt = document.getElementById("wsop-art");
const wsopLink = document.getElementById("wsop-link");
const wsopArtBack = document.getElementById("wsopArtBack");

wsopArtFront.addEventListener("click", function() {
wsopArt.src = "images/wsop/warm-strokes-cover-1000.png";
wsopLink.href = "images/wsop/warm-strokes-cover-1000.png";
});

wsopArtBack.addEventListener("click", function() {
wsopArt.src = "images/wsop/warm-strokes-back-1000.png";
wsopLink.href = "images/wsop/warm-strokes-back-1000.png";
});