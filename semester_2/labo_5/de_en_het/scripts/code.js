const setup = () => {
    console.log(lidwoordVervangen("Gisteren zat de jongen op de stoep en at de helft van de appel"));
    console.log(lidwoordVervangen("De man riep de"));
}

const lidwoordVervangen = (zin) =>{
    let woorden = zin.toLowerCase().split(" ");
    let nieuweZin = "";
    for (let i = 0; i < woorden.length; i++) {
        if (woorden[i] === "de") {
            nieuweZin += "het ";
        } else {
            nieuweZin += woorden[i] + " ";
        }
    }
    return nieuweZin.trim();
}
window.addEventListener("load", setup);