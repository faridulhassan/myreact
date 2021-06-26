export function toCelsius(fahrenheit) {
    return +(((fahrenheit - 32) * 5) / 9).toFixed(2); // two decimal places
}

export function toFahrenheit(celsius) {
    return +((celsius * 9) / 5 + 32).toFixed(2); // two decimal places
}
