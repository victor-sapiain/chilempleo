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

import panelPostulante from './components/postulante/panel.vue'
import panelPostulanteView from './components/views/postulante/panelView.vue'
import menuEmpleador from './components/empleador/menu.vue'
import panelEmpleadorView from './components/views/empleador/panelView.vue' 
import infoEmpleadorView from './components/views/empleador/informacionView.vue' 
import OfertaIngreso from './components/oferta/Ingreso.vue'
import OfertaIngresoView from './components/views/IngresoOfertaView.vue'
import planes from './components/plan/Planes.vue'
import PlanesView from './components/views/PlanesView.vue'
import VueRouter from "vue-router";


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
          mantencion:false,requiresAuth: false          
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
    component: FueraServicio,
    meta: {description: '', requiresAuth: false}
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
        meta: {description: '', requiresAuth: false}
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
        meta: {description: '', requiresAuth: false}
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
        meta: {description: '',requiresAuth:false}
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
        meta: {description: '', requiresAuth:false}
      }
    ]
  },
  {
    path: '/panel',
    component:panelPostulante,
    children: [
      {
        path: ' ',
        alias: '',
        component: panelPostulanteView,
        name: 'PanelPostulante',
        meta: {description: '', requiresAuth: true,postulante:true,empleador:false}
      }
    ]
  },
  {
    path: '/empleador/panel',
    component:menuEmpleador,
    children: [
      {
        path: ' ',
        alias: '',
        component: panelEmpleadorView,
        name: 'PanelEmpleador',
        meta: {description: '', requiresAuth: true,postulante:false,empleador:true}
      }
    ]
  },
  {
    path: '/empleador/info',
    component:menuEmpleador,
    children: [
      {
        path: ' ',
        alias: '',
        component: infoEmpleadorView,
        name: 'PanelEmpleador',
        meta: {description: '', requiresAuth: true,postulante:false,empleador:true}
      }
    ]
  },
  {
    path: '/ofertas/publicacion',
    component:menuEmpleador,
    children: [
      {
        path: ' ',
        alias: '',
        component: OfertaIngresoView,
        name: 'PanelEmpleador',
        meta: {description: '', requiresAuth: false,postulante:false,empleador:false}
      }
    ]
  },
  {
    path: '/planes',
    component:planes,
    children: [
      {
        path: ' ',
        alias: '',
        component: PlanesView,
        name: 'planes',
        meta: {description: '', requiresAuth: false,postulante:false,empleador:false}
      }
    ]
  },
  /*
  {
    path: '/ofertas/publicacion',
    component:OfertaIngreso,
    children: [
      {
        path: ' ',
        alias: '',
        component: OfertaIngresoView,
        name: 'PanelEmpleador',
        meta: {description: '', requiresAuth: false,postulante:false,empleador:false}
      }
    ]
  },*/
  {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]
export default routes
