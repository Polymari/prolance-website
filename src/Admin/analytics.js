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

function showNotifications() {
  alert(
    "📱 Notifications:\n\n• 3 new user registrations\n• 5 projects pending approval\n• 2 payment disputes to review"
  );
}

function showUserMenu() {
  alert(
    "👤 User Menu:\n\n• Profile Settings\n• Account Preferences\n• Sign Out"
  );
}

function showUserDetails() {
  alert(
    "👥 User Details:\n\n• Total Users: 10,000\n• New Today: 15\n• Active This Week: 8,500\n• Growth Rate: +2.3%"
  );
}

function showProjectDetails() {
  alert(
    "📊 Project Details:\n\n• Total Projects: 3,000\n• New Today: 20\n• Active Projects: 1,200\n• Completed: 1,500"
  );
}

function showActiveUsers() {
  alert(
    "📈 Active Users Analysis:\n\n• Daily Active: 3,820\n• Peak Hours: 2-4 PM\n• Top Categories: Web Dev, Design\n• Avg Session: 45 min"
  );
}

function showMonthlyUsers() {
  alert(
    "📅 Monthly Users Report:\n\n• Monthly Active: 3,410\n• Retention Rate: 85%\n• New vs Returning: 30/70\n• Growth: +12% MoM"
  );
}

function changeChartPeriod(period) {
  document.querySelectorAll(".progress-dot").forEach((dot) => {
    dot.classList.remove("active");
  });

  event.target.classList.add("active");

  const periods = [
    "Today",
    "This Week",
    "This Month",
    "This Quarter",
    "This Year",
  ];
  console.log(`Chart period changed to: ${periods[period]}`);
}

function showDataPoint(pointId) {
  const dataPoints = {
    1: "Week 1: 2,500 users",
    2: "Week 2: 2,800 users",
    3: "Week 3: 3,200 users",
    4: "Week 4: 3,500 users",
  };

  alert(
    `📊 Data Point ${pointId}:\n\n${dataPoints[pointId]}\n\nClick for detailed analytics`
  );
}

function showTooltip(event) {
  const tooltip = document.getElementById("tooltip");
  const rect = event.currentTarget.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  tooltip.style.left = x + 10 + "px";
  tooltip.style.top = y - 30 + "px";
  tooltip.textContent = `Users: ${Math.floor(3000 + Math.random() * 1000)}`;
  tooltip.style.opacity = "1";
}

function hideTooltip() {
  document.getElementById("tooltip").style.opacity = "0";
}

function sortTable(column) {
  const table = document.getElementById("reportsTableBody");
  const rows = Array.from(table.rows);

  rows.sort((a, b) => {
    const aText = a.cells[column].textContent;
    const bText = b.cells[column].textContent;
    return aText.localeCompare(bText);
  });

  rows.forEach((row) => table.appendChild(row));

  console.log(`Table sorted by column ${column}`);
}

function showReportDetails(reportId) {
  const reports = {
    1: "User Registration Report - Detailed analysis of new user signups",
    2: "Project Completion Report - Overview of completed projects this month",
    3: "Revenue Analysis Report - Financial performance breakdown",
    4: "User Engagement Report - Activity and retention metrics",
  };

  alert(
    `📄 Report ${reportId} Details:\n\n${reports[reportId]}\n\nClick to download or view full report`
  );
}

setInterval(() => {
  const userCount = document.getElementById("userCount");
  const currentCount = parseInt(userCount.textContent.replace(",", ""));

  if (Math.random() > 0.7) {
    userCount.textContent = (
      currentCount + Math.floor(Math.random() * 5)
    ).toLocaleString();
  }
}, 10000);

document.addEventListener("DOMContentLoaded", function () {
  console.log("ProLance Dashboard loaded successfully!");

  document.addEventListener("click", function (event) {
    const sidebar = document.getElementById("sidebar");
    const toggle = document.querySelector(".mobile-menu-toggle");

    if (!sidebar.contains(event.target) && !toggle.contains(event.target)) {
      sidebar.classList.remove("open");
    }
  });
});
