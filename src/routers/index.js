import { createRouter,createWebHashHistory} from "vue-router";

const home = () => import("../views/home.vue")
const about = () => import("../views/about.vue")

 const router = createRouter({
   history: createWebHashHistory(),
   routes:  [
    { path: "/", redirect: "/home" },
    {
      path: "/home",
      name: "home",
      component: home
    },
    {
      path: "/about",
      name: "about",
      component: about
    }
  ]
})

export default router