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
import OfertasView from './components/views/OfertasView.vue'
import AccesoView from './components/views/LoginView.vue'
import FueraServicio from './components/FueraServicio.vue'

/* postulante */
import inicioPostulante from './components/postulante/Inicio.vue'
import inicioPostulanteView from './components/views/postulante/InicioView.vue'


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
    path: '/oferta/:id',
    component:OfertaPostulacion,
    children: [
      {
        path: 'oferta/:id',
        alias: '',
        component: OfertaPostulacionView,
        name: 'Oferta',
        meta: {description: ''}
      }
    ]
  },
  {
    path: '/ofertas',
    component:OfertaPostulacion,
    children: [
      {
        path: 'ofertas',
        alias: '',
        component: OfertasView,
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
  {
    path: '/signin/callback',
    component: inicioPostulante,
    children: [
      {
        path: ' ',
        alias: '',
        component: inicioPostulanteView,
        name: 'inicio',
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
