const audioButton = document.getElementById("audioButton") as HTMLButtonElement;
const backButton = document.getElementById("backButton");

const buy1 = document.getElementById("buy1");
const buy2 = document.getElementById("buy2");
const buy3 = document.getElementById("buy3");

const music = new Audio("assets/music.mp3");
const effect = new Audio("assets/kaching.mp3");


if (!audioButton || !buy1 || !buy2 || !buy3 || !backButton) {
    throw new Error("ERROR");
}

function music_play() {
    console.log("Playing");
    console.log(music);
    if (music.paused) {
        music.muted = false;
        music.play().then(() => console.log("Sucess"));
    }
}

function effect_buy() {
    console.log("Playing");
    console.log(effect);
    effect.muted = false;
    effect.play().then(() => console.log("Success"));
}

audioButton?.addEventListener("click", function() {
    music_play();
    audioButton.textContent = "Music: ON";
    audioButton.disabled = true;
});

buy1.addEventListener("click", effect_buy);

backButton.addEventListener("click", function() {
    window.location.replace("game.html")
})