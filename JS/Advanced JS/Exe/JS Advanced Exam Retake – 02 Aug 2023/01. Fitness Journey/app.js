window.addEventListener('load', solve);

function solve() {
    let nameInput = document.getElementById('name');
    let emailInput = document.getElementById('email');
    let contactNumberInput = document.getElementById('contact-number');
    let classTypeInput = document.getElementById('class-type');
    let classTimeInput = document.getElementById('class-time');

    let divMain = document.getElementById('main');
    let body = document.getElementById('body');

    let nextButton = document.getElementById('next-btn');

    let ulElement = document.querySelector('.class-info');
    let ulConfirmElement = document.querySelector('.confirm-class');

    nextButton.addEventListener('click', (e) => {
        e.preventDefault();

        if (!nameInput.value || !emailInput.value || !contactNumberInput.value || !classTypeInput.value || !classTimeInput.value) {
            return;
        }

        let liElement = document.createElement('li');
        liElement.classList.add('info-item');
        ulElement.appendChild(liElement);

        let articleElement = document.createElement('article');
        articleElement.classList.add('personal-info');
        liElement.appendChild(articleElement);

        let nameElement = document.createElement('p');
        nameElement.textContent = `${nameInput.value}`;
        articleElement.appendChild(nameElement);

        let emailElement = document.createElement('p');
        emailElement.textContent = `${emailInput.value}`;
        articleElement.appendChild(emailElement);

        let contactNumberElement = document.createElement('p');
        contactNumberElement.textContent = `${contactNumberInput.value}`;
        articleElement.appendChild(contactNumberElement);

        let classTypeElement = document.createElement('p');
        classTypeElement.textContent = `${classTypeInput.value}`;
        articleElement.appendChild(classTypeElement);

        let classTimeElement = document.createElement('p');
        classTimeElement.textContent = `${classTimeInput.value}`;
        articleElement.appendChild(classTimeElement);

        let editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit';
        liElement.appendChild(editButton);

        let continueButton = document.createElement('button');
        continueButton.classList.add('continue-btn');
        continueButton.textContent = 'Continue';
        liElement.appendChild(continueButton);

        nextButton.disabled = true;

        let editElementName = nameInput.value;
        let editElementEmail = emailInput.value;
        let editElementNumber = contactNumberInput.value;
        let editElementType = classTypeInput.value;
        let editElementTime = classTimeInput.value;


        nameInput.value = "";
        emailInput.value = "";
        contactNumberInput.value = "";
        classTypeInput.value = "";
        classTimeInput.value = "";


        editButton.addEventListener('click', () => {

            console.log(editElementName);
            nameInput.value = editElementName;
            emailInput.value = editElementEmail;
            contactNumberInput.value = editElementNumber;
            classTypeInput.value = editElementType;
            classTimeInput.value = editElementTime;

            liElement.remove();
            nextButton.disabled = false;
        });

        continueButton.addEventListener('click', () => {

            let secondLiElement = document.createElement('li');
            secondLiElement.classList.add('continue-info');
            ulConfirmElement.appendChild(secondLiElement);

            let secondArticleElement = document.createElement('article');
            secondArticleElement.classList.add('personal-info');
            secondArticleElement = articleElement;
            secondLiElement.appendChild(secondArticleElement);

            let cancelButton = document.createElement('button');
            cancelButton.classList.add('cancel-btn');
            cancelButton.textContent = `Cancel`;
            secondLiElement.appendChild(cancelButton);

            let ConfirmButton = document.createElement('button');
            ConfirmButton.classList.add('confirm-btn');
            ConfirmButton.textContent = `Confrim`;
            secondLiElement.appendChild(ConfirmButton);

            
            liElement.remove();

            cancelButton.addEventListener('click', () => {
                secondLiElement.remove();
                nextButton.disabled = false;
            })

            ConfirmButton.addEventListener('click', () => {
                divMain.remove();
                let finalTitle = document.createElement('h1');
                finalTitle.id = 'thank-you';
                finalTitle.textContent = "Thank you for scheduling your appointment, we look forward to seeing you!";
                body.appendChild(finalTitle);

                let doneButton = document.createElement('button');
                doneButton.id = 'done-btn';
                doneButton.textContent = `Done`;
                body.appendChild(doneButton);

                doneButton.addEventListener('click', () => {
                    location.reload();
                })
            })
        });


    })
}




