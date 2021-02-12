<template>
<section class="find-job section"> 
    <div class="container">
        <!--<b-breadcrumb :items="items">sdsd</b-breadcrumb>-->
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/"><i class="fa fa-home" aria-hidden="true"></i> Inicio</a></li>
                <li class="breadcrumb-item active" aria-current="page">Ofertas</li>
            </ol>
        </nav>
        <div class="col-md-12 row"> <label class="titulo4">Ofertas de trabajo en Chile</label></div>
        <div class="col-md-3 row">
            <div class="card-flat">
                <div class="container-card">
                    <h4><i style="color:#ff4f57" class="fa fa-filter" aria-hidden="true"></i> FILTROS APLICADOS</h4>                    
                    <div v-show="filtro1 || filtro2 || filtro3 || filtro4 || filtro5" class="alert alert-info" role="alert">
                        <ul>
                            <li v-show="filtro1">
                            <i class="fa fa-check" aria-hidden="true"></i> <strong>palabra clave:</strong> {{txtSearch}}
                            <i style="color:#E84C3D" class="fa fa-times" aria-hidden="true" v-on:click="delFilter(1)"></i>
                            </li>                      
                            <li  v-show="filtro2">
                            <i  class="fa fa-check" aria-hidden="true"></i> <strong>ubicación:</strong> {{lugar}}
                            <i style="color:#E84C3D" class="fa fa-times" aria-hidden="true" v-on:click="delFilter(2)"></i>
                            </li>
                            <li  v-show="filtro3">
                            <i class="fa fa-check" aria-hidden="true"></i> <strong>fecha publicación:</strong> Hoy
                            <i style="color:#E84C3D" class="fa fa-times" aria-hidden="true" v-on:click="delFilter(3)"></i>
                            </li>
                            <li  v-show="filtro4">
                            <i class="fa fa-check" aria-hidden="true"></i> <strong>tipo contrato:</strong> No es relevante
                            <i style="color:#E84C3D" class="fa fa-times" aria-hidden="true" v-on:click="delFilter(4)"></i>
                            </li>                   
                            <li  v-show="filtro5">
                            <i class="fa fa-check" aria-hidden="true"></i> <strong>ocupación:</strong> No es relevante
                            <i style="color:#E84C3D" class="fa fa-times" aria-hidden="true" v-on:click="delFilter(5)"></i>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <label class="sbox-3-label-form label-contenido1">PALABRA CLAVE</label>
                        <div class="form-group">
                            <input v-model = "txtSearch" class="form-control-search" type="text" placeholder="EMPLEO A BUSCAR" />
                        </div>
                    </div>
                    <div>
                        <label class="sbox-3-label-form label-contenido1">UBICACIÓN</label>
                        <div class="form-group selFrom-search">
                            <select v-model="cmbUbicacion" class="dropdown-product selectpicker btn-default" data-live-search="true" v-on:change="onChangeSite($event)">
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
                    <div>
                        <label class="sbox-3-label-form label-contenido1">FECHA PUBLICACIÓN</label>
                        <ul>
                            <li><input type="radio" name="optradio" value="1" v-model = "rdb" /><a href = "www.google.cl">Hoy</a></li>
                            <li><input type="radio" name="optradio" value="2" v-model = "rdb" />Ayer</li>
                            <li><input type="radio" name="optradio" value="3" v-model = "rdb"/>Hace 3 días</li>
                            <li><input type="radio" name="optradio" value="4" v-model = "rdb"/>Hace una semana</li>
                            <li><input type="radio" name="optradio" value="5" v-model = "rdb"/>Otra fecha</li>                            
                            <li v-show="rdb==5"><datepicker></datepicker></li>
                            <li v-show="rdb==5"><datepicker></datepicker></li>
                        </ul>
                    </div>
                    <div>
                        <label class="sbox-3-label-form label-contenido1">TIPO CONTRATO</label>
                        <div class="form-group">
                            <select class="form-control input-sm">
                                <option selected>NO ES RELEVANTE</option>
                                <option>Plazo fijo</option>
                                <option>Contrato indefinido</option>
                                <option>Práctica</option>                 
                            </select>
                        </div>
                    </div>
                    <div>
                        <label class="sbox-3-label-form label-contenido1">OCUPACIÓN</label>
                        <div class="form-group">
                            <select class="form-control input-sm" v-model="cmbOcupacion">
                                <option selected value="-1"> NO ES RELEVANTE</option>                                
                                <option value="1"> Arte/Diseño</option>
                                <option value="2">Economía</option>
                                <option value="3">Informática</option>                 
                                <option value="4">Telecomunicaciones</option>                 
                                <option value="5">Educación y Psicopedagogía</option>                 
                                <option value="6">Contabilidad</option>     
                                <option value="7">Estética</option>                 
                                <option value="8">Hotelería Turismo y Gastronomía</option>                 
                                <option value="9">Logística</option>                 
                                <option value="10">Marketing y Publicidad</option>                 
                                <option value="11">Salud</option>                 
                                <option value="12" >Operarios</option>                 
                                <option value="13">Profesionales y Técnicos</option>                 
                                <option value="14">Prácticas profesionales</option>                 
                                <option value="15">Recepción / Secretaria</option>                 
                                <option value="16">Recursos Humanos</option>                 
                                <option value="17">Seguridad</option>                 
                                <option value="18">Servicios Domésticos</option>                 
                                <option value="19">Trabajos Universitarios</option>                 
                                <option value="20">Ventas</option>                 
                                <option value="21">Comercial</option>                 
                                <option value="22">Otros</option>                                     
                            </select>
                        </div>
                    </div>
                </div>
                <div style="margin:5px;">
                <button v-on:click="cargarOfertasFiltro()"  class="btn btn-secondary btn-sm btn-principal-head" style="width: 100%;"><i aria-hidden="true" class="fa fa-search"></i> Buscar Ofertas<div class="ripple-container"><div class="ripple ripple-on ripple-out" style="left: 30.375px; top: -4px; background-color: rgb(255, 255, 255); transform: scale(3.36957);"></div></div></button>
                </div>
            </div>
        </div>
        <div class="col-md-9 row">
             <div v-if="isLoading">
                <square></square>
             </div>    
             <div v-else>
             <div class="col-md-6">
                <div class="form-group" style="text-align:left;">
                    <label for="exampleFormControlSelect1">Ordenar por</label>
                     <div class="form-group">
                        <select class="form-control input-sm">
                            <option selected>Fecha</option>
                            <option>Salario</option>
                            <option>Relevancia</option>          
                        </select>
                    </div>                  
                </div>
             </div>   
             <div class="col-md-6">                 
                <div class="col-md-12" > 
                    <nav aria-label="Page navigation" class="text-right" >
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
                <div class="col-md-12">
                    <div style="text-align:right;">
                        <h5>Página {{pag}} de {{Math.ceil(ofertas.length/NUM_RESULTS)}}</h5>
                    </div>  
                </div>
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
            </div>                   
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
    <back-to-top bottom="50px" right="50px">
        <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i></button>
    </back-to-top>   
