

const LightBox = (imgSrc, index) => {
    return `
    <div class="light-box">
        <div class="light-box-content">
            <div class = 'light-box-control light-box-control-prev'>
                <ion-icon name="chevron-back"></ion-icon>
            </div>
            <img src=${imgSrc} alt="" />
            <div class ='light-box-control light-box-control-next'>
                <ion-icon name="chevron-forward"></ion-icon>
            </div>
        </div>
    </div>
    `
}

const imgs = document.querySelectorAll('.content-img')

imgs.forEach( (img, index) => {
    img.addEventListener('click', handleClickImg)
    function handleClickImg() {
        document.body.insertAdjacentHTML("afterbegin", 
        LightBox(img.getAttribute('src'), index))
    }
})


let index = 0 
document.body.addEventListener('click', (event)=>{
    const lightBoxImg = document.querySelector('.light-box-content img')
    if (!lightBoxImg) return false
    const lightSrc = lightBoxImg.getAttribute('src')
    index = [...imgs].findIndex(item => item.getAttribute('src') === lightSrc)
    
    if (event.target.matches('.light-box')){
        event.target.parentNode.removeChild(event.target)
    }
    else if (event.target.matches('.light-box-control-next')){
        index ++ 
        if (index > imgs.length -1){
            index = 0
        }
    }
    else if (event.target.matches('.light-box-control-prev')){
        index --
        if (index < 0){
            index = imgs.length - 1
        }
    }
    lightBoxImg.setAttribute('src', imgs[index].getAttribute('src'))
})