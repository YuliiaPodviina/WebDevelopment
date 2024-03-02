const setup = () => {
}
    let familieleden = ['Maria','Peter','Anna','Ria','Jos'];
    console.log('De lengte van de array is ' + familieleden.length);
    console.log('Eerste familielid: ' + familieleden[0] +
                ',derde familielid: ' + familieleden[2] +
                ',vijfde familielid: ' + familieleden[4]);

    function voegNaamToe(naam) {
    familieleden.push(naam);
    }
    let extra_naam = prompt('Voer een extra naam in om toe te voegen aan de array: ');
    voegNaamToe(extra_naam);
    console.log('Array na toevoeging van extra naam: ', familieleden);
    let familieledenString = familieleden.join(', ');
    console.log("Array als string:", familieledenString);

window.addEventListener("load", setup);