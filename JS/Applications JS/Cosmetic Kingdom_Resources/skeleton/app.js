import { userHelper } from "./src/userHelper";
import { userService } from "./src/userService";


const root = /*ADD ROOT ELEMENT*/;
const userA = /*ADD USER NAV*/;
const guestA = /*ADD GUEST NAV*/;

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
    renderer(template, root )
}
function updateNav () {
    const userData = userHelper.getUserData();
    if(userData) {
        userA.array.forEach(a => a.style.display = "inline");
        guestA.array.forEach(a => a.style.display = "none");
    } else{
        userA.array.forEach(a => a.style.display = "none");
        guestA.array.forEach(a => a.style.display = "inline");
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