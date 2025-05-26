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
