let selectedRole = null;

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".role-option").forEach((option) => {
    option.addEventListener("click", function () {
      document.querySelectorAll(".role-option").forEach((opt) => {
        opt.classList.remove("selected");
      });

      this.classList.add("selected");
      selectedRole = this.getAttribute("data-role");

      showDynamicField(selectedRole);
      updateJoinButton();
    });
  });

  const form = document.getElementById("joinForm");
  if (form) {
    form.addEventListener("submit", handleFormSubmit);
  }
});

function showDynamicField(role) {
  const freelancerField = document.getElementById("freelancerField");
  const clientField = document.getElementById("clientField");

  freelancerField.classList.remove("show");
  clientField.classList.remove("show");

  document.getElementById("freelancerCategory").value = "";
  document.getElementById("companyName").value = "";

  setTimeout(() => {
    if (role === "freelancer") {
      freelancerField.classList.add("show");
    } else if (role === "client") {
      clientField.classList.add("show");
    }
  }, 100);
}

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

  if (selectedRole === "freelancer") {
    const freelancerCategory =
      document.getElementById("freelancerCategory").value;
    if (!freelancerCategory) {
      errorMessage.textContent = "Please select your freelancer category.";
      errorMessage.style.display = "block";
      return;
    }
  } else if (selectedRole === "client") {
    const companyName = document.getElementById("companyName").value.trim();
    if (!companyName) {
      errorMessage.textContent = "Please enter your company name.";
      errorMessage.style.display = "block";
      return;
    }
  }

  if (!agreeTerms) {
    errorMessage.textContent = "Please agree to the Terms and Conditions.";
    errorMessage.style.display = "block";
    return;
  }

  try {
    if (selectedRole === "freelancer") {
      console.log("Freelancer registration successful");
      console.log(
        "Category:",
        document.getElementById("freelancerCategory").value
      );
      window.location.href = "/src/home-after-join/home-after.html";
    } else if (selectedRole === "client") {
      console.log("Client registration successful");
      console.log("Company:", document.getElementById("companyName").value);
      window.location.href = "/src/home-client/home-client.html";
    }
  } catch (error) {
    console.error("Redirect error:", error);
    errorMessage.textContent =
      "An error occurred during redirect. Please try again.";
    errorMessage.style.display = "block";
  }
}
