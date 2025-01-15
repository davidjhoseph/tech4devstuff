const productStore = {
  state: () => ({
    product: {},
    products: [],
    productsInLagos: [],
    productsInChina: [],
    productsInUsa: [],
    productsInDubai: [],
  }),
  mutations: {
    updateProductsByLocation(state, key) {
      state[key] = data;
    },
  },
  actions: {
    fetchProducts({ commit }, data) {
      console.log(data, "products");
      // hit an api to get all products;
      // filter for products for lagos
      //   commit("updateProductsByLocation", productsInLagos);
      // filter for products for dubai
      //   commit("updateProductsByLocation", productsInDubai);
    },
    fetchProductById({ commit }, id) {
      console.log(data, "products");
      // hit an api to get all products;
      // filter for products for lagos
      //   commit("updateProductsByLocation", productsInLagos);
      // filter for products for dubai
      //   commit("updateProductsByLocation", productsInDubai);
    },
  },
  getters: {
    getProducts(state){
        return state.products
    }
  },
};

export default productStore;
