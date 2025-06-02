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

function updateDropdownStyle(selectElement) {
  const selectedValue = selectElement.value;
  selectElement.setAttribute("data-status", selectedValue);
}

document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll('select[name="UserActions"]');

  dropdowns.forEach((dropdown) => {
    updateDropdownStyle(dropdown);

    dropdown.addEventListener("change", function () {
      updateDropdownStyle(this);
    });
  });
});
