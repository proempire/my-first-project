import VueRouter from 'vue-router'

import Index from '../components/index'
// import Dashboard from '../components/dashboard'
// import NotFoundComponent from '../components/not-found-component'
// const Index = (resolve) => { require(['../components/index.vue'], resolve) }
const Dashboard = (resolve) => { require(['../components/dashboard'], resolve) }
const NotFound = (resolve) => { require(['../components/not-found'], resolve) }

const ItWorks = {
    template: '<div>It works!</div>'
}

const routes = [
    // { path: '/', name: 'root', component: ItWorks },
    {
        path: '/index',
        component: Index
    },
    {
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '*',
        component: NotFound
    }
]

const router = new VueRouter({
    base: '/',
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    console.log(to.path)
    console.log(Index)
    // window.location.href = 'http://localhost:8080/index'
    if (to.path === '/') {
        next('/index')
    }
})

export default router