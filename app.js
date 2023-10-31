function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
    const unit = document.getElementById("unitSelection").value;
    let result;

    if (unit === "celsius") {
        result = `${inputTemperature} °C is equal to ${((inputTemperature * 9 / 5) + 32).toFixed(2)} °F and ${(inputTemperature + 273.15).toFixed(2)} K`;
    } else if (unit === "fahrenheit") {
        result = `${inputTemperature} °F is equal to ${((inputTemperature - 32) * 5 / 9).toFixed(2)} °C and ${((inputTemperature - 32) * 5 / 9 + 273.15).toFixed(2)} K`;
    } else if (unit === "kelvin") {
        result = `${inputTemperature} K is equal to ${(inputTemperature - 273.15).toFixed(2)} °C and ${((inputTemperature - 273.15) * 9 / 5 + 32).toFixed(2)} °F`;
    } else {
        result = "Invalid unit selection";
    }

    document.getElementById("result").textContent = result;
}