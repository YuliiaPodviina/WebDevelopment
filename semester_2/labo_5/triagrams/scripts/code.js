const setup = () => {
    let woord = "onoorbaar";
    let triagrams = [];
    for (let i = 0; i < woord.length; i++) {
        let triagram = woord.substring(i,i+3);
        if (triagram.length >= 3){
            triagrams.push(triagram);
        }
    }
    for (let i = 0; i < triagrams.length; i++) {
        console.log(triagrams[i]);
    }
}

window.addEventListener("load", setup);