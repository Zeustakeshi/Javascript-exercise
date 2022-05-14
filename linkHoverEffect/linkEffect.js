window.addEventListener('load', () => {
    const menuItems = [
        ...document.querySelectorAll('.menu-item'),
    ];
    // create element line
    const line = document.createElement('div');
    line.setAttribute('class', 'line-effect');
    document.body.insertAdjacentElement('afterbegin', line);
    menuItems.forEach((menuItem) => {
        // check mouse enter menu item
        menuItem.addEventListener('mouseenter', () => {
            const ofsetBottom = 5;
            // get position of menu item
            const { width, left, bottom } =
                menuItem.getBoundingClientRect();
            // set line width = width of menu item
            line.style.width = `${width}px`;
            // set line top = menu item bottom + ofsetBottom
            line.style.top = `${bottom + ofsetBottom}px`;
            // set line left = menu item left
            line.style.left = `${left}px`;
        });
    });
    const menu = document.querySelector('.menu');
    // mouse leve menu element
    menu.addEventListener('mouseleave', () => {
        line.style.width = 0;
    });
});
