<template lang="">
    <section> 
           <div id="sidebar-container" style="max-width:270px;">
                <sidebar-menu
                    :menu="menu"
                    :collapsed="collapsed"
                    :theme="selectedTheme"
                    :show-one-child="true"
                    @toggle-collapse="onToggleCollapse"
                    @item-click="onItemClick"
                />
            </div>
    </section>
</template>
<script>
import { SidebarMenu } from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
const logoImg = {
    data() {
        return {
            src: '/static/img/card.png'
        }
    },
    template: '<img style="width:80px;margin-left:50px;margin-top:10px;margin-bottom:10px;" :src="src">'
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
    name: 'PanelPostulanteView',
    components: {
        SidebarMenu,
    },
    data() {
        return {
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
                    title: 'Información general',
                    icon: 'fa fa-info'
                },
                {
                    title: 'Postulación',
                    icon: 'fa fa-th-list',
                    child: [
                        {
                            href: '/charts/sublink',
                            title: 'Ir a postulación'
                        },
                        {
                            href: '/charts/sublink',
                            title: 'Mis postulaciones'
                        },
                        {
                            href: '/charts/sublink',
                            title: 'Mis entrevistas'
                        }
                    ]
                },  
                {
                    href: '/',
                    title: 'Mi CV',
                    icon: 'fa fa-file-o'
                },  
              
                {
                    href: '/',
                    title: 'Destacar mi perfil',
                    icon: 'fa fa-star-o'
                },                                  
                {
                    href: '/',
                    title: 'Configuración',
                    icon: 'fa fa-cog'
                },        
                {
                    header: true,
                    title: 'Mi cuenta',
                    hiddenOnCollapse: true
                },
                /*
                {
                    href: '/props',
                    title: 'Información general',
                    icon: 'fa fa-user'
                },*/
                {
                    href: '/events',
                    title: 'Cambiar clave',
                    icon: 'fa fa-unlock-alt'
                },
                {
                    href: '/events',
                    title: 'Darme de baja',
                    icon: 'fa fa-minus-square'
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
    },
    methods: {
        onToggleCollapse (collapsed) {
            console.log(collapsed)
            this.collapsed = collapsed
        },
         onItemClick (event, item, node) {
            console.log('onItemClick')
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
    background-color: #2a2a2e imp !important; 
    height: 650px;
    position:relative  !important;
}
.v-sidebar-menu .vsm--toggle-btn:after {
    content: '\F07e' !important;
    font-family: 'FontAwesome' !important;
}
.v-sidebar-menu .vsm--arrow:after {
    font-family: 'FontAwesome' !important;
}
</style>