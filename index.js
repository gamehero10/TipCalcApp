function calculateTip() {
  const bill = parseFloat(document.getElementById('billAmount').value);
  const selectedTip = document.getElementById('tipPercent').value;
  const customTip = parseFloat(document.getElementById('customTip').value);
  const currency = document.getElementById('currency').value;
  const resultDiv = document.getElementById('result');

  if (isNaN(bill) || bill <= 0) {
    resultDiv.innerText = "Please enter a valid bill amount.";
    return;
  }

  let tipPercentage;

  // Use custom tip if provided and valid
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

  resultDiv.innerText = 
    `Tip: ${currency}${tip.toFixed(2)}\nTotal: ${currency}${total.toFixed(2)}`;
}

function clearForm() {
  document.getElementById('billAmount').value = '';
  document.getElementById('tipPercent').value = '';
  document.getElementById('customTip').value = '';
  document.getElementById('currency').value = '$';
  document.getElementById('result').innerText = '';
}
