function toggleButton() {
  const button = document.getElementById("connect-button");
  if (button.classList.contains("connect-button")) {
    button.classList.remove("connect-button");
    button.classList.add("message-button");
    button.textContent = "Message";
  } else {
    button.classList.remove("message-button");
    button.classList.add("connect-button");
    button.textContent = "Connect";
  }
}
