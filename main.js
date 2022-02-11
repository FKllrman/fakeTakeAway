
// Mobile Menu // Mobile Menu // Mobile Menu // Mobile Menu // Mobile Menu // Mobile Menu // Mobile Menu 
const navIconEl = document.querySelector('.nav-icon');
const navCloseEl = document.querySelector('.nav-close');
const navList = document.querySelector('.nav-list');
const navBgOverlayEl = document.querySelector('.nav-bgOverlay');

// Funktion zum Öffnen des Mobile Menu
const navOpen = () => { 
    navList.classList.add('show');
    navBgOverlayEl.classList.add('active');
    document.body.style='visibility: visible; height: 100vh; width: 100vw; overflow: hidden;'; // verhindert die Möglichkeit bei aktiven Overlay zu scrollen
}

// Funktion zum Schliessen des Mobile Menu
const navClose = () => {
    navList.classList.remove('show');
    navBgOverlayEl.classList.remove('active');
    document.body.style='visibility: visible; height: initial; width: 100%; overflow-x: hidden;';
}

// Aktiviert das Mobile Menu
navIconEl.addEventListener('click', navOpen);

// Schliesst das Mobile Menu bei Click auf X
navCloseEl.addEventListener('click', navClose);

// Schliesst das Mobile Menu bei Click auf Overlay
navBgOverlayEl.addEventListener('click', navClose);


// Animation der Sections beim scrollen von oben nach unten (top-botton)
AOS.init({
    offset: 200,    // offset in px from the original trigger point
    delay: 100,     // values from 0 to 3000 with steps 50ms
    duration: 400,  // values from 0 to 3000 with steps 50ms
    easing: 'ease', // default easing for AOS animations
    once: false,    // wether animation should happen once  -while scrollin down- or every time
    mirror: false,  // wether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom'  // defines which position of the element regarding to window should trigger the animation
})