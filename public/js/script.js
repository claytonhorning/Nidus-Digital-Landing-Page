const button = document.querySelector('#menu-button'); // icon
const menu = document.querySelector('#menu'); // menu

button.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    console.log("success")
});