import VueRouter from 'vue-router'

const Index = (resolve) => { require(['../components/index.vue'], resolve) }
const Dashboard = (resolve) => { require(['../components/dashboard.vue'], resolve) }

const routes = [
    {
        path: '/index',
        component: Index
    },
    {
        path: '/dashboard',
        component: Dashboard
    }
]

const router = new VueRouter({
    routes
})

export default router