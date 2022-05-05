<template>
  <div class="wrapper">
    <Header />
  </div>

  <main>
    <router-view />
    <footer class="container">
      <div class="border-top py-3">
        &copy; How
        <Refs />
      </div>
    </footer>
  </main>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "MainLayout",
  components: {
    Header,
  },
};
</script>



<style>
</style>

