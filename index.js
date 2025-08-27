function calculateTip() {
  const bill = parseFloat(document.getElementById('billAmount').value);
  const tipPercent = parseFloat(document.getElementById('tipPercent').value);
  const resultDiv = document.getElementById('result');

  if (isNaN(bill) || bill <= 0) {
    resultDiv.innerText = "Please enter a valid bill amount.";
    return;
  }

  const tip = bill * tipPercent;
  const total = bill + tip;

  resultDiv.innerText = `Tip: $${tip.toFixed(2)}\nTotal: $${total.toFixed(2)}`;
}
