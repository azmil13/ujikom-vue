<template>
    <form @submit.prevent="createProduct" action="">
  
    <div class="space-y-4 px-8 py-10">
      <label class="block" for="name">
        <p class="text-gray-600">Nama Produk</p>
        <input v-model="nama_produk" class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter your Nama Produk " />
      </label>
      <label class="block" for="name">
        <p class="text-gray-600">Description</p>
        <input v-model="description" class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter your Descriptiption" />
      </label>
      <label class="block" for="name">
        <p class="text-gray-600">Harga</p>
        <input v-model="harga" class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter your Harga" />
      </label>
      <label class="block" for="name">
        <p class="text-gray-600">Stok</p>
        <input v-model="stok" class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter your Stok" />
      </label>
      
      <button class="mt-4 rounded-full bg-blue-800 px-10 py-2 font-semibold text-white">Submit</button>
    </div>
    </form>
  
  </template>
  <script>
  export default {
    data() {
      return {
        nama_produk: "",
        description: "",
        harga: "",
        stok: "",
      };
    },
    methods: {
      async createProduct() {
        const projectData = {
          nama_produk: this.nama_produk,
          description: this.description,
          harga: this.harga,
          stok: this.stok
        };
        try {
          const success = await this.$store.dispatch(
            "product/createProduct",
            projectData
          );
  
          if (success) {
        alert("Berhasil")
            this.nama_produk = "";
            this.description = "";
            this.harga = "";
            this.stok = "";

            this.$router.push("/admin")
          }
        } catch (error) {
          alert("Gagal")
          console.error(error);
        }
      },
    },
  };
  </script>