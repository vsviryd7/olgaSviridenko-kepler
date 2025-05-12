//current year
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer')
const copyright = document.createElement('p')
copyright.innerHTML = `OlgaSviridenko  ©  ${thisYear}`;
footer.appendChild(copyright);

//class for css
footer.className = 'site-footer';

//skill section ul
const skills = ['HTML', 'JS', 'Python', 'MySQL', 'UI/UX'];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul.skillsBox');

skills.forEach(skillText => {
  const li = document.createElement('li');
  li.textContent = skillText;
  skillsList.appendChild(li);
});