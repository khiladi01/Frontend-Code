document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const usernameInput = document.querySelector("#username");
    const passwordInput = document.querySelector("#userpassword");
    const toggleBtn = document.querySelector("#togglePass");

    // Toggle password visibility
    toggleBtn.addEventListener("click", () => {
      const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);
      toggleBtn.textContent = type === "password" ? "😊": "😃";
    });

    // Error handling + animation
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Remove error styles first
      usernameInput.classList.remove("error-animate");
      passwordInput.classList.remove("error-animate");

      let errorhandle = false;

      if (usernameInput.value.trim() === "") {
        usernameInput.classList.add("error-animate");
        errorhandle = true;
      }

      if (passwordInput.value.trim() === "") {
        passwordInput.classList.add("error-animate");
        errorhandle = true;
      }

      if (!errorhandle) {
        alert("Logged in successfully!");
      }
    });
  });