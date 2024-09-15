// Subtle scrolling animation for project section
document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');
  
    window.addEventListener('scroll', () => {
      projects.forEach(project => {
        const rect = project.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
          project.classList.add('visible');
        } else {
          project.classList.remove('visible');
        }
      });
    });
  });
  