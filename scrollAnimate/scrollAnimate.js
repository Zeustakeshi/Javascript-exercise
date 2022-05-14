window.addEventListener('load', () => {
    document.addEventListener('scroll', handleScroll);
    const imgs = document.querySelectorAll('.container img');
    function handleScroll(e) {
        windowScrollTop = window.pageYOffset;
        [...imgs].forEach((img) => {
            if (windowScrollTop > img.offsetTop - img.offsetHeight / 2) {
                img.classList.add('active');
            } else {
                img.classList.remove('active');
            }
        });
    }
});
