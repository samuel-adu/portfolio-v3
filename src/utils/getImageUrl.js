function getProjectImage(project) {
  return new URL(`../assets/images/${project}`, import.meta.url).href;
}

function getSkillIcon(skill) {
  return new URL(`../assets/icons/${skill}`, import.meta.url).href;
}

export { getProjectImage, getSkillIcon };
