const setup = () => {

    let btn = document.getElementById("btn");

    btn.addEventListener("click",herbereken);
}

const herbereken = () => {
    let prijs = document.getElementsByClassName("prijs");
    let aantal = document.getElementsByClassName("aantal");
    let btw = document.getElementsByClassName("btw");

    let totaalElement = document.getElementById("totaal");
    let subtotaalElementen = document.getElementsByClassName("subtotaal");

    let totaalBerekening = 0.0;
    for (let i = 0; i < subtotaalElementen.length; i++) {
        // Waarden van de HTML-elementen ophalen en converteren naar getallen
        let prijsValue = parseFloat(prijs[i].innerText);
        let aantalValue = parseFloat(aantal[i].value);
        let btwValue = parseFloat(btw[i].innerText);

        // Berekening van subtotaal
        let subtotaal = prijsValue * aantalValue * (1 + btwValue / 100);
        subtotaalElementen[i].innerText = subtotaal.toFixed(2) + " Eur";

        // Berekening van totaal
        totaalBerekening += subtotaal;
    }
    totaalElement.innerText = totaalBerekening.toFixed(2) + " Eur";
}
window.addEventListener("load", setup);