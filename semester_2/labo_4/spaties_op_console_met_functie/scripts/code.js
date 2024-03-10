const setup = () => {
    let knop = document.getElementById("knop");

    knop.addEventListener("click", inputScheiden);
}

const inputScheiden = () =>{
    let input = document.getElementById("inputTxt").value;
    console.log(maakMetSpaties(input));
}

const maakMetSpaties = inputText =>{
    let result = "";
    for (let i = 0; i < inputText.length; i++) {
        let karakter = inputText.charAt(i);
        if (karakter!==" ") {
            result += karakter + " "
        }
    }
    return result;
}

window.addEventListener("load", setup);