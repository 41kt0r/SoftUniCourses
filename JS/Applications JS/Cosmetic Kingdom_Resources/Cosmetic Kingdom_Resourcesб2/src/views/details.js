import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";
import { userHelper } from "../userHelper.js";

const detailsTemp = (item, isOwner) => html`
    <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${item.imageUrl} alt="example1" />
            <p id="details-title">${item.name}</p>
            <p id="details-category">
              Category: <span id="categories">${item.category}</span>
            </p>
            <p id="details-price">
              Price: <span id="price-number">${item.price}</span>$</p>
            <div id="info-wrapper">
              <div id="details-description">
                <h4>Bought: <span id="buys">0</span> times.</h4>
                <span>${item.description}</span>
              </div>
            </div>

            <!--Edit and Delete are only for creator-->
            <div id="action-buttons">
            ${isOwner ? html`
              <a href="/edit/${item._id}" id="edit-btn">Edit</a>
              <a @click=${delProduct}href="" id="delete-btn">Delete</a>
            ` : html`<a @click=${onBuy} href="javascript:void(0)" id="buy-btn">Buy</a>`}
              
            </div>
          </div>
        </section>
`;

let context = null;
export async function showDetails(ctx) {
    context = ctx;
    const id = ctx.params.id;
    const data = await dataService.getSingleProduct(id);
    const isOwner = userHelper.getUserID() === data._ownerId
    ctx.render(detailsTemp(data, isOwner))
}

async function delProduct(e) {
    e.preventDefault();
    const id = context.params.id;
    await dataService.delProduct(id);
    context.goTo("/dashboard")
}

export async function onBuy(e) {
    e.preventDefault();
    const id = context.params.id;
    await buy(id);
    context.goTo(`/dedails/${id}`)
    console.log("raboti do tuk")
} 