import Kind from '@/components/Kind/index.js'
import Register from '@/components/Register/index.js'
import Detail from '@/components/Detail/index.js'
import Login from '@/components/Login/index.js'
import Home from '@/components/Home/index.js'
import City from '@/components/City/index.js'

const rootRoutes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/detail/:goodsID',
        component: Detail
    },
    {
        path: '/kind/:classID',
        component: Kind
    },
    {
        path: '/city',
        component: City
    }
]

export default rootRoutes