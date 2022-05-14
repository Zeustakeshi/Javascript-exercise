window.addEventListener('load', () => {
    const input = document.querySelector('input');
    input.addEventListener('input', (e) => {
        const value = e.target.value;
        const checkItems =
            e.target.parentNode.querySelectorAll('.check-item');
        const checkLength =
            e.target.parentNode.querySelector('.check-length');
        const checkUper = e.target.parentNode.querySelector('.check-upper');
        const checkNumber =
            e.target.parentNode.querySelector('.check-number');
        const checkSpecial =
            e.target.parentNode.querySelector('.check-special');
        // check if value  === "" or !value remove class unactive
        if (!value) {
            [...checkItems].forEach((checkItem) => {
                checkItem.classList.remove('unactive');
                checkItem.classList.remove('active');
            });
            return;
        }
        // check password length
        if (value.length > 8) {
            checkLength.classList.add('active');
            checkLength.classList.remove('unactive');
        } else {
            checkLength.classList.add('unactive');
            checkLength.classList.remove('active');
        }
        //check password has characters range A to Z
        passwordInputValidation(checkUper, value, /[A-Z]/);
        // check password has number
        passwordInputValidation(checkNumber, value, /\d/);
        // check password has special characters
        passwordInputValidation(
            checkSpecial,
            value,
            /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/
        );
    });

    function passwordInputValidation(selector, value, regex) {
        if (regex.test(value)) {
            selector.classList.add('active');
            selector.classList.remove('unactive');
        } else {
            selector.classList.add('unactive');
            selector.classList.remove('active');
        }
    }
});
