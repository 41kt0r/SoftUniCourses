window.addEventListener('load', solution);

function solution() {
  const editButton = document.getElementById('editBTN');
  const submitButton = document.getElementById('submitBTN');
  const continueButton = document.getElementById('continueBTN');
  const preview = document.getElementById('infoPreview')

  const block = document.getElementById('block');

  submitButton.disabled = false;
  editButton.disabled = true;
  continueButton.disabled = true;

  const inputValues = Array.from(document.getElementById('form').querySelectorAll('input'));
  const labelVAlues = Array.from(document.getElementById('form').querySelectorAll('label'));
  inputValues.pop();


  submitButton.addEventListener('click', (ev) => {

    const fullname = inputValues[0];
    const email = inputValues[1];

    if (fullname.value && email.value !== "") {
      for (let i = 0; i < inputValues.length; i++) {

        const liElement = document.createElement('li');
        liElement.textContent = `${labelVAlues[i].innerText} ${inputValues[i].value}`;
        preview.appendChild(liElement);
      }
      for (const input of inputValues) {
        input.value = ''
      }
      ev.target.disabled = true;
      editButton.disabled = false;
      continueButton.disabled = false;
    }

  });

  editButton.addEventListener('click', (ev) => {
    const listItems = Array.from(preview.childNodes);

    for (let i = 0; i < inputValues.length; i++) {
      inputValues[i].value = listItems[i].textContent.split(": ")[1];
      listItems[i].remove();
    }
    submitButton.disabled = false;
    editButton.disabled = true;
    continueButton.disabled = true;

  })

  continueButton.addEventListener('click', (ev) => {
    block.innerHTML = '';
    let h3 = document.createElement('h3');
    h3.textContent = 'Thank you for your reservation!';
    block.appendChild(h3);
  })
}
