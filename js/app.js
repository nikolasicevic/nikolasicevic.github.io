// NAVIGATION TOGGLE FEATURE 

// property values for different states of navigation
const NAV_HEIGHT_OPENED = 'calc(100vh - 63px)';
const NAV_HEIGHT_CLOSED = '0';
const ELEMENT_OPENED = 'block';
const ELEMENT_CLOSED = 'none';

// elements involved in displaying navigation on mobile 
var hamburger = document.getElementById('hamburger');
var nav = document.getElementById('nav');
var navList = nav.getElementsByTagName('ul')[0];
var navItems = nav.getElementsByClassName('nav-item');

// initial state of navigation for mobile phones
var navOpened = false;

function toggleNav() {
    if (navOpened === true) {
        nav.style.height = NAV_HEIGHT_CLOSED;
        navList.style.display = ELEMENT_CLOSED;

        navOpened = false;
    } else {
        nav.style.height = NAV_HEIGHT_OPENED;
        navList.style.display = ELEMENT_OPENED;

        navOpened = true;
    }

    toggleNav(activeHeight, activeDisplay);
}

