export function calculateLoanPayment(principal, rate, numberOfPayments) {
    let monthlyRate = rate / 12;
    return principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
}

