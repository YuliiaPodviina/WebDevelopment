const setup = () => {
    let listItems = document.querySelectorAll("li");
    let list = document.getElementsByTagName("ul");
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].className = "listitem";
    }
    let img = document.createElement("img");
    img.setAttribute("src","img/with-egg.png");
    list[0].appendChild(img);
}
window.addEventListener("load", setup);