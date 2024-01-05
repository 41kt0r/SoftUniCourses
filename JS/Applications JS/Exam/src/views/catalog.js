import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";

const catalogTemp = (data) => html`
    <h2>Characters</h2>
    ${data.length > 0 ? html`
        <section id="characters">
          ${data.map(item =>charTemp(item))}
    `: html`<h2>No added Heroes yet.</h2>`}       
`;

const charTemp = (item) => html`
    <div class="character">
            <img src=${item.imageUrl} alt="example1" />
            <div class="hero-info">
              <h3 class="category">${item.category}</h3>
              <p class="description">${item.description}</p>
              <a class="details-btn" href="details/${item._id}">More Info</a>
            </div>
          </div>
`;

export async function showCatalog(ctx) {
    const data = await dataService.getAllCharacters()
    ctx.render(catalogTemp(data))
}