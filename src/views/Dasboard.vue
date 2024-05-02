<template>
<div class="bg-slate-200 flex h-screen">
  <aside class="fixed z-50 md:relative">
    <nav aria-label="Sidebar Navigation" class="peer-checked:w-64 left-0 z-10 flex h-screen w-0 flex-col overflow-hidden bg-gray-700 text-white transition-all md:h-screen md:w-64 lg:w-72">
      <div class="bg-slate-800 mt-5 py-4 pl-10 md:mt-10">
        <span class="">
          <span class="mr-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 align-bottom text-2xl font-bold">D</span>
          <span class="text-xl">asboard</span>
        </span>
      </div>
      <ul class="mt-8 space-y-3 md:mt-20">
        <li class="relative">
          <button class="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg></span>
                <span class=""> <router-link to="admin"> Data Produk </router-link> </span>
          </button>
          </li>
          <li class="relative"> 
          <button class="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 font-semibold focus:outline-none">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </span>
              <span class=""> <router-link to="datakontak"> Data Kontak </router-link> </span>
          </button>
          </li>
      </ul>
      <div class="my-6 mt-auto ml-10 flex cursor-pointer">
        <div>
          <img class="h-12 w-12 rounded-full" src="https://media.istockphoto.com/id/1475332674/id/vektor/logo-orang-pengguna-vektor-ikon-profil.jpg?s=612x612&w=0&k=20&c=tdOsVq7F2lPELrEbju2g7fpZzacjwu9TbRaTxbXZdlc=" />
        </div>
        <div class="ml-3">
          <p class="font-medium">Azmil Firdaus</p>
          <p class="text-sm text-gray-300"></p>
        </div>
      </div>
    </nav>
  </aside>

  <div class="flex h-full w-full flex-col">
  
    <header class="relative flex flex-col items-center bg-white px-4 py-4 shadow sm:flex-row md:h-20">
      <div class="flex w-full flex-col justify-between overflow-hidden transition-all sm:max-h-full sm:flex-row sm:items-center">

        <ul class="mx-auto mt-4 flex space-x-6 sm:mx-5 sm:mt-0">
          <li class="">
            <button class="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </li>
          <li class="">
            <button class="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </button>
          </li>
          <li class="">
            <button class="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </li>
        </ul>
      </div>
  </header>
  <div class="flex flex-wrap gap-x-4 gap-y-12 bg-gray-100 px-4 py-20 lg:px-20">
  <div class="flex w-72">
    <div class="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg">
      <div class="p-3">
        <div class="absolute -mt-10 h-16 w-16 rounded-xl bg-gradient-to-tr from-gray-700 to-gray-400 text-center text-white shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="mt-4 h-7 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div class="pt-1 text-right" v-if="product">
          <p class="text-sm font-light capitalize"></p>
          <h4 class="text-2xl font-semibold tracking-tighter xl:text-2xl">{{ product && product.rows ? product.rows.length : 'Loading...' }} </h4>
        </div>
        <div v-else>
          <h4>Memuat....</h4>
        </div>
      </div>
      <hr class="opacity-50" />
      <div class="p-4">
        <p class="font-light"><span class="text-sm font-bold text-green-600">+22% </span>vs last month</p>
      </div>
    </div>
  </div>
  <div class="flex w-72">
    <div class="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg">
      <div class="p-3">
        <div class="absolute -mt-10 h-16 w-16 rounded-xl bg-gradient-to-tr from-blue-700 to-blue-500 text-center text-white shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="mt-4 h-7 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <div class="pt-1 text-right">
          <p class="text-sm font-light capitalize"></p>
          <h4 class="text-2xl font-semibold tracking-tighter xl:text-2xl"></h4>
        </div>
      </div>
      <hr class="opacity-50" />
      <div class="p-4">
        <p class="font-light"><span class="text-sm font-bold text-green-600">+3% </span>vs last month</p>
      </div>
    </div>
  </div>
  </div>
</div>

      </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      nama_produk: "",
      description: "",
      harga: "",
      stok: "",
    };
  },
  computed: {
    ...mapGetters('produk', ['getAllProducts']),
    product() {
      return this.getAllProducts
    }
  },
  methods: {

    ...mapActions('produk', ['fetchProducts']),
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
        }
      } catch (error) {
        alert("Gagal")
        console.error(error);
      }
    },
  },
  mounted(){
    this.fetchProducts()
  }
};
</script>