import { createRouter, createWebHistory } from 'vue-router';
import About from '../components/About.vue';
import Hello from '../components/Hello.vue'


const routes =[
    {
        path:'/about',
        component:About
    },
    {
        path:'/hello',
        component:Hello
    }

]


const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;
