import { createRouter, createWebHistory } from 'vue-router';
import AddData from '@/components/AddData'
import HelloWorld from '@/components/HelloWorld'
import Getdata from '@/components/Getdata'

const routes = [{
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld
},
{
    path: '/adddata',
    name: 'AddData',
    component: AddData
},
{
    path: '/',
    name: 'GetData',
    component: Getdata
}];
const router=createRouter({
    history: createWebHistory(),
    routes})
export default router