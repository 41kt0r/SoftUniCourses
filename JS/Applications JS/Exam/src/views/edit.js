import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";

const editTemp = (item) => html`
    <section id="edit">
          <div class="form">
            <img class="border" src="./images/border.png" alt="">
            <h2>Edit Character</h2>
            <form @submit=${submitHandler} class="edit-form">
              <input
              type="text"
              name="category"
              id="category"
              value = ${item.category}
              placeholder="Character Type"
            />
            <input
              type="text"
              name="image-url"
              id="image-url"
              value = ${item.imageUrl}
              placeholder="Image URL"
            />
            <textarea
            id="description"
            name="description"
            placeholder="Description"
            rows="2"
            cols="10"
          >${item.description}</textarea>
          <textarea
            id="additional-info"
            name="additional-info"
            placeholder="Additional Info"
            rows="2"
            cols="10"
          >${item.moreInfo}</textarea>
              <button type="submit">Edit</button>
            </form>
            <img class="border" src="./images/border.png" alt="">
          </div>
        </section>
`;

let context = null;
export async function showEdit(ctx) {
    context = ctx;
    const id = ctx.params.id;
    const data = await dataService.getSingleGeroyche(id);
    ctx.render(editTemp(data));
}

async function submitHandler(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const category = formData.get("category");
    const imageUrl = formData.get("image-url");
    const description = formData.get("description");
    const moreInfo = formData.get("additional-info");

    if (!category ||
        !imageUrl ||
        !description ||
        !moreInfo) {
        return window.alert("all fields are requierd!")
    }

    const id = context.params.id;

    await dataService.updateGeroyche(id, {
        category,
        imageUrl,
        description,
        moreInfo
    });
    context.goTo(`/details/${id}`);
}