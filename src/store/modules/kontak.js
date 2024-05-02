import axios from 'axios';

const kontak = {
  namespaced: true,
  state: {
    kontak: [],
    currentKontak: null,
  },
  getters: {
    getAllKontak: (state) => state.kontak,
    getKontakById: (state) => state.currentKontak,
    getCurrentKontak: (state) => state.currentKontak,
  },
  actions: {
    async fetchKontak({ commit }) {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/kontak");
        commit("SET_KONTAK", response.data.data);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async fetchKontakById({ commit }, kontakId) {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/kontak/${kontakId}`);
        commit("SET_CURRENT_KONTAK", response.data.data);
      } catch (error) {
        console.error(error.response.message);
        throw error;
      }
    },
    async createKontak({ commit }, kontakData) {
      try {
        const response = await axios.post("http://localhost:8080/api/v1/kontak", kontakData);
        commit("ADD_KONTAK", response.data); // Menggunakan mutasi ADD_KONTAK jika perlu
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async updateKontak({ commit }, kontakData) {
      try {
        const response = await axios.put(`http://localhost:8080/api/v1/kontak/${kontakData.id}`, kontakData);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async deleteKontak({ commit }, kontakId) {
      try {
        await axios.delete(`http://localhost:8080/api/v1/kontak/${kontakId}`);
        commit("DELETE_KONTAK", kontakId);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    // actions lainnya ...
  },
  mutations: {
    SET_KONTAK(state, kontak) {
      state.kontak = kontak;
    },
    SET_CURRENT_KONTAK(state, kontak) {
      state.currentKontak = kontak;
    },
    ADD_KONTAK(state, kontak) {
      state.kontak = kontak;
    },
    DELETE_KONTAK(state, kontakId) {
      state.kontak = state.kontak.filter(kontak => kontak.id !== kontakId);
    },
    // Mutasi lainnya jika perlu
  },
};

export default kontak;
