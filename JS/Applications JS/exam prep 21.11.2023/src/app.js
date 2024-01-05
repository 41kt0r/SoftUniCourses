// Import views
import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { updateNav } from './views/nav.js';

//attached middle ware
page(decorationContext);

// page('/', () => console.log('home'));
// page('/catalog', () => console.log('catalog'));
// page('/catalog/:id', () => console.log('details'));
// page('/edit/:id', () => console.log('edit'));
// page('/create', () => console.log('create'));
// page('/login', () => console.log('login'));
// page('/register', () => console.log('register'));

//get main element
const main = document.getElementById('main-content');



// create page routing
updateNav();
page.start();

function decorationContext(ctx, next) {
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    const user = getUserData();
    if(user) {
        ctx.user = user;
    } 

    next();
}

function renderMain(content) {
    render(content, main);
}