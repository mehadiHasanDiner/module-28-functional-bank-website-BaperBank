// step-1: add event listeners to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  //   step-2: get the deposit amount from the deposit button;
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  newDepositAmount = parseFloat(newDepositAmountString);
  //   step-3: get the current deposit total amount
  //   for non-input (element other than input, textarea) use the innerText to get the text.
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  // step-4: add numbers to set the total deposit
  const currentDepositTotal = newDepositAmount + previousDepositTotal;

  // set the total deposit
  depositTotalElement.innerText = currentDepositTotal;

  // step-5: get balance current total
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // step-6: calculate current total balance
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  // set the balance total
  balanceTotalElement.innerText = currentBalanceTotal;

  //   seep-7: clear the deposit field
  depositField.value = "";
});
