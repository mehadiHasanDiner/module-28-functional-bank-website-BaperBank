function getInputFieldValueById(inputElementId) {
  const inputFieldText = document.getElementById(inputElementId);
  const inputFieldValueString = inputFieldText.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputFieldText.value = "";
  return inputFieldValue;
}

function getTextElementValueById(elementId) {
  const elementText = document.getElementById(elementId);
  const elementTextString = elementText.innerText;
  const elementValue = parseFloat(elementTextString);
  return elementValue;
}

function setCalculatedAmountToId(elementId, newAmount) {
  const totalDepositAmount = document.getElementById(elementId);
  totalDepositAmount.innerText = newAmount;
}

// Deposit button click
document.getElementById("btn-deposit").addEventListener("click", function () {
  // Deposit calculation
  const newDepositAmount = getInputFieldValueById("deposit-field");
  const previousDepositAmount = getTextElementValueById("deposit-total");
  const newDepositTotal = previousDepositAmount + newDepositAmount;

  setCalculatedAmountToId("deposit-total", newDepositTotal);

  // adding deposit amount to total balance
  const previousTotalBalance = getTextElementValueById("balance-total");
  const newTotalBalance = previousTotalBalance + newDepositAmount;
  setCalculatedAmountToId("balance-total", newTotalBalance);
});

// Withdraw button click
document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");
  const previousWithdrawAmount = getTextElementValueById("withdraw-total");
  const newWithdrawTotal = newWithdrawAmount + previousWithdrawAmount;

  setCalculatedAmountToId("withdraw-total", newWithdrawTotal);

  // deducting withdraw amount from total balance
  const previousWithdrawTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousWithdrawTotal - newWithdrawAmount;
  setCalculatedAmountToId("balance-total", newBalanceTotal);
});
