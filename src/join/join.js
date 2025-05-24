let selectedRole = null;

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".role-option").forEach((option) => {
    option.addEventListener("click", function () {
      document.querySelectorAll(".role-option").forEach((opt) => {
        opt.classList.remove("selected");
      });

      this.classList.add("selected");
      selectedRole = this.getAttribute("data-role");

      updateJoinButton();
    });
  });

  const form = document.getElementById("joinForm");
  if (form) {
    form.addEventListener("submit", handleFormSubmit);
  }
});

function updateJoinButton() {
  const joinButton = document.getElementById("joinButton");
  if (joinButton) {
    if (selectedRole) {
      joinButton.classList.add("enabled");
    } else {
      joinButton.classList.remove("enabled");
    }
  }
}

function handleFormSubmit(event) {
  event.preventDefault();

  const errorMessage = document.getElementById("errorMessage");
  errorMessage.style.display = "none";

  const firstName = document.getElementById("firstName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const agreeTerms = document.getElementById("agreeTerms").checked;

  if (!firstName || !email || !password || !confirmPassword) {
    errorMessage.textContent = "Please fill in all required fields.";
    errorMessage.style.display = "block";
    return;
  }

  if (password !== confirmPassword) {
    errorMessage.textContent = "Passwords do not match.";
    errorMessage.style.display = "block";
    return;
  }

  if (!selectedRole) {
    errorMessage.textContent =
      "Please select your role (Freelancer or Client).";
    errorMessage.style.display = "block";
    return;
  }

  if (!agreeTerms) {
    errorMessage.textContent = "Please agree to the Terms and Conditions.";
    errorMessage.style.display = "block";
    return;
  }

  try {
    if (selectedRole === "freelancer") {
      console.log("Redirecting to freelancer dashboard...");
      window.location.href = "/src/home-after-join/home-after.html";
    } else if (selectedRole === "client") {
      console.log("Redirecting to client dashboard...");
      window.location.href = "/src/home-client/home-client.html";
    }
  } catch (error) {
    console.error("Redirect error:", error);
    errorMessage.textContent =
      "An error occurred during redirect. Please try again.";
    errorMessage.style.display = "block";
  }
}
