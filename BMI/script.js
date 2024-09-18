function calculateBMI() {
    // Get the input values
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    // Validate input values
    if (weight === '' || height === '' || weight <= 0 || height <= 0) {
        alert('Please enter valid values for weight and height.');
        return;
    }

    // Calculate BMI
    const bmi = weight / (height * height);

    // Determine BMI category
    let category;
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    // Display the result
    const result = document.getElementById('result');
    result.innerHTML = `Your BMI is ${bmi.toFixed(2)} (${category})`;
}
