// Deposit button click
document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDepositAmount = getInputFieldValueById("deposit-field");
  if (newDepositAmount < 0) {
    alert("Deposit must not be negative number");
    return;
  }
  if (isNaN(newDepositAmount)) {
    alert("Please enter a valid number");
    return;
  }

  const previousDepositAmount = getTextElementValueById("deposit-total");
  const newDepositTotal = previousDepositAmount + newDepositAmount;

  setCalculatedAmountToId("deposit-total", newDepositTotal);

  // adding deposit amount to total balance
  const previousTotalBalance = getTextElementValueById("balance-total");
  const newTotalBalance = previousTotalBalance + newDepositAmount;
  setCalculatedAmountToId("balance-total", newTotalBalance);
});
