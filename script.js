function loadRates() {
  fetch("https://belarusbank.by/api/kurs_cards")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

loadRates();
