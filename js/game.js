const ScoreButton = document.getElementById("scoreButton");
const displayElement = document.getElementById("scoreDisplayArea");
const ShopButton = document.getElementById("shopButton");
const SaveButton = document.getElementById("saveButton");
const ClearButton = document.getElementById("clearButton");
const audioButton = document.getElementById("audioButton");
const menuBackButton = document.getElementById("menuBackButton");
SaveButton?.addEventListener("click", function () {
    localStorage.setItem("points", localPoints.toString());
});
let localPoints = parseInt(localStorage.getItem("points") || "1", 10);
if (isNaN(localPoints)) {
    localPoints = 1;
}
;
ClearButton?.addEventListener("click", function () {
    localStorage.clear();
});
if (displayElement) {
    displayElement.textContent = localPoints.toString();
}
ScoreButton?.addEventListener("click", function () {
    console.log("clicked");
    localPoints += 1;
    if (displayElement) {
        displayElement.textContent = localPoints.toString();
    }
    console.log(localPoints);
});
ShopButton?.addEventListener("click", function () {
    window.location.replace("shop.html");
});
function music() {
    console.log("Playing");
    const music = new Audio("assets/music.mp3");
    console.log(music);
    music.muted = false;
    music.play().then(() => console.log("Success"));
}
audioButton?.addEventListener("click", function () {
    music();
    audioButton.textContent = "Music: ON";
    audioButton.disabled = true;
});
menuBackButton?.addEventListener("click", function () {
    window.location.replace("index.html");
});
//# sourceMappingURL=game.js.map