let global ={
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    KAARTEN: ["kaart1.png","kaart2.png","kaart3.png","kaart4.png","kaart5.png","kaart6.png" ],
    AANTAL_KAARTEN: 6,
    OMGEDRAAIDE_KAARTEN: [],
    VERGRENDELDE_KAARTEN: []
}

const setup = () => {
    kaartenToevoegen();

    let kaart = document.querySelectorAll('.kaart');
    for (let i = 0; i < kaart.length; i++) {
        kaart[i].addEventListener("click",kaartOmdraaien);
    }
}

const kaartenToevoegen = () => {
    let playField = document.getElementById("playField");

    for (let j = 0; j < 2; j++) {

        shuffleArray(global.KAARTEN);

        for (let i = 0; i < global.KAARTEN.length; i++) {
            //kaart aanmaken
            let kaart = document.createElement("div");
            kaart.className = "kaart";
            kaart.setAttribute('data-kaart', global.KAARTEN[i]);

            //voorkant van een kaart (met afbeelding)
            let voorkant = document.createElement("img");
            voorkant.setAttribute("src","images/"+global.KAARTEN[i]);
            voorkant.className = "voorkant";
            kaart.appendChild(voorkant);

            //achterkant van een kaart (zonder afbeelding)
            let achterkant = document.createElement("img");
            achterkant.setAttribute("src","images/achterkant.png");
            achterkant.className = "achterkant";
            kaart.appendChild(achterkant);

            //kaart toevoegen
            playField.appendChild(kaart);
        }
    }
}

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const kaartOmdraaien = () => {
    let omgedraaideKaarten = global.OMGEDRAAIDE_KAARTEN;
    let vergrendeldeKaarten = global.VERGRENDELDE_KAARTEN;
    let kaart = event.currentTarget;
    let achterkant = event.target;

    if (!omgedraaideKaarten.includes(kaart) && omgedraaideKaarten.length < 2 && !vergrendeldeKaarten.includes(kaart)) {
        achterkant.classList.add("omgedraaid");
        omgedraaideKaarten.push(kaart);
        if (omgedraaideKaarten.length === 2) {
            setTimeout(() => {
                controleerMatch();
            }, 1000);
        }
    }
}

const controleerMatch = () => {
    let omgedraaideKaarten = global.OMGEDRAAIDE_KAARTEN;
    let vergrendeldeKaarten = global.VERGRENDELDE_KAARTEN;

    //als de afbeeldingen overeenkomen
    if (omgedraaideKaarten[0].getAttribute("data-kaart") === omgedraaideKaarten[1].getAttribute("data-kaart")) {
        for (let i = 0; i < omgedraaideKaarten.length; i++) {
            omgedraaideKaarten[i].classList.add("juist");
            vergrendeldeKaarten.push(omgedraaideKaarten[i]);
        }
        //als ze niet overeenkomen
    } else {
        for (let i = 0; i < omgedraaideKaarten.length; i++) {
            omgedraaideKaarten[i].classList.add("fout");
            kaartTerugDraaien();
        }
    }
    omgedraaideKaarten.length = 0;
}

const kaartTerugDraaien = () => {
    let omgedraaideKaarten = global.OMGEDRAAIDE_KAARTEN;
    for (let i = 0; i < omgedraaideKaarten.length; i++) {
        omgedraaideKaarten[i].classList.remove("fout"); // Verwijder de klasse "fout" van omgedraaide kaarten wanneer ze worden teruggedraaid
        omgedraaideKaarten[i].lastChild.classList.remove("omgedraaid");
    }
}

window.addEventListener("load", setup);