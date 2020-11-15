<template>
<section class="find-job section">
    <div class="container">
        <div class="col-md-3 row">
            <div class="card-flat">
                <div class="container-card">
                    <h4>Filtros</h4>
                    <div>
                        <label class="sbox-3-label-form label-contenido1">Palabra clave</label>
                        <div class="form-group">
                            <input id="txtSearch" name="txtSearch" class="form-control-search" type="text" placeholder="EMPLEO A BUSCAR" />
                        </div>
                    </div>
                    <div>
                        <label class="sbox-3-label-form label-contenido1">Ubicación</label>
                        <div class="form-group selFrom-search">
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
                    <div>
                        <label class="sbox-3-label-form label-contenido1">Fecha publicación</label>
                        <ul>
                            <li><a href = "www.google.cl">Hoy</a></li>
                            <li>Ayer</li>
                            <li>Hace 3 días</li>
                            <li>Hace una semana</li>
                            <li>Otra fecha</li>
                            <li>Fecha desde</li>
                            <li>Fecha hasta</li>
                        </ul>
                    </div>
                    <div>
                        <label class="sbox-3-label-form label-contenido1">Tipo contrato</label>
                    </div>
                    <div>
                        <label class="sbox-3-label-form label-contenido1">Ocupación</label>
                    </div>
                </div>
            </div>
            <button class="btn btn-secondary btn-sm btn-principal-head" style="width: 100%;"><i aria-hidden="true" class="fa fa-search"></i> Buscar Ofertas<div class="ripple-container"><div class="ripple ripple-on ripple-out" style="left: 30.375px; top: -4px; background-color: rgb(255, 255, 255); transform: scale(3.36957);"></div></div></button>
        </div>
        <div class="col-md-9 row">
             <div class="col-md-6">
                  <div class="form-group" style="text-align:left;">
                    <label for="exampleFormControlSelect1">Ordenar por</label>
                    <select class="form-control input-sm" id="exampleFormControlSelect1">
                        <option>Fecha</option>
                        <option>Salario</option>
                        <option>Relevancia</option>                 
                    </select>
                </div>
             </div>   
             <div class="col-md-6" v-show="!isLoading" >                 
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
                            <span class="link-detalle"><i class="fa fa-bookmark-o" aria-hidden="true"></i> Guardar</span> 
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
export default {
    data() {
        return {
            name: 'Ofertas',
            ofertas : [], 
            NUM_RESULTS: 20, // Numero de resultados por página
            pag: 1, // Página inicial
            isLoading: true,    
            ofertasTemp:[],    
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
    mounted () {
        window.eliminarOferta = this.eliminarOferta.bind(this);
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
        cargarOfertas(){
            this.isLoading = true
            let f = new Date()
            let fAux = new Date()
            fAux.setDate(f.getDate()-3)
            let fechaHoy = this.zeroFill(f.getDate(),2) + "/" + this.zeroFill((f.getMonth() +1),2) + "/" + f.getFullYear()  
            let  fechaAnt =  (this.zeroFill(fAux.getDate(),2) + "/" + this.zeroFill((fAux.getMonth()+1 ),2) + "/" + fAux.getFullYear())         
            api.getOffer(fechaAnt,fechaHoy) 
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
</style>
