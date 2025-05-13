function showJob(event, jobId) {
  const jobDetails = document.querySelectorAll(".job-detail");
  const jobItems = document.querySelectorAll(".job");

  jobDetails.forEach((detail) => detail.classList.remove("active"));
  jobItems.forEach((item) => item.classList.remove("active"));

  document.getElementById(jobId).classList.add("active");

  if (event.currentTarget.classList.contains("job")) {
    event.currentTarget.classList.add("active");
  }
}
