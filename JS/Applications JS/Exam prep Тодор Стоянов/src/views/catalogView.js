import { getAllAlbums } from "../api/data.js";
import { html, nothing } from "../lib.js";


const cardTemp = (album, hasUser) => html`
<div class="card-box">
    <img src=${album.imgUrl}>
    <div>
        <div class="text-center">
            <p class="name">Name: ${album.name}</p>
            <p class="artist">Artist: ${album.artist}</p>
            <p class="genre">Genre: ${album.genre}</p>
            <p class="price">Price: $${album.price}</p>
            <p class="date">Release ${album.releaseDate}</p>
        </div>

        ${hasUser ? 
            html`
            <div class="btn-group">
                <a href="/details/${album._id}" id="details">Details</a>
            </div>` :
            nothing
        }

        
    </div>
</div>
`;

const catalogTemp = (albums, hasUser) => html`
    <section id="catalogPage">
            <h1>All Albums</h1>
            ${albums.length > 0 ?
                albums.map(album => cardTemp(album, hasUser)) :
                html` <!--No albums in catalog-->
                <p>No Albums in Catalog!</p>`
            };
        </section>
`;

export async function showCatalog(ctx) {
    const allAlbums = await getAllAlbums()
    ctx.render(catalogTemp(allAlbums, !!ctx.user));
}