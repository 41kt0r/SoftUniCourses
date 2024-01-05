window.addEventListener("load", solve);

function solve() {
    //form
    let gemstoneNameInput = document.getElementById('gem-name');
    let colorInput = document.getElementById('color');
    let caratsInput = document.getElementById('carats');
    let priceInput = document.getElementById('price');
    let typeInput = document.getElementById('type');

    //side wrapper
    let preview = document.getElementById('preview-list');
    let ulCollection = document.getElementById('collection')

    //buttons
    let addButton = document.getElementById('add-btn');

    addButton.addEventListener('click', () => {
        if (!gemstoneNameInput.value || !colorInput.value || !caratsInput.value || !priceInput.value || !typeInput.value) {
            return;
        }

        let liElement = document.createElement('li');
        liElement.classList.add('gem-info');
        preview.appendChild(liElement);

        let articleElement = document.createElement('article');
        liElement.appendChild(articleElement);

        let gemTitleElement = document.createElement('h4');
        gemTitleElement.textContent = `${gemstoneNameInput.value}`;
        articleElement.appendChild(gemTitleElement);

        let colorElement = document.createElement('p');
        colorElement.textContent = `Color: ${colorInput.value}`;
        articleElement.appendChild(colorElement);

        let caratsElement = document.createElement('p');
        caratsElement.textContent = `Carats: ${caratsInput.value}`;
        articleElement.appendChild(caratsElement);

        let priceElement = document.createElement('p');
        priceElement.textContent = `Price: ${priceInput.value}$`;
        articleElement.appendChild(priceElement);

        let typeElement = document.createElement('p');
        typeElement.textContent = `Type: ${typeInput.value}`;
        articleElement.appendChild(typeElement);

        let saveButton = document.createElement('button');
        saveButton.classList.add('save-btn');
        saveButton.textContent = `Save to Collection`;
        liElement.appendChild(saveButton);

        let editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = `Edit Information`;
        liElement.appendChild(editButton);

        let cancelButton = document.createElement('button');
        cancelButton.classList.add('cancel-btn')
        cancelButton.textContent = `Cancel`;
        liElement.appendChild(cancelButton);

        let editElementGemName = gemstoneNameInput.value
        let editElementColor = colorInput.value
        let editElementCarats = caratsInput.value
        let editElementPrice = priceInput.value
        let editElementType = typeInput.value

        gemstoneNameInput.value = "";
        colorInput.value = "";
        caratsInput.value = "";
        priceInput.value = "";
        typeInput.value = "";

        addButton.disabled = true;


        editButton.addEventListener('click', () => {

            gemstoneNameInput.value = editElementGemName
            colorInput.value = editElementColor
            caratsInput.value = editElementCarats
            priceInput.value = editElementPrice
            typeInput.value = editElementType

            liElement.remove();

            addButton.disabled = false;
        });

        saveButton.addEventListener('click', () => {

            let liElement2 = document.createElement('li');
            ulCollection.appendChild(liElement2);

            let collectionPreview = document.createElement('p');
            collectionPreview.classList.add('collection-item')
            collectionPreview.textContent = `${editElementGemName}
             - Color: ${editElementColor}/ 
             Carats: ${editElementCarats}/ 
             Price: ${editElementPrice}$/ 
             Type: ${editElementType}`;
             liElement2.appendChild(collectionPreview);

            liElement.remove();
        });

        cancelButton.addEventListener('click', () => {
            liElement.remove();
            addButton.disabled = false;
        })
    })
}
