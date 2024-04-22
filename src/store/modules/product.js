import axios from "axios";
import Product from "../../views/Product.vue";

const product = {
  namespaced: true,
  state: {
    products: [],
  },

  getters: {
    getProducts: (state) => state.products,
  },

  actions: {
  async createProduct({ commit }, productData) {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Perbaikan #1
          },
        };

        const response = await axios.post(
          "http://localhost:8080/api/v1/produk/add",
          productData,
          config
        );

        const newProduct = response.data.data;

        commit("addProduct", newProduct);
        return newProduct;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async fetchPrdouct({ commit }) {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Perbaikan #1
          },
        };

        const response = await axios.get(
          "http://localhost:8080/api/v1/produk",
          config
        );

        commit("setProducts", response.data.data.rows);
        return response.data.data.rows;
        // Menyimpan produk yang diterima ke dalam state
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },
  async updateProduct({ commit }, productData) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    const response = await axios.put(
      `http://localhost:8080/api/v1/produk/$(products.id)`, // Adjust the URL according to your API endpoint
      productData,
      config
    );

    // Mengirimkan data produk yang telah diperbarui ke mutation untuk diperbarui dalam state
    commit("updateProduct", response.data.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
},


  mutations: {
    addProduct: (state, newProduct) => {
      state.products.push(newProduct);
    },
    setProducts: (state, products) => {
      state.products = products;
    },
    updateProducts: (state, products) => {  
      state.products = products;
    },
  },
};

export default product;
