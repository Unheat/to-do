export default function loadHome (){
    const container = document.querySelector('#content');
    const home_button = document.querySelector("#home-tab");
    const popup = document.createElement("div");
    const head = document.createElement("h1");
    head.textContent = "GPU shop with qualities GPU for affordable price";
    popup.appendChild(head);
    container.appendChild(popup);
};