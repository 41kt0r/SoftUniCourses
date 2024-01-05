import page from "./node_modules/page/page.mjs";
import { render } from "./node_modules/lit-html/lit-html.js";

import { userHelper } from "./src/userHelper.js";
import { userService } from "./src/userService.js";


const root = /*ADD ROOT ELEMENT*/
const userNav = /*ADD USER NAV*/
const guestNav = /*ADD GUEST NAV*/

page(decorationContext);
page("/logout", logout);

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