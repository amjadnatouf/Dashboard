<template>
  <div class="flex justify-center items-center wrapper">
    <div class="w-3/4 md:w-1/4 p-5 border-2 bg-white rounded-xl">
      <form>
        <h2 class="text-3xl font-extrabold text-center p-10">Login</h2>

        <div class="mb-5">
          <label for="email" class="block mb-2">Email:</label>
          <input
            type="email"
            id="email"
            class="input"
            v-model="email"
            placeholder="example@mail.com"
            @input="(event) => (email = event.target.value)"
          />
          <small class="text-red-500" v-if="!email">
            Eamil can't be empty</small
          >
        </div>
        <div class="mb-10">
          <label for="password" class="block mb-2">password:</label>
          <input
            type="password"
            id="password"
            class="input"
            v-model="password"
            placeholder="password"
            @input="(event) => (password = event.target.value)"
          />
          <small class="text-red-500" v-if="!password">
            Eamil can't be empty</small
          >
        </div>
        <button class="btn block w-full mb-10" @click.prevent="login()">
          login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
// import { mapGetter, mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: false,
    };
  },
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
.wrapper {
  /* background-color: rebeccapurple; */
  height: calc(100vh - 66.6px);
}
</style>
