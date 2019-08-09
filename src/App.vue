<template>
  <div id="app">
    <Navbar />
    <div id="app-container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Footer
  },
  beforeCreate: function() {
    this.$store.dispatch("authenticate");
  }
};
</script>

<style scoped>
div#app-container {
  background-color: #1d2733;
  overflow: auto;
  padding: 2rem;
  position: fixed;
  bottom: 96px;
  left: 0;
  top: 96px;
  width: 100%;
}
</style>
