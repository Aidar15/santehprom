let searchForm = document.querySelector('.header__search');
let closeForm = document.querySelector('.header__form-close');
let mobileForm = document.querySelector('.header__form-body');

searchForm.addEventListener("click", function(e) {
    mobileForm.classList.add('active');
})

closeForm.addEventListener("click", function(e) {
    mobileForm.classList.remove('active');
})

let iconMenu = document.querySelector('.header__burger');
let closeMenu = document.querySelector('.header-bar__close');
let mainMenu = document.querySelector('.header-bar');

iconMenu.addEventListener("click", function(e) {
    mainMenu.classList.add('active');
})

closeMenu.addEventListener("click", function(e) {
    mainMenu.classList.remove('active');
})

let listCatalog = document.querySelector('.header__catalog-parts');
let closeCatalog = document.querySelector('.header__catalog-close');
let buttonCatalog = document.querySelector('.header__catalog-btn');

buttonCatalog.addEventListener("click", function(e) {
    listCatalog.classList.add('active');
})

closeCatalog.addEventListener("click", function(e) {
    listCatalog.classList.remove('active');
})
