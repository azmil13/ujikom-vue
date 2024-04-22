<template>
  <footer class="">
  <div class="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 sm:px-20 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
    <div class="max-w-sm">
      <div class="mb-6 flex h-10 items-center space-x-2">
        <img class="h-full object-contain" src="/images/logo-circle.png" alt="" />
        <span class="text-lg font-medium">Boleno</span>
      </div>
      <div class="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad a officia ea expedita!</div>
    </div>
    <div class="">
      <div class="mt-4 mb-2 font-medium xl:mb-4">Guides</div>
      <nav aria-label="Guides Navigation" class="text-gray-500">
        <ul class="space-y-3">
          <li><a class="hover:text-blue-600 hover:underline" href="#">How to make a footer</a></li>
          <li><a class="hover:text-blue-600 hover:underline" href="#">Designing your app</a></li>
          <li><a class="hover:text-blue-600 hover:underline" href="#">Getting help from the community</a></li>
          <li><a class="hover:text-blue-600 hover:underline" href="#">Pricing vs Hourly Rate</a></li>
        </ul>
      </nav>
    </div>
    <div class="">
      <div class="mt-4 mb-2 font-medium xl:mb-4">Links</div>
      <nav aria-label="Footer Navigation" class="text-gray-500">
        <ul class="space-y-3">
          <li><a class="hover:text-blue-600 hover:underline" href="#">Pricing</a></li>
          <li><a class="hover:text-blue-600 hover:underline" href="#">Demo</a></li>
          <li><a class="hover:text-blue-600 hover:underline" href="#">Press</a></li>
          <li><a class="hover:text-blue-600 hover:underline" href="#">Support Hub</a></li>
          <li><a class="hover:text-blue-600 hover:underline" href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
    <div class="">
      <div class="flex flex-col mt-4 mb-2 font-medium xl:mb-4">
        <div>Support Us on Product Hunt</div>
        <div class="mt-5"><a href="https://wa.me/085795744281"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" id="whatsapp" x="0" y="0" version="1.1" viewBox="0 0 100 100" xml:space="preserve"><g id="Graphics-_x2F_-App-Icons-_x2F_-WhatsApp"><g id="Icon_6_"><linearGradient id="Background_13_" x1="50.723" x2="50.723" y1="627.233" y2="625.746" gradientTransform="matrix(60 0 0 -60 -2993 37639)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#62FA7F"></stop><stop offset=".686" stop-color="#22CC40"></stop><stop offset="1" stop-color="#05B723"></stop></linearGradient><path id="Background_7_" fill="url(#Background_13_)" d="M28.4 5H26c-2 .1-4.6.2-5.7.5-1.8.4-3.5.9-4.9 1.6-1.6.8-3.1 1.9-4.4 3.2-1.3 1.3-2.3 2.7-3.2 4.4-.7 1.4-1.3 3.1-1.6 4.8-.2 1.2-.4 3.8-.5 5.8V74c.1 2 .2 4.6.5 5.7.4 1.8.9 3.5 1.6 4.9.8 1.6 1.9 3.1 3.2 4.4 1.3 1.3 2.7 2.3 4.4 3.2 1.4.7 3.1 1.3 4.8 1.6 1.2.2 3.8.4 5.8.5h48.7c2-.1 4.6-.2 5.7-.5 1.8-.4 3.5-.9 4.9-1.6 1.6-.8 3.1-1.9 4.4-3.2 1.3-1.3 2.3-2.7 3.2-4.4.7-1.4 1.3-3.1 1.6-4.8.2-1.2.4-3.8.5-5.8V25.3c-.1-2-.2-4.6-.5-5.7-.4-1.8-.9-3.5-1.6-4.9-.8-1.6-1.9-3.1-3.2-4.4C88.4 9 87 8 85.3 7.1c-1.4-.7-3.1-1.3-4.8-1.6-1.2-.2-3.8-.4-5.8-.5H28.4z"></path><path id="WhatsApp-Icon" fill="#fff" d="M66.6 54.4c-.8-.4-4.8-2.3-5.5-2.6-.7-.3-1.3-.4-1.8.4s-2.1 2.6-2.5 3.1c-.5.5-.9.6-1.7.2-.8-.4-3.4-1.2-6.5-3.9-2.4-2.1-4-4.7-4.5-5.5-.5-.8 0-1.2.4-1.6.4-.4.8-.9 1.2-1.4.4-.5.5-.8.8-1.3.3-.5.1-1-.1-1.4-.2-.4-1.8-4.3-2.5-5.9-.7-1.5-1.3-1.3-1.8-1.4h-1.5c-.5 0-1.4.2-2.1 1-.7.8-2.8 2.7-2.8 6.6 0 3.9 2.9 7.6 3.3 8.2.4.5 5.7 8.5 13.7 11.9 1.9.8 3.4 1.3 4.6 1.7 1.9.6 3.7.5 5.1.3 1.5-.2 4.8-1.9 5.4-3.7.7-1.8.7-3.4.5-3.7-.4-.4-.9-.6-1.7-1M51.3 75c-4.8 0-9.4-1.3-13.5-3.7l-1-.6-10 2.6 2.7-9.7-.6-1c-2.6-4.2-4-9-4-14 0-14.5 11.9-26.3 26.5-26.3C58.3 22.3 65 25 70 30c5 5 7.7 11.6 7.7 18.6C77.7 63.1 65.8 75 51.3 75m22.5-48.8c-6-6-14-9.3-22.5-9.3-17.5 0-31.8 14.2-31.8 31.7 0 5.6 1.5 11 4.2 15.8l-4.5 16.4L36 76.4c4.6 2.5 9.9 3.9 15.2 3.9C68.7 80.3 83 66.1 83 48.6c.1-8.4-3.2-16.4-9.2-22.4"></path></g></g></svg>
      </a></div>
      <div class="flex flex-col">
        </div>
      </div>
    </div>
  </div>
  <div class="border-t">
    <div class="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:px-20 lg:flex-row lg:justify-between lg:text-left xl:px-10">
      <p class="">© 2022 Boleno | All Rights Reserved</p>
      <p class="-order-1 sm:order-none">Made with Remotely</p>
      <p class="">
        <a class="" href="#">Privacy Policy</a>
        <span>|</span>
        <a class="" href="#">Terms of Service</a>
      </p>
    </div>
  </div>
</footer>

</template>