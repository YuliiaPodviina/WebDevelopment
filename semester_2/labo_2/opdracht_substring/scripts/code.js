const setup = () => {
    let button = document.getElementById("btnSubstring");
    button.addEventListener("click", substringMaken);
}

const substringMaken = () =>{
    let fullString=document.getElementById("fullString").value;
    let txtOutput=document.getElementById("txtOutput");
    let firstIndex = document.getElementById("firstIndex");
    let lastIndex = document.getElementById("lastIndex");

    let g1 = parseInt(firstIndex.value, 10);
    let g2 = parseInt(lastIndex.value, 10);

    let resultaat = fullString.substring(g1,g2);
    txtOutput.innerHTML = '= ' + resultaat;
}
window.addEventListener("load", setup);