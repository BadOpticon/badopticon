/* TAGLINES */
const tags = ["Post-structuralist solutions for a bounded world",
            "Bringing about the Aeon of Horus since 2018",
            "Music for idiots",
            "Contains 10g of protein",
            "Not intended for oral ingestion",
            "Sponsored by Wegovy",
            "Pete Hegseth's favorite band",
            "Close your eyes and count backwards from 100",
            "The problem that solves itself",
            "Random violence or vox populi??",
            "Immanentize the eschaton!",
            "New age dawning! New life fawning!",
            "A burial on markdown",
            "A dog in the cage in the living room",
            "Whop bop ba-luma ba-lop bam boom",
            "A.K.A. Wet Leg",
            "A.K.A. The Strokes",
            "A.K.A. F.K.A. Twigs",
            "Always keeping tally",
            "Moonrise, moonset",
            "Art is for everyone!",
            "Everything is getting worse",
            "Death is coming"];

!function newTag() {
  const randomTag = Math.floor(Math.random() * tags.length);
  document.getElementById('tagline').innerHTML = tags[randomTag];
}();

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