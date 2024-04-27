const setup = () => {
    let sliders = document.getElementsByClassName("sliders");
    let saveBtn = document.getElementById("saveBtn");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change",update);
        sliders[i].addEventListener("input",update);
    }
    saveBtn.addEventListener("click",saveFavoritesToLocalStorage);

    showValues();
    update();
}

const update = () => {
    let swatch=document.getElementById("swatch");
    let sliders = document.getElementsByClassName("sliders")

    let redValue = document.getElementById("red_value");
    let greenValue = document.getElementById("green_value");
    let blueValue = document.getElementById("blue_value");

    let red=sliders[0].value;
    let green=sliders[1].value;
    let blue=sliders[2].value;

    redValue.innerText="    Red  -  "+red;
    greenValue.innerText="  Green  - "+green;
    blueValue.innerText="   Blue  -  "+blue;

    swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
    saveSliderValuesToLocalStorage();
}

const saveFavorites = (red,green,blue) =>{
    let copiesContainer = document.getElementById("copies");

    let swatchCopy = document.createElement("div");
    swatchCopy.className = "swatch_copy";
    swatchCopy.style.backgroundColor="rgb("+red+","+green+","+blue+")";

    // delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerText = "X";

    swatchCopy.appendChild(deleteBtn);
    copiesContainer.appendChild(swatchCopy);

    deleteBtn.addEventListener("click", () => {
        deleteFavoritesFromLocalStorage(red,green,blue)
        swatchCopy.remove();
    });
}

const saveSliderValuesToLocalStorage = () => {
    let sliders = document.getElementsByClassName("sliders")
    let values = {};
    let valuesJSON;

    values.red=parseInt(sliders[0].value);
    values.green=parseInt(sliders[1].value);
    values.blue=parseInt(sliders[2].value);

    valuesJSON = JSON.stringify(values);

    localStorage.setItem("colorpicker.values", valuesJSON);
}

const saveFavoritesToLocalStorage = () => {
    let sliders = document.getElementsByClassName("sliders")

    let red=sliders[0].value;
    let green=sliders[1].value;
    let blue=sliders[2].value;

    let favorites = JSON.parse(localStorage.getItem("colorpicker.favorites")) || [];
    let favoritesJSON;

    let favorite = {
        red:red,
        green:green,
        blue:blue
    };
    favorites.push(favorite)

    favoritesJSON = JSON.stringify(favorites);
    localStorage.setItem("colorpicker.favorites", favoritesJSON);

    saveFavorites(red,green,blue);
}

const deleteFavoritesFromLocalStorage = (red,green,blue) => {
    let favorites = JSON.parse(localStorage.getItem("colorpicker.favorites")) || [];

    let i = favorites.findIndex(favorite => favorite.red === red && favorite.green === green && favorite.blue === blue);
    if (i > -1){
        favorites.splice(i,1);
        let favoritesJSON=JSON.stringify(favorites);
        localStorage.setItem("colorpicker.favorites",favoritesJSON)
    }
}

const showValues = () => {
    // sliders
    let values;
    let valuesJSON=localStorage.getItem("colorpicker.values")
    if(valuesJSON == undefined){
        values = {
            red: 128,
            green: 128,
            blue: 128
        };
    }else{
        values = JSON.parse(valuesJSON);
    }

    document.getElementsByClassName("sliders")[0].value = values.red;
    document.getElementsByClassName("sliders")[1].value = values.green;
    document.getElementsByClassName("sliders")[2].value = values.blue;

    // favorites
    let favorites = JSON.parse(localStorage.getItem("colorpicker.favorites")) || [];
    for (let i = 0; i < favorites.length; i++) {
        saveFavorites(favorites[i].red, favorites[i].green, favorites[i].blue);
    }
}

window.addEventListener("load", setup);