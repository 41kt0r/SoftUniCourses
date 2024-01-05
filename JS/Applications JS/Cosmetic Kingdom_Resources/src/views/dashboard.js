import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";

const dashboardTemp = (data) => html`
    <h2>Products</h2>
        ${data.length > 0 ?
        html`
        <section id="dashboard">
            ${data.map(item => productCard(item))}
        </section>
        ` 
        : 
        html`
        <h2>No products yet.</h2>
        `}
`;

const productCard = (item) => html`
    <div class="product">
            <img src=${item.imageUrl} alt="example1" />
            <p class="title">${item.name}</p>
            <p><strong>Price:</strong><span class="price">${item.price}</span>$</p>
            <a class="details-btn" href="/details/${item._id}">Details</a>
          </div>
`;

export async function showDashboard(ctx) {
    const data = await dataService.getAllProducts()
    ctx.render(dashboardTemp(data))
}