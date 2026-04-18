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

/* TAGLINES */
const tags = ["Post-structuralist solutions for a bounded world",
            "Bringing about the Aeon of Horus since 2018",
            "Music for idiots",
            "Contains 10g of protein",
            "Not intended for oral ingestion",
            "Sponsored by Wegovy",
            "Sponsored by Hims",
            "Pete Hegseth's favorite band",
            "Close your eyes and count backwards from 100",
            "The problem that solves itself",
            "A.K.A. Wet Leg",
            "A.K.A. The Strokes",
            "A.K.A. F.K.A. Twigs",
            "A.K.A. Bhad Bhabie",
            "Blood makes the green grass grow",
            "The most hated band in Seattle",
            "Random violence or vox populi??",
            "A dog in the cage in the living room",
            "A burial on markdown",
            "New age dawning! New life fawning!",
            "Always keeping tally",
            "Moonrise, moonset",
            "Art is for everyone!",
            "Immanentize the eschaton!",
            "Everything is getting worse",
            "Death is coming",
            "Under heaven's simple gaze, everything is man-made",
            "We've got big things coming!",
            "Sever the hand that forms the claw!",
            "Do you even like music?",
            "A bullet for the dead god",
            "It's reclamation time",
            "The noose around your neck"];

!function newTag() {
  const randomTag = Math.floor(Math.random() * tags.length);
  document.getElementById('tagline').innerHTML = tags[randomTag];
}();