import { createRouter, createWebHistory } from 'vue-router';
import Home from '/root/Portfolio/vue1/src/views/Home.vue';
import About from '/root/Portfolio/vue1/src/views/About.vue';
import Contact from '/root/Portfolio/vue1/src/views/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || '/'),
  routes,
});

export default router;
