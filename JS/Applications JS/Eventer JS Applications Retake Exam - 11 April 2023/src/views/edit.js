import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";

const editTemp = (item) => html`
    <section id="edit">
          <div class="form">
            <h2>Edit Event</h2>
            <form @submit=${submitHandler} class="edit-form">
              <input
                type="text"
                name="name"
                id="name"
                value = ${item.name}
                placeholder="Event"
              />
              <input
                type="text"
                name="imageUrl"
                id="event-image"
                value = ${item.imageUrl}
                placeholder="Event Image"
              />
              <input
                type="text"
                name="category"
                id="event-category"
                value = ${item.category}
                placeholder="Category"
              />


              <textarea
                id="event-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
              >${item.description}</textarea>
              
              <label for="date-and-time">Event Time:</label>
              <input
              type="text"
              name="date"
              id="date"
              value = ${item.date}
              placeholder="When?"
            />

              <button type="submit">Edit</button>
            </form>
          </div>
        </section>
`;

let context = null;
export async function showEdit(ctx) {
    context = ctx;

    const id = ctx.params.id;
    const data = await dataService.getSingleEvent(id)

    ctx.render(editTemp(data))
}

async function submitHandler(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const {
        name,
        imageUrl,
        category,
        description,
        date
    } = Object.fromEntries(formData);

    const id = context.params.id;

    if (!name ||
        !imageUrl ||
        !category ||
        !description ||
        !date) {
        return window.alert('all fields are required')
    }

    await dataService.updateEvent(id, {
        name,
        imageUrl,
        category,
        description,
        date
    });
    context.goTo(`/details/${id}`)
}