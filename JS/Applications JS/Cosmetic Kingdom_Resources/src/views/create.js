import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";

const createTemp = () => html`
    <section id="create">
          <div class="form">
            <h2>Add Product</h2>
            <form class="create-form" @submit=${submitHandler}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Product Name"
              />
              <input
                type="text"
                name="imageUrl"
                id="product-image"
                placeholder="Product Image"
              />
              <input
                type="text"
                name="category"
                id="product-category"
                placeholder="Category"
              />
              <textarea
                id="product-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
              ></textarea>
              
              <input
                type="text"
                name="price"
                id="product-price"
                placeholder="Price"
              />

              <button type="submit">Add</button>
            </form>
          </div>
        </section>
`;

let context = null;
export function showCreate(ctx) {
    ctx.render(createTemp())
    context = ctx;
}

async function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { name, imageUrl, description, category, price } = Object.fromEntries(formData);

    if (!name || !imageUrl || !category || !price) {
        return window.alert("All fields are required!");
    }

    await dataService.createProduct({name, imageUrl, description, category, price});
    context.goTo('/dashboard');
}