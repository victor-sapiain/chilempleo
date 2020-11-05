<template>
<div class="header">
    <!-- Start intro section -->
    <section id="intro" class="section-intro">
        <div class="logo-menu">
            <nav class="navbar navbar-default affix-top" role="navigation" data-spy="affix" data-offset-top="50">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand logo" href="/"><img src="/static/img/logochev2.png" alt="" /></a>
                    </div>
                    <div class="collapse navbar-collapse" id="navbar">
                        <!-- Start Navigation List -->
                        <ul class="nav navbar-nav">
                            <li class="drop">
                                <!--<router-link to="/" active-class="active">Inicio</router-link>-->
                                <a class="active" v-bind:href="'/'">Inicio</a>
                            </li>
                            <li v-show="mode==1" class="drop">
                                <a href="#">
                                    Publicar oferta
                                </a>
                            </li>
                            <li v-show="mode==1" class="drop">
                                <a href="#">
                                    Crear CV
                                </a>
                            </li>
                        </ul>
                        <ul v-show="mode==1" class="nav navbar-nav navbar-right float-right">
                            <li class="right">
                                <button v-on:click="login" class="btn btn-primary btn-sm btn-principal-head">Ingresar / Registrar</button>
                            </li>                          
                        </ul>
                    </div>
                </div>

                <!-- Mobile Menu Start -->
                <ul class="wpb-mobile-menu">                    
                   <li>
                        <a class="active" href="index.html">
                            Inicio
                        </a>
                    </li>
                    <li v-show="mode==1">
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
                    <li v-show="mode==1">
                        <a href="#">For Candidates</a>
                        <ul>
                            <li><a href="browse-jobs.html">Browse Jobs</a></li>
                            <li><a href="browse-categories.html">Browse Categories</a></li>
                            <li><a href="add-resume.html">Add Resume</a></li>
                            <li><a href="manage-resumes.html">Manage Resumes</a></li>
                            <li><a href="job-alerts.html">Job Alerts</a></li>
                        </ul>
                    </li>
                    <li v-show="mode==1">
                        <a href="#">For Employers</a>
                        <ul>
                            <li><a href="post-job.html">Add Job</a></li>
                            <li><a href="manage-jobs.html">Manage Jobs</a></li>
                            <li><a href="manage-applications.html">Manage Applications</a></li>
                            <li><a href="browse-resumes.html">Browse Resumes</a></li>
                        </ul>
                    </li>
                    <li v-show="mode==1">
                        <a href="blog.html">Blog</a>
                        <ul class="dropdown">
                            <li><a href="blog.html">Blog - Right Sidebar</a></li>
                            <li><a href="blog-left-sidebar.html">Blog - Left Sidebar</a></li>
                            <li><a href="blog-full-width.html">Blog - Full Width</a></li>
                            <li><a href="single-post.html">Blog Single Post</a></li>
                        </ul>
                    </li>
                    <li v-show="mode==1" class="btn-m">
                        <a href="post-job.html"><i class="ti-pencil-alt"></i> Publicar aviso</a>
                    </li>
                    <li v-show="mode==1"  class="btn-m">
                        <a href="my-account.html"><i class="ti-lock"></i> Ingresar a cuenta</a>
                    </li>
                </ul>
                <!-- Mobile Menu End -->
            </nav>
        </div>
        <div class="search-container">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div style="text-align: center;">
                            <h1 class="headline-span">¿ CANSADO DE ESPERAR ?</h1>
                            <br />
                            <h2 class="headline-span-small">Encuentra tu empleo de forma rápida y sencilla.</h2>
                        </div>
                        <div v-show="mode==1" class="content search-main">
                            <form action="/ofertas/" method="get">
                                <div class="row">
                                    <div class="col-md-6 col-sm-6">
                                        <div class="form-group">
                                            <i class="fa fa-search" aria-hidden="true"></i>
                                            <input id="txtSearch" name="txtSearch" class="form-control" type="text" placeholder="EMPLEO A BUSCAR" />
                                        </div>
                                    </div>
                                    <div class="col-md-5 col-sm-6">
                                        <div class="form-group">
                                            <i class="fa fa-map-marker" aria-hidden="true" style="z-index: 999;"></i>
                                            <select id="selFrom" class="dropdown-product selectpicker" data-live-search="true">
                                                <option value="-1">BUSCAR EN TODO CHILE</option>
                                                <option value="1">I Tarapaca</option>
                                                <option value="2">II Antofagasta</option>
                                                <option value="3">III Atacama</option>
                                                <option value="4">IV coquimbo</option>
                                                <option value="5">V Valparaíso</option>
                                                <option value="6">VI O'Higgins</option>
                                                <option value="7">VII Maule</option>
                                                <option value="8">VIII Bio Bio</option>
                                                <option value="9">IX La Auraucanía</option>
                                                <option value="10">X Los Lagos</option>
                                                <option value="11">XI Aysén</option>
                                                <option value="12">XII Magallanes y Antárt.</option>
                                                <option value="13">XIII Metropolitana Santiago</option>
                                                <option value="14">XIV Los Ríos</option>
                                                <option value="15">XV Arica y Parinacota </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-1 col-sm-6">
                                        <button id="btnSearch" type="submit" class="btn btn-search-icon"><i class="fa fa-search" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>                                                             
                        <div v-show="mode==1" class="top-offers row">
                            <div class="col-md-12">                 
                                <!--   
                                  <VueSlickCarousel v-bind="carouselSettings">
                                        <div><h1>Test1</h1></div>
                                        <div><h1>Test2</h1></div>
                                        <div><h1>Test3</h1></div>
                                         <div><h1>Test1</h1></div>
                                        <div><h1>Test2</h1></div>
                                        <div><h1>Test3</h1></div>
                                    </VueSlickCarousel>
                                <h4 class="titulo2">OFERTAS DESTACADAS</h4>  

                                <VueSlickCarousel v-bind="carouselSettings">
    
                                    <div>
                                        <div class="card-flat">
                                                <h4>Java Development Support</h4>
                                                <hr>
                                                <div class="ld-job-details"><img alt="company logo" class="ld-logo" src="https://assets.landing.jobs/attachments/companies/logos/98a258cad1eaf570fbce3d629fb8de5a9963db86/small.png?1510095414"><div class="ld-right"><div class="ld-h5">Wunder</div></div></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="card-flat">
                                                <h4>Java Development Support</h4>
                                                <hr>
                                                <div class="ld-job-details"><img alt="company logo" class="ld-logo" src="https://assets.landing.jobs/attachments/companies/logos/98a258cad1eaf570fbce3d629fb8de5a9963db86/small.png?1510095414"><div class="ld-right"><div class="ld-h5">Wunder</div></div></div>
                                        </div>
                                    </div>
                                     <div>
                                        <div class="card-flat">
                                                <h4>Java Development Support</h4>
                                                <hr>
                                                <div class="ld-job-details"><img alt="company logo" class="ld-logo" src="https://assets.landing.jobs/attachments/companies/logos/98a258cad1eaf570fbce3d629fb8de5a9963db86/small.png?1510095414"><div class="ld-right"><div class="ld-h5">Wunder</div></div></div>
                                        </div>
                                    </div>
                                     <div>
                                        <div  class="card-flat">
                                                <h4>Java Development Support</h4>
                                                <hr>
                                                <div class="ld-job-details"><img alt="company logo" class="ld-logo" src="https://assets.landing.jobs/attachments/companies/logos/98a258cad1eaf570fbce3d629fb8de5a9963db86/small.png?1510095414"><div class="ld-right"><div class="ld-h5">Wunder</div></div></div>
                                        </div>
                                    </div>
                                </VueSlickCarousel>
                                   -->

                            </div>

                        </div>
                      
                    </div>

                </div>
            </div>
        </div>      
    </section>
</div>   
</template>
<script>
import { mapState } from 'vuex' 
import $ from 'jquery'
import config from '../../../../src/config'

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  name: 'PrincipalHeader',
  components: VueSlickCarousel ,
  data(){
      return{
            mode : 0,
            carouselSettings:{
                "dots": true,
                "focusOnSelect": true,
                "infinite": true,
                "speed": 500,
                "slidesToShow": 3,
                "slidesToScroll": 3,
                "touchThreshold": 5,
                "rows": 1,
                "autoplay":true,
            }
      }
  },
  mounted(){
        this.mode = config.mode
        $(document).ready(function () {
            //if (config.mode==1)
            //    $('#intro').css('height','500px');
        })

  },
  components: {
   
  },
   
  computed: {
   
  },
  methods: {
    login(evt){
        evt.preventDefault();
        this.$router.push({ name: "acceso" });
    }
  }
}
</script>
