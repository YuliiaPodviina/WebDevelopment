const setup = () => {
    let pElement=document.getElementById("txtOutput");
    let btnWijzig=document.getElementById("wijzig");

    btnWijzig.addEventListener("click", wijzigen);
}
const wijzigen = () =>{
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML= 'Welkom!';
}
window.addEventListener("load", setup);