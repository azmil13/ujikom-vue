import { createStore } from "vuex";
import auth from "./modules/auth";
import brand from "./modules/brand";
import category from "./modules/category";
import cart from "./modules/cart";
import order from "./modules/order"
import produk from "./modules/product"
import kontak from "./modules/kontak";

const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
        auth,
        brand,
        category,
        cart,
        order,
        produk,
        kontak
    },
});

export default store;