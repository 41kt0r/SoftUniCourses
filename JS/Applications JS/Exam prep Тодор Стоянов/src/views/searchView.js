import { searchAlbum } from "../api/data.js";
import { html, nothing } from "../lib.js";

const searchTemp = (isClicked, handler, albums, hasUser) => html`
<section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
        <button @click=${handler} class="button-list">Search</button>
    </div>
    
    <h2>Results:</h2>
    <div class="search-result">
        ${isClicked ?
            createResultTemp(albums, hasUser)
        : nothing}
    </div>    
</section>`;

const createResultTemp = (albums, hasUser) => {
    return html` 
        ${albums.length > 0 ?
            html`
                ${albums.map(album => createCard(album, hasUser))}
            ` :
            html`<p class="no-result">No result.</p>`
        }
    `
}

const createCard = (album, hasUser) => html`
    <div class="card-box">
        <img src=${album.imgUrl}>
        <div>
            <div class="text-center">
                <p class="name">Name: ${album.name}</p>
                <p class="artist">${album.artist}</p>
                <p class="genre">${album.genre}</p>
                <p class="price">Price: $${album.price}</p>
                <p class="date">Release Date: ${album.releaseDate}</p>
            </div>
            ${hasUser ?
        html`
                <div class="btn-group">
                    <a href="/details/${album._id}" id="details">Details</a>
                </div>
                ` : nothing
    }
            
        </div>
`

export async function showSearch(ctx) {
    // const isClicked = false;
    ctx.render(searchTemp(false, onSearch))
    async function onSearch(e) {
        const searchInput = document.getElementById('search-input');
        const query = searchInput.value;
        if (!query) {
            return alert("enter text");
        }

        const albums = await searchAlbum(query);
        ctx.render(searchTemp(true, onSearch, albums, !!ctx.user))

    }
}