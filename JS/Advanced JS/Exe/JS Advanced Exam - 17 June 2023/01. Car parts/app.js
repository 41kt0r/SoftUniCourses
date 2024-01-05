window.addEventListener('load', solve);

function solve() {
        // inputs
        let carModelInput = document.getElementById('car-model');
        let carYearInput = document.getElementById('car-year');
        let partNameInput = document.getElementById('part-name');
        let partNumberInput = document.getElementById('part-number');
        let conditionInput = document.getElementById('condition');
        let competeText = document.getElementById('complete-text');

        //sections
        let partInfoElement = document.querySelector('.info-list');
        let confirmOrderElement = document.querySelector('.confirm-list')

        // buttons
        let nextButton = document.getElementById('next-btn');

        //image
        let completeImg = document.getElementById('complete-img');

        nextButton.addEventListener('click', onNext)

        function onNext(e) {
                e.preventDefault();
                let Year = Number(carYearInput.value);
                

                if (!carModelInput.value || !carYearInput.value || !partNameInput.value || !partNumberInput.value || !conditionInput.value) {
                        return;
                }
                if(Year < 1980 || Year > 2023) {
                        return;
                }

                let liElement = document.createElement('li');
                liElement.classList.add('part-content');
                partInfoElement.appendChild(liElement);

                let article = document.createElement('article');
                liElement.appendChild(article);

                let carModelElement = document.createElement('p');
                carModelElement.textContent = `Car Model: ${carModelInput.value}`;
                article.appendChild(carModelElement);

                let carYearElement = document.createElement('p');
                carYearElement.textContent = `Car Year: ${Year}`;
                article.appendChild(carYearElement);

                let partNameElement = document.createElement('p');
                partNameElement.textContent = `Part Name: ${partNameInput.value}`;
                article.appendChild(partNameElement);

                let partNumberElement = document.createElement('p');
                partNumberElement.textContent = `Part Number: ${partNumberInput.value}`
                article.appendChild(partNumberElement);

                let conditionElement = document.createElement('p');
                conditionElement.textContent = `Condition: ${conditionInput.value}`;
                article.appendChild(conditionElement);

                let editButton = document.createElement('button');
                editButton.classList.add('edit-btn');
                editButton.textContent = `Edit`;
                liElement.appendChild(editButton);

                let countinueButton = document.createElement('button');
                countinueButton.classList.add('continue-btn');
                countinueButton.textContent = `Continue`;
                liElement.appendChild(countinueButton);


                let editElementCarModel = carModelInput.value;
                let editElementCarYear = carYearInput.value;
                let editElementPartName = partNameInput.value;
                let editElementPartNumber = partNumberInput.value;
                let editElementCondition = conditionInput.value;

                carModelInput.value = '';
                carYearInput.value = '';
                partNameInput.value = '';
                partNumberInput.value = '';
                conditionInput.value = '';

                nextButton.disabled = true;

                editButton.addEventListener('click', () => {

                        carModelInput.value = editElementCarModel;
                        carYearInput.value = editElementCarYear ;
                        partNameInput.value = editElementPartName;
                        partNumberInput.value = editElementPartNumber ;
                        conditionInput.value = editElementCondition ;

                        nextButton.disabled = false;

                        liElement.remove();
                });

                countinueButton.addEventListener('click', () => {

                        let confirmLiElement = document.createElement('li');
                        confirmLiElement.classList.add('part-content');
                        confirmOrderElement.appendChild(confirmLiElement);

                        let confirmArticleElement = document.createElement('article');
                        confirmArticleElement = article;
                        confirmLiElement.appendChild(confirmArticleElement);

                        let confirmButton = document.createElement('button');;
                        confirmButton.textContent = `Confirm`;
                        confirmButton.classList.add('confirm-btn');
                        confirmLiElement.appendChild(confirmButton);

                        let cancelButton = document.createElement('button');
                        cancelButton.textContent = `Cancel`;
                        cancelButton.classList.add('cancel-btn');
                        confirmLiElement.appendChild(cancelButton);
                        
                        liElement.remove();

                        confirmButton.addEventListener('click', () => {

                                //console.log(hehe);
                                completeImg.style.visibility = "visible";
                                competeText.textContent = "Part is Ordered!";
                                confirmLiElement.remove();
                                nextButton.disabled = false;
                        });

                        cancelButton.addEventListener('click', () => {
                                nextButton.disabled = false;
                                confirmLiElement.remove();
                        })
 

                });

        }
};




