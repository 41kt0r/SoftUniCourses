import { renderHome } from './homePage.js';
import { renderLogin } from './loginPage.js';
import { renderLogout } from './logout.js';
import { render404 } from './404.js';
import { renderRegister } from './register.js';
import { renderCreate } from './create.js';

const routs = {
    '/': renderHome,
    '/login': renderLogin,
    '/register': renderRegister,
    '/create': renderCreate,
    '/logout': renderLogout
}

export function router(path) {
    // TODO: hide all sections
    hideContent();

    const renderer = routs[path] || render404;
    renderer();
}


function hideContent () {
    const mainContent = document.querySelector(".main-content");
    for (const section of mainContent.children) {
        section.style.display = 'none';
    }
}

