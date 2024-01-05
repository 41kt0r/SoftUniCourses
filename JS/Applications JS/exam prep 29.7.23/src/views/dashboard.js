import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";

const dashboardTemplate = (data) => html`
    <h2>Fun Facts</h2>
        ${data.length > 0 ?
        html`
        <section id="dashboard">
            ${data.map(item => factTemp(item))}
        </section>
        ` : 
        html`
        <h2>No Fun Facts yet.</h2>
        `}
`;

const factTemp = (item) => html`
    <div class="fact">
            <img src=${item.imageUrl} alt="example1" />
            <h3 class="category">${item.category}</h3>
            <p class="description">${item.description}</p>
            <a class="details-btn" href="/details/${item._id}">More Info</a>
          </div>
`;

export async function showDashboard(ctx){
    const data = await dataService.getAllFacts()
    ctx.render(dashboardTemplate(data))
}  