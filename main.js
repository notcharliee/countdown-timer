document.getElementById('execute').addEventListener('click', startCountdown)

function startCountdown() {
    let startDateInput = document.getElementById('start-date')
    let endDateInput = document.getElementById('end-date')
    let timerDisplay = document.getElementById('timer')

    let startDate = new Date(startDateInput.value)
    let endDate = new Date(endDateInput.value)

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        let audio = new Audio('sfx/error.mp3')
        return audio.play()
    }

    let interval = setInterval(() => {
        let now = new Date().getTime()
        let timeRemaining = endDate - now

        if (timeRemaining <= 0) {
            clearInterval(interval)
            timerDisplay.innerHTML = 'Time Up!'

            let audio = new Audio('sfx/bloop.mp3')
            audio.play()
        } else {
            let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
            let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
            let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000)

            timerDisplay.innerHTML = `${days}d, ${hours}h, ${minutes}m, ${seconds}s`
        }
    }, 1000)
}