const setup = () => {
    let knop = document.getElementById("knop");
    knop.addEventListener("click",controleren)

}
const controleren = () =>{
    let isRoker = document.getElementById('is_roker').checked ? 'is roker' : 'is geen roker';
    let moedertaal = document.querySelector('input[name="taal"]:checked').value;
    let buurland = document.getElementById('buurland').value;
    let bestellingOptions = document.getElementById('bestelling').selectedOptions;
    let bestelling = Array.from(bestellingOptions).map(option => option.value).join(' ');

    console.log(isRoker);
    console.log('moedertaal is ' + moedertaal);
    console.log('favoriete buurland is ' + buurland.charAt(0).toUpperCase() + buurland.slice(1));
    console.log('bestelling bestaat uit ' + bestelling);
}

window.addEventListener("load", setup);