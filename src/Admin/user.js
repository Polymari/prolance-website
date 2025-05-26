function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
}

function navigateTo(section) {
  document.querySelectorAll(".sidebar-item").forEach((item) => {
    item.classList.remove("active");
  });

  event.target.classList.add("active");

  document.getElementById("sidebar").classList.remove("open");

  console.log(`Navigating to ${section}`);
}

function refreshDashboard() {
  const userCount = document.getElementById("userCount");
  const projectCount = document.getElementById("projectCount");

  userCount.classList.add("loading");
  projectCount.classList.add("loading");

  setTimeout(() => {
    const newUserCount = Math.floor(Math.random() * 1000) + 10000;
    const newProjectCount = Math.floor(Math.random() * 500) + 3000;

    userCount.textContent = newUserCount.toLocaleString();
    projectCount.textContent = newProjectCount.toLocaleString();

    userCount.classList.remove("loading");
    projectCount.classList.remove("loading");
  }, 1000);
}

function updateDropdownStyle(selectElement) {
  const selectedValue = selectElement.value;
  selectElement.setAttribute("data-status", selectedValue);
}

// Initialize all dropdowns with default styling and add event listeners
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll('select[name="UserActions"]');

  dropdowns.forEach((dropdown) => {
    // Set initial status (default to 'safe')
    updateDropdownStyle(dropdown);

    // Add change event listener
    dropdown.addEventListener("change", function () {
      updateDropdownStyle(this);
    });
  });
});
