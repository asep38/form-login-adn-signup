const container = document.querySelector(".container"),
  showhidePW = document.querySelectorAll(".HidePiw"),
  PWfield = document.querySelectorAll(".password"),
  SignUp = document.querySelector(".sign-up-link"),
  Login = document.querySelector(".login-link");

//   login - sign up
SignUp.addEventListener("click", () => {
  container.classList.add("active");
});
Login.addEventListener("click", () => {
  container.classList.remove("active");
});

// hiden and view passwd

showhidePW.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    PWfield.forEach((PWfield) => {
      if (PWfield.type === "password") {
        PWfield.type = "text";

        showhidePW.forEach((icon) => {
          icon.classList.replace("uil-eye-slash", "uil-eye");
        });
      } else {
        PWfield.type = "password";
        showhidePW.forEach((icon) => {
          icon.classList.replace("uil-eye", "uil-eye-slash");
        });
      }
    });
  });
});
