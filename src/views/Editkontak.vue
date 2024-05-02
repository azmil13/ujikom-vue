<template>
    <form @submit.prevent="updateKontak" >
      <div class="space-y-4 px-8 py-10">
        <label class="block" for="name">
          <p class="text-gray-600">Email</p>
          <input v-model="formData.email" class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter your Nama Produk " />
        </label>
        <label class="block" for="name">
          <p class="text-gray-600">Nama</p>
          <input v-model="formData.nama" class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter your Descriptiption" />
        </label>
        <label class="block" for="name">
          <p class="text-gray-600">Pesan</p>
          <input v-model="formData.pesan" class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter your Harga" />
        </label>
        <button class="mt-4 rounded-full bg-blue-800 px-10 py-2 font-semibold text-white" type="submit">Submit</button>
      </div>
    </form>
  </template>

  <script>

  import { mapActions, mapGetters } from 'vuex';

  export default {
    data() {
      return {
        formData: {
        email: "",
        nama: "",
        pesan: "",
        }
  
      };
    },
    computed:{
      ...mapGetters('kontak', ['getKontakById']),
      kontak(){
        return this.getKontakById;
      }
    },
    methods: {
      ...mapActions('kontak', ['fetchKontakById']),
      async updateKontak() {
        const kontakData = {
          id: this.$route.params.id,
          email: this.formData.email,
          nama: this.formData.nama,
          pesan: this.formData.pesan,
        };
        try {
          const success = await this.$store.dispatch("kontak/updateKontak", kontakData); // Menggunakan aksi yang dimetakan
          if (success) {
            alert("Berhasil")
            this.email = "";
            this.nama = "";
            this.pesan = "";
            this.$router.push({name: 'data'});
          }
        } catch (error) {
          alert("Gagal")
          console.error(error);
        }
      },
      async fetchData() {
    await this.fetchKontakById(this.$route.params.id);
    const kontak = this.kontak;
    console.log(kontak); // Tambahkan ini untuk memeriksa nilai produk di konsol browser
    if (kontak) {
      this.formData = {
        email: kontak.email,
        nama: kontak.nama,
        pesan: kontak.pesan
      };
    }
  }
  
    },
    mounted(){
      this.fetchData();
      }
    
  };
  </script>
  