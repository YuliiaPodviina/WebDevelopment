const setup = () => {
    gemeentenAanvragen();
}
const gemeentenAanvragen = () =>{
    let keuzelijst = document.getElementById("keuzelijst");
    let gemeenten = [];
    let stoppen = false;

    while(!stoppen) {
        let input = window.prompt("gemeente");
        if (input.toLowerCase() === "stop"){
            stoppen = true;
        }
        //anders de invoer in de array toevoegen
        else{
            gemeenten.push(input.trim());
        }
    }

    gemeenten.sort();

    //alle gemeenten van de array in de keuzelijst steken
    for (let i = 0; i < gemeenten.length; i++) {
        let optie = document.createElement("option");
        optie.text = gemeenten[i];
        keuzelijst.add(optie);
    }
}
window.addEventListener("load", setup);