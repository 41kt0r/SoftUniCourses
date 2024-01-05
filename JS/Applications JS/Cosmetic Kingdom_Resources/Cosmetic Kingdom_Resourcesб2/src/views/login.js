import { html } from "../../node_modules/lit-html/lit-html.js";
import { userService } from "../userService.js";

const loginTemp = () => html`
    <section id="login">
          <div class="form">
            <h2>Login</h2>
            <form @submit=${submitHandler} class="login-form">
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="/register">Create an account</a>
              </p>
            </form>
          </div>
        </section>
`;
let context = null;
export function showLogin(ctx) {
    ctx.render(loginTemp())
    context = ctx;
}

async function submitHandler(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if(!email || !password) {
        return window.alert("All fields are required!")
    }

    await userService.login(email, password)
    context.updateNav();
    context.goTo('/');
}