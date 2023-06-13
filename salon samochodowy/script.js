document.getElementById("car-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Zapobiega domyślnej akcji przesyłania formularza

    // Pobierz wartość wybranej opcji silnika
    var engineOption = document.querySelector('input[name="engine"]:checked');

    // Sprawdź, czy wybrano silnik
    if (engineOption === null) {
        document.getElementById("result").textContent = "Wybierz silnik.";
        return;
    }

    // Pobierz wartość i cenę wybranego silnika
    var engineValue = engineOption.value;
    var enginePrice = getEnginePrice(engineValue);

    // Pobierz wartość wybranych dodatków
    var options = document.querySelectorAll('input[name="option"]:checked');
    var optionsTotal = 0;
    options.forEach(function(option) {
        optionsTotal += getOptionPrice(option.value);
    });

    // Pobierz wartość imienia i nazwiska
    var name = document.getElementById("name").value;

    // Pobierz datę dostawy
    var deliveryDate = document.getElementById("delivery-date").value;

    // Pobierz metodę płatności
    var paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;

    // Oblicz całkowitą cenę
    var totalPrice = enginePrice + optionsTotal;

    // Wyświetl podsumowanie
    var summary = "Dziękujemy za zakup!\n\n";
    summary += "Imię i nazwisko: " + name + "\n";
    summary += "Data dostarczenia: " + deliveryDate + "\n";
    summary += "Metoda płatności: " + paymentMethod + "\n";
    summary += "Końcowa cena: " + totalPrice + " zł";

    document.getElementById("result").innerText = summary;
});

function getEnginePrice(engineValue) {
    // Zdefiniuj ceny dla poszczególnych opcji silnika
    var enginePrice = {
        "2.0-155": 159000,
        "2.5-200": 229000,
        "2.5-280": 340000,
        "2.8-332": 459000,
        "3.8-485": 324000,
        "3.8-570": 499000,
        "3.8-660": 775000,
        "2.0-156": 775000,
    };

    return enginePrice[engineValue];
}

function getOptionPrice(optionValue) {
    // Zdefiniuj ceny dla poszczególnych opcji dodatkowych
    var optionPrice = {
        "leather": 5000,
        "navigation": 3000,
        "sunroof": 4000,
    };

    return optionPrice[optionValue] || 0;
}
