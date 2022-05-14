const button = document.querySelector('.button')

const htmlModal = `
    <div class="modal">
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <span class="modal-close">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
                </svg>
            </span>
            <div class="modal-main">
                this is content modal this is content modal this is content modal this is content modal this is content modal this is content modal this is content modal 
            </div>
        </div>
    </div>
`
button.addEventListener('click',()=>{
    document.body.insertAdjacentHTML("beforeend", htmlModal)
})

document.body.addEventListener('click', event =>{
    if (event.target.matches('.modal-close')){
        const modal = document.querySelector('.modal')
        modal.parentNode.removeChild(modal)
    }else if (event.target.matches('.modal')){
        event.target.parentNode.removeChild(event.target)
    }
})
