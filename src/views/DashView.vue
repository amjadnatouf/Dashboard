<template>
  <div class="flex h-screen bg-gray-200 font-sans">
    <SideBar class="hidden" />
    <div class="flex-1 flex flex-col overflow-hidden">
      <Header />

      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div class="container mx-auto px-6 py-8">
          <User />
        </div>
      </main>
      <Footer />
    </div>
  </div>
</template>

<script>
import SideBar from "../components/sidebar.vue";
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import User from "../components/userinterface.vue";

export default {
  components: {
    SideBar,
    Header,
    Footer,
    User,
  },
};
</script>
