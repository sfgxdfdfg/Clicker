const audioShopButton = document.getElementById("audioShopButton");
const backButton = document.getElementById("backButton");
const buy1 = document.getElementById("buy1");
const buy2 = document.getElementById("buy2");
const buy3 = document.getElementById("buy3");
const music_shop = new Audio("assets/music.mp3");
const effect = new Audio("assets/kaching.mp3");
if (!audioShopButton || !buy1 || !buy2 || !buy3 || !backButton) {
    throw new Error("ERROR");
}
function music_play_shop() {
    console.log("Playing");
    console.log(music_shop);
    if (music_shop.paused) {
        music_shop.muted = false;
        music_shop.play().then(() => console.log("Sucess"));
    }
}
function effect_buy() {
    console.log("Playing");
    console.log(effect);
    effect.muted = false;
    effect.play().then(() => console.log("Success"));
}
audioShopButton?.addEventListener("click", function () {
    music_play_shop();
    audioShopButton.textContent = "Music: ON";
    audioShopButton.disabled = true;
});
buy1.addEventListener("click", function () {
    effect_buy();
});
backButton.addEventListener("click", function () {
    window.location.replace("game.html");
});
//# sourceMappingURL=shop.js.map