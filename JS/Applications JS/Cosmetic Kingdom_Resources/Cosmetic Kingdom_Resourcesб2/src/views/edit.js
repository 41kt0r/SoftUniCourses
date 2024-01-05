import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";

const editTemp = (item) => html`
    <section id="edit">
          <div class="form">
            <h2>Edit Product</h2>
            <form class="edit-form" @submit=${submitHandler}>
              <input
                type="text"
                name="name"
                id="name"
                value=${item.name}
                placeholder="Product Name"
              />
              <input
                type="text"
                name="imageUrl"
                id="product-image"
                value=${item.imageUrl}
                placeholder="Product Image"
              />
              <input
                type="text"
                name="category"
                id="product-category"
                value=${item.category}
                placeholder="Category"
              />
              <textarea
                id="product-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
              >${item.description}</textarea>
              
              <input
                type="text"
                name="price"
                id="product-price"
                value=${item.price}
                placeholder="Price"
              />
              <button type="submit">post</button>
            </form>
          </div>
        </section>
`;

let context = null;
export async function showEdit(ctx) {
    context = ctx;
    const id = ctx.params.id;
    const data = await dataService.getSingleProduct(id);
    ctx.render(editTemp(data));
}

async function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const {name, imageUrl, category, description, price} = Object.fromEntries(formData);

    if(!name || !imageUrl || !description || !category || !price) {
        return window.alert("All fields are requierd!");
    }

    const id = context.params.id;
    await dataService.updateProduct(id, {name, imageUrl, category, description, price});
    context.goTo(`/details/${id}`);
}