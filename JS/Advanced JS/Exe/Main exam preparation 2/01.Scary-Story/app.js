window.addEventListener("load", solve);

function solve() {
  let firstNameInput = document.getElementById('first-name');
  let lastNameInput = document.getElementById('last-name');
  let ageInput = document.getElementById('age');
  let storyTitleInput = document.getElementById('story-title');
  let genreInput = document.getElementById('genre');
  let storyInput = document.getElementById('story');
  let preview = document.getElementById('preview-list');
  let mainForFinishing = document.getElementById('main');
  let bodyElement = document.querySelector(".body");

  let backupArray = [];

  let publishButtonInput = document.getElementById('form-btn');

  publishButtonInput.addEventListener('click', (e) => {
    e.preventDefault();
    if (!firstNameInput.value || !lastNameInput.value || !ageInput.value || !storyTitleInput.value || !storyInput.value) {
      return;
    }

    const liElement = document.createElement('li');
    liElement.classList.add('story-info');
    preview.appendChild(liElement);

    const articleElement = document.createElement('article');
    liElement.appendChild(articleElement);

    const personName = document.createElement('h4');
    personName.textContent = `Name: ${firstNameInput.value} ${lastNameInput.value}`;
    articleElement.appendChild(personName);

    const age = document.createElement('p');
    age.textContent = `Age: ${ageInput.value}`;
    articleElement.appendChild(age);


    const storyTitle = document.createElement('p');
    storyTitle.textContent = `Title: ${storyTitleInput.value}`;
    articleElement.appendChild(storyTitle);

    const genre = document.createElement('p');
    genre.textContent = `Genre: ${genreInput.value}`;
    articleElement.appendChild(genre);

    const story = document.createElement('p');
    story.textContent = `${storyInput.value}`;
    articleElement.appendChild(story);

    const saveButton = document.createElement('button');
    saveButton.classList.add('save-btn');
    saveButton.textContent = 'Save Story';
    liElement.appendChild(saveButton);

    const editButton = document.createElement('button');
    editButton.classList.add('edit-btn');
    editButton.textContent = 'Edit Story';
    liElement.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Delete Story';
    liElement.appendChild(deleteButton);

    let editFirstName = firstNameInput.value;
    let editLastName = lastNameInput.value;
    let editAge = ageInput.value;
    let editTitle = storyTitleInput.value;
    let editStory = storyInput.value;

    firstNameInput.value = "";
    lastNameInput.value = "";
    ageInput.value = "";
    storyInput.value = "";
    storyTitleInput.value = "";

    publishButtonInput.disabled = true;

    editButton.addEventListener('click', () => {
      firstNameInput.value = editFirstName;
      lastNameInput.value = editLastName;
      ageInput.value = editAge;
      storyTitleInput.value = editTitle;
      storyInput.value = editStory;

      liElement.remove();

      publishButtonInput.disabled = false;
    });

    saveButton.addEventListener('click', () => {

      mainForFinishing.remove();
      let h1Saved = document.createElement('h1');
      h1Saved.textContent = "Your scary story is saved!";
      let bodyElement2 = document.createElement('div');
      bodyElement2.setAttribute('id', 'main');
      bodyElement.appendChild(bodyElement2);

      bodyElement2.appendChild(h1Saved);
    });

    deleteButton.addEventListener('click', () => {
      liElement.remove();
      publishButtonInput.disabled = false;
    });
  });
}
