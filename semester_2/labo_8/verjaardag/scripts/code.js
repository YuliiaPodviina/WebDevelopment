const setup = () => {
    let nu = new Date();
    let verjaardag = new Date(2004,0,15);
    let verschilInMilliseconden  = nu-verjaardag;
    //milliseconden delen door het aantal milliseconden in een dag
    let aantaldagen = Math.floor(verschilInMilliseconden  / 86400000 );
    console.log(aantaldagen)
}
window.addEventListener("load", setup);