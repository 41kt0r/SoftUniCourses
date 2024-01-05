function solve() {

  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const ageInput = document.getElementById('age');
  const genderInput = document.getElementById('genderSelect');
  const dishinformationInput = document.getElementById('task');
  const inProgress = document.getElementById('in-progress');
  const inProgressCounter = document.getElementById('progress-count');
  const finishedDish = document.getElementById('finished');

  let submitButton = document.getElementById('form-btn');
  let clearButton = document.getElementById('clear-btn');

  const liElement = document.createElement('li');
  const articleElement = document.createElement('article');

  const personName = document.createElement('h4');
  const genderAndAge = document.createElement('p');
  const dishInformation = document.createElement('p');

  let editButton = document.createElement('button');
  let completeButton = document.createElement('button');

  let dishesCount = Number(inProgressCounter.textContent);

  let elementsBackUp = [];



  submitButton.addEventListener('click', (ev) => {

    if (!firstNameInput.value || !lastNameInput.value || !ageInput.value || dishinformationInput.value === "") {
      return;
    }
    liElement.classList.add('each-line');
    inProgress.appendChild(liElement);

    liElement.appendChild(articleElement);

    personName.textContent = `${firstNameInput.value} ${lastNameInput.value}`
    articleElement.appendChild(personName);


    genderAndAge.textContent = `${genderInput.value}, ${ageInput.value}`;
    articleElement.appendChild(genderAndAge);

    dishInformation.textContent = dishinformationInput.value;
    articleElement.appendChild(dishInformation);

    elementsBackUp.push(firstNameInput.value);
    elementsBackUp.push(lastNameInput.value);
    elementsBackUp.push(ageInput.value);
    elementsBackUp.push(genderInput.value);
    elementsBackUp.push(dishinformationInput.value);

    firstNameInput.value = "";
    lastNameInput.value = "";
    ageInput.value = "";
    dishinformationInput.value = "";

    editButton.classList.add('edit-btn');
    liElement.appendChild(editButton);
    editButton.textContent = 'Edit';

    completeButton.classList.add('complete-btn');
    liElement.appendChild(completeButton);
    completeButton.textContent = 'Mark as complete';

    dishesCount += 1;
    inProgressCounter.textContent = dishesCount;
  });

  editButton.addEventListener('click', (ev) => {
    //console.log(elementsBackUp)
    firstNameInput.value = `${elementsBackUp[0]}`;
    //console.log(firstNameInput.textContent);
    lastNameInput.value = elementsBackUp[1];
    ageInput.value = elementsBackUp[2];
    genderInput.value = elementsBackUp[3];
    dishinformationInput.value = elementsBackUp[4];

    liElement.remove();


    dishesCount--;
    inProgressCounter.textContent = dishesCount;
  });

  completeButton.addEventListener('click', (ev) => {

    editButton.remove();
    completeButton.remove();

    liElement.classList.add('each-line');
    finishedDish.appendChild(liElement);

    dishesCount -= 1;
    inProgressCounter.textContent = dishesCount;

    clearButton.addEventListener('click', () => {
      liElement.remove();
    });
  });
}