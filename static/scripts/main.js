/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
        // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('header-bg') :
        header.classList.remove('header-bg')
}
window.addEventListener('scroll', scrollHeader)

/*================SCROLL REVEAL ANIMATION====================*/
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 2500,
})

/*======================QUESTIONS ACCORDION=================================*/
const accordionItems = document.querySelectorAll('.questions__item')
accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.questions__header')

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if (openItem && openItem != item) {
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.questions__content')

    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}



sr.reveal(`.home__images`, { distance: '120px', delay: 400 })
sr.reveal(`.home__title`, { delay: 600 })
sr.reveal(`.home__description`, { delay: 800 })
sr.reveal(`.home__button`, { delay: 1000 })
sr.reveal(`.home__footer`, { delay: 1200 })
sr.reveal(`.home__data div`, { origin: 'right', interval: 100, delay: 1400 })
sr.reveal(`.about__image`, { origin: 'left' })
sr.reveal(`.about__data`, { origin: 'right' })
    /*sr.reveal(`.card`, { interval: 100 })*/
sr.reveal(`.services__card`, { interval: 100 })
sr.reveal(`.social__icon`, { interval: 100 })
sr.reveal(`.contact__container:nth-child(1)`, { origin: 'left' })
sr.reveal(`.contact__container:nth-child(2)`, { origin: 'right' })
sr.reveal(`.home__images-about`, { distance: '120px', delay: 400 })
sr.reveal(`.home__title-about`, { delay: 600 })
sr.reveal(`.home__description-about`, { delay: 800 })
sr.reveal(`.home__value-about`, { delay: 1000 })
sr.reveal(`.values__images-about`, { origin: 'left' })
sr.reveal(`.value__data-about`, { interval: 100 })
sr.reveal(`.value__accordion`, { interval: 100 })

/*========================EMAIL JS=================================== */
const contactForm = document.getElementById('contact__form');

const sendEmail = (e) => {
    e.preventDefault();
    let contactName = document.getElementById('contact__name');
    let contactPhone = document.getElementById('contact__phone');
    let contactProject = document.getElementById('contact__project');
    let contactMessage = document.getElementById('contact__message');
    console.log(contactName.value);
    if (contactName.value && contactPhone.value && contactProject.value) {
        // serviceID - templateID - #form - publickey
        emailjs.sendForm('service_s8purzw', 'template_qkq3a3f', '#contact__form', 'RXPgc1oGJi9FWKHPv')
            .then(() => {
                // Show message and and color
                contactMessage.classList.add('color-blue');
                contactMessage.textContent = 'Mensaje enviado, nos contactaremos contigo. ✅';

                // Remove message after five seconds
                setTimeout(() => {
                    contactMessage.textContent = '';
                    //to clear input field
                    contactName.value = '';
                    contactPhone.value = '';
                    contactProject.value = '';
                }, 5000);

            }, (error) => {
                alert('OOPS! Algo a fallado, vuelve a intentarlo en unos minutos.');
            });
    } else {
        contactMessage.classList.remove('color-blue');
        contactMessage.classList.add('color-red');

        // Show message
        contactMessage.textContent = 'Por favor, llene todos los campos ❎';
    }
}
contactForm.addEventListener('submit', sendEmail);