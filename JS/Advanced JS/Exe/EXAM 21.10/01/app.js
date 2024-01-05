window.addEventListener('load', solution);

function solution() {
  let employeeInput = document.getElementById('employee');
  let categoryInput = document.getElementById('category');
  let urgencyInput = document.getElementById('urgency');
  let teamInput = document.getElementById('team');
  let descriptionInput = document.getElementById('description');

  let previewSection = document.querySelector('.preview-list');
  let pendingElement = document.querySelector('.pending-list');
  let reslovedSection = document.querySelector('.resolved-list');

  let addButton = document.getElementById('add-btn');

  addButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (!employeeInput.value || !categoryInput.value || !urgencyInput.value || !teamInput.value || !descriptionInput.value) {
      return;
    }

    let liElement = document.createElement('li');
    liElement.classList.add('problem-content');
    previewSection.appendChild(liElement);

    let articleElement = document.createElement('article');
    liElement.appendChild(articleElement);

    let employeeElement = document.createElement('p');
    employeeElement.textContent = `From: ${employeeInput.value}`;
    articleElement.appendChild(employeeElement);

    let categoryElement = document.createElement('p');
    categoryElement.textContent = `Category: ${categoryInput.value}`
    articleElement.appendChild(categoryElement);

    let urgencyElement = document.createElement('p');
    urgencyElement.textContent = `Urgency: ${urgencyInput.value}`;
    articleElement.appendChild(urgencyElement);

    let teamElement = document.createElement('p');
    teamElement.textContent = `Assigned to: ${teamInput.value}`;
    articleElement.appendChild(teamElement);

    let descriptionElement = document.createElement('p');
    descriptionElement.textContent = `Description: ${descriptionInput.value}`;
    articleElement.appendChild(descriptionElement);

    let editButton = document.createElement('button');
    editButton.textContent = `Edit`;
    editButton.classList.add('edit-btn');
    liElement.appendChild(editButton);

    let continueButton = document.createElement('button');
    continueButton.textContent = `Continue`;
    continueButton.classList.add('continue-btn');
    liElement.appendChild(continueButton);

    let editElementEmployee = employeeInput.value;
    let editElementCategory = categoryInput.value;
    let editElementUrgency = urgencyInput.value;
    let editElementTeam = teamInput.value;
    let editElementDescription = descriptionInput.value;

    employeeInput.value = '';
    categoryInput.value = '';
    urgencyInput.value = '';
    teamInput.value = '';
    descriptionInput.value = '';

    addButton.disabled = true;

    editButton.addEventListener('click', () => {
      employeeInput.value = editElementEmployee;
      categoryInput.value = editElementCategory;
      urgencyInput.value = editElementUrgency;
      teamInput.value = editElementTeam;
      descriptionInput.value = editElementDescription;

      liElement.remove();
      addButton.disabled = false;
    });

    continueButton.addEventListener('click', (e) => {
      e.preventDefault();

      let secondLiElement = document.createElement('li');
      secondLiElement.classList.add('problem-content');
      pendingElement.appendChild(secondLiElement);

      let secondArticleElement = document.createElement('article');
      secondArticleElement = articleElement;
      secondLiElement.appendChild(secondArticleElement);      

      let resolvedButton = document.createElement('button');
      resolvedButton.textContent = 'Resolved';
      resolvedButton.classList.add('resolve-btn');
      secondLiElement.appendChild(resolvedButton);

      liElement.remove();

      resolvedButton.addEventListener('click', () => {

        let tirthLiElement = document.createElement('li');
        tirthLiElement.classList.add('problem-content');
        reslovedSection.appendChild(tirthLiElement);

        let tirthArticleElement = document.createElement('article');
        tirthArticleElement = secondArticleElement;
        tirthLiElement.appendChild(tirthArticleElement);

        let clearButton = document.createElement('button');
        clearButton.textContent = `Clear`;
        clearButton.classList.add('clear-btn');
        tirthLiElement.appendChild(clearButton);

        secondLiElement.remove();

        clearButton.addEventListener('click', () => {
          tirthLiElement.remove();
          addButton.disabled = false;
        })
      });


    });
  });
}
