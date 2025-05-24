document.addEventListener("DOMContentLoaded", () => {
  const dots = document.querySelectorAll(".dot");
  const cards = document.querySelectorAll(".testimonial-card");

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      dots.forEach((d) => d.classList.remove("active"));
      cards.forEach((c) => c.classList.remove("active"));

      dot.classList.add("active");
      cards[index].classList.add("active");
    });
  });
});