</section>
</template>

<script>
import api from '../../api'
import config from '../../../src/config'
import Datepicker from 'vuejs-datepicker';
import { es } from 'vuejs-datepicker/dist/locale'
export default {
    data() {
        return {
            name: 'Ofertas',
            filtro1:false ,
            filtro2:false ,
            filtro3:true ,
            filtro4:false ,
            filtro5:false ,
            lugar:'',
            txtSearch : '',
            cmbUbicacion:"-1",
            ofertas : [], 
            NUM_RESULTS: 20, // Numero de resultados por página
            pag: 1, // Página inicial
            isLoading: true,    
            ofertasTemp:[],    
            showDate:false,
            rdb:"1",
            cmbOcupacion:"-1",
            items: [
                {
                    text: 'Catastro',
                    to: 'catastro'
                }
            ] ,
        }
    },
    head: {
        title: {
            inner: 'Chilempleo',
            separator: '-',
            complement: 'Ofertas de empleo'
        },      
        meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'application-name', content: 'Chilempleo' },
            { name: 'robots', content: 'index,follow'},
            { name: 'keywords', content: 'chile empleos, empleos, trabajo, profesor, profesores,'},
            { name: 'description', content: 'Chilempleo. Cientos de Empleos. Empleos todo Chile.', id: 'desc' }]
    },
    components:{
        Datepicker
    },
    mounted () {
        
        if (this.$route.query.s === undefined){
            this.txtSearch = ""
        }else{
            this.txtSearch = this.$route.query.s 
        }       
        if (this.$route.query.l === undefined){
            this.cmbUbicacion = "-1"
        }else{
            this.cmbUbicacion = this.$route.query.l
        }
        window.eliminarOferta = this.eliminarOferta.bind(this);
        this.cargarFiltros()
        this.cargarOfertas()
        this.cargarOfertasGuardadas()
    },
    methods: {
        substr(text){
            let txtFin = text
            let max=140
            if (text.length>max)
                txtFin = text.substr(0,max) + '....'
            return (txtFin)
        },
        onChangeSite(e){
            this.lugar = e.target.options[e.target.options.selectedIndex].text;
        },
        cargarFiltros(){
            if (this.txtSearch.trim()!="")
                this.filtro1=true
            if (this.cmbUbicacion!="-1")
                this.filtro2=true
        },
        delFilter(numfilter){
            if (numfilter==1){
                this.filtro1=false
                this.txtSearch = ""
            }
            else if (numfilter==2){
                this.filtro2=false
                this.lugar  = ""
                //this.cmbUbicacion = "-1"
                this.cmbUbicacion = this.$route.query.l

            }
            else if (numfilter==3)
                this.filtro3=false
            else if (numfilter==4)
                this.filtro4=false
            else if (numfilter==5)
                this.filtro5=false                                
            this.cmbUbicacion = -1
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
            if (this.rdb=="1")
                fechaAnt = fechaHoy

            api.getOffer(fechaAnt,fechaHoy) 
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
        cargarOfertasFiltro(){
            this.isLoading = true
            let f = new Date()
            let fAux = new Date()
            fAux.setDate(f.getDate()-3)
            let fechaHoy = this.zeroFill(f.getDate(),2) + "/" + this.zeroFill((f.getMonth() +1),2) + "/" + f.getFullYear()  
            //let  fechaAnt =  (this.zeroFill(fAux.getDate(),2) + "/" + this.zeroFill((fAux.getMonth()+1 ),2) + "/" + fAux.getFullYear())         
            if(this.txtSearch!="")
                this.filtro1=true
            let fechaAnt = fechaHoy
            if (this.rdb=="1")
                fechaAnt = fechaHoy        

            if (this.cmbUbicacion!="-1")
                this.filtro2=true
            
            api.getSearchOffer(fechaAnt,fechaHoy,this.txtSearch) 
            .then(response=> {                   
                this.ofertas = response.data
                this.isLoading = false
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
    },   
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
.form-control{
    padding: 0px;
}
</style>
