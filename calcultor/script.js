const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.btn');

let screenValue = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'C') {
            screenValue = ''; // Clear the screen
            screen.value = screenValue;
        } else if (value === '=') {
            try {
                screen.value = eval(screenValue); // Evaluate the expression
                screenValue = screen.value; // Update screenValue with result
            } catch {
                screen.value = 'Error'; // Display error if eval fails
            }
        } else {
            screenValue += value;
            screen.value = screenValue; // Update screen display
        }
    });
});
