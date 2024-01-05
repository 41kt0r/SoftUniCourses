
import { handleCreateProducts } from "../services/productsService.js";
import { render, html } from "./../../node_modules/lit-html/lit-html.js";

const root = document.querySelector('main')

// function productTemplate(product) {
//     return html`
//         <div class="product">
//             <img src=${product.imgUrl} alt="example1" />
//             <p class="title">
//               ${product.name}
//             </p>
//             <p><strong>Price:</strong><span class="price">${product.price}</span>$</p>
//             <a class="details-btn" href=${"/"}>Details</a>
//           </div>
//     `;
// }


function createProductTemplate() {
    return html`
         <section id="create">
          <div class="form" @submit=${handleCreateProducts}>
            <h2>Add Product</h2>
            <form class="create-form">
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
}

export function createProductView() {
    render(createProductTemplate(), root);
}