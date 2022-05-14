window.addEventListener('load', () => {
    const input = document.querySelector('.input');
    const inputwrapper = document.querySelector('.input-wrapper');
    input.addEventListener('input', handleValidation);
    function handleValidation(e) {
        const value = e.target.value;
        const regexEmail =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regexEmail.test(value.trim())) {
            inputwrapper.classList.add('valid');
            inputwrapper.classList.remove('invalid');
        } else {
            inputwrapper.classList.remove('valid');
            inputwrapper.classList.add('invalid');
        }
        if (!value) {
            inputwrapper.classList.remove('invalid');
        }
    }
});
