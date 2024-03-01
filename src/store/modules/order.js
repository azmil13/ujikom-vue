import axios from "axios";

const order = {
    namespaced: true,
    state: {
        orderData: [],
    },
    getters: {
        getOrder: (state) => state.orderData,
    },
    actions: {
        async fetchOrder({ commit },  orderCode) {
            try {
                const responseOrder = await axios.get(
                    `https://ecommerce.olipiskandar.com/api/v1/user/order/${orderCode}`,
                    {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                      },
                    }
                );
                commit('SET_ORDER',responseOrder.data['data']);
        console.log(responseOrder.data);
      } catch (error) {
        console.error(error);
        alert(error);
            }
        },

     },

    mutations: {
        SET_ORDER(state, order) {
            state.orderData = order;
        },
}
}

export default order;