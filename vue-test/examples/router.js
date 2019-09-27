
import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import HelloWorld from './components/HelloWorld'
import Cart from './components/Cart'
import Person from './components/Person'
import Login from './components/login/Login'

//订单模块
import Order from './components/order/Order'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'helloworld', component: HelloWorld },
        { path: '/cart', name: 'cart', component: Cart },
        { path: '/person', name: 'person', component: Person },
        //订单模块
        { path: '/order', name: 'order', component: Order },
        { path: '/login', name: 'login', component:  Login},
    ]
})
