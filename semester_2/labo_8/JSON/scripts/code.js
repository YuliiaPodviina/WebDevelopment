const setup = () => {
    //eerste programma
    let student1={
        voornaam : "Jan",
        familienaam : "Janssens",
        geboorteDatum : new Date("1993-12-31"),
        adres : {
            straat : "Kerkstraat 13",
            postcode : "8500",
            gemeente : "Kortrijk"
        },
        isIngeschreven : true,
        namenVanExen : ["Sofie", "Berta", "Philip", "Albertoooo"],
        aantalAutos : 2
    }
    let tekst = JSON.stringify(student1);
    console.log('Een JSON-string van student 1: '+ tekst);

    //tweede programma
    let student2 = JSON.parse('{"voornaam":"Jan","familienaam":"Janssens","geboorteDatum":"1993-12-31T00:00:00.000Z","adres":{"straat":"Kerkstraat 13","postcode":"8500","gemeente":"Kortrijk"},"isIngeschreven":true,"namenVanExen":["Sofie","Berta","Philip","Albertoooo"],"aantalAutos":2}');
    console.log('Een property van de tweede object (voornaam): ' + student2.voornaam)
}
window.addEventListener("load", setup);