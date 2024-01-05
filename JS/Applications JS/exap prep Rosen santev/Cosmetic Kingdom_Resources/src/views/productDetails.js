
import { render, html } from "./../../node_modules/lit-html/lit-html.js";

const root = document.querySelector('main')




function productDetailsTemplate(product) {
    return html`
         <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${product.imageUrl}" alt="example1" />
            <p id="details-title">${product.name}</p>
            <p id="details-category">
              Category: <span id="categories">${product.category}</span>
            </p>
            <p id="details-price">
              Price: <span id="price-number">${product.price}</span>$</p>
            <div id="info-wrapper">
              <div id="details-description">
                <h4>Bought: <span id="buys">0</span> times.</h4>
                <span
                  >${product.description}</span
                >
              </div>
            </div>

            <!--Edit and Delete are only for creator-->
            <div id="action-buttons">
              <a href="" id="edit-btn">Edit</a>
              <a href="" id="delete-btn">Delete</a>

              <!--Bonus - Only for logged-in users ( not authors )-->
              <a href="" id="buy-btn">Buy</a>
            </div>
          </div>
        </section>
`;
}

export function productDetailsView(ctx) {
    render(productDetailsTemplate(ctx.product), root);
}