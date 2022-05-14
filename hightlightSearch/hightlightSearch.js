window.addEventListener('load', function () {
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const inputSearch = document.querySelector('.input-search');
    inputSearch.addEventListener('input', function (e) {
        let filter = this.value;

        filter = filter.toLowerCase();
        [...dropdownItems].forEach((item) => {
            const text = item.textContent;
            const index = text.toLowerCase().indexOf(filter);
            if (
                index >= 0 &&
                text.toLowerCase().startsWith(filter.charAt(0))
            ) {
                const hightlightText = text.substring(
                    index,
                    index + filter.length
                );
                const contentLeft = text.substring(0, index);
                const contentRight = text.substring(index + filter.length);
                item.innerHTML = `<div class="dropdown-item">${contentLeft}<span class="primary">${hightlightText}</span>${contentRight}</div>`;
            }
        });
    });
});
