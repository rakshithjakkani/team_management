// // script.js
// const projectsTab = document.getElementById('projects-tab');
// const teamTab = document.getElementById('team-tab');
// const projectsSection = document.getElementById('projects-section');
// const teamSection = document.getElementById('team-section');

// projectsTab.addEventListener('click', () => {
//   projectsSection.style.display = 'block';
//   teamSection.style.display = 'none';
//   projectsTab.classList.add('active');
//   teamTab.classList.remove('active');
// });

// teamTab.addEventListener('click', () => {
//   projectsSection.style.display = 'none';
//   teamSection.style.display = 'block';
//   teamTab.classList.add('active');
//   projectsTab.classList.remove('active');
// });

// Tab switching between Projects and Team
const projectsTab = document.getElementById('projects-tab');
const teamTab = document.getElementById('team-tab');
const projectsSection = document.getElementById('projects-section');
const teamSection = document.getElementById('team-section');

projectsTab.addEventListener('click', () => {
  projectsTab.classList.add('active');
  teamTab.classList.remove('active');
  projectsSection.style.display = 'block';
  teamSection.style.display = 'none';
});

teamTab.addEventListener('click', () => {
  teamTab.classList.add('active');
  projectsTab.classList.remove('active');
  teamSection.style.display = 'block';
  projectsSection.style.display = 'none';
});

// Modal open/close
const modal = document.getElementById("projectModal");
const btn = document.getElementById("addProjectBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Handle form submission to add project
const form = document.getElementById("projectForm");
const projectList = document.getElementById("projectList");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("projectName").value;
  const description = document.getElementById("projectDescription").value;

  const card = document.createElement("div");
  card.classList.add("project-card");
  card.innerHTML = `<h3>${name}</h3><p>${description}</p>`;

  projectList.appendChild(card);

  form.reset();
  modal.style.display = "none";
});
