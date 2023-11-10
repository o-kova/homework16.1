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

//закрытие окна по крестику sign up

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

//вызов окна по кнопке login
function openLogIn() {
  let loginButton = document.getElementById("logIn");
  let loginBack = document.getElementById("signupOverlay");
  let displayButton = getComputedStyle(loginButton).display;
  let displayBack = getComputedStyle(loginBack).display;

  if (displayButton == "none") {
    loginButton.style.display = "block";
  }

  if (displayBack == "none") {
    loginBack.style.display = "block";
  }
}

//закрытие окна по крестику log in

function closeLogIn() {
  let loginButton = document.getElementById("logIn");
  let loginBack = document.getElementById("signupOverlay");
  let displayButton = getComputedStyle(loginButton).display;
  let displayBack = getComputedStyle(loginBack).display;

  if (displayButton == "block") {
    loginButton.style.display = "none";
  }

  if (displayBack == "block") {
    loginBack.style.display = "none";
  }
}

// function closePopUp() {
//   let button = document.getElementById("logIn");
//   let comeBack = document.getElementById("loginOverlay");
//   let displayButton = getComputedStyle(button).display;
//   let displayBack = getComputedStyle(comeBack).display;

//   if (displayButton == "block") {
//     loginButton.style.display = "none";
//   }

//   if (displayBack == "block") {
//     loginBack.style.display = "none";
//   }
// }
