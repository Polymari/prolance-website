function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
}

function showTab(tabName) {
  // Hide all tab contents
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("active");
  });

  // Remove active class from all tab buttons
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Show selected tab content
  document.getElementById(tabName).classList.add("active");

  // Add active class to clicked button
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
      item.style.background = "#fff3e0";
      setTimeout(() => {
        item.style.background = "white";
      }, 1000);
    } else {
      item.style.display = "none";
    }
  });

  // Clear search box
  document.querySelector(".search-box").value = "";
}

function submitReport(event) {
  event.preventDefault();

  // Simulate form submission
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
  // Simulate dashboard refresh
  console.log("Refreshing dashboard...");
}

// Add some interactive enhancements
document.addEventListener("DOMContentLoaded", function () {
  // Add hover effects to cards
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
