import store from "../store";
export function isLoggedIn() {
  var token = localStorage.getItem("token");
  return token != null;
}
export function login() {
  var token = {
    username: "Chris"
  };
  setToken(token);
}

function setToken(token) {
  localStorage.setItem("token", JSON.stringify(token));
  store.dispatch("authenticate");
}

export function getUserName() {
  return "Chris";
}
export function getUserId() {
  return 1;
}