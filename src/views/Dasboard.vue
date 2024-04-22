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
                <span class=""> <router-link to="admin"> admin </router-link> </span>
          </button>
          <li class="relative">
          <button class="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 font-semibold focus:outline-none">
            <span
              ><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg> </span
            ><span class="">Transaction</span>
          </button>
          </li>
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
    <!-- /Navbar -->

    <!-- Main -->
    <div class="h-full overflow-hidden pl-10">
      <main id="dashboard-main" class="h-[calc(100vh-10rem)] overflow-auto px-4 py-10">
        <!-- Put your content inside of the <main/> tag -->
        <h1 class="text-2xl font-black text-gray-800"></h1>
        <p class="mb-6 text-gray-600"></p>
        <div class="flex flex-wrap gap-x-4 gap-y-8">
          <h1 clss="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">Operational since 1967</h1>
        <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus accusamus esse cum, praesentium laudantium enim pariatur magnam accusantium illum animi? Quos quisquam at laborum eius?</p>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img style="width: 85%;" class="object-cover object-center rounded" alt="hero" src="https://media.istockphoto.com/id/1249693837/id/vektor/adegan-dengan-tiga-proyektor-garis-dan-ikon-padat-konsep-festival-musik-tanda-pencahayaan.jpg?s=612x612&w=0&k=20&c=TdML-Plgi9_rh0kCsunWoAndWHlMjbamQkTcH06wLYE=">
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img style="width: 85%;" class="object-cover object-center rounded" alt="hero" src="https://media.istockphoto.com/id/1249693837/id/vektor/adegan-dengan-tiga-proyektor-garis-dan-ikon-padat-konsep-festival-musik-tanda-pencahayaan.jpg?s=612x612&w=0&k=20&c=TdML-Plgi9_rh0kCsunWoAndWHlMjbamQkTcH06wLYE=">
    </div>
          <div class="sm:w-[38rem] mx-auto my-10 overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-lg">
          </div>
        </div>
      </main>
    </div>
  </div>
</div>
  
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
        }
      } catch (error) {
        alert("Gagal")
        console.error(error);
      }
    },
  },
};
</script>