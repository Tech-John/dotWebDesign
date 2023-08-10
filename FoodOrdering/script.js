// MENU

const divToShow = 'nav .menu';
const divPopup = document.querySelector(divToShow);
const divTrigger = document.querySelector(".m-trigger");

divTrigger.addEventListener('click', function() {
    setTimeout(() => {
        if (!divPopup.classList.contains('show')) {
         openMenu();   
        }
    }, 250);
});

document.addEventListener('click', function(e) {
    const isClosest = e.target.closest(divToShow);
    if (!isClosest && divPopup.classList.contains('show')) {
        closeMenu();
    }
});

const openMenu = () => {
    divPopup.classList.add('show');
    document.body.classList.add('menu-visible');
}

const closeMenu = () => {
    divPopup.classList.remove('show');
    document.body.classList.remove('menu-visible');
}


// SEARCH BOX

const sTrigger = document.querySelector(".s-trigger");
const divSite = document.querySelector(".site");

sTrigger.addEventListener('click', function() {
    divSite.classList.toggle("showSearch")
})