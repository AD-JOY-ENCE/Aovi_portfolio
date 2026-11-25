// Keep projects mutually exclusive in browsers without grouped details support.
const projects = Array.from(document.querySelectorAll('details.project'));

for (const project of projects) {
  project.addEventListener('toggle', () => {
    if (!project.open) return;
    for (const other of projects) {
      if (other !== project) other.open = false;
    }
  });
}
