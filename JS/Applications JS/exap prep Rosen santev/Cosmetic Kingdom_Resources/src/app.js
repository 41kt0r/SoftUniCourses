import page from "./../node_modules/page/page.mjs";
import { authMiddleware } from "./middlewares/authMiddleware.js";
import { getProduct, getProducts } from "./services/productsService.js";
import { createProductView } from "./views/createProduct.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { logoutView } from "./views/logout.js";
import { navbarView } from "./views/navbar.js";
import { productDetailsView } from "./views/productDetails.js";
import { productsView } from "./views/products.js";
import { registerView } from "./views/register.js";

page(authMiddleware);
page(navbarView);
page("/", homeView);
page("/login", loginView);
page("/register", registerView);
page("/logout", logoutView);
page("/products", getProducts, productsView);
page("/create", getProducts, createProductView);
page("/products/:id", getProduct, productDetailsView);

page.start();