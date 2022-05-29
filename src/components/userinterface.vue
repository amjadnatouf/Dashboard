<template>
  <div class="container rounded-lg overflow-hidden">
    <table class="min-w-full rounded-xl">
      <thead>
        <tr>
          <th class="row">Name</th>
          <th class="row">Title</th>
          <th class="row">Status</th>
          <th class="row">Role</th>
          <th class="row"></th>
        </tr>
      </thead>

      <tbody class="bg-white">
        <tr v-for="user in users" :key="user.id">
          <td class="first-column body-row">
            <div class="flex items-center">
              <div class="flex-shrink-0 w-10 h-10">
                <img class="avtar" :src="user.imgURL" alt="" />
              </div>
              <div class="ml-4">
                <div class="text-sm font-medium leading-5 text-gray-900">
                  {{ user.name }}
                </div>
                <div class="text-sm leading-5 text-gray-500">
                  {{ user.email }}
                </div>
              </div>
            </div>
          </td>

          <td class="second-column body-row">
            <div class="text-sm leading-5 text-gray-900">
              {{ user.title }}
            </div>
            <div class="text-sm leading-5 text-gray-500">
              {{ user.title2 }}
            </div>
          </td>

          <td class="third-column body-row">
            <span v-if="user.loggedIn" class="status">loggedIn</span>
            <span v-else class="status">loggedout</span>
          </td>

          <td class="four-column body-row">
            {{ user.role }}
          </td>

          <td class="update">
            <div class="flex justify-evenly">
              <span @click="logout(user.email)" class="icon">
                <i class="fa-solid fa-pen-to-square h-5 w-5"></i>
              </span>
              <span class="icon">
                <i class="fa-solid fa-trash-can h-5 w-5 text-red-700"></i>
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "UserInterface",
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    logout(_email) {
      return this.$store.commit("logout", _email);
    },
  },
};
</script>
