<template>
  <div class="flex">
    <div class="w-64 bg-gray-900 inline-block">
      <!-- <div class="flex items-center justify-center mt-8">
        <router-link to="/" class="flex items-center">
          <span class="mx-2 text-2xl font-semibold text-white"
            >ADMIN BOARD</span
          >
        </router-link>
      </div> -->

      <nav class="mt-10">
        <p class="pl-4 text-xs font-semibold mb-4 text-gray-300">Main</p>
        <router-link class="flex items-center px-6 py-2 mt-4" to="/dashboard">
          <span class="mx-4 text-gray-100">Dashboard</span>
        </router-link>
        <p class="pl-4 my-2 text-xs font-semibold mb-4 text-gray-300">Links</p>

        <!-- <router-link class="flex items-center px-6 py-2 mt-4" to="/">
          <span class="mx-4 text-gray-100">Home</span>
        </router-link> -->

        <router-link class="flex items-center px-6 py-2 mt-4" to="/">
          <span class="mx-4 text-gray-100">Log In</span>
        </router-link>

        <router-link class="flex items-center px-6 py-2 mt-4" to="/about">
          <span class="mx-4 text-gray-100">users</span>
        </router-link>

        <p class="pl-4 text-xs my-2 font-semibold mb-4 text-gray-300">About</p>

        <router-link class="flex items-center px-6 py-2 mt-4" to="/about">
          <span class="mx-4 text-gray-100">About</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default { name: "PrimarySideBar" };
</script>
