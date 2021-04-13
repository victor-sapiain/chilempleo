<template>
  <!-- Main content -->

<section class="find-job section">
    <!-- GitHub hint -->
    <div class="container">
        <div v-show="mode==1">
            <h2 class="section-title">Perfiles destacados</h2>
            <div class="row col-md-12 margin_bottom">
                <button class="btn btn-secondary btn-principal-head pull-right button-desk"><i class="fa fa-search" aria-hidden="true"></i> Ver más Perfiles <div class="ripple-container"><div class="ripple ripple-on ripple-out" style="left: 75.7188px; top: -1px; background-color: rgb(255, 255, 255); transform: scale(3.34034);"></div></div></button>
                <button class="btn btn-secondary btn-principal-head pull-right margin-right button-desk"><i class="fa fa-star" aria-hidden="true"></i>  Crear Perfil Destacado  <div class="ripple-container"><div class="ripple ripple-on ripple-out" style="left: 75.7188px; top: -1px; background-color: rgb(255, 255, 255); transform: scale(3.34034);"></div></div></button>                
                <button class="btn btn-secondary btn-principal-head pull-right button-mobile"><i class="fa fa-search" aria-hidden="true"></i> Ver Perfiles <div class="ripple-container"><div class="ripple ripple-on ripple-out" style="left: 75.7188px; top: -1px; background-color: rgb(255, 255, 255); transform: scale(3.34034);"></div></div></button>
                <button class="btn btn-secondary btn-principal-head pull-right margin-right button-mobile"><i class="fa fa-star" aria-hidden="true"></i>  Crear Perfil  <div class="ripple-container"><div class="ripple ripple-on ripple-out" style="left: 75.7188px; top: -1px; background-color: rgb(255, 255, 255); transform: scale(3.34034);"></div></div></button>
            </div>
        </div>
        <div class="row col-md-12" v-show="mode==1">
            <VueSlickCarousel v-bind="carouselSettings">
            <div>
                <div class="our-team margin-right" >
                    <a href="#">
                        <div class="picture">
                            <img class="img-fluid" src="https://picsum.photos/130/130?image=1027" />
                        </div>
                    </a>
                    <div>
                        10 años de experiencia en el ámbito tecnológico. Capacidad analítica, orientación a los resultados <a href="#" class="destacado">Ver Más</a>
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
            <div>
                <div class="our-team margin-right" style="margin-right:5px;">
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
            <div>
                <div class="our-team margin-right">
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
            <div>
                <div class="our-team margin-right">
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
            <div>
                <div class="our-team margin-right">
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
            </VueSlickCarousel>
        </div>
        
        <h2 class="section-title">Ofertas destacadas </h2>
        <div class="content">
            <div  style="display:none;">
                <a href="www.google.cl" class="card3" style="width: 150px;background-color: #E84C3D;color: #fff;font-weight: bolder;">
                    <div style="margin:5px;">
                        <img style="width:30px;height:auto;" src="/static/img/icon-teacher-v2.png">                        
                        <span class="label-contenido1"> &nbsp;Profesores</span>
                    </div>
                </a>
            </div>
            <div v-show="mode==1" class="col-md-12 margin_bottom">                   
                <button class="btn btn-secondary btn-principal-head pull-right"><i class="fa fa-pencil" aria-hidden="true"></i> Publicar Oferta<div class="ripple-container"><div class="ripple ripple-on ripple-out" style="left: 75.7188px; top: -1px; background-color: rgb(255, 255, 255); transform: scale(3.34034);"></div></div></button>
            </div>                        
            <div>
            <form  action="/ofertas/" method="get">
                <div v-if ="mode==1" class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input  v-model = "txtSearch" class="form-control-search" type="text" placeholder="EMPLEO A BUSCAR" />
                        </div>
                    </div>                  
                    <div class="col-md-5">
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
                    <div class="col-md-1 text-center">
                        <button v-on:click="buscarOferta" type="button" class="btn-sm btn-primary "><i class="fa fa-search" aria-hidden="true"></i></button>                        
                        <!--<button type="button" class="btn-sm btn-primary "><i class="fa fa-filter" aria-hidden="true"></i> Filtros</button>                        -->

                    </div>
                </div>
                <div v-else class="row">
                   <div class="col-md-8">
                        <div class="form-group">
                            <input name="txtSearch"  v-model = "txtSearch" class="form-control-search" type="text" placeholder="EMPLEO A BUSCAR" />
                        </div>
                    </div>    
                    <div class="col-md-4">
                        <button v-on:click="buscarOferta" type="button" class="btn-sm btn-primary "><i class="fa fa-search" aria-hidden="true"></i></button>                        
                        <button id="btnClean" v-on:click="limpiar" type="button" class="btn-sm btn-primary ">Limpiar </button>
                    </div>
                    <div class="col-md-12" v-show="!isLoading">
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
        <div v-if="isLoading">
        <square></square>
        </div>
        <div v-else>
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
                        <a class="margin-left"  v-on:click="agregarOferta(item.oferta)">
                          <span class="link-detalle"><i class="fa fa-bookmark" aria-hidden="true"></i> Guardar</span> 
                        </a>
                        <a :href="item.oferta.UrlOferta" target="_blank" class="margin-left">
                          <span class="link-detalle"><i class="fa fa-arrow-right" aria-hidden="true"></i>  Ver Detalle</span> 
                        </a>
                    </div>
                </div>
            </div>
        </div>      <!--Fin empleos-->  
        <div v-if="mode==1" style="width:100%;text-align:center;">
            <button class="btn btn-secondary btn btn-principal-head margin-top"  style="width:50%" onclick="location.href = '/ofertas';">Ver más Ofertas de Trabajo </button>
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
        <back-to-top bottom="50px" right="50px">
            <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i></button>
        </back-to-top>
        <div id="float-win">            
            <div v-show="ofertasTemp.length>0" class="wrap-collabsible"> 
               <input id="collapsible" class="toggle" type="checkbox"> 
               <label for="collapsible" class="lbl-toggle">Ofertas Guardadas({{ofertasTemp.length}}) </label>
               <div class="collapsible-content">
                    <div class="content-inner" style="overflow-y: auto; height:150px; ">
                       <div id="ListOferta"></div>
                    </div>
                </div>
            </div>
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
import VueSlickCarousel from 'vue-slick-carousel'
   
