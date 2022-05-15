const exercises = [
    {
        href: './slider_img_api/sliderImgApi.html',
        imgSrc: './public/img/slider_img_api.jpg',
        name: 'Slider Img Api',
        exerciseDescription: {
            language: 'Html, Css, JavaScript',
            Description: 'Call Api and use sclick library',
        },
    },
    {
        href: './todolist/todolist.html',
        imgSrc: './public/img/todo_listjpg.jpg',
        name: 'Todo List',
        exerciseDescription: {
            language: 'Html, Css, JavaScript',
            Description:
                'Using MVC model , Class in JavaScript es6 , local Storage',
        },
    },
    {
        href: './imgZoom/imgZoom.html',
        imgSrc: './public/img/img_zoom.jpg',
        name: 'Image Zoom',
        exerciseDescription: {
            language: 'Html, Css, JavaScript',
            Description: 'Zoom when hover image',
        },
    },
    {
        href: './Dadjoke_Api/dadJoke.html',
        imgSrc: './public/img/joke_api.jpg',
        name: 'Dadjoke Api',
        exerciseDescription: {
            language: 'Html, Css, JavaScript',
            Description: 'Call Api from Dadjoke and random Joke',
        },
    },
    {
        href: './accordion/accordion.html',
        imgSrc: './public/img/accordion.jpg',
        name: 'Accordion',
        exerciseDescription: {
            language: 'Html, Css, JavaScript',
        },
    },
    {
        href: './countDown/countDown.html',
        imgSrc: './public/img/count_down.jpg',
        name: 'Count Down',
        exerciseDescription: {
            language: 'Html, Css, JavaScript',
        },
    },
    {
        href: './dropDown/dropdown.html',
        imgSrc: './public/img/drop_down.jpg',
        name: 'Dropdown',
        exerciseDescription: {
            language: 'Html, Css, JavaScript',
        },
    },
    {
        href: './emailValidation/emailValidation.html',
        imgSrc: './public/img/emailValidation.jpg',
        name: 'Email Validation',
        exerciseDescription: {
            language: 'Html, Css, JavaScript',
            Description: 'Using regex to validate email',
        },
    },
    {
        href: './passwordValidation/passwordValidation.html',
        imgSrc: './public/img/passValidation.jpg',
        name: 'Password Validation',
        exerciseDescription: {
            language: 'Html, Css, JavaScript',
            Description: 'Using regex to validate password',
        },
    },
    {
        href: './hightlightSearch/hightlightSearch.html',
        imgSrc: './public/img/hightLight.jpg',
        name: 'Hightlight Search Text',
        exerciseDescription: {
            language: 'Html, Css, JavaScript',
            Description: 'Cover google hight light search',
        },
    },
    {
        href: './lightBox/lightBox.html',
        imgSrc: './public/img/lightBox.jpg',
        name: 'Light Box',
        exerciseDescription: {
            language: 'Html, Css, JavaScript',
            Description: 'Click to zoom in image',
        },
    },
    {
        href: './linkHoverEffect/linkeffect.html',
        imgSrc: './public/img/link_hover_effect.jpg',
        name: 'Link Hover Effect',
        exerciseDescription: {
            language: 'Html, Css, JavaScript',
            Description: 'Effect when hover link ',
        },
    },
    {
        href: './modal/modal.html',
        imgSrc: './public/img/modal.jpg',
        name: 'Modal',
        exerciseDescription: {
            language: 'Html, Css, JavaScript',
            Description: 'Show or hiden modal',
        },
    },
    {
        href: './scrollAnimate/scrollAnimate.html',
        imgSrc: './public/img/scrollAnimate.jpg',
        name: 'Scroll Animation',
        exerciseDescription: {
            language: 'Html, Css, JavaScript',
            Description: 'Show image when scroll down the image.',
        },
    },
    {
        href: './tabChange/tab.html',
        imgSrc: './public/img/tabChange.jpg',
        name: 'Tag Change',
        exerciseDescription: {
            language: 'Html, Css, JavaScript',
        },
    },
    {
        href: './toggleMenu/toggle.html',
        imgSrc: './public/img/toggle_menu.jpg',
        name: 'Toggle Menu',
        exerciseDescription: {
            language: 'Html, Css, JavaScript',
        },
    },
];

function renderExercise(exercises, parentElement) {
    exercises.forEach((exercise, index) => {
        const html = `
            <a href="${exercise.href}" class="exercise">
                <div class="exercise-img">
                    <img src="${exercise.imgSrc}" alt="${exercise.name}">
                </div>
                <div class="exercise-content">
                    <div class="exercise-name">${exercise.name}</div>
                    <div class="exercise-description"></div>
                </div>
            </a>`;
        parentElement.insertAdjacentHTML('beforeEnd', html);
        const description = parentElement.querySelectorAll(
            '.exercise-description'
        );
        for (const i in exercise.exerciseDescription) {
            const html = `<span>${i}: </span> ${exercise.exerciseDescription[i]}`;
            [...description][index].insertAdjacentHTML('beforeEnd', html);
        }
    });
}

function renderDom() {
    const root = document.querySelector('.wrapper');
    const header = createElement('div', 'header');
    const headerContent = ` <h1>Javascript exercise</h1>`;
    header.innerHTML = headerContent;
    const body = createElement('div', 'body');
    root.append(header, body);
    renderExercise(exercises, body);
}

function createElement(tagName, className, textContent) {
    const ele = document.createElement(tagName);
    if (className) {
        ele.classList.add(className);
    }
    if (textContent) {
        ele.classList.add(textContent);
    }
    return ele;
}

renderDom();
