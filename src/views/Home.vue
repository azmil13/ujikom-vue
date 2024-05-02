<template>
  <body>
    
    <div class="mx-auto h-full   md:py-28 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
      <div class="flex flex-col  items-center justify-between lg:flex-row">
        <div class="">
          <div class="lg:max-w-xl lg:pr-5">
            <p class="flex text-sm uppercase font-bold text-green-700 ">
              <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd" />
              </svg>
              Scisa-Tshirt
            </p>
            <h2 class="mb-6 max-w-lg text-5xl font-bold leading-snug tracking-tight text-green-600 sm:text-7xl sm:leading-snug">
              Selamat Datang
              <span class="my-1 inline-block  bg-gray-800 px-4 font-bold text-white">Scisa-Tshirt</span>
            </h2>
            <p class="text-base font-bold text-gray-700">Baju berkualtias terbaik dari Indonesia dibuat oleh tangan tangan Indonesia</p>
          </div>
          <div class="mt-10 flex flex-col items-center md:flex-row">
            <a href="/product" class="mb-3 inline-flex h-12 border w-full items-center justify-center rounded bg-green-500 px-6 font-medium tracking-wide text-white shadow-md transition hover:bg-green-800 hover:text-white  focus:outline-none md:mr-4 md:mb-0 md:w-auto">Lihat Produk</a>
          </div>
        </div>
        <div class="relative hidden lg:ml-32 lg:block lg:w-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" class="my-6 mx-auto h-10 w-10 animate-bounce rounded-full bg-blue-50 p-2 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
          </svg>
          <svg class="h-full w-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="img1"  x="0" y="0" width="3" height="3">
            <image x="0" y="0" width="90%"  height="90%" preserveAspectRatio="xMaxYMax slice" href="../assets/pakaian1.jpg.jpg" />
          </pattern>
        </defs>
        <path fill="url(#img1)" d="M40,-62.6C52.2,-54.5,62.5,-43.9,66.9,-31.4C71.3,-18.9,69.6,-4.6,65.9,8.3C62.2,21.1,56.4,32.5,49.2,45.2C42.1,57.9,33.7,72.1,22.2,75.3C10.7,78.5,-3.9,70.7,-14.8,62.1C-25.7,53.5,-32.8,44.1,-44.9,35.8C-57,27.5,-74,20.3,-82.1,7.7C-90.3,-4.8,-89.5,-22.7,-80.8,-34.8C-72,-46.9,-55.2,-53.3,-40.4,-60.2C-25.6,-67,-12.8,-74.3,0.6,-75.2C13.9,-76.1,27.9,-70.6,40,-62.6Z" transform="translate(100 100)" />
      </svg>
        </div>
      </div>
    </div>

    <section class="py-20">
  <h1 class="mb-12 text-center font-sans text-5xl font-bold text-gray-900">Produk Populer</h1>
  <div class="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
    <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
      <a href="#">
        <div class="relative flex items-end overflow-hidden rounded-xl">
          <img src="../assets/baju1.webp" alt="Hotel Photo" />
          <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
          </div>
        </div>

        <div class="mt-1 p-2">
          <h2 class="text-slate-700 font-bold">Baju</h2>
          <p class="text-slate-400 mt-1 text-sm">Bandung, Indonesia</p>

          <div class="mt-3 flex items-end justify-between">
            <span class="text-lg font-bold text-blue-500">$450</span>
            <div class="group inline-flex rounded-xl bg-blue-100 p-2 hover:bg-blue-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:text-blue-500 h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </article>

    <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
      <a href="#">
        <div class="relative flex items-end overflow-hidden rounded-xl">
          <img src="../assets/baju2.webp" alt="Hotel Photo" />
          <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
          </div>
        </div>

        <div class="mt-1 p-2">
          <h2 class="text-slate-700 font-bold">Baju </h2>
          <p class="text-slate-400 mt-1 text-sm">Bandung, Indonesia</p>

          <div class="mt-3 flex items-end justify-between">
            <p>
              <span class="text-lg font-bold text-blue-500">$450</span>
              
            </p>

            <div class="group inline-flex rounded-xl bg-blue-100 p-2 hover:bg-blue-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:text-blue-500 h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </article>

    <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
      <a href="#">
        <div class="relative flex items-end overflow-hidden rounded-xl">
          <img src="../assets/baju3.webp" alt="Hotel Photo" />
          <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
          </div>
        </div>

        <div class="mt-1 p-2">
          <h2 class="text-slate-700 font-bold">Baju</h2>
          <p class="text-slate-400 mt-1 text-sm">Bandung, Indonesia</p>

          <div class="mt-3 flex items-end justify-between">
            <p>
              <span class="text-lg font-bold text-blue-500">$1,450</span>
              
            </p>

            <div class="group inline-flex rounded-xl bg-blue-100 p-2 hover:bg-blue-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:text-blue-500 h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </article>
  </div>
