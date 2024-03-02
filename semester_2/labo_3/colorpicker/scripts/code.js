const setup = () => {

    let sliders = document.getElementsByClassName("sliders");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change",update);
        sliders[i].addEventListener("input",update);
    }

    update();
}

const update = () => {
    let swatch=document.getElementById("swatch");
    let sliders = document.getElementsByClassName("sliders")

    let redValue = document.getElementById("red_value");
    let greenValue = document.getElementById("green_value");
    let blueValue = document.getElementById("blue_value");

    let valueRedSlider=sliders[0].value;
    let valueGreenSlider=sliders[1].value;
    let valueBlueSlider=sliders[2].value;

    redValue.innerText="    Red  -  "+valueRedSlider;
    greenValue.innerText="  Green  - "+valueGreenSlider;
    blueValue.innerText="   Blue  -  "+valueBlueSlider;

    swatch.style.backgroundColor="rgb("+valueRedSlider+","+valueGreenSlider+","+valueBlueSlider+")";
}

window.addEventListener("load", setup);