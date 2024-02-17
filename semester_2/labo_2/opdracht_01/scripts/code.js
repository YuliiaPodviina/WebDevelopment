const setup = () => {
    window.alert('Dit is een mededeling');
    let confirm_value = window.confirm("Weet u het zeker?");
    let prompt_value = window.prompt("Wat is uw naam", "onbekend");

    console.log('De return value van window.confirm: ' + confirm_value);
    console.log('De return value van window.prompt: ' + prompt_value);
}

window.addEventListener("load", setup);