</section>
  
<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">
    <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
      <div class="md:pt-8 lg:flex lg:flex-col lg:justify-center">
        <p class="text-center font-bold text-green-500 md:text-left">Kenapa pilih kami</p>

        <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">Berdiri Sejak 2023</h1>

        <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">Pilih SCISA T-Shirt untuk pengalaman fashion yang unik. Desain kreatif, kualitas terbaik, dan komunitas yang merayakan keberanian berekspresi</p>
      </div>
      <div>
        <div class="h-10 overflow-hidden  md:h-auto">
          <svg class="h-25 ml-9" alt="logo" viewBox="0 0 10240 10240">
                        <path xmlns="" d="M8284 9162 c-2 -207 -55 -427 -161 -667 -147 -333 -404 -644 -733 -886 -81 -59 -247 -169 -256 -169 -3 0 -18 -9 -34 -20 -26 -19 -344 -180 -354 -180 -3 0 -29 -11 -58 -24 -227 -101 -642 -225 -973 -290 -125 -25 -397 -70 -480 -80 -22 -3 -76 -9 -120 -15 -100 -13 -142 -17 -357 -36 -29 -2 -98 -7 -153 -10 -267 -15 -436 -28 -525 -40 -14 -2 -45 -7 -70 -10 -59 -8 -99 -14 -130 -20 -14 -3 -41 -7 -60 -11 -19 -3 -39 -7 -45 -8 -5 -2 -28 -6 -50 -10 -234 -45 -617 -165 -822 -257 -23 -10 -45 -19 -48 -19 -7 0 -284 -138 -340 -170 -631 -355 -1107 -842 -1402 -1432 -159 -320 -251 -633 -308 -1056 -26 -190 -27 -635 -1 -832 3 -19 7 -59 10 -89 4 -30 11 -84 17 -120 6 -36 12 -77 14 -91 7 -43 33 -174 39 -190 3 -8 7 -28 9 -45 6 -35 52 -221 72 -285 7 -25 23 -79 35 -120 29 -99 118 -283 189 -389 67 -103 203 -244 286 -298 75 -49 178 -103 196 -103 16 0 27 16 77 110 124 231 304 529 485 800 82 124 153 227 157 230 3 3 28 36 54 74 116 167 384 497 546 671 148 160 448 450 560 542 14 12 54 45 90 75 88 73 219 172 313 238 42 29 77 57 77 62 0 5 -13 34 -29 66 -69 137 -149 405 -181 602 -7 41 -14 82 -15 90 -1 8 -6 46 -10 83 -3 37 -8 77 -10 88 -2 11 -7 65 -11 122 -3 56 -8 104 -9 107 -2 3 0 12 5 19 6 10 10 8 15 -10 10 -34 167 -346 228 -454 118 -210 319 -515 340 -515 4 0 40 18 80 40 230 128 521 255 787 343 118 40 336 102 395 113 28 5 53 11 105 23 25 5 59 12 75 15 17 3 41 8 55 11 34 7 274 43 335 50 152 18 372 29 565 29 194 0 481 -11 489 -19 2 -3 -3 -6 -12 -6 -9 -1 -20 -2 -24 -3 -33 -8 -73 -16 -98 -21 -61 -10 -264 -56 -390 -90 -649 -170 -1243 -437 -1770 -794 -60 -41 -121 -82 -134 -93 l-24 -18 124 -59 c109 -52 282 -116 404 -149 92 -26 192 -51 220 -55 17 -3 64 -12 105 -21 71 -14 151 -28 230 -41 19 -3 46 -7 60 -10 14 -2 45 -7 70 -10 25 -4 56 -8 70 -10 14 -2 53 -7 88 -10 35 -4 71 -8 81 -10 10 -2 51 -6 92 -9 101 -9 141 -14 147 -21 3 -3 -15 -5 -39 -6 -24 0 -52 -2 -62 -4 -21 -4 -139 -12 -307 -22 -242 -14 -700 -7 -880 13 -41 4 -187 27 -250 39 -125 23 -274 68 -373 111 -43 19 -81 34 -86 34 -4 0 -16 -8 -27 -17 -10 -10 -37 -33 -59 -52 -166 -141 -422 -395 -592 -586 -228 -257 -536 -672 -688 -925 -21 -36 -43 -66 -47 -68 -4 -2 -8 -7 -8 -11 0 -5 -24 -48 -54 -97 -156 -261 -493 -915 -480 -935 2 -3 47 -21 101 -38 54 -18 107 -36 118 -41 58 -25 458 -138 640 -181 118 -27 126 -29 155 -35 14 -2 45 -9 70 -14 66 -15 137 -28 300 -55 37 -7 248 -33 305 -39 28 -3 84 -9 125 -13 163 -16 792 -8 913 12 12 2 58 9 102 15 248 35 423 76 665 157 58 19 134 46 170 60 86 33 344 156 348 166 2 4 8 7 13 7 14 0 205 116 303 184 180 126 287 216 466 396 282 281 511 593 775 1055 43 75 178 347 225 455 100 227 236 602 286 790 59 220 95 364 120 485 6 28 45 245 50 275 2 14 7 41 10 60 3 19 8 49 10 65 2 17 6 46 9 65 15 100 35 262 40 335 3 39 8 89 10 112 22 225 33 803 21 1043 -3 41 -7 129 -11 195 -3 66 -8 136 -10 155 -2 19 -6 76 -10 125 -3 50 -8 101 -10 115 -2 14 -6 57 -10 95 -7 72 -12 113 -20 175 -2 19 -7 55 -10 80 -6 46 -43 295 -51 340 -2 14 -9 54 -15 90 -5 36 -16 97 -24 135 -8 39 -17 84 -20 100 -12 68 -18 97 -50 248 -19 87 -47 204 -61 260 -14 56 -27 109 -29 117 -30 147 -232 810 -253 832 -4 4 -7 -23 -8 -60z"></path>
                    </svg>
        </div>
      </div>
      <div class="md:col-span-2">
        <h2 class="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">Tentang Kita</h2>

        <p class="mb-6 text-gray-500 text-lg ">Tumbuh dari kecintaan pada kreativitas dan keberanian dalam berekspresi, SCISA T-Shirt menawarkan lebih dari sekadar pakaian. Sejak 2023, kami telah menjadi tempat bagi para pencari inspirasi untuk mengekspresikan diri melalui desain yang memukau. Gabungan antara seni dan fashion kami hadir untuk mengisi ruang kosong pada tubuh dan jiwa dengan kebanggaan akan identitas diri. Bergabunglah dengan kami dalam perjalanan mencari jati diri dan menghadirkan keunikan melalui setiap karya.</p>
      </div>
    </div>
  </div>
</div>


  </body>

</template>