<template>
  <nav class="flex justify-between px-10 py-3 bg-gray-900 text-white">
    <div class="logo ml-5 text-3xl font-extrabold">
      <router-link to="/">Logo</router-link>
    </div>
    <ul class="flex justify-between text-xl">
      <!-- <li>
        <router-link to="/">Home</router-link>
      </li> -->
      <li class="px-5">
        <router-link to="/dashboard">DashBoard</router-link>
      </li>
      <li>
        <router-link to="/">Log In</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "PrimaryNavbar",
};
</script>

<style></style>
