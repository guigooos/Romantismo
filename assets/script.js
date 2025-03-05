let img = document.getElementById('img');
let nuvL = document.getElementById('nuv-left');
let nuvR = document.getElementById('nuv-right');
let arara = document.getElementById('arara');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    if (value <= 700) {
        img.style.marginTop = value * 2.5 + 'px';
    }
    nuvL.style.marginLeft = value * 0.5 + 'px';
    nuvR.style.marginLeft = value * -0.5 + 'px';
    arara.style.marginLeft = value * 1.5 + 'px';
    arara.style.marginTop = value * -0.3 + 'px';
    
});

const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
});
