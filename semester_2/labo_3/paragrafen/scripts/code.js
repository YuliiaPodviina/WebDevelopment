const setup = () => {
    let paragrafenBelangrijk = document.getElementsByClassName("belangrijk");
    for (let i = 0; i < paragrafenBelangrijk.length; i++) {
        paragrafenBelangrijk[i].classList.add("opvallend");
    }
}
window.addEventListener("load", setup);
