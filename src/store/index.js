import router from "@/router";
import { createStore } from "vuex";
// import { $router } from "vuex";
import store from "../store/index";

export default createStore({
  state: {
    users: [
      {
        imgURL:
          "https://image.shutterstock.com/z/stock-vector-isolated-avatar-of-an-afro-american-man-vector-illustration-2012367269.jpg",
        name: "Amjad",
        role: "Admin",
        loggedIn: false,
        email: "mail@mail.com",
        title: "title_one",
        title2: "title_one_alter",
        password: "BytMig123",
      },
      {
        imgURL:
          "https://image.shutterstock.com/z/stock-vector-young-afro-man-avatar-character-male-face-portrait-cartoon-person-vector-illustration-723829372.jpg",
        name: "John",
        role: "Admin",
        loggedIn: true,
        email: "john@mail.com",
        title: "title_two",
        title2: "title_two_alter",
        password: "BytMig123",
      },
      {
        imgURL:
          "https://pngset.com/images/cartoon-man-avatar-person-face-head-glasses-transparent-png-186572.png",
        name: "Joakim",
        role: "User",
        loggedIn: true,
        email: "joakim@mail.com",
        title: "title_three",
        title2: "title_three_alter",
        password: "BytMig123",
      },
      {
        imgURL:
          "https://cdn.vectorstock.com/i/1000x1000/28/07/avatar-man-cartoon-vector-10622807.webp",
        name: "Jannet",
        role: "Editor",
        loggedIn: false,
        email: "jannet@mail.com",
        title: "title_four",
        title2: "title_four_alter",
        password: "BytMig123",
      },
      {
        imgURL:
          "https://image.shutterstock.com/z/stock-vector-asian-boy-smiling-male-avatar-cartoon-guy-character-facial-expression-smile-vector-illustration-625960208.jpg",
        name: "Hans",
        role: "User",
        loggedIn: true,
        email: "Hans@mail.com",
        title: "title_five",
        title2: "title_five_alter",
        password: "BytMig123",
      },
    ],
    user: {},
  },
  getters: {},
  mutations: {
    login(state, payload) {
      // console.log(payload.email, payload.password);
      console.log(state.users);
      if (!payload.email || !payload.password) {
        !payload.email
          ? (state.emailError = "this can't be empty")
          : (state.passError = "this can't be empty");
      } else {
        let _user = state.users.find((user) => user.email === payload.email);
        state.user = _user;
        if (!state.user) {
          console.log("user is not registerd.... please SignIn");
        } else if (payload.password !== state.user.password) {
          console.log("password is not correct");
        } else {
          if (state.user.loggedIn == false) {
            state.user.loggedIn = !state.user.loggedIn;
            router.push({
              name: "dashboard",
              params: { name: store.state.user },
            });
          } else {
            router.push({
              name: "dashboard",
              params: { name: store.state.user },
            });
          }
        }
      }
    },
    logout(state, el) {
      let _user = state.users.find((user) => user.email === el);
      state.user = _user;
      console.log(el);
      console.log(state.user);
      if (state.user.loggedIn == true) {
        state.user.loggedIn = !state.user.loggedIn;
        console.log(state.user.name + " " + "has logged out");
      }
    },
  },
  actions: {},
  modules: {},
});
