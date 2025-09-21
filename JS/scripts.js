console.log('JavaScript file loaded');

document.addEventListener("DOMContentLoaded", () => {
    const openingHours = document.getElementById("opening-hours");
    if (openingHours) {
const today = new Date().getDay(); 
const hours = {
    0: "10:00 - 18:00",
    1: "stengt",
    2: "10:00 - 17:00",
    3: "10:00 - 17:00",
    4: "10:00 - 17:00",
    5: "10:00 - 17:00",
    6: "10:00 - 18:00",
    };
    openingHours.textContent = hours[today];
    }



    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const sidebar = document.querySelector('.header-container');

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('open');
            sidebar.classList.toggle('open');
    });
});


