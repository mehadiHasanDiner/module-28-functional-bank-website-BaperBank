// step 1: add click even handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  // step 2: get the email address inside the input field

  // always remember to use .value to get the text from an input field
  const emailField = document.getElementById("user-email");
  const email = emailField.value;

  // Step 3: get password
  // 3.a. set id on the html element
  // 3.b: get the element
  // 3.c: get the value from the element
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;

  //step 4: verify the email and password and check weather valid user or not
  if (email === "mehadi@gmail.com" && password === "123123") {
    window.location.href = "bank.html";
  } else {
    alert("Tui password vule gesos!! toke ami tejjo sontan gosona korlam");
  }
});
