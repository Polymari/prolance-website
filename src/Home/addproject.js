const skillsContainer = document.getElementById("skillsContainer");
const skillInput = document.getElementById("skillInput");
const skills = [];

skillInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    addSkill();
  }
});

function addSkill() {
  const skill = skillInput.value.trim();
  if (skill && !skills.includes(skill)) {
    skills.push(skill);
    const tag = document.createElement("div");
    tag.className = "tag";
    tag.innerHTML = `
            ${skill}
            <button type="button" onclick="removeSkill('${skill}', this)">&times;</button>
          `;
    skillsContainer.insertBefore(tag, skillInput);
    skillInput.value = "";
  }
}

function removeSkill(skill, button) {
  const index = skills.indexOf(skill);
  if (index > -1) {
    skills.splice(index, 1);
    button.parentElement.remove();
  }
}

const fileUpload = document.getElementById("fileUpload");
const fileInput = document.getElementById("projectFiles");
const uploadedFiles = document.getElementById("uploadedFiles");
const uploadedFilesList = [];

fileUpload.addEventListener("dragover", function (e) {
  e.preventDefault();
  fileUpload.classList.add("dragover");
});

fileUpload.addEventListener("dragleave", function (e) {
  e.preventDefault();
  fileUpload.classList.remove("dragover");
});

fileUpload.addEventListener("drop", function (e) {
  e.preventDefault();
  fileUpload.classList.remove("dragover");
  handleFiles(e.dataTransfer.files);
});

fileInput.addEventListener("change", function (e) {
  handleFiles(e.target.files);
});

function handleFiles(files) {
  Array.from(files).forEach((file) => {
    if (!uploadedFilesList.find((f) => f.name === file.name)) {
      uploadedFilesList.push(file);
      const fileTag = document.createElement("div");
      fileTag.className = "file-tag";
      fileTag.innerHTML = `
              ${file.name}
              <button type="button" onclick="removeFile('${file.name}', this)">&times;</button>
            `;
      uploadedFiles.appendChild(fileTag);
    }
  });
}

function removeFile(fileName, button) {
  const index = uploadedFilesList.findIndex((f) => f.name === fileName);
  if (index > -1) {
    uploadedFilesList.splice(index, 1);
    button.parentElement.remove();
  }
}

document.getElementById("projectForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const successMessage = document.getElementById("successMessage");
  successMessage.style.display = "block";

  window.scrollTo({ top: 0, behavior: "smooth" });

  setTimeout(() => {
    alert(
      "Project created successfully! In a real application, this would redirect to your projects page."
    );
  }, 3000);
});

document.getElementById("description").addEventListener("input", function () {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
});
