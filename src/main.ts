import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDhoCL7H_6_ABwyCOH7uB05aKOtoO5lFrk",
  authDomain: "trying-out-vue.firebaseapp.com",
  projectId: "trying-out-vue",
  storageBucket: "trying-out-vue.appspot.com",
  messagingSenderId: "350150615961",
  appId: "1:350150615961:web:6cf4a2d9cde6b63860a908",
  measurementId: "G-NZ5R6V3KDY",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).mount("#app");
