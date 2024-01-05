import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";
import { userHelper } from "../userHelper.js";

const detailsTemp = (item,
    isOwner,
    onDelete,
    isLoggedIn,
    totalGoesCount,
    onClickGo,
    didUserGoin) => html`
    <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${item.imageUrl} alt="example1" />
            <p id="details-title">${item.name}</p>
            <p id="details-category">
              Category: <span id="categories">${item.category}</span>
            </p>
            <p id="details-date">
              Date:<span id="date">${item.date}</span></p>
            <div id="info-wrapper">
              <div id="details-description">
                <span>${item.description}</span>
              </div>

            </div>

            <h3>Going: <span id="go">${totalGoesCount}</span> times.</h3>

            <!--Edit and Delete are only for creator-->
            <div id="action-buttons">
                ${isOwner ? html`
                    <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                    <a @click=${onDelete} href="" id="delete-btn">Delete</a>
                `: nothing}
              
    	        ${(() => {
                if(didUserGoin == 0) {
                    if(isLoggedIn && !isOwner) {
                        return html`<a @click=${onClickGo} href="javascript:void(0)" id="go-btn">Going</a>`
                    }
                }
                })()}
              <!--Bonus - Only for logged-in users ( not authors )-->
              
            </div>
          </div>
        </section>
`;

let context = null;
export async function showDetails(ctx) {
    context = ctx;

    const id = ctx.params.id;
    const data = await dataService.getSingleEvent(id);
    const user = ctx.user;

    let userId;
    let totalGoesCount;
    let didUserGoin;
    let didUserGo = dataService.didUserGo()
    if(user != null) {
        userId = user._id;
        didUserGoin = await didUserGo(id, userId)
    }

    let isOwner = user && userHelper.getUserID() == data._ownerId;
    const isLoggedIn = user !== undefined;  

    totalGoesCount = await dataService.getTotalGoes(id);

    ctx.render(
        detailsTemp(
          data,
          isOwner,
          onDelete,
          isLoggedIn,
          totalGoesCount,
          onClickGo,
          didUserGoin
        )
    );

    async function onClickGo() {
        const donation = {
            id, 
        };
        await dataService.go(donation);

        totalGoesCount = await dataService.getTotalGoes(id);
        didUserGoin = await didUserGo(id, userId);
        ctx.render(
            detailsTemp(
              data,
              isOwner,
              onDelete,
              isLoggedIn,
              totalGoesCount,
              onClickGo,
              didUserGo
            )
        );
    }
}

async function onDelete(e) {
    e.preventDefault();

    const id = context.params.id;
    if (window.confirm("are you sure about this?")) {
        await dataService.delEvent(id);
        context.goTo('/catalog');
    }
}