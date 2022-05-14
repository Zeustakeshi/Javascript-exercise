const API = 'https://picsum.photos/v2/list';
const root = document.querySelector('#root');
const getData = async (page = 1) => {
    const response = await fetch(`${API}?page=${page}&limit=8`);
    const data = await response.json();
    return data;
};

function createElement(tagName, className, textContent) {
    const ele = document.createElement(tagName);
    if (className) {
        ele.classList.add(className);
    }
    if (textContent) {
        ele.textContent = textContent;
    }
    return ele;
}

const rederSlider = async (sliderContainer, slider, page = 1) => {
    sliderContainer.classList.add('is-loading');
    const dataImg = [...(await getData(page))];
    if (!dataImg.length > 0 && Array.isArray(dataImg)) return;

    dataImg.forEach((item) => {
        const { download_url } = item;
        const imgHtml = createElement('img', 'slider-img');
        imgHtml.src = download_url;
        slider.append(imgHtml);
    });
    slickSlider();
    sliderContainer.classList.remove('is-loading');
};

function slickSlider() {
    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: true,
        infinite: true,
        autoplay: true,
        dots: true,
        autoplaySpeed: 2000,
        prevArrow: `<a type='button' class='slick-prev slick-btn pull-left btn-c btn-c--fill btn-c--shaw'><ion-icon name="arrow-back-outline"></ion-icon></a>`,
        nextArrow: `<a type='button' class='slick-next pull-right slick-btn btn-c btn-c--fill btn-c--shaw'><ion-icon name="arrow-forward-outline"></ion-icon></a>`,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
}

const rederDom = async () => {
    const sliderContainer = createElement('div', 'slider-container');
    const slider = createElement('div', 'slider');
    const loader1 = createElement('img', 'loader');
    loader1.src = './img/Bucket_loading.svg';
    const btnRandomImg = createElement('button', 'btn-random-slider');
    const btnRandomImgText = createElement('span', '', 'Change Image');
    const loader2 = createElement('img', 'loader');
    loader2.src = './img/Spinner-1s-200px.svg';
    // appen DOM

    root.append(sliderContainer);
    sliderContainer.append(loader1, slider, btnRandomImg);
    btnRandomImg.append(loader2, btnRandomImgText);
    /// reder slider
    let page = 1;
    rederSlider(sliderContainer, slider);
    btnRandomImg.addEventListener('click', (e) => {
        page++;
        slider.classList = 'slider';
        slider.innerHTML = '';
        rederSlider(sliderContainer, slider, page);
    });
};

window.addEventListener('load', () => {
    rederDom();
});
