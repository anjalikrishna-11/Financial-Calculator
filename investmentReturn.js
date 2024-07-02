export function calculateInvestmentReturn(principal, rate, timesCompounded, years) {
    return principal * Math.pow(1 + rate / timesCompounded, timesCompounded * years);
}

