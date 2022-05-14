const API = 'https://icanhazdadjoke.com/';
const jokeWrapper = document.querySelector('.joke');
const jokeHeading = document.querySelector('.joke-heading');
const jokeBtn = document.querySelector('.joke-btn');

const getData = async () => {
    const response = await fetch(API, {
        headers: {
            Accept: 'application/json',
        },
    });
    const data = await response.json();
    return data;
};

const handleRandomJoke = async () => {
    jokeWrapper.classList.add('is-loading');
    const data = await getData();
    const joke = data.joke;
    jokeHeading.textContent = joke;
    jokeWrapper.classList.remove('is-loading');
};

jokeBtn.addEventListener('click', handleRandomJoke);
