// Task 1: Update Year Automatically
document.getElementById('current-year').textContent = new Date().getFullYear();

// Task 2: Skill Button Interactivity
const skillButtons = document.querySelectorAll('.skill-btn');
const skillDescription = document.getElementById('skill-description');

const skillInfo = {
  "HTML": "HTML (HyperText Markup Language) is used to structure web content.",
  "CSS": "CSS (Cascading Style Sheets) styles and designs HTML content.",
  "JavaScript": "JavaScript adds interactivity and dynamic features to websites."
};

skillButtons.forEach(button => {
  button.addEventListener('click', () => {
    const skill = button.getAttribute('data-skill');
    skillDescription.textContent = skillInfo[skill];
  });
});

// Task 3: Dark Mode Toggle
const themeToggleBtn = document.getElementById('themeToggle');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});

// Apply theme preference on load
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
});

// Task 4: Load Projects from JSON
const projectsContainer = document.getElementById('projects-container');

async function loadProjects() {
  try {
    const response = await fetch('projects.json');
    if (!response.ok) throw new Error('Failed to load data');

    const data = await response.json();
    data.projects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
      `;
      projectsContainer.appendChild(card);
    });
  } catch (err) {
    console.error('Error loading projects:', err);
    projectsContainer.innerHTML = '<p>Could not load projects at this time.</p>';
  }
}

loadProjects();
