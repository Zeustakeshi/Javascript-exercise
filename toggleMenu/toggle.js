const toggleMenu = document.querySelector(".toggle-menu")
const menu = document.querySelector('.menu')
const btnMenu = document.querySelector(".menu-header-icon")
const iconMenu = document.querySelector('.menu-header-icon ion-icon')
let isShow = false

const handlCloseMenu = (timeClose) => {
    isShow =  false
    toggleMenu.classList.remove('is-show')
    menu.style.animation = `hiden-menu ${timeClose}s 1 ease-in-out` 
    setTimeout(() => {
        menu.style.display = 'none'
    }, timeClose * 1000);
    iconMenu.setAttribute("name", 'menu-outline')
}

const handleOpenMenu = (timeOpne) => {
    isShow = true
    toggleMenu.classList.add('is-show')
    menu.style.display = 'block'
    menu.style.animation = `show-menu ${timeOpne}s 1 ease-in-out`
    iconMenu.setAttribute("name", 'close-outline')
}


btnMenu.addEventListener("click", () => {
    const time = .5
    if (!isShow){
        handleOpenMenu(time)
    }else{
       handlCloseMenu(time)
    }
})

document.addEventListener('click', (e) => {
    if (!toggleMenu.contains(e.target)){
        handlCloseMenu(.5)
    }
})