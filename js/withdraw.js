// Withdraw button click
document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");

  if (newWithdrawAmount < 0) {
    alert("Withdraw amount must not be negative number");
    return;
  }
  if (isNaN(newWithdrawAmount)) {
    alert("Please enter a valid number");
    return;
  }

  const previousWithdrawAmount = getTextElementValueById("withdraw-total");
  const newWithdrawTotal = newWithdrawAmount + previousWithdrawAmount;

  const previousWithdrawTotal = getTextElementValueById("balance-total");

  if (newWithdrawAmount > previousWithdrawTotal) {
    alert("Bapper Bank e eto taka nai");
    return;
  }

  setCalculatedAmountToId("withdraw-total", newWithdrawTotal);

  // deducting withdraw amount from total balance

  const newBalanceTotal = previousWithdrawTotal - newWithdrawAmount;
  setCalculatedAmountToId("balance-total", newBalanceTotal);
});
