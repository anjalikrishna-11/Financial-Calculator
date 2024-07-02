//U35346496
// Import functions from the calculation modules
import { calculateInterest } from './interestRate.js';
import { calculateLoanPayment } from './loanPayment.js';
import { calculateInvestmentReturn } from './investmentReturn.js';

// Function to validate inputs: checks if all inputs are numbers and not empty
function validateInput(...inputs) {
    return inputs.every(input => !isNaN(input) && input !== '');
}

// Event listener for the Interest Rate Calculation button
document.getElementById('calculateInterest').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('interestPrincipal').value);
    const rate = parseFloat(document.getElementById('interestRate').value);
    const time = parseFloat(document.getElementById('interestTime').value);

    if (validateInput(principal, rate, time)) {
        const result = calculateInterest(principal, rate, time);
        document.getElementById('interestResult').textContent = `Interest: ${result}`;
    } else {
        document.getElementById('interestResult').textContent = 'Please enter valid numbers.';
    }
});

// Event listener for the Loan Payment Calculation button
document.getElementById('calculateLoanPayment').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('loanPrincipal').value);
    const rate = parseFloat(document.getElementById('loanRate').value) / 100;
    const numberOfPayments = parseInt(document.getElementById('loanNumberOfPayments').value, 10);

    if (validateInput(principal, rate, numberOfPayments)) {
        const result = calculateLoanPayment(principal, rate, numberOfPayments);
        document.getElementById('loanResult').textContent = `Monthly Payment: ${result.toFixed(2)}`;
    } else {
        document.getElementById('loanResult').textContent = 'Please enter valid numbers.';
    }
});

// Event listener for the Investment Return Calculation button
document.getElementById('calculateInvestmentReturn').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('investmentPrincipal').value);
    const rate = parseFloat(document.getElementById('investmentRate').value) / 100;
    const timesCompounded = parseInt(document.getElementById('investmentTimesCompounded').value, 10);
    const years = parseInt(document.getElementById('investmentYears').value, 10);

    if (validateInput(principal, rate, timesCompounded, years)) {
        const result = calculateInvestmentReturn(principal, rate, timesCompounded, years);
        document.getElementById('investmentResult').textContent = `Future Value: ${result.toFixed(2)}`;
    } else {
        document.getElementById('investmentResult').textContent = 'Please enter valid numbers.';
    }
});
