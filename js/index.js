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

//section leave message
const messageForm = document.forms['leave_message'];

messageForm.addEventListener('submit', function (event) {
  event.preventDefault();

const name = event.target.usersName.value.trim();
const email = event.target.usersEmail.value.trim();
const message = event.target.usersMessage.value.trim();
const messageSection = document.getElementById('messages');
const messageList = messageSection.querySelector('ul');
messageSection.style.display = 'block';
const newMessage = document.createElement('li');
//print message
newMessage.innerHTML = `<a href="mailto:${email}">${name}</a><br><span>${message}</span>`;

const removeButton = document.createElement('button');
removeButton.innerText = 'remove';
removeButton.type = 'button';
//function button remove
removeButton.addEventListener('click', function () {
   const entry = this.parentNode;
   entry.remove();
	if(messageList.children.length === 0) {
	messageSection.style.display = 'none';
	}
});

//Edit Button
const editButton = document.createElement('button');
  editButton.innerText = 'edit';
  editButton.type = 'button';

  editButton.addEventListener('click', function () {
    const entry = this.parentNode;
    const span = entry.querySelector('span');
    const updated = prompt('Edit your message:', span.textContent);

    if (updated !== null && updated.trim() !== '') {
      span.textContent = updated.trim();
    }
  });
newMessage.appendChild(editButton);  
newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);
messageForm.reset(); // Clear form
});

//GitHub repository list
const username = "vsviryd7";
// Array of img/project folder
const projectImages = [
  "1python.png",
  "4APIcatDog.png",
  "3hotel.png",
  "7ctdphoto.png",
  "5siteOlga.png",
  "2pixels.png",
  "6software.png"
];

const projectSection = document.getElementById("project");
const projectList = projectSection.querySelector("#repo-list");

fetch(`https://api.github.com/users/${username}/repos`)
  .then(resp => resp.json())
  .then(repositories => {
    projectList.innerHTML = ""; // Clear list

    repositories.forEach((repo, index) => {
      const project = document.createElement("li");
      project.classList.add("repo-item");

      const link = document.createElement("a");
      link.href = repo.html_url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      const image = document.createElement("img");
      // Use image from projectImages by index, fallback if index exceeds length
      image.src = projectImages[index] 
        ? `img/projects/${projectImages[index]}` 
        : "img/projects/default.png";
      image.alt = repo.name + " screenshot";
      image.classList.add("repo-image");

      image.onerror = () => {
        image.src = "img/projects/default.png";
      };

      link.appendChild(image);
      // Add caption under image with repo name
      const caption = document.createElement("p");
      caption.classList.add("repo-caption");
      caption.innerText = repo.name;

      project.appendChild(link);
      project.appendChild(caption);
      projectList.appendChild(project);
    });
  })
  .catch(error => {
    console.error("Error fetching repositories:", error);
    projectList.textContent = "Sorry, we couldn’t load your projects. Please try again later.";
  });
  