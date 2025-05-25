const input = document.getElementById("date-input");
const calendar = document.getElementById("calendar");

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

input.addEventListener("click", () => {
  calendar.style.display =
    calendar.style.display === "block" ? "none" : "block";
});

document.addEventListener("mousedown", (e) => {
  if (!e.target.closest(".datepicker")) {
    calendar.style.display = "none";
  }
});

function generateCalendar(month = currentMonth, year = currentYear) {
  currentMonth = month;
  currentYear = year;

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = new Date(year, month, 1).getDay();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let html = `
    <div class="calendar-header">
      <button id="prev-month">&lt;</button>
      <span>${monthNames[month]} ${year}</span>
      <button id="next-month">&gt;</button>
    </div>
    <table><thead><tr>
  `;

  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  days.forEach((day) => (html += `<th>${day}</th>`));
  html += "</tr></thead><tbody><tr>";

  for (let i = 0; i < startDay; i++) {
    html += "<td></td>";
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const fullDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;
    html += `<td data-date="${fullDate}">${day}</td>`;

    if ((startDay + day) % 7 === 0) {
      html += "</tr><tr>";
    }
  }

  html += "</tr></tbody></table>";
  calendar.innerHTML = html;

  document.querySelectorAll("td[data-date]").forEach((td) => {
    td.addEventListener("click", () => {
      const dateParts = td.dataset.date.split("-");
      const formatted = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
      input.value = formatted;
      calendar.style.display = "none";
    });
  });

  document.getElementById("prev-month").addEventListener("click", () => {
    const newMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const newYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    generateCalendar(newMonth, newYear);
  });

  document.getElementById("next-month").addEventListener("click", () => {
    const newMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    const newYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    generateCalendar(newMonth, newYear);
  });
}

generateCalendar();

document.addEventListener("click", (event) => {
  if (!event.target.closest(".datepicker")) {
    calendar.classList.remove("show");
  }
});

const filterButtons = document.querySelectorAll(".filter-buttons button");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // Add animation effect
    button.style.transform = "scale(0.95)";
    setTimeout(() => {
      button.style.transform = "";
    }, 150);
  });
});

// Card click animations
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    e.preventDefault();

    // Add pulse effect
    card.style.transform = "scale(0.98)";
    setTimeout(() => {
      card.style.transform = "";
    }, 150);
  });
});

// Table row animations
const activityRows = document.querySelectorAll(".activity");
activityRows.forEach((row) => {
  row.addEventListener("click", () => {
    row.style.transform = "scale(0.99)";
    setTimeout(() => {
      row.style.transform = "";
    }, 150);
  });
});
