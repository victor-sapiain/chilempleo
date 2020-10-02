<template>
  <!-- Main content -->

<section class="find-job section">
    <!-- GitHub hint -->
    <div class="container">
        <div v-show="mode==1">
            <h2 class="section-title">Perfiles destacados</h2>
            <div class="row col-md-12 margin_bottom">
                <button class="btn btn-primary btn-principal-head pull-right"><i class="fa fa-star" aria-hidden="true"></i> Crear Perfil<div class="ripple-container"><div class="ripple ripple-on ripple-out" style="left: 75.7188px; top: -1px; background-color: rgb(255, 255, 255); transform: scale(3.34034);"></div></div></button>
            </div>
        </div>
        <div v-show="mode==1" class="row">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="our-team">
                    <a href="#">
                        <div class="picture">
                            <img class="img-fluid" src="https://picsum.photos/130/130?image=1027" />
                        </div>
                    </a>
                    <div>
                        15 años de experiencia en el ámbito tecnológico. Capacidad analítica, orientación a los resultados <a href="#" class="destacado">Ver Más</a>
                    </div>
                    <div class="team-content">
                        <h3 class="name">Michele Miller</h3>
                        <h4 class="title">Web Developer</h4>
                        <h4 class="destacado margin-top-5">
                            <i class="fa fa-video-camera" aria-hidden="true"> </i> <span class="label-contenido1">Ver presentación</span>
                            <i class="fa fa-file-text-o" aria-hidden="true"></i> <span class="label-contenido1">Ver CV</span>
                        </h4>
                    </div>
                   <ul class="social">
                        <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook" aria-hidden="true"></a></li>
              <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true"></a></li>
                        <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true"></a></li>
                        <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-at" aria-hidden="true"></a></li>
                    </ul>
                </div>
            </div>

            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="our-team">
                    <a href="#">
                        <div class="picture">
                            <img class="img-fluid" src="https://picsum.photos/130/130?image=1027" />
                        </div>
                    </a>
                    <div>
                        15 años de experiencia en el ámbito tecnológico. Capacidad analítica, orientación a los resultados <a href="#" class="destacado">Ver Más</a>
                    </div>
                    <div class="team-content">
                        <h3 class="name">Juana Perez</h3>
                        <h4 class="title">Promotora</h4>
                        <h4 class="destacado margin-top-5">
                            <i class="fa fa-video-camera" aria-hidden="true"> </i> <span class="label-contenido1">Ver presentación</span>                        
                        </h4>
                    </div>
                   <ul class="social">
                        <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook" aria-hidden="true"></a></li>
              <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true"></a></li>
                        <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true"></a></li>
                        <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-at" aria-hidden="true"></a></li>
                    </ul>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="our-team">
                    <a href="#">
                        <div class="picture">
                            <img class="img-fluid" src="https://picsum.photos/130/130?image=1027" />
                        </div>
                    </a>
                    <div>
                        15 años de experiencia en el ámbito tecnológico. Capacidad analítica, orientación a los resultados <a href="#" class="destacado">Ver Más</a>
                    </div>
                    <div class="team-content">
                        <h3 class="name">Pamela Rojas</h3>
                        <h4 class="title">Ingeniera Comercial</h4>
                        <h4>
                            <div class="destacado margin-top-5">
                                &nbsp;
                            </div>
                        </h4>
                    </div>
                    <ul class="social">
                        <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook" aria-hidden="true"></a></li>
              <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true"></a></li>
                        <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true"></a></li>
                        <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-at" aria-hidden="true"></a></li>
                    </ul>
                </div>
            </div>

            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="our-team">
                    <a href="#">
                        <div class="picture">
                            <img class="img-fluid" src="https://picsum.photos/130/130?image=1027" />
                        </div>
                    </a>
                    <div>
                        15 años de experiencia en el ámbito tecnológico. Capacidad analítica, orientación a los resultados <a href="#" class="destacado">Ver Más</a>
                    </div>
                    <div class="team-content">
                        <h3 class="name">Francisca</h3>
                        <h4 class="title">Vendedora</h4>
                        <h4 class="destacado margin-top-5">
                            <i class="fa fa-file-text-o" aria-hidden="true"></i> <span class="label-contenido1">Ver CV</span>
                        </h4>
                    </div>
                  <ul class="social">
                        <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook" aria-hidden="true"></a></li>
              <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true"></a></li>
                        <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true"></a></li>
                        <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-at" aria-hidden="true"></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <h2 class="section-title">Últimas ofertas</h2>
        <div class="content">
            <div v-show="mode==1" class="row col-md-12 margin_bottom">
                <button class="btn btn-primary btn-principal-head pull-right"><i class="fa fa-pencil" aria-hidden="true"></i> Publicar Oferta<div class="ripple-container"><div class="ripple ripple-on ripple-out" style="left: 75.7188px; top: -1px; background-color: rgb(255, 255, 255); transform: scale(3.34034);"></div></div></button>
            </div>           
            <div>
            <form  action="/ofertas/" method="get">
                <div v-if ="mode==1" class="row">
                    <div class="col-md-6 col-sm-6">
                        <div class="form-group">
                            <input  name="txtSearch" v-model = "txtSearch" class="form-control-search" type="text" placeholder="EMPLEO A BUSCAR" />
                        </div>
                    </div>                  
                    <div class="col-md-5 col-sm-6">
                        <div class="form-group selFrom-search" >
                            <select id="selFrom" class="dropdown-product selectpicker btn-default" data-live-search="true">
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
                        <button id="btnSearch" type="submit" class="btn-sm btn-primary "><i class="fa fa-search" aria-hidden="true"></i></button>                        
                    </div>
                </div>
                <div v-else class="row">
                   <div class="col-md-8">
                        <div class="form-group">
                            <input name="txtSearch"  v-model = "txtSearch" class="form-control-search" type="text" placeholder="EMPLEO A BUSCAR" />
                        </div>
                    </div>    
                    <div class="col-md-4">
                        <button id="btnSearch" v-on:click="buscar" type="button" class="btn-sm btn-primary "><i class="fa fa-search" aria-hidden="true"></i> Buscar</button>
                        <button id="btnClean" v-on:click="limpiar" type="button" class="btn-sm btn-primary ">Limpiar </button>
                    </div>
                    <div class="col-md-12">
                        <nav aria-label="Page navigation" class="row text-right">
                            <ul class="pagination">
                                <li>
                                    <a href="#" style="background-color:#808080;color:#fff;" aria-label="Previous" v-show="pag != 1" @click.prevent="pag -= 1">
                                        <span aria-hidden="true"><i class="fa fa-chevron-left" aria-hidden="true"></i> Anterior</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" style="background-color:#808080;color:#fff;" aria-label="Next" v-show="pag * NUM_RESULTS / ofertas.length < 1" @click.prevent="pag += 1">
                                        <span aria-hidden="true">Siguiente <i class="fa fa-chevron-right" aria-hidden="true"></i></span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>

            </form>
            </div>
        </div>      
        <div v-show="mode==2" style="text-align:right;">
            <h5>Página {{pag}} de {{Math.ceil(ofertas.length/NUM_RESULTS)}}</h5>
        </div>
        <div  class="row" v-for="(item, index) in ofertas" :key="index" v-show="(pag - 1) * NUM_RESULTS <= index  && pag * NUM_RESULTS > index">
            <div v-show="item.EstadoRegistro==1" class="col-md-12">
                <div class="card-flat card-block">
                    <div id="logo-card" class="col-md-1">
                      <div class="gc_ si39"
                          style="
                              -ms-flex-direction: row;
                              -webkit-box-orient: horizontal;
                              -webkit-flex-direction: row;
                              flex-direction: row;
                              -ms-flex-pack: start;
                              -webkit-box-pack: start;
                              -webkit-justify-content: flex-start;
                              justify-content: flex-start;
                              -ms-flex-align: start;
                              -webkit-box-align: start;
                              -webkit-align-items: flex-start;
                              align-items: flex-start;
                          "
                      >
                          <div
                              class="gc_ si69"
                              style="
                                  -ms-flex-direction: row;
                                  -webkit-box-orient: horizontal;
                                  -webkit-flex-direction: row;
                                  flex-direction: row;
                                  -ms-flex-pack: center;
                                  -webkit-box-pack: center;
                                  -webkit-justify-content: center;
                                  justify-content: center;
                                  -ms-flex-align: center;
                                  -webkit-box-align: center;
                                  -webkit-align-items: center;
                                  align-items: center;
                              "
                          >                             
                            <img :src="item.empresa.UrlLogotipo" />
                          </div>
                      </div>                    
                    </div>
                    <div class="col-md-11">
                      <div class="margin-left">
                        <div class="col-md-12">            
                          <div class="row">              
                            <a :href="item.oferta.UrlOferta" target="_blank"> <h3 class="col-md-9">{{item.oferta.titulo}}</h3></a>
                            <div class="col-md-3">                               
                                <div id="social-shared" class="pull-right"><a class="facebookBtn smGlobalBtn" href="#" ></a>
                                    <a class="twitterBtn smGlobalBtn" href="#" ></a>
                                    <a class="linkedinBtn smGlobalBtn" href="#" ></a>                                
                                </div>
                            </div>
                          </div>
                          <div class="row">
                            <h4 class="col-md-12">
                                {{item.empresa.nombre}} - {{item.oferta.ubicacion.comuna}}, {{item.oferta.ubicacion.region}} <span class="badge badge-danger" style="font-size: 14px;margin-top:-5px;background-color:#0084BF;"> {{item.FechaCreacion}} </span>
                            </h4>
                          </div>
                        </div>                       
                        <h5 class="contenido-card">
                            {{substr(item.oferta.descripcion)}}
                        </h5>
                      </div>                                         
                    </div>                   
                    <div style="width:100%;text-align:right;">                       
                        <a v-show="mode==1" href="#" class="margin-left">
                          <span class="link-detalle"><i class="fa fa-bookmark-o" aria-hidden="true"></i> Guardar</span> 
                        </a>
                        <a :href="item.oferta.UrlOferta" target="_blank" class="margin-left">
                          <span class="link-detalle"><i class="fa fa-arrow-right" aria-hidden="true"></i>  Ver Detalle</span> 
                        </a>
                    </div>
                </div>
            </div>
        </div>      <!--Fin empleos-->  
        <div v-if="mode==1" style="width:100%;text-align:center;">
            <button class="btn btn-secondary btn btn-principal-head margin-top" style="width:50%">Ver más Ofertas de Trabajo </button>
        </div>
        <div v-else>
             <div style="text-align:right;">
                <h5>Página {{pag}} de {{Math.ceil(ofertas.length/NUM_RESULTS)}}</h5>
            </div>
            <div>&nbsp;</div>
             <nav aria-label="Page navigation" class="row text-right">
                <ul class="pagination">
                    <li>
                        <a href="#" style="background-color:#808080;color:#fff;" aria-label="Previous" v-show="pag != 1" @click.prevent="pag -= 1">
                            <span aria-hidden="true"><i class="fa fa-chevron-left" aria-hidden="true"></i> Anterior</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" style="background-color:#808080;color:#fff;" aria-label="Next" v-show="pag * NUM_RESULTS / ofertas.length < 1" @click.prevent="pag += 1">
                            <span aria-hidden="true">Siguiente <i class="fa fa-chevron-right" aria-hidden="true"></i></span>
                        </a>
                    </li>
                </ul>
            </nav>            
        </div>
    </div>
