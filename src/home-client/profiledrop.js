document.addEventListener("DOMContentLoaded", function () {
  const profileImg = document.getElementById("profileImg");
  const profileDropdown = document.getElementById("profileDropdown");

  profileImg.addEventListener("click", function (e) {
    e.stopPropagation();
    profileDropdown.classList.toggle("show");
  });

  document.addEventListener("click", function (e) {
    if (!e.target.matches("#profileImg")) {
      if (profileDropdown.classList.contains("show")) {
        profileDropdown.classList.remove("show");
      }
    }
  });

  profileDropdown.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});

function logout() {
  const confirmed = confirm("Are you sure you want to log out?");

  if (!confirmed) {
    event.preventDefault();
  } else {
    window.location.href = "/src/home-guest/home-guest.html";
  }
}
