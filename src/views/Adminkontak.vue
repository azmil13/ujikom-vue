<template>
  <div>
    <div class="mx-auto mt-8 max-w-screen-lg px-2">
      <div class="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
        <p class="flex-1 text-base font-bold text-gray-900">Data Kontak</p>
      </div>

      <div class="mt-6 overflow-hidden rounded-xl border shadow">
        <table class="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
          <thead class="hidden border-b lg:table-header-group">
            <tr class="">
              <td width="50%" class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Email</td>
              <td width="50%" class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Nama</td>
              <td width="50%" class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Pesan</td>
              <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Date</td>
              <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Status</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="kontak in getAllKontak" :key="kontak.id">
              <td class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">{{ kontak?.email }}</td>
              <td class="whitespace-no-wrap py-4 text-sm font-normal text-gray-500 sm:px-6">{{ kontak?.nama }}</td>
              <td class="whitespace-no-wrap py-4 text-sm font-normal text-gray-500 sm:px-6">{{ kontak?.pesan }}</td>
              <td class="whitespace-no-wrap py-4 text-sm font-normal text-gray-500 sm:px-6">{{ kontak?.createdAt }}</td>
              <td class="whitespace-no-wrap py-4 text-sm font-normal text-gray-500 sm:px-6">
                <div class="flex w-full">
                  <a href="" @click="showEditForm(kontak)" class="m-2 inline-flex items-center justify-center rounded-xl border border-transparent bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700">Edit</a>
                  <a href="" @click="deleteForm(kontak)" class="m-2 inline-flex items-center justify-center rounded-xl border bg-white px-5 py-3 font-medium text-blue-600 shadow hover:bg-blue-50">Hapus</a>
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
    ...mapGetters('kontak', ['getAllKontak']),
  },
  methods: {
    ...mapActions('kontak', ['fetchKontak']),
    showEditForm(kontak) {
      this.$router.replace(`/editkontak/${kontak.id}`);
    },
    deleteForm(kontak) {
      const isConfirmed = window.confirm('Apakah Anda yakin ingin menghapus kontak ini?');
      if (isConfirmed) {
        this.$store.dispatch('kontak/deleteKontak', kontak.id)
          .then(() => {
            // Penghapusan berhasil, perbarui daftar kontak
            this.fetchKontak();
          })
          .catch((error) => {
            // Tangani kesalahan jika penghapusan gagal
            console.error('Gagal menghapus kontak:', error);
          });
      }
    },
  },
  mounted() {
    this.fetchKontak();
  },
};
 
</script>
