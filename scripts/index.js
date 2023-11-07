//вызов окна по кнопке signup
function openSignUp() {
  let signupButton = document.getElementById("signUp");
  let signupBack = document.getElementById("signupOverlay");
  let displayButton = getComputedStyle(signupButton).display;
  let displayBack = getComputedStyle(signupBack).display;

  if (displayButton == "none") {
    signupButton.style.display = "block";
  }

  if (displayBack == "none") {
    signupBack.style.display = "block";
  }
}

//закрытие окна по крестику

function closeSignUp() {
  let signupButton = document.getElementById("signUp");
  let signupBack = document.getElementById("signupOverlay");
  let displayButton = getComputedStyle(signupButton).display;
  let displayBack = getComputedStyle(signupBack).display;

  if (displayButton == "block") {
    signupButton.style.display = "none";
  }

  if (displayBack == "block") {
    signupBack.style.display = "none";
  }
}
