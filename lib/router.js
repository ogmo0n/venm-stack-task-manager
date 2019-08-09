import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/authentication/Login.vue";
import Register from "./views/authentication/Register.vue";
import TasksAll from "./views/tasks/TasksAll.vue";
import TasksCreate from "./views/tasks/TasksCreate.vue";
import TasksEdit from "./views/tasks/TasksEdit.vue";
Vue.use(Router);
var isLoggedIn = false;
var routes = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
    path: "/",
    name: "home",
    component: Home
  }, {
    path: "/login",
    name: "login",
    component: Login,
    beforeEnter: function beforeEnter(to, from, next) {
      !isLoggedIn ? next() : next("/");
    }
  }, {
    path: "/register",
    name: "register",
    component: Register,
    beforeEnter: function beforeEnter(to, from, next) {
      !isLoggedIn ? next() : next("/");
    }
  }, {
    path: "/tasks",
    name: "tasks-all",
    component: TasksAll,
    beforeEnter: function beforeEnter(to, from, next) {
      isLoggedIn ? next() : next("/login");
    }
  }, {
    path: "/tasks/new",
    name: "tasks-create",
    component: TasksCreate,
    beforeEnter: function beforeEnter(to, from, next) {
      isLoggedIn ? next() : next("/login");
    }
  }, {
    path: "/tasks/:id",
    name: "tasks-edit",
    component: TasksEdit,
    beforeEnter: function beforeEnter(to, from, next) {
      isLoggedIn ? next() : next("/login");
    }
  }, // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "./views/About.vue")
  // },
  {
    path: "*",
    name: "/"
  }],
  linkActiveClass: "active"
});
/* routes.beforeEach((to, from, next) => {
  next("/home");
  next(false);
  isLoggedIn ? next() : next("/login");
}); */

export default routes;