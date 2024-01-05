import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";

const detailsTemp = (item) => html`
    <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${item.imageUrl} alt="example1" />
            <p id="details-title">${item.model}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="year">Year: ${item.year}</p>
                <p class="mileage">Mileage: ${item.mileage} km.</p>
                <p class="contact">Contact Number: ${item.contact}</p>
                   <p id = "motorcycle-description">
                   ${item.about}
                        </p>
              </div>
               <!--Edit and Delete are only for creator-->
          <div id="action-buttons">
            <a href="" id="edit-btn">Edit</a>
            <a href="" id="delete-btn">Delete</a>
          </div>
            </div>
        </div>
      </section>
`;
let context = null;
export async function showDetails(ctx) {
    context = ctx;
    const id = ctx.params.id;
    const data = await dataService.getSingleMotorche(id);

    ctx.render(detailsTemp(data));
}

