function startCountdown() {
    // Get the target date from the input field
    const targetDate = new Date(document.getElementById('target-date').value);
    
    // Validate the input date
    if (isNaN(targetDate.getTime())) {
        alert('Please enter a valid date and time.');
        return;
    }

    // Update the countdown every second
    const countdownInterval = setInterval(() => {
        // Get the current time
        const now = new Date().getTime();

        // Calculate the difference between the target date and the current time
        const timeDifference = targetDate - now;

        // If the countdown is complete, stop the interval
        if (timeDifference < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = 'Countdown Finished!';
            return;
        }

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Display the result
        document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
        document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');
    }, 1000);
}
