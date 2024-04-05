let global ={
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren

    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt

    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annulere
}

const setup = () => {
    let btn = document.getElementById('btn');
    btn.addEventListener('click',start);
};

const controleren = () => {
    let target = document.getElementById('target');
    //controleren of het een bom is
    if (target.src.includes("0.png")) {
        gameOver();
        return; // Stop de functie als het een bom is
    }
    //score verhogen
    let hits = document.getElementById("hits");
    global.score++;
    hits.innerText=global.score;

    //afbeelding verplaatsen en veranderen
    verplaatsen();
}

const verplaatsen = () => {
    let target = document.getElementById('target');
    let playField=document.getElementById("playField");
    let maxLeft=playField.clientWidth - target.offsetWidth;
    let maxHeight=playField.clientHeight - target.offsetHeight;

    //afbeelding verplaatsen
    let left=Math.floor(Math.random()*maxLeft);
    let top=Math.floor(Math.random()*maxHeight);
    target.style.left=left+"px";
    target.style.top=top+"px";

    //afbeelding veranderen
    let randomImg = Math.floor(Math.random()*global.IMAGE_COUNT);
    target.setAttribute('src',(global.IMAGE_PATH_PREFIX + randomImg + global.IMAGE_PATH_SUFFIX));
}

const start = () => {
    let img = document.getElementById('target');
    img.addEventListener('click',controleren);

    // Knop verbergen
    let btn = document.getElementById('btn');
    btn.className = 'hidden';

    // Start het interval om de afbeelding periodiek te verplaatsen
    global.timeoutId = setInterval(verplaatsen, global.MOVE_DELAY);
}

const gameOver = () => {
        clearInterval(global.timeoutId);
        global.score = 0;
        window.alert("GAME OVER");
}

window.addEventListener("load", setup);