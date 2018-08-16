import Index from './components/Index/Index'
import Home from './components/Home/Home'
import SystemSetting from './components/System/SystemSetting'

const routes = [
    {
        component: Index,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home
            },{
                path: '/system',
                component: SystemSetting
            }
        ]
    }
]


export default routes