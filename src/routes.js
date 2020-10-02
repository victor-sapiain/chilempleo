import DashView from './components/dashboard/Dash.vue'
import Principal from './components/Principal/Principal.vue'
import OfertaPostulacion from './components/oferta/Postulacion.vue'
import Acceso from './components/cuenta/Login.vue'


//import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'

// Import Views - Dash
import DashboardView from './components/views/Dashboard.vue'
import PrincipalView from './components/views/PrincipalView.vue'
import OfertaPostulacionView from './components/views/OfertaPostulacionView.vue'
import AccesoView from './components/views/LoginView.vue'

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
        path: 'Principal',
        alias: '',
        component: PrincipalView,
        name: 'Principal',
        meta: {
          description: '',
          mantencion:false,          
        }
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
    path: '/ofertas',
    component:OfertaPostulacion,
    children: [
      {
        path: 'ofertas',
        alias: '',
        component: OfertaPostulacionView,
        name: 'Oferta',
        meta: {description: ''}
      }
    ]
  },
  {
    path: '/acceso',
    component: Acceso,
    children: [
      {
        path: ' ',
        alias: '',
        component: AccesoView,
        name: 'acceso',
        meta: {description: ''}
      }
    ]
  },
  /*
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
  }*/
  , {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