export default {
  name: 'Principal',
  components: {
    Alert,
    InfoBox,
    ProcessInfoBox
  },
  components: VueSlickCarousel ,
  data () {
    return {
        TotalOfertas:10,
        ofertas : [],
        mode:-1,
        txtSearch : '',
        NUM_RESULTS: 100, // Numero de resultados por página
        pag: 1, // Página inicial
        isLoading: true,
        ofertasTemp:[],
        carouselSettings:{
            "dots": false,
            "focusOnSelect": true,
            "infinite": true,
            "speed": 1200,
            "slidesToShow": 4,
            "rows": 1,
            "autoplay":true,               
        }

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
                txtFin = text.substr(0,max) + '....'
            return (txtFin)
        },
        buscarOferta(event){
                this.isLoading = true
                let f = new Date()
                let fAux = new Date()
                fAux.setDate(f.getDate()-3)
                let fechaHoy = this.zeroFill(f.getDate(),2) + "/" + this.zeroFill((f.getMonth() +1),2) + "/" + f.getFullYear()  
                let  fechaAnt =  (this.zeroFill(fAux.getDate(),2) + "/" + this.zeroFill((fAux.getMonth()+1 ),2) + "/" + fAux.getFullYear())   
                api.getSearchOffer(fechaAnt,fechaHoy,this.txtSearch) 
                .then(response=> {                   
                    this.ofertas = response.data
                    this.isLoading = false
                })
                .catch((err) => console.log(err));  
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
            this.isLoading = true
            let f = new Date()
            let fAux = new Date()
            let fAuxAyer = new Date()
            fAux.setDate(f.getDate()-3)
            fAuxAyer.setDate(f.getDate()-1)
            let fechaHoy = this.zeroFill(f.getDate(),2) + "/" + this.zeroFill((f.getMonth() +1),2) + "/" + f.getFullYear()  
            let  fechaAnt =  (this.zeroFill(fAux.getDate(),2) + "/" + this.zeroFill((fAux.getMonth()+1 ),2) + "/" + fAux.getFullYear())     
            let fechaAyer = (this.zeroFill(fAuxAyer.getDate(),2) + "/" + this.zeroFill((fAuxAyer.getMonth()+1 ),2) + "/" + fAuxAyer.getFullYear()) 
            console.log(fechaAnt)
            console.log(fechaHoy)
            api.getOffer(fechaHoy,fechaHoy) 
            .then(response=> {                   
                this.ofertas = response.data                                
                if (this.ofertas.length==0){
                    api.getOffer(fechaAyer,fechaHoy) 
                    .then(response=> {                   
                        this.ofertas = response.data                                
                        this.isLoading = false
                    })
                }else{
                    this.isLoading = false
                }
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
        },
        cargarOfertasGuardadas(){
            if("ofertas" in localStorage){
                let ofertas =  JSON.parse(localStorage.getItem("ofertas"))
                this.ofertasTemp = ofertas
                let aux ="<ul>"
                for(let i=0;i<ofertas.length;i++){
                    aux+="<a href= "+ofertas[i].UrlOferta + " target='_blank'><li style='font-size: smaller;font-weight: bold;'> <i style='color:#0084BF;' class='fa fa-bookmark' aria-hidden='true'></i> " + ofertas[i].titulo + " <a  onclick='eliminarOferta(" +  JSON.stringify(ofertas[i]) + ");' ><i style='color:#E84C3D' class='fa fa-minus-circle' aria-hidden='true'></i></a> </li></a>"
                }
                aux += "</ul>"
                document.getElementById("ListOferta").innerHTML = aux;
            }
        },
        agregarOferta(oferta){            
            let ofertas = JSON.parse(localStorage.getItem("ofertas"))
            let insertarItem = true
            if("ofertas" in localStorage){
                for(let i=0;i<ofertas.length;i++){
                    if (ofertas[i].codigo.toString().trim() == oferta.codigo.toString().trim()){
                        insertarItem = false
                        break
                    }
                }
            }
            if (insertarItem){
                let ofertaJson = {'codigo' : oferta.codigo.toString().trim(), 'UrlOferta': oferta.UrlOferta, 'titulo': oferta.titulo}
                this.ofertasTemp.push(ofertaJson)
                localStorage.setItem("ofertas", JSON.stringify(this.ofertasTemp));
                this.cargarOfertasGuardadas()
            }        
        },
        eliminarOferta(oferta){
            let eliminarItem = false
            for(let i=0;i<this.ofertasTemp.length;i++){
                if (this.ofertasTemp[i].codigo.toString().trim() == oferta.codigo.toString().trim()){
                    eliminarItem = true
                    this.ofertasTemp.splice(i, 1);
                    break
                }
            }
            if(eliminarItem){
                localStorage.setItem("ofertas", JSON.stringify(this.ofertasTemp));
                this.cargarOfertasGuardadas()            
            }
        },
        currentPage(){
            localStorage.setItem('route',"/")
        },
  },
  mounted () {      
    this.mode = config.mode  
    window.eliminarOferta = this.eliminarOferta.bind(this);
    this.currentPage()
    this.cargarOfertas()
    this.cargarOfertasGuardadas()
  }
}
</script>
<style>
.btn-to-top {
  width: 60px;
  height: 60px;
  padding: 10px 16px;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}
.slick-prev:before {
  font-family: "FontAwesome";
  content: "\f0a8";
  color: #0084BF;
  font-size: 40px;
}

.slick-next:before {
  font-family: "FontAwesome";
  content: "\f0a9";
  color: #0084BF;
  font-size: 40px;
}
a:hover {
 cursor:pointer;
}
.dropdown-menu .divider {
    background-color: transparent;
}
.navbar-default.affix .float-right li a {
    color:#333333 !important;
    border: none;
}
.dropdown-menu > li > a {
    margin-bottom: 0px;
}
</style>