const setup = () => {
    let knop = document.getElementById("knop");

    knop.addEventListener("click",tellen);
}

const tellen = () =>{
    let resultIndexOf = document.getElementById("resultIndexOf");
    let resultLastIndexOf = document.getElementById("resultLastIndexOf");

    resultIndexOf.innerText = " - " + tellenMetIndexOf("De man van An geeft geen hand aan ambetante verwanten");
    resultLastIndexOf.innerText = " - " + tellenMetLastIndexOf("De man van An geeft geen hand aan ambetante verwanten");
}

const tellenMetIndexOf = (text) =>{
    let count = 0;
    let lowercase = text.toLowerCase();
    let index = lowercase.indexOf("an");

    while (index !== -1) {
        count++;
        index = lowercase.indexOf("an", index + 1);
    }

    return count;
}

const tellenMetLastIndexOf = (text) =>{
    let count = 0;
    let lowercase = text.toLowerCase();
    let index = lowercase.lastIndexOf("an");

    while (index !== -1) {
        count++;
        index = lowercase.lastIndexOf("an", index - 1);
    }

    return count;
}

window.addEventListener("load", setup);