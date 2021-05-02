import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'
import About from '../components/About.vue';
import Hello from '../components/Hello.vue';
import Echart from '../components/Echart.vue';
import Echart1 from '../components/Echart.vue';



const routes =[
    {
        path:'/',
        component:Home
    },
    {
        path:'/about',
        component:About
    },
    {
        path:'/hello',
        component:Hello
    },
    {
        path:'/echart',
        component:Echart
    },
    {
        path:'/echart1',
        component:Echart1
    }


]


const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;
