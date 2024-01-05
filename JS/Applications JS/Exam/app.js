import page from "./node_modules/page/page.mjs";
import { render } from "./node_modules/lit-html/lit-html.js";

import { userHelper } from "./src/userHelper.js";
import { userService } from "./src/userService.js";
import { showHome } from "./src/views/home.js";
import { showCreate } from "./src/views/create.js";
import { showCatalog } from "./src/views/catalog.js";
import { showDetails } from "./src/views/details.js";
import { showEdit } from "./src/views/edit.js";
import { showLogin } from "./src/views/login.js";
import { showRegister } from "./src/views/register.js";


const root = document.querySelector('main')
const userNav = document.querySelector('.user')
const guestNav = document.querySelector('.guest')

page(decorationContext);
page("/", showHome);
page("/home", showHome);
page("/create", showCreate);
page("/catalog", showCatalog);
page("/details/:id", showDetails);
page("/edit/:id", showEdit);
page("/login", showLogin);
page("/logout", logout);
page("/register", showRegister);

page.start();
updateNav();

async function logout() {
    await userService.logout();
    updateNav();
    goTo("/");
}

function renderer(template) {
    render(template, root )
}

function updateNav () {
    const userData = userHelper.getUserData();
    if(userData) {
        userNav.style.display = "block"
        guestNav.style.display = "none"
        
    } else{
        userNav.style.display = "none"
        guestNav.style.display = "block"
    }
}

function goTo (path) {
    page.redirect(path)
}

function decorationContext(ctx, next) {
    ctx.render = renderer;
    ctx.updateNav = updateNav;
    ctx.goTo = goTo;

    next();
}