<template>
<div class="header">
    <!-- Start intro section -->
    <section id="intro" >
        <div class="logo-menu">
            <nav class="navbar navbar-default affix-top navbar-border" role="navigation" data-spy="affix" data-offset-top="50">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand logo" href="index.html"><img src="/static/img/logochev2.png" alt="" /></a>
                    </div>
                    <div class="collapse navbar-collapse" id="navbar">
                        <!-- Start Navigation List -->
                        <ul class="nav navbar-nav">
                            <li class="drop">
                                <a  v-bind:href="'/'"><i class="fa fa-home fa-lg" aria-hidden="true"></i></a>
                            </li>
                            <li class="drop">
                                <a href="#">
                                    Buscar oferta
                                </a>
                            </li>
                            <li class="drop">
                                <a v-bind:href="'/ofertas/publicacion'">
                                    Publicar oferta
                                </a>
                            </li>
                            <li class="drop">
                                <a href="#">
                                    Crear CV
                                </a>
                            </li>
   
                        </ul>
                        <ul class="nav navbar-nav navbar-right float-right">
                            <div v-if="!loginUser">
                                <li class="right">
                                    <button class="btn btn-primary btn-sm btn-principal-head" v-on:click="login(1)"><i class="fa fa-user" aria-hidden="true"></i> POSTULANTE</button>
                                    <button class="btn btn-primary btn-sm btn-principal-head" v-on:click="login(2)"><i class="fa fa-briefcase" aria-hidden="true"></i>  EMPLEADOR</button>
                                </li>   
                                <li style="margin-left:50px;">
                                    Inicia sesión o crea una cuenta
                                </li>               
                            </div>        
                            <div v-else>
                                <div v-if="loginPostulante" class="btn-group">
                                    <button type="button" class="btn btn-danger"><i class="fa fa-user" aria-hidden="true"></i> {{user}}</button>
                                    <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="caret"></span>
                                        <span class="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a href="#">Mi escritorio</a></li>
                                        <li><a href="#">Mis mensajes</a></li>
                                        <li><a href="#">Administrar tu cuenta</a></li>
                                        <li role="separator" class="divider"></li>
                                        <li><a @click="closeSession()"> Cerrar sesión</a></li>
                                    </ul>
                                </div>
                                <div v-else-if="loginEmpleador" class="btn-group">
                                    <button type="button" class="btn btn-danger"><i class="fa fa-user" aria-hidden="true"></i> {{user}}</button>
                                    <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="caret"></span>
                                        <span class="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a href="#">Mi escritorio</a></li>
                                        <li><a href="#">Mis mensajes</a></li>
                                        <li><a href="#">Administrar tu cuenta</a></li>
                                        <li role="separator" class="divider"></li>
                                        <li><a @click="closeSession()"> Cerrar sesión</a></li>
                                    </ul>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>

                <!-- Mobile Menu Start -->
                <ul class="wpb-mobile-menu">
                    <li>
                        <a class="active" href="index.html">Home</a>
                        <ul>
                            <li><a class="active" href="index.html">Home 1</a></li>
                            <li><a href="index-02.html">Home 2</a></li>
                            <li><a href="index-03.html">Home 3</a></li>
                            <li><a href="index-04.html">Home 4</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="about.html">Pages</a>
                        <ul>
                            <li><a href="about.html">About</a></li>
                            <li><a href="job-page.html">Job Page</a></li>
                            <li><a href="job-details.html">Job Details</a></li>
                            <li><a href="resume.html">Resume Page</a></li>
                            <li><a href="privacy-policy.html">Privacy Policy</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="pricing.html">Pricing Tables</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">For Candidates</a>
                        <ul>
                            <li><a href="browse-jobs.html">Browse Jobs</a></li>
                            <li><a href="browse-categories.html">Browse Categories</a></li>
                            <li><a href="add-resume.html">Add Resume</a></li>
                            <li><a href="manage-resumes.html">Manage Resumes</a></li>
                            <li><a href="job-alerts.html">Job Alerts</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">For Employers</a>
                        <ul>
                            <li><a href="post-job.html">Add Job</a></li>
                            <li><a href="manage-jobs.html">Manage Jobs</a></li>
                            <li><a href="manage-applications.html">Manage Applications</a></li>
                            <li><a href="browse-resumes.html">Browse Resumes</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="blog.html">Blog</a>
                        <ul class="dropdown">
                            <li><a href="blog.html">Blog - Right Sidebar</a></li>
                            <li><a href="blog-left-sidebar.html">Blog - Left Sidebar</a></li>
                            <li><a href="blog-full-width.html">Blog - Full Width</a></li>
                            <li><a href="single-post.html">Blog Single Post</a></li>
                        </ul>
                    </li>
                    <li class="btn-m">
                        <a href="post-job.html"><i class="ti-pencil-alt"></i> Publicar aviso</a>
                    </li>
                    <li class="btn-m">
                        <a href="my-account.html"><i class="ti-lock"></i> Ingresar a cuenta</a>
                    </li>
                </ul>
                <!-- Mobile Menu End -->
            </nav>
        </div>
        
    </section>
</div>   
</template>
<script>
import Auth from '@aws-amplify/auth';
export default {
  name: 'HeaderMenu',
   data(){
      return{ 
        user:window.localStorage.getItem('user'),
        loginUser:false,
        loginPostulante:false,
        loginEmpleador:false,
      }
  },
  mounted(){      
    this.verifyLogin()
  },
  components: {
   
  },
   
  computed: {
   
  },
  methods: {
    login(tipoUsuario){
        this.$store.dispatch('TipoUsuario', { tipo:tipoUsuario })
        this.$router.push({ name: "acceso" });
    },
    verifyLogin(){
        if (this.$store.state.user!=""){
            this.loginUser = true
            if (localStorage.getItem('perfil')=='postulante')
                this.loginPostulante=true
            else if(localStorage.getItem('perfil')=='empleador')
                this.loginEmpleador=true
            this.user = window.localStorage.getItem('user')
            
        }
        else{
            this.loginUser = false
        }
    },
    closeSession(){
        this.loginUser = false
        this.$store.commit('SET_USER', null)
        this.$store.commit('SET_TOKEN', null)
        if (window.localStorage) {
          window.localStorage.setItem('user', null)
          window.localStorage.setItem('token', null)
        }
        Auth.signOut()
            .then(data => console.log(data))
            .catch(err => console.log(err))
        window.location.href = "/";
    }

  },
}
</script>
