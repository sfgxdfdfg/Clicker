const ScoreButton = document.getElementById("scoreButton") as HTMLButtonElement | null;
const displayElement = document.getElementById("scoreDisplayArea") as HTMLButtonElement | null;
const ShopButton = document.getElementById("shopButton") as HTMLButtonElement | null;
const SaveButton = document.getElementById("saveButton") as HTMLButtonElement | null;
const ClearButton = document.getElementById("clearButton") as HTMLButtonElement | null;
const audioButton = document.getElementById("audioButton") as HTMLButtonElement | null;
const menuBackButton = document.getElementById("menuBackButton") as HTMLButtonElement | null;

const music = new Audio("assets/music.mp3");

SaveButton?.addEventListener("click", function() {
    localStorage.setItem("points", localPoints.toString());
});
let localPoints = parseInt(localStorage.getItem("points") || "1", 10);

if (isNaN(localPoints)) {
    localPoints = 1;
};

ClearButton?.addEventListener("click", function() {
    localStorage.clear();
});

if (displayElement) {
    displayElement.textContent = localPoints.toString();
}

ScoreButton?.addEventListener("click", function() {
    console.log("clicked");
    localPoints += 1;
    if (displayElement) {
        displayElement.textContent = localPoints.toString();
    }
    console.log(localPoints);
});

ShopButton?.addEventListener("click", function() {
    window.location.replace("shop.html");
});

function music_play() {
    console.log("Playing");
    
    console.log(music);
    music.muted = false;
    music.play().then(() => console.log("Success"));
}

audioButton?.addEventListener("click", function() {
    music_play();
    audioButton.textContent = "Music: ON";
    audioButton.disabled = true;
});

menuBackButton?.addEventListener("click", function() {
    window.location.replace("index.html");
});