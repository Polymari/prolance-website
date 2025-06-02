function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
}

function showTab(tabName) {
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("active");
  });

  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  document.getElementById(tabName).classList.add("active");

  event.target.classList.add("active");
}

function toggleFAQ(element) {
  const answer = element.nextElementSibling;
  const icon = element.querySelector(".faq-icon");

  answer.classList.toggle("open");
  icon.classList.toggle("rotated");

  if (answer.classList.contains("open")) {
    answer.style.maxHeight = answer.scrollHeight + "px";
  } else {
    answer.style.maxHeight = "0";
  }
}

function searchFAQ(searchTerm) {
  const faqItems = document.querySelectorAll(".faq-item");
  const lowercaseSearch = searchTerm.toLowerCase();

  faqItems.forEach((item) => {
    const question = item
      .querySelector(".faq-question")
      .textContent.toLowerCase();
    const answer = item.querySelector(".faq-answer").textContent.toLowerCase();

    if (
      question.includes(lowercaseSearch) ||
      answer.includes(lowercaseSearch)
    ) {
      item.style.display = "block";
    } else {
      item.style.display = searchTerm ? "none" : "block";
    }
  });
}

function filterFAQ(category) {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    if (item.dataset.category === category) {
      item.style.display = "block";
      setTimeout(() => {
        item.style.background = "white";
      }, 1000);
    } else {
      item.style.display = "none";
    }
  });

  document.querySelector(".search-box").value = "";
}

function submitReport(event) {
  event.preventDefault();

  const submitBtn = event.target.querySelector(".submit-btn");
  const originalText = submitBtn.textContent;

  submitBtn.textContent = "Submitting...";
  submitBtn.disabled = true;

  setTimeout(() => {
    alert(
      "Thank you! Your report has been submitted successfully. We'll get back to you within 24 hours."
    );
    event.target.reset();
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }, 2000);
}

function refreshDashboard() {
  console.log("Refreshing dashboard...");
}

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".faq-category, .contact-method");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-4px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });
});
