
import {createRouter,createWebHistory} from 'vue-router';
import DcHeros from './pages/DcHeros.vue';
import Calender from './pages/Calender.vue';
import Home from './pages/Home.vue';
import Markdown from './pages/Markdown.vue';
import Slider from './pages/Slider.vue';

const routes =[
    {path:'/',component:Home},
    {path:'/dc-heros',component:DcHeros},
    {path:'/calender',component:Calender},
    {path:'/markdown',component:Markdown},
    {path:'/slider',component:Slider},
]
const router=createRouter({
    history:createWebHistory(),
    routes,
});
export default router;