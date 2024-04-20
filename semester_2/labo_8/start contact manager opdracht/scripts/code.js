let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();
    // indien oké, bewaar de ingegeven data.
    if (!zijnErNogErrors()) {
        let persoon = {
            voornaam: document.getElementById('txtVoornaam').value,
            familienaam: document.getElementById('txtFamilienaam').value,
            geboorteDatum: document.getElementById('txtGeboorteDatum').value,
            email: document.getElementById('txtEmail').value,
            kinderen: document.getElementById('txtAantalKinderen').value
        }
        // controleren of de persoon al bestaat
        let bestaatPersoon = false;
        let i = 0;
        while (i < personen.length && bestaatPersoon === false){
            if (personen[i].voornaam === persoon.voornaam &&
                personen[i].familienaam === persoon.familienaam) {
                bestaatPersoon = true;
            }
            i++;
        }
        // een nieuw aangemaakte persoon voegen we toe
        if (!bestaatPersoon) {
            persoonToevoegenAanDeLijst(persoon,personen.length)
        }
        // een bestaande persoon in de lijst passen we aan
        else {
            personen[i-1]  = persoon;
        }
    }
    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na opwaarderen
}

const persoonToevoegenAanDeLijst = (persoon, index) => {
    let lstPersonen = document.getElementById("lstPersonen");
    let option = document.createElement("option");
    option.text = `${persoon.voornaam} ${persoon.familienaam}`;
    option.value = index;
    option.setAttribute('data-id', index);
    personen.push(persoon);
    lstPersonen.appendChild(option);
}

const zijnErNogErrors = () => {
    let error = document.getElementsByClassName('errorMessage');
    let zijnErNogErrors = true;
    for (let i = 0; i < error.length; i++) {
        zijnErNogErrors = error[i].innerText !== '';
    }
    return zijnErNogErrors;
}

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
    let fieldIds=["txtVoornaam", "txtFamilienaam", "txtGeboorteDatum", "txtEmail", "txtAantalKinderen"];
    for (let i=0;i<fieldIds.length;i++) {
        document.getElementById(fieldIds[i]).value = "";
    }
};

const dataTonen = () =>{
    let lstPersonen = document.getElementById("lstPersonen");
    let selectedIndex = lstPersonen.selectedIndex;

    if (selectedIndex !== -1) {
        let geselecteerdePersoon = personen[selectedIndex];
        document.getElementById('txtVoornaam').value = geselecteerdePersoon.voornaam;
        document.getElementById('txtFamilienaam').value = geselecteerdePersoon.familienaam;
        document.getElementById('txtGeboorteDatum').value = geselecteerdePersoon.geboorteDatum;
        document.getElementById('txtEmail').value = geselecteerdePersoon.email;
        document.getElementById('txtAantalKinderen').value = geselecteerdePersoon.kinderen;
    }
}

// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // Voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
    lstPersonen.addEventListener('change',dataTonen);
};

window.addEventListener("load", setup);