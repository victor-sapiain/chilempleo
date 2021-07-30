<template lang="">
    <div>
        <principal-header ref="headerMenu"></principal-header> 
        <div v-if="loginUser" class="row">    
            <section>
                <div v-if="!collapsed" >
                    <div class="find-job col-md-2">
                        <div id="sidebar-container" >
                                <sidebar-menu
                                    :menu="menu"
                                    :collapsed="collapsed"
                                    :theme="selectedTheme"
                                    :show-one-child="true"
                                    @toggle-collapse="onToggleCollapse"
                                    @item-click="onItemClick"
                                />
                        </div>
                    </div>
                    <div class="find-job col-md-10">
                        <router-view></router-view>
                    </div>
                </div>
                <div v-else>
                    <div class="col-md-1">
                        <div id="sidebar-container" >
                                <sidebar-menu
                                    :menu="menu"
                                    :collapsed="collapsed"
                                    :theme="selectedTheme"
                                    :show-one-child="true"
                                    @toggle-collapse="onToggleCollapse"
                                    @item-click="onItemClick"
                                />
                        </div>
                    </div>
                    <div class="col-md-11">
                        <router-view></router-view>
                    </div>
                </div>
            </section>    
        </div>  
        <div v-else>
            <section>
                <router-view></router-view>
            </section>       
        </div>
    </div>
</template>
<script>
import PrincipalHeader from '../../components/layout/principal/HeaderMenu'
import { SidebarMenu } from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
const logoImg = {
    data() {
        return {
            src: '/static/img/card.png',
        }
    },
    template: '<img style="width:80px;margin-left:25%;margin-top:10px;margin-bottom:10px;" :src="src">'
}
const userText = {
    data() {
        return {
            txtUser: window.localStorage.getItem('user')
        }
    },
    template: '<input type="text" readonly :value="txtUser" style="background:transparent;color:#6D6D6D;font-weight:600;border:none;margin-left:22px;" />'
}
const hr = {
    data() {
        return {
        }
    },
    template: '<hr style="border-color:#4F4F4F;">'
}

export default {
    name: 'PanelEmpleador',
    components: {
        PrincipalHeader,
        SidebarMenu,
    }, 
    data() {
        return {
            loginUser:false,
            completado :'0',
            menu : [
                {
                    header: true,
                    component: logoImg,
                    hiddenOnCollapse: true
                },
                {
                    header: true,
                    component:userText,
                    hiddenOnCollapse: true,
                },
                {
                    header: true,
                    component:hr,
                    hiddenOnCollapse: true,
                },
                {
                    href: '/',
                    title: 'Resumen',
                    icon: 'fa fa-pie-chart'
                },
                {
                    href: '/',
                    title: 'Mi Información',
                    icon: 'fa fa-info'
                },
                {
                    title: 'Publicaciones',
                    icon: 'fa fa-th-list',
                    child: [
                        {
                            href: '/charts/sublink',
                            title: 'Mis ofertas publicadas'
                        },
                        {
                            href: '/charts/sublink',
                            title: 'Publicar oferta'
                        },                       
                    ]
                },  
                {
                    title: 'CV y otros medios',
                    icon: 'fa fa-file',
                    child: [
                        {
                            href: '/charts/sublink',
                            title: 'Buscar CV'
                        },
                        {
                            href: '/charts/sublink',
                            title: 'Video presentaciones'
                        }
                    ]
                },  
                {
                    title: 'Entrevistas',
                    icon: 'fa fa-video-camera',
                    child: [
                        {
                            href: '/charts/sublink',
                            title: 'Realizar entrevista online'
                        },
                        {
                            href: '/charts/sublink',
                            title: 'Buscar entrevistas'
                        }
                    ]
                },                                         
                {
                    header: true,
                    title: 'Mi cuenta',
                    hiddenOnCollapse: true
                }, 
                {
                    href: '/events',
                    title: 'Mejorar plan',
                    icon: 'fa fa-coffee'
                },
                {
                    href: '/events',
                    title: 'Cambiar clave',
                    icon: 'fa fa-unlock-alt'
                },
                {
                    href: '/events',
                    title: 'Darme de baja',
                    icon: 'fa fa-trash'
                },
                {
                    href: '/',
                    title: 'Cerrar sesión',
                    icon: 'fa fa-times'
                },
            ],
            collapsed: false,
            themes: [
                {
                name: 'Default theme',
                input: ''
                },
                {
                name: 'White theme',
                input: 'white-theme'
                }
            ],
            selectedTheme: 'Default theme',
            isOnMobile: false
        }
    },
    mounted () {
        this.onResize()
        window.addEventListener('resize', this.onResize)
        this.verifyLogin()
    },
     methods: {
        onToggleCollapse (collapsed) {
            this.collapsed = collapsed
        },
         onItemClick (event, item, node) {
            //console.log('onItemClick')
            // console.log(event)
            // console.log(item)
            // console.log(node)
        },
        onResize () {
            if (window.innerWidth <= 767) {
                this.isOnMobile = true
                this.collapsed = true
            } else {
                this.isOnMobile = false
                this.collapsed = false
            }
        },
        verifyLogin(){
            if (this.$store.state.user!="" && window.localStorage.getItem('user')!="")
                this.loginUser = true
            else
                this.loginUser = false 
            this.$refs.headerMenu.verifyLogin()
        }
    }
}
</script>
<style lang="">
.sidebar-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 900;
}
pre {
  font-family: Consolas, monospace;
  color: #000;
  background: #fff;
  border-radius: 2px;
  padding: 15px;
  line-height: 1.5;
  overflow: auto;
}   
.v-sidebar-menu {
    background-color: #2a2a2e  !important; 
	height:100% !important;
    position:relative  !important;
}
.v-sidebar-menu .vsm--toggle-btn:after {
    content: '\F07e' !important;
    font-family: 'FontAwesome' !important;
}
.v-sidebar-menu .vsm--arrow:after {
    font-family: 'FontAwesome' !important;
}    
.v-sidebar-menu .vsm--link_level-1 .vsm--icon {
    background-color: #4F4F4F !important;
}
.v-sidebar-menu .vsm--link {
    font-size: 15px !important;
}
</style>