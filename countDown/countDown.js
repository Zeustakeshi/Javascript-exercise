window.addEventListener('load', () => {
    const daysText = document.querySelector('.days');
    const hoursText = document.querySelector('.hours');
    const minutesText = document.querySelector('.minutes');
    const secondsText = document.querySelector('.seconds');
    const countDown = (date) => {
        const finishDate = new Date(date).getTime();
        let days, hours, minutes, seconds;
        const curentDate = new Date().getTime();
        if (finishDate - curentDate <= 0 || isNaN(finishDate)) return;
        setInterval(carculate, 1000);
        function carculate() {
            const now = new Date();
            const startDate = now.getTime();
            let timeRemaining = parseInt((finishDate - startDate) / 1000);
            if (timeRemaining < 0) return;
            // 1 day  = 24 (hour)  * 60 (minutes) * 60 (seconds) = 86400
            days = parseInt(timeRemaining / 86400);
            daysText.textContent = `${days > 9 ? days : `0${days}`} `;
            // get the remainder after taking the date
            timeRemaining = timeRemaining % 86400;
            // 1 hours = 60 (minutes) * 60 (seconds) = 3600
            hours = parseInt(timeRemaining / 3600);
            hoursText.textContent = `${hours > 9 ? hours : `0${hours}`} `;
            // get the remainder after taking the hours
            timeRemaining = timeRemaining % 3600;
            // 1 minutes = 60 (seconds) =  60
            minutes = parseInt(timeRemaining / 60);
            minutesText.textContent = `${
                minutes > 9 ? minutes : `0${minutes}`
            } `;
            seconds = parseInt(timeRemaining % 60);
            secondsText.textContent = `${
                seconds > 9 ? seconds : `0${seconds}`
            } `;
        }
    };
    countDown('May 20 2022 00:00:00');
});
