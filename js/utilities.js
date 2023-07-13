function getInputFieldValueById(inputElementId) {
  const inputFieldText = document.getElementById(inputElementId);
  const inputFieldValueString = inputFieldText.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  return inputFieldValue;
}

function getTextElementValueById(elementId) {
  const elementText = document.getElementById(elementId);
  const elementTextString = elementText.innerText;
  const elementValue = parseFloat(elementTextString);
  return elementValue;
}

function setTotalDepositAmount(elementId, newAmount) {
  elementId.innerText = newAmount;
}

document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDepositAmount = getInputFieldValueById("deposit-field");

  const previousDepositAmount = getInputFieldValueById("deposit-total");

  const totalDepositAmount = newDepositAmount + previousDepositAmount;

  setTotalDepositAmount(previousDepositAmount, totalDepositAmount);
});
