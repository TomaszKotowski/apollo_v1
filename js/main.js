// const nav = document.querySelector('.nav');
// const navList = document.querySelector('.nav__list');

const nav = document.querySelector('[data-js="nav"]');
const navList = document.querySelector('[data-js="nav__list"]')

function toggleMenu() {
    navList.classList.toggle('open');
}

nav.addEventListener('click', toggleMenu)

const arrowLeftBanner = document.querySelector('[data-js="arrow-left-banner"]');
const arrowRightBanner = document.querySelector('[data-js="arrow-right-banner"]');
const banner = document.querySelector('[data-js="banner"]');

const lisBanner = banner.getElementsByTagName('li');

// Banner animation
function toLeftBanner() {

    if (lisBanner[0].classList.contains("active--0")) {
        lisBanner[0].classList.remove("active--0");
        lisBanner[2].classList.add("active--2");
    } else if (lisBanner[2].classList.contains("active--2")) {
        lisBanner[2].classList.remove("active--2");
        lisBanner[1].classList.add("active--1");
    } else if (lisBanner[1].classList.contains("active--1")) {
        lisBanner[1].classList.remove("active--1");
        lisBanner[0].classList.add("active--0");
    }
}

function toRightBanner() {

    if (lisBanner[0].classList.contains("active--0")) {
        lisBanner[0].classList.remove("active--0");
        lisBanner[1].classList.add("active--1");
    } else if (lisBanner[1].classList.contains("active--1")) {
        lisBanner[1].classList.remove("active--1");
        lisBanner[2].classList.add("active--2");
    } else if (lisBanner[2].classList.contains("active--2")) {
        lisBanner[2].classList.remove("active--2");
        lisBanner[0].classList.add("active--0");
    }
}

arrowLeftBanner.addEventListener('click', toLeftBanner);
arrowRightBanner.addEventListener('click', toRightBanner);

// Three slide animation

const arrowLeftSlider = document.querySelector('[data-js="arrow-left-slider"]');
const arrowRightSlider = document.querySelector('[data-js="arrow-right-slider"]');
const slider = document.querySelector('[data-js="slider"]');
const listSlider = slider.getElementsByTagName('img');

function toLeftSlider(n) {
    for (let i = 0; i < listSlider.length; i++) {
        const listSlider = slider.getElementsByTagName('img');
        if (listSlider[i].classList.contains("current")) {
            listSlider[i].classList.remove("current");
            listSlider[i].classList.add("front");
        } else if (listSlider[i].classList.contains("back")) {
            listSlider[i].classList.remove("back");
            listSlider[i].classList.add("current");
        } else if (listSlider[i].parentElement.classList.contains("hide")) {
            listSlider[i].parentElement.classList.remove("hide");
            listSlider[i].classList.add("back");
        } else if (listSlider[i].classList.contains("front")) {
            listSlider[i].classList.remove("front");
            listSlider[i].parentElement.classList.add("hide");
        }
    }
};

function toRightSlider(n) {
    for (let i = 0; i < listSlider.length; i++) {
        const listSlider = slider.getElementsByTagName('img');
        if (listSlider[i].classList.contains("current")) {
            listSlider[i].classList.remove("current");
            listSlider[i].classList.add("back");
        } else if (listSlider[i].classList.contains("back")) {
            listSlider[i].classList.remove("back");
            listSlider[i].parentElement.classList.add("hide");
        } else if (listSlider[i].parentElement.classList.contains("hide")) {
            listSlider[i].parentElement.classList.remove("hide");
            listSlider[i].classList.add("front");
        } else if (listSlider[i].classList.contains("front")) {
            listSlider[i].classList.remove("front");
            listSlider[i].classList.add("current");
        }
    }
};

arrowLeftSlider.addEventListener('click', toLeftSlider);
arrowRightSlider.addEventListener('click', toRightSlider);
