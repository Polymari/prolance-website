const ctx = document.getElementById("trafficChart").getContext("2d");

let chartInstance = new Chart(ctx, {
  type: "line",
  data: getChartData("day"),
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "line",
        },
        onHover(e) {
          e.native.target.style.cursor = "pointer";
        },
        onLeave(e) {
          e.native.target.style.cursor = "default";
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

function getChartData(view) {
  if (view === "day") {
    return {
      labels: ["00:00", "06:00", "12:00", "18:00"],
      datasets: [
        {
          label: "Client",
          data: [5, 1, 7, 2],
          borderColor: "#3498db",
          backgroundColor: "transparent",
          tension: 0.3,
          borderWidth: 3,
        },
        {
          label: "Freelancer",
          data: [8, 3, 6, 1],
          borderColor: "#2ecc71",
          backgroundColor: "transparent",
          tension: 0.3,
          borderWidth: 3,
        },
      ],
    };
  }

  if (view === "month") {
    return {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Client",
          data: [80, 20, 25, 10],
          borderColor: "#3498db",
          backgroundColor: "transparent",
          tension: 0.25,
          borderWidth: 3,
        },
        {
          label: "Freelancer",
          data: [75, 12, 50, 20],
          borderColor: "#2ecc71",
          backgroundColor: "transparent",
          tension: 0.25,
          borderWidth: 3,
        },
      ],
    };
  }

  if (view === "year") {
    return {
      labels: ["Jan", "Mar", "May", "Jul", "Sep", "Nov"], // Every 2 months
      datasets: [
        {
          label: "Client",
          data: [200, 250, 150, 300, 220, 270],
          borderColor: "#3498db",
          backgroundColor: "transparent",
          tension: 0.2,
          borderWidth: 3,
        },
        {
          label: "Freelancer",
          data: [180, 260, 190, 280, 240, 260],
          borderColor: "#2ecc71",
          backgroundColor: "transparent",
          tension: 0.2,
          borderWidth: 3,
        },
      ],
    };
  }
}

function updateChart(view) {
  chartInstance.data = getChartData(view);
  chartInstance.update();
}

document.getElementById("view-day").addEventListener("click", () => {
  updateChart("day");
  setActive("view-day");
});

document.getElementById("view-month").addEventListener("click", () => {
  updateChart("month");
  setActive("view-month");
});

document.getElementById("view-year").addEventListener("click", () => {
  updateChart("year");
  setActive("view-year");
});

function setActive(id) {
  document.querySelectorAll(".filter-buttons button").forEach((btn) => {
    btn.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}
