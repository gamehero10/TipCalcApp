function calculateTip() {
  const bill = parseFloat(document.getElementById('billAmount').value);
  const selectedTip = document.getElementById('tipPercent').value;
  const customTip = parseFloat(document.getElementById('customTip').value);
  const resultDiv = document.getElementById('result');

  if (isNaN(bill) || bill <= 0) {
    resultDiv.innerText = "Please enter a valid bill amount.";
    return;
  }

  let tipPercentage;

  // Use custom tip if it's provided and valid
  if (!isNaN(customTip) && customTip > 0) {
    tipPercentage = customTip / 100;
  } else if (selectedTip) {
    tipPercentage = parseFloat(selectedTip) / 100;
  } else {
    resultDiv.innerText = "Please select or enter a valid tip percentage.";
    return;
  }

  const tip = bill * tipPercentage;
  const total = bill + tip;

  resultDiv.innerText = `Tip: $${tip.toFixed(2)}\nTotal: $${total.toFixed(2)}`;
}
