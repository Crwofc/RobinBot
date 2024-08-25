const menu = document.querySelector("#menu")


const navLinks = document.querySelector(".navList")

menu.addEventListener('click', () => {

    navLinks.classList.toggle('mobile-menu')
    document.querySelector('.nav').classList.toggle("absolute_fixed")

})