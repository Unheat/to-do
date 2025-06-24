// import styles from "./menu/menu.module.css"
import styles1 from "./test.module.css"
import loadHome from "./home/home"
import loadMenu from "./menu/menu"
import loadContact from "./contact/contact"
console.log("test from index call menu:", styles1);
document.addEventListener('DOMContentLoaded', () => {
  const home = document.getElementById('home-tab');
  const menu = document.getElementById('menu-tab');
  const contact = document.getElementById('contact-tab');

  function clearContent() {
    const content = document.body.querySelector('#content');
    content.innerHTML = '';
  }

  loadHome();  // ← now this runs only after DOM is ready

  home.addEventListener('click', () => {
    clearContent();
    loadHome();
  });

  menu.addEventListener('click', () => {
    clearContent();
    loadMenu();
  });

  contact.addEventListener('click', () => {
    clearContent();
    loadContact();
  });
});
