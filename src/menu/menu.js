import styles from "./menu.module.css" ;
console.log('test:',styles);

export default function loadMenu() {
  const container = document.querySelector('#content');
  const menu_button = document.querySelector("#menu-tab");
  const popup = document.createElement("div");

  // Create and style your popup
  popup.style.position = 'absolute';
  popup.style.backgroundColor = '#fff';
  popup.style.border = '1px solid #ccc';
  popup.style.padding = '10px';
  popup.style.zIndex = '999'; // Make sure it stays on top

  // Add images to popup
  const createImage = (src, alt) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.className = styles.menuImage;
    return img;
  };

  popup.appendChild(createImage("https://product.hstatic.net/200000420363/product/geforce_rtx__5070_gaming_oc_12g-01_bd706c3f81c745ca8f630ae7f36b0cee.png", "RTX 5070"));
  popup.appendChild(createImage("https://hanoicomputercdn.com/media/product/91282_vga_gigabyte_rtx_5060_windforce_8gd_gddr7__1_.png", "RTX 5060"));
  popup.appendChild(createImage("https://product.hstatic.net/1000233206/product/1024_4dcfd38f96624982a14d80070f230a2b.png", "RTX 5060ti"));

  // Position popup relative to the button
  const rect = menu_button.getBoundingClientRect();

  popup.style.left = `${rect.left + window.scrollX}px`;
  popup.style.top = `${rect.bottom + window.scrollY}px`;

  // Append to body or container
  container.appendChild(popup);
}
