const baseURL = 'http://localhost:3030'

window.addEventListener('load', () => {

    const guestElement = document.getElementById('guest');
    guestElement.style.display = 'block'; 

    fetch(`${baseURL}/jsonstore/cookbook/recipes`)
        .then(res => res.json())
        .then(recipes => {
            renderRecipes(Object.values(recipes))
        });
});

function renderRecipes(recipes) {
    const mainElement = document.querySelector('main');

    mainElement.innerHTML = '';

    recipes.forEach(r => {
        mainElement.appendChild(createRecipe(r));
    });
}

function createRecipe(recipe) {
    let recipeElement = document.createElement('article');
    recipeElement.classList.add('preview');

    recipeElement.addEventListener('click', () => {
        fetch(`${baseURL}/jsonstore/cookbook/details/${recipe._id}`)
            .then(res => res.json())
            .then(details => {
                const mainElement = document.querySelector('main');
                mainElement.innerHTML = '';

                mainElement.appendChild(renderDetailRecipe(details))
            });
    });

    //warning xss atack!!!
    recipeElement.innerHTML = `
        <div class="title">
            <h2>${recipe.name}</h2>
        </div>
        <div class="small">
            <img src="${recipe.img}">
        </div>
    `;

    return recipeElement
}

function renderDetailRecipe(details) {
    let recipeElement = document.createElement('article');
    
    recipeElement.innerHTML = `
    <article>
            <h2>${details.name}</h2>
            <div class="band">
                <div class="thumb">
                    <img src="${details.img}">
                </div>
                <div class="ingredients">
                    <h3>Ingredients:</h3>
                    <ul>
                        ${details.ingredients.map(r => `<li> ${r} </li>`).join('')}
                    </ul>
                </div>
            </div>
            <div class="description">
                <h3>Preparation:</h3>
                ${details.steps.map(s => `<p>${s}</p>`).join('')}
            </div>
        </article>
    `;

    return recipeElement;
}

