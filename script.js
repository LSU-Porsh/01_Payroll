document.getElementById("payrollForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const nameInput = document.getElementById("employeeName");
  const hoursInput = document.getElementById("hoursWorked");
  const rateInput = document.getElementById("ratePerHour");
  const resultDiv = document.getElementById("result");

  const name = nameInput.value.trim();
  const hoursVal = hoursInput.value.trim();
  const rateVal = rateInput.value.trim();

  // 1. Validation Logic
  let errorMessage = "";

  if (!name || hoursVal === "" || rateVal === "") {
    errorMessage = "Please fill in all required fields.";
  } else {
    const hours = parseFloat(hoursVal);
    const rate = parseFloat(rateVal);

    if (isNaN(hours) || isNaN(rate)) {
      errorMessage = "Hours and rate must be valid numbers.";
    } else if (hours < 0 || rate < 0) {
      errorMessage = "Hours worked and rate per hour cannot be negative.";
    }
  }

  // 2. Error Display UI
  if (errorMessage) {
    resultDiv.innerHTML = `<p class="error-msg" style="color: red; font-weight: bold;">${errorMessage}</p>`;
    return;
  }

  // 3. Payroll Calculation
  const hours = parseFloat(hoursVal);
  const rate = parseFloat(rateVal);

  let regularPay = 0;
  let overtimePay = 0;

  if (hours > 40) {
    regularPay = 40 * rate;
    overtimePay = (hours - 40) * (rate * 1.5);
  } else {
    regularPay = hours * rate;
  }

  const totalPay = regularPay + overtimePay;

  // 4. Success UI Output
  resultDiv.innerHTML = `
    <h2>Pay Summary</h2>
    <p><strong>Employee Name:</strong> ${name}</p>
    <p><strong>Regular Pay:</strong> $${regularPay.toFixed(2)}</p>
    <p><strong>Overtime Pay:</strong> $${overtimePay.toFixed(2)}</p>
    <p><strong>Total Gross Pay:</strong> $${totalPay.toFixed(2)}</p>
  `;
});
