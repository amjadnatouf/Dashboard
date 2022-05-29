<template>
  <nav class="navbar">
    <div class="relative hidden md:block">
      <span class="absolute inset-y-0 left-0 flex items-center pl-3"
        ><i class="fa-solid fa-magnifying-glass"></i>
      </span>
      <input class="search" type="text" placeholder="Search" />
    </div>
    <div class="relative">
      <div class="img-container w-16 rounded-full">
        <img
          class="bg-cover rounded-full"
          :src="$store.state.user.imgURL"
          alt="logo"
        />
      </div>
      <div class="absolute bg-gray-800 text-center right-10 rounded-xl">
        <div class="user">
          <p class="mb-1">{{ $store.state.user.name }}</p>
          <p class="mb-1">{{ $store.state.user.email }}</p>
        </div>

        <button class="btn-out my-3 text-white">logout</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "PrimaryHeader",
  methods: {
    login() {
      return this.$store.commit("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
<style scoped>
.user {
  color: white;
  padding: 2rem;
  position: relative;
  /* background-color: red; */
}
.user::after {
  content: "";
  position: absolute;
  border-bottom: 2px solid white;
  width: 100%;
  bottom: 0;
  left: 0;
}
</style>
