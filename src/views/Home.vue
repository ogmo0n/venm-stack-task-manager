<template>
  <div id="custom-home">
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  beforeCreate() {
    fetch(this.$store.state.apiUrl + "/api/user", {
      method: "GET"
    })
    // .then(res => res.json())
    .then(res => console.log(res));
  }
};
</script>

<style scoped>
#custom-home {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.btn-primary {
  background-color: #32aced !important;
}
.btn-success {
  background-color: #4fc08d !important;
}
.btn-success:hover {
  background-color: #3da978 !important;
}
</style>
