<template>
  <div>
    <div class="mx-auto mt-8 max-w-screen-lg px-2">
      <div class="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
        <p class="flex-1 text-base font-bold text-gray-900">Data Produk</p>

        <div class="mt-4 sm:mt-0">
          <div class="flex items-center justify-start sm:justify-end">
            <div class="flex items-center">
            </div>

            <button type="button" class="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow">
              <svg class="mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" class=""></path>
              </svg>
              <router-link to="tambah">ADD</router-link>
            </button>
          </div>
        </div>
      </div>

      <div class="mt-6 overflow-hidden rounded-xl border shadow">
        <table class="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
          <thead class="hidden border-b lg:table-header-group">
            <tr class="">
              <td width="50%" class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Nama produk</td>
              <td width="50%" class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Description</td>
              <td width="50%" class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Harga</td>
              <td width="50%" class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Stok</td>
              <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Date</td>
              <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Status</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in getAllProducts?.rows" :key="product.id">
              <td class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">{{ product?.nama_produk }}</td>
              <td class="whitespace-no-wrap py-4 text-sm font-normal text-gray-500 sm:px-6">{{ product?.description }}</td>
              <td class="whitespace-no-wrap py-4 text-sm font-normal text-gray-500 sm:px-6">{{ product?.harga }}</td>
              <td class="whitespace-no-wrap py-4 text-sm font-normal text-gray-500 sm:px-6">{{ product?.stok }}</td>
              <td class="whitespace-no-wrap py-4 text-sm font-normal text-gray-500 sm:px-6">{{ product?.createdAt }}</td>
              <td class="whitespace-no-wrap py-4 text-sm font-normal text-gray-500 sm:px-6">
                <div class="flex w-full">
                  <a href="" @click="showEditForm(product)" class="m-2 inline-flex items-center justify-center rounded-xl border border-transparent bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700">Edit</a>
                  <a href="" @click="deleteForm(product)" class="m-2 inline-flex items-center justify-center rounded-xl border bg-white px-5 py-3 font-medium text-blue-600 shadow hover:bg-blue-50">Hapus</a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('produk', ['getAllProducts']),
  },
  methods: {
    ...mapActions('produk', ['fetchProducts']),
    showEditForm(product) {
      this.$router.replace(`/edit/${product.id}`)
    },
    deleteForm(product) {
  const isConfirmed = window.confirm('Apakah Anda yakin ingin menghapus produk ini?');
  if (isConfirmed) {
    this.$store.dispatch('produk/deleteProduct', product.id)
      .then(() => {
        // Penghapusan berhasil, perbarui daftar produk
        this.fetchProducts();
      })
      .catch((error) => {
        // Tangani kesalahan jika penghapusan gagal
        console.error('Gagal menghapus produk:', error);
      });
  }
},

  },
  mounted() {
    this.fetchProducts();
  },
};
</script>
