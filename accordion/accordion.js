const accordionHeaders = document.querySelectorAll('.accordion-header')
const accordionHeadersArr = [...accordionHeaders]
accordionHeadersArr.forEach (accordionHeader =>{
    accordionHeader.addEventListener('click', handleAccordionClick)
})

function handleAccordionClick(e){
    const activeClass = 'is-active'
    const content = e.target.nextElementSibling
    const icon = e.target.querySelector('.icon')

    content.classList.toggle(activeClass)
    icon.classList.toggle('fa-angle-down')
    icon.classList.toggle('fa-angle-up')
    if (content.classList.contains('is-active')) {
        // is content active
        content.style.height = `${content.scrollHeight}px`
    }else{
        // is content not active
        content.style.height = `0px`
    }
}