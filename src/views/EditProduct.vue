<template>
  <form @submit.prevent="updateProduct" >
    <div class="space-y-4 px-8 py-10">
      <label class="block" for="name">
        <p class="text-gray-600">Nama Produk</p>
        <input v-model="formData.nama_produk" class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter your Nama Produk " />
      </label>
      <label class="block" for="name">
        <p class="text-gray-600">Description</p>
        <input v-model="formData.description" class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter your Descriptiption" />
      </label>
      <label class="block" for="name">
        <p class="text-gray-600">Harga</p>
        <input v-model="formData.harga" class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter your Harga" />
      </label>
      <label class="block" for="name">
        <p class="text-gray-600">Stok</p>
        <input v-model="formData.stok" class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter your Stok" />
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
        nama_produk: "",
      description: "",
      harga: "",
      stok: "",
      }

    };
  },
  computed:{
    ...mapGetters('produk', ['getProductById']),
    produk(){
      return this.getProductById;
    }
  },
  methods: {
    ...mapActions('produk', ['fetchProductById']),
    async updateProduct() {
      const productData = {
        id: this.$route.params.id,
        nama_produk: this.formData.nama_produk,
        description: this.formData.description,
        harga: this.formData.harga,
        stok: this.formData.stok
      };
      try {
        const success = await this.$store.dispatch("produk/updateProduct", productData); // Menggunakan aksi yang dimetakan
        if (success) {
          alert("Berhasil")
          this.nama_produk = "";
          this.description = "";
          this.harga = "";
          this.stok = "";
          this.$router.push({name: 'Adminproject'});
        }
      } catch (error) {
        alert("Gagal")
        console.error(error);
      }
    },
    async fetchData() {
  await this.fetchProductById(this.$route.params.id);
  const produk = this.produk.data;
  console.log(produk); // Tambahkan ini untuk memeriksa nilai produk di konsol browser
  if (produk) {
    this.formData = {
      nama_produk: produk.nama_produk,
      description: produk.description,
      harga: produk.harga,
      stok: produk.stok
    };
  }
}

  },
  mounted(){
    this.fetchData();
    }
  
};
</script>
