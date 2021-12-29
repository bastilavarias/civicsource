import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "details",
    component: () => import("@/views/Detail"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
