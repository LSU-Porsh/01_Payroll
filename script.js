document
  .getElementById("payrollForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents page reload on form submit

    const name = document.getElementById("employeeName").value;
    const hours =
      parseFloat(document.getElementById("hoursWorked").value) || 0;
    const rate = parseFloat(document.getElementById("ratePerHour").value) || 0;

    let regularPay = 0;
    let overtimePay = 0;

    if (hours > 40) {
      const regularHours = 40;
      const overtimeHours = hours - 40;

      regularPay = regularHours * rate;
      overtimePay = overtimeHours * (rate * 1.5);
    } else {
      regularPay = hours * rate;
    }

    const totalPay = regularPay + overtimePay;

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
    <h2>Pay Summary</h2>
    <p><strong>Employee Name:</strong> ${name}</p>
    <p><strong>Regular Pay:</strong> $${regularPay.toFixed(2)}</p>
    <p><strong>Overtime Pay:</strong> $${overtimePay.toFixed(2)}</p>
    <p><strong>Total Gross Pay:</strong> $${totalPay.toFixed(2)}</p>
  `;
  });

