// script.js
const projectsTab = document.getElementById('projects-tab');
const teamTab = document.getElementById('team-tab');
const projectsSection = document.getElementById('projects-section');
const teamSection = document.getElementById('team-section');

projectsTab.addEventListener('click', () => {
  projectsSection.style.display = 'block';
  teamSection.style.display = 'none';
  projectsTab.classList.add('active');
  teamTab.classList.remove('active');
});

teamTab.addEventListener('click', () => {
  projectsSection.style.display = 'none';
  teamSection.style.display = 'block';
  teamTab.classList.add('active');
  projectsTab.classList.remove('active');
});
