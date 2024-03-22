const setup = () => {
    let btn = document.getElementById("btn");
    btn.addEventListener("click", create);
}

const create = () =>{
    let para = document.createElement("p");
    let node = document.createTextNode("This is text.");
    para.appendChild(node);

    let divElement = document.getElementById("myDIV");
    divElement.appendChild(para);
}
window.addEventListener("load", setup);