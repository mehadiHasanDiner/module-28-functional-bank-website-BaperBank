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
