const tabItems = document.querySelectorAll(".tab-item")
const tabContents = document.querySelectorAll(".tab-content")
const tabItemArr = [...tabItems]
tabItemArr.forEach((tabItem, i) => {
    tabItem.addEventListener('click', event => {
        tabItems.forEach(item =>{
            item.classList.remove('active')
        })
        tabItem.classList.add('active')

        const tabContentArr = [...tabContents]
        tabContentArr.forEach(item =>{
            item.classList.remove('active')
            if (item.dataset.tab === tabItem.dataset.tab){
                item.classList.add('active')
            }
        })     
    })
})
