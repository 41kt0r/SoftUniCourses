import { logout } from "../api/user.js";
import { html, render, page } from "../lib.js";
import { getUserData } from "../util.js";

const nav = document.querySelector("nav");

const navTemplate = (hasUser) => html`

    <!-- Navigation -->
        <a id="logo" href="/">
            <img id="logo-img" src="./images/logo.png" alt=""/>
        </a>

    <nav>
        <div>
        <a href="#">Products</a>
        </div>

        ${hasUser ? html`
        <!-- Logged-in users -->
        <div class="user">
            <a href="#">Add Product</a>
            <a href="#">Logout</a>
        </div>
        `: html`
        <!-- Guest users -->
        <div class="guest">
            <a href="#">Login</a>
            <a href="#">Register</a>
        </div>
        `}
    </nav> 
`;

export function updateNav() {
    const user = getUserData();
    
    render(navTemplate(user), nav);
}

function onLogout() {
    logout();
    updateNav();
    page.redirect('/');
}