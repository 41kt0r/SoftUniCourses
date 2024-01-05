
import { logout } from "./api/users.js";
import { initialize } from "./router.js";
import { showCatalog } from "./views/catalog.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";

document.getElementById('views').remove();

const links = {
    '/': showHome,
    '/catalog': showCatalog,
    '/details': showDetails,
    '/register': showRegister,
    '/login': showLogin,
    '/create': showCreate,
    '/logout': onLogOut
};
const router = initialize(links);
router.updateNav();

//strat app ot home Page
router.goTo('/');

function onLogOut() {
    router.updateNav();
    logout();
    
    router.goTo('/')
}
