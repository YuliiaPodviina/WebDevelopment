const setup = () => {
    let sliders = document.getElementsByClassName("sliders");
    let saveBtn = document.getElementById("saveBtn");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change",update);
        sliders[i].addEventListener("input",update);
    }
    saveBtn.addEventListener("click",save)

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

const save = () =>{
    let copiesContainer = document.getElementById("copies");
    let swatch = document.getElementById("swatch");

    let swatchCopy = document.createElement("div");
    swatchCopy.className = "swatch_copy";
    swatchCopy.style.backgroundColor = swatch.style.backgroundColor;

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerText = "X";

    swatchCopy.appendChild(deleteBtn);
    copiesContainer.appendChild(swatchCopy);

    deleteBtn.addEventListener("click", () => {
        swatchCopy.remove();
    });
}

window.addEventListener("load", setup);