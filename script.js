const container = document.querySelector(".container"),
  showhidePW = document.querySelectorAll(".HidePiw"),
  PWfield = document.querySelector(".password"),
  SignUp = document.querySelector(".sign-up-link"),
  Login = document.querySelector(".login-link");

//   login - sign up
SignUp.addEventListener("click", () => {
  container.classList.add("active");
});
Login.addEventListener("click", () => {
  container.classList.remove("active");
});
