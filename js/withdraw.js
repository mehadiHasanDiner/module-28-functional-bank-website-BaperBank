/*
1. add event handler with the withdrawn button
2. get the withdrawn amount from the withdraw input field
2.5 also make sure to covert the input into numbers by using parseFloat
3. Get previous withdraw total
4. calculate total withdraw amount
4-5 set the total withdraw amount
5. get the previous balance total 
6. calculate new balance total 
6.5 set the new balance total

7.clear the withdraw input field

*/

// step 1: add event handler
document.getElementById("btn-withdraw").addEventListener("click", function () {
  //   step=2:
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  //   step-7:
  withdrawField.value = "";

  if (isNaN(newWithdrawAmount)) {
    alert("Please provide a valid amount");
    return;
  }
  //   step-3:
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  //   step-5:
  const balanceTotalElement = document.getElementById("balance-total");
  const newBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(newBalanceTotalString);
  //   console.log(previousBalanceTotal);

  if (newWithdrawAmount > previousBalanceTotal) {
    alert("Baper banke e eto taka nai");
    return;
  }

  //   step-4:
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  //   step-6:
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;
});
