/* ÁREA DO MENU MOBILE*/
let iconHamb = document.querySelector('.header-menu-mob img');
let iconArea = document.querySelector('.header-menu-mob');
let areaMenu = document.querySelector('.header-menu');
let logo = document.querySelector('.header-logo');

iconHamb.addEventListener('click', ()=> {
        areaMenu.classList.toggle('show-menu');
        if (areaMenu.classList.contains('show-menu')) {
                iconArea.style.zIndex = '99';
                logo.style.zIndex = '99';
                iconHamb.src = "images/icon-close.svg";
                iconArea.style.position = 'fixed';
                iconArea.style.right = '30px';
                logo.style.position = 'fixed';
                logo.style.left = '30px';
        } else {
                iconHamb.src = "images/icon-hamburger.svg";
                iconArea.style.zIndex = 'unset';
                logo.style.zIndex = 'unset';
                iconArea.style.position = 'static';
                logo.style.position = 'static';
        }
})

/*COLOCANDO EVENTO NO MENU*/
let menuItem = Array.from(document.querySelectorAll('.header-menu ul li'));

function fecharModal() {
        if (areaMenu.classList.contains('show-menu')) {
                areaMenu.classList.remove('show-menu');
                iconHamb.src = "images/icon-hamburger.svg";
                iconArea.style.zIndex = 'unset';
                logo.style.zIndex = 'unset';
                iconArea.style.position = 'static';
                logo.style.position = 'static';
        }
        
}

for (let i in menuItem) {
        menuItem[i].addEventListener('click', fecharModal);
}