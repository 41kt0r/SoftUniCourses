import { deleteAlbumById, getdetailsById } from "../api/data.js";
import { html, nothing } from "../lib.js";


const detailsTemp = (album, isOwner, onDelete) => html`
    <section id="detailsPage">
            <div class="wrapper">
                <div class="albumCover">
                    <img src=${album.imgUrl}>
                </div>
                <div class="albumInfo">
                    <div class="albumText">

                        <h1>Name: ${album.name}</h1>
                        <h3>Artist: ${album.artist}</h3>
                        <h4>Genre: Pop ${album.genre}</h4>
                        <h4>Price: $${album.price}</h4>
                        <h4>Date: ${album.releaseDate}</h4>
                        <p>Description: ${album.description}</p>
                    </div>

                    ${isOwner ?
                        html`
                        <!-- Only for registered user and creator of the album-->
                        <div class="actionBtn">
                            <a href="/edit/${album._id}" class="edit">Edit</a>
                            <a @click = ${onDelete} href="javascript:void(0)" class="remove">Delete</a>
                        </div>` : nothing
                    }
                </div>
            </div>
        </section>
`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    
    const album = await getdetailsById(id);
    const isOwner = album._ownerId == ctx.user._id
    ctx.render(detailsTemp(album, isOwner, onDelete))

    async function onDelete(){
        const userConfirmation = confirm('are you sure');
        if(!userConfirmation) {
            return
        }
        await deleteAlbumById(id);
        ctx.page.redirect('/catalog');
    }
}