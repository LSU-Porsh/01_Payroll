// Bug: Calculation doesn’t handle overtime yet
function calculatePay() {
  const name = document.getElementById("employeeName").value;
  const hours = parseFloat(document.getElementById("hoursWorked").value);
  const rate = parseFloat(document.getElementById("ratePerHour").value);

  let pay = hours * rate; // Enhancement: add overtime rule (e.g., >40 hours = 1.5x rate)

  document.getElementById("result").innerText =
    name + "'s total pay is: $" + pay.toFixed(2);
}

document.getElementById("calculateBtn").onclick = calculatePay;
