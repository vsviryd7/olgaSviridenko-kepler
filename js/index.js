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