import DashView from './components/dashboard/Dash.vue'
import Principal from './components/Principal/Principal.vue'
import PrincipalMenu from './components/principalmenu/PrincipalMenu.vue'

//import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'

// Import Views - Dash
import DashboardView from './components/views/Dashboard.vue'
import PrincipalView from './components/views/PrincipalView.vue'
import OfertaView from './components/views/OfertaView.vue'

import FueraServicio from './components/FueraServicio.vue'
//import config from '../config'

/*
import TablesView from './components/views/Tables.vue'
import TasksView from './components/views/Tasks.vue'
import SettingView from './components/views/Setting.vue'
import AccessView from './components/views/Access.vue'
import ServerView from './components/views/Server.vue'
import ReposView from './components/views/Repos.vue'
*/ 
// Routes
const routes = [      
  {
    path: '/',
    component: Principal,
    children: [
      {
        path: 'principalview',
        alias: '',
        component: PrincipalView,
        name: 'Principal',
        meta: {description: '',mantencion:false}
      }
    ]
  },
  /*
  {
    path: '/',
    component: FueraServicio
  },*/
  {
    path: '/enmantencion',
    component: FueraServicio
  },
  {
    path: '/Ofertas',
    component: PrincipalMenu,
    children: [
      {
        path: 'ofertaview',
        alias: '',
        component: OfertaView,
        name: 'Oferta',
        meta: {description: ''}
      }
    ]
  },
  {
    path: '/dashboard',
    component: DashView,
    children: [
      {
        path: 'dashboard',
        alias: '',
        component: DashboardView,
        name: 'Panel de Control',
        meta: {description: ''}
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
