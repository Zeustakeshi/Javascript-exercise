window.addEventListener('load', () => {
    const imgCover = document.querySelector('.image-cover');
    imgCover.addEventListener('mousemove', handleZoomImage);
    const img = document.querySelector('.image');
    const imgWrapper = document.querySelector(
        '.image-wrapper'
    );
    let imgWrapperWidth = imgWrapper.offsetWidth;
    let imgWrapperHeight = imgWrapper.offsetHeight;
    let positionWrapperImg =
        imgWrapper.getBoundingClientRect();
    function handleZoomImage(e) {
        const pX = e.pageX - positionWrapperImg.left;
        const pY = e.pageY - positionWrapperImg.top;
        img.style = `width: auto; height: auto ; max-height: unset;`;
        let imgWidth = img.offsetWidth;
        let imgHeight = img.offsetHeight;
        const spaceX = (imgWidth / 2 - imgWrapperWidth) * 2;
        const spaceY =
            (imgHeight / 2 - imgWrapperHeight) * 2;
        imgWidth = imgWidth + spaceX;
        imgHeight = imgHeight + spaceY;
        const ratioX = imgWidth / imgWrapperWidth / 2;
        const ratioY = imgHeight / imgWrapperHeight / 2;
        const x = pX * ratioX;
        const y = pY * ratioY;
        img.style = `left: ${-x}px; top: ${-y}px; width: auto; height: auto ; max-height: unset; transform: none;`;
    }
    imgCover.addEventListener('mouseleave', () => {
        img.style = `max-height: 100%; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 100%;`;
    });
});
