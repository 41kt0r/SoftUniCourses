import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";
import { userHelper } from "../userHelper.js";

const detailsTemplate = (item, isOwner) => html`
    <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${item.imageUrl} alt="example1" />
            <p id="details-category">${item.category}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p id="description">${item.description}</p>
                <p id ="more-info">${item.additionalInfo}</p>
              </div>

              
               <!--Edit and Delete are only for creator-->
            <h3>Likes:<span id="likes">0</span></h3>
            <div id="action-buttons">
            ${isOwner ? 
                html`
                    <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                    <a @click=${delFact} href="javascript:void(0)" id="delete-btn">Delete</a>
                ` : nothing}
            

             <!--Bonus - Only for logged-in users ( not authors )-->
            <a href="" id="like-btn">Like</a>

          </div>
            </div>
        </div>
      </section>
`;
let context = null;
export async function showDetails(ctx){   
    context = ctx;
    const id = ctx.params.id;
    const data = await dataService.getSingleFact(id);
    const isOwner = userHelper.getUserID() === data._ownerId
    ctx.render(detailsTemplate(data, isOwner))
}  

async function delFact(e) {
    e.preventDefault();
    const id = context.params.id;
    await dataService.delFact(id);
    context.goTo("/dashboard")
}