</section>
<!-- /.content -->
</template>
<style>
    input:focus{outline: none;}
</style>
<script>
import Alert from '../widgets/Alert'
import InfoBox from '../widgets/InfoBox'
import ProcessInfoBox from '../widgets/ProcessInfoBox'
import api from '../../api'
import config from '../../../src/config'
export default {
  name: 'Principal',
  components: {
    Alert,
    InfoBox,
    ProcessInfoBox
  },

  data () {
    return {
        TotalOfertas:10,
        ofertas : [],
        mode:-1,
        txtSearch : '',
        NUM_RESULTS: 20, // Numero de resultados por página
        pag: 1, // Página inicial
        title: 'My Title'

    }
  },
   head: {
    title: {
        inner: 'Chilempleo',
        separator: '-',
        complement: 'Inicio'
    },      
    meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'application-name', content: 'Chilempleo' },
        { name: 'robots', content: 'index,follow'},
        { name: 'keywords', content: 'chile empleos, empleos, trabajo, profesor, profesores,'},
        { name: 'description', content: 'Chilempleo. Cientos de Empleos. Empleos todo Chile.', id: 'desc' }]
  },
  computed: {
    
  },
  methods: {
      substr(text){
        let txtFin = text
        let max=140
        if (text.length>max)
            txtFin = text.substr(1,max) + '....'
        return (txtFin)
      },
      buscar(event) {      
        let ofertas_aux = []
        let entrada = false
        if (this.txtSearch.trim()!=''){
            for(let i=0;i<this.ofertas.length;i++){
                if (this.ofertas[i].oferta.titulo.toLowerCase().indexOf(this.txtSearch)>-1){
                    ofertas_aux.push(this.ofertas[i])
                    entrada = true
                }
            }
            if (entrada)
                this.ofertas = ofertas_aux
        }else{
            this.cargarOfertas()
        }
      },
      limpiar(){
        this.txtSearch = ""  
        this.cargarOfertas()
      },
      cargarOfertas(){
        let f = new Date()
        let fAux = new Date()
        fAux.setDate(f.getDate()-3)
        let fechaHoy = this.zeroFill(f.getDate(),2) + "/" + this.zeroFill((f.getMonth() +1),2) + "/" + f.getFullYear()  
        let  fechaAnt =  (this.zeroFill(fAux.getDate(),2) + "/" + this.zeroFill((f.getMonth() ),2) + "/" + f.getFullYear())     
        console.log(fechaAnt)
        console.log(fechaHoy)

        api.getOffer(fechaAnt,fechaHoy) 
        .then(response=> {                   
            this.ofertas = response.data
        })
        .catch((err) => console.log(err));      
      },
      zeroFill( number, width )
      {
        width -= number.toString().length;
        if ( width > 0 )
        {
            return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
        }
        return number + ""; // siempre devuelve tipo cadena
      }
  },
  mounted () {
    this.mode = config.mode  
    this.cargarOfertas()
  }
}
</script>
