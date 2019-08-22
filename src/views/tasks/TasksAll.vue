<template>
<div>
  <h1>Tasks All Route</h1>
  <router-link to="/tasks/new" class="btn btn-success ml-2">Create Task</router-link>
</div>
</template>

<script>
import * as taskService from "../../services/TaskService";

export default {
  name: "tasks-all",
  data: function() {
    return {
      tasks: null,
      currentTaskId: null
    }
  },
  beforeRouteEnter(to, from, next) {
    taskService.getAllTasks()
      .then(res => {
        // console.log(res);
          next(vm => {
            vm.tasks = res.data.tasks;
          });
      });
  }
};
</script>
