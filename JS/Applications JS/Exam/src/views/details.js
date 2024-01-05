import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";
import { userHelper } from "../userHelper.js";

const detailsTemp = (item, isOwner,showLikeButton, likes, onLike, deleteGeroyche) => html`
    <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${item.imageUrl} alt="example11" />
            <div>
            <p id="details-category">${item.category}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p id="description">${item.description}</p>
                   <p id ="more-info">${item.moreInfo}</p>
              </div>
            </div>
              <h3>Is This Useful:<span id="likes">${likes}</span></h3>

               <!--Edit and Delete are only for creator-->
          <div id="action-buttons">
            ${isOwner ? html`
                <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                <a @click=${deleteGeroyche} href="javascript:void(0)" id="delete-btn">Delete</a>
            ` : nothing}
            ${showLikeButton ? html`<a @click=${onLike} href="" id="like-btn">Like</a>` : console.log("ne si lognat")}
            
          </div>
            </div>
        </div>
      </section>
`;

let context = null;
export async function showDetails(ctx) {
    
    let userData = userHelper.getUserData();
    //console.log(userData)
    const id  = ctx.params.id;

    const requests = [
      dataService.getSingleGeroyche(id),
      dataService.getLikesByGeroyche(id),
      
  ];
  //const hasUser = Boolean(ctx.user);

  if(userData !== undefined) {
      requests.push(dataService.getMyLikesByGeroycheId(id, userHelper.getUserID(id)));
  }
  const [data, likes, hasLike] = await Promise.all(requests);
    

    let isOwner = userData && userHelper.getUserID() === data._ownerId;
    let showLikeButton = isOwner == false && hasLike == false && userData !== null;
    //console.log(hasLike)

    ctx.render(detailsTemp(data, isOwner, showLikeButton, likes, onLike, deleteGeroyche));

    async function onLike() {
      await dataService.likeGeroyche(id);
      ctx.goTo(`/details/${id}`); 
    }

    async function deleteGeroyche(e) {
      const id = ctx.params.id;
  
      if(window.confirm("Do you want to delete this Geroyche?")) {
          await dataService.deleteGeroyche(id);
          ctx.goTo("/catalog");
      }
  }
}


