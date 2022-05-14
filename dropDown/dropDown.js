const dropDownSelect = document.querySelector('.dropdown__select')
const dropDownList = document.querySelector('.dropdown__list')
const dropDownIcon = document.querySelector('.dropdown__caret')
const dropDown = document.querySelector('.dropdown')
// handle dropdown selection
dropDownSelect.addEventListener('click',event =>{
    // show or hiden dropdown list
    dropDownList.classList.toggle('show')
    // toggle icon dropdown caret 
    dropDownIcon.classList.toggle('fa-caret-up')
})

// handle dropdown item selection
const dropDownItems = document.querySelectorAll('.dropdown__item')
;[...dropDownItems].forEach((item, index) =>{
    item.addEventListener('click', (e)=>{
        // get text content from dropdown item selected
        const dropDownItemText = e.target.querySelector('.dropdown__text').textContent
        // get selected item 
        const selectedItem = dropDownSelect.querySelector('.dropdown__selected')
        // set selected item = text content from dropdown item selected
        selectedItem.textContent = dropDownItemText
        // only hiden dropdown list 
        dropDownList.classList.remove('show')
        dropDownIcon.classList.remove('fa-caret-up')
        dropDownIcon.classList.add('fa-caret-down')
    })
})

document.addEventListener('click', (e) => {
    ///
    if (!dropDown.contains(e.target)) {
        dropDownList.classList.remove('show')
        dropDownIcon.classList.remove('fa-caret-up')
        dropDownIcon.classList.add('fa-caret-down')
    }
})