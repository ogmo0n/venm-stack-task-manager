<template>
  <div class="jumbotron custom-bg-dark">
    <h1 class="display-4">VENM Stack Task Manager</h1>
    <p class="lead">
      This is a simple task manager application built with VueJS, ExpressJS,
      NodeJS, and MongoDB technologies.
    </p>
    <hr class="my-4" />
    <p>Click below to begin managing tasks for users.</p>
    <router-link to="/tasks" class="btn btn-success btn-lg">View Tasks</router-link>
  </div>
</template>

<style scoped>
.btn-success:hover {
  color: #fff !important;
  background-color: #218838 !important;
  border-color: #1e7e34 !important;
}
</style>
