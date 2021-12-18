<template>
<section class="find-job section">
   <div class="container">
      <div class="detail-job">
         <div class="head-detail-job">
            <div class="row col-md-12">
               <div class="col-md-9">
                  <h3>{{itemOferta.oferta.titulo}}</h3>
                  <h4>{{itemOferta.empresa.nombre}} - {{itemOferta.oferta.ubicacion.comuna}}</h4>   
                  <div class="row col-md-6">
                     <div class="row">
                        <div class="col-md-6">
                           <span><i style="margin-top:15px;color:#999;" class="fa fa-calendar" aria-hidden="true"></i> {{formatoFecha(itemOferta.oferta.fecha)}}</span>     
                        </div>
                        <div class="col-md-6" v-show="mode==1">
                           <span><i style="margin-top:15px;color:#999;" class="fa fa-briefcase" aria-hidden="true"></i> Full Time</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-md-3" v-show="mode==1">
                  <div class="pull-right"><a class="facebookBtn smGlobalBtn" href="#" ></a>
                     <a class="twitterBtn smGlobalBtn" href="#" ></a>
                     <a class="linkedinBtn smGlobalBtn" href="#" ></a>                                
                  </div>
               </div>
            </div>            
         </div>
         <br>
         <div class="body-detail-job">
            <div class="contenido-card">
               <h3 class="margin-top">Descripción</h3>
               <p style="font-size:16px;font-family:'Nunito Sans'">{{itemOferta.oferta.descripcion}}</p>

               <div v-show="mode==1">
               <h4 class="margin-top">Requisitos</h4>
               <div class="label-contenido1">ESTUDIOS : Formación Profesional grado medio</div>
               <h4 class="margin-top">Datos complementarios</h4>
               <div class="label-contenido1">SALARIO : $100.000</div>
               <div class="label-contenido1">JORNADA LABORAL: $100.000</div>
               <div class="label-contenido1">Cheque Restaurant</div>
               <div class="label-contenido1">Bonos</div>
               <br>
               <button class="btn btn-primary "> Postular a la Vacante<div class="ripple-container"><div class="ripple ripple-on ripple-out" style="left: 75.7188px; top: -1px; background-color: rgb(255, 255, 255); transform: scale(3.34034);"></div><div class="ripple ripple-on ripple-out" style="left: 53.5313px; top: 4px; background-color: rgb(255, 255, 255); transform: scale(2.97101);"></div></div></button>         
               </div>
               <div v-show="mode==2">
               <br>
                <div  class="alert alert-info">
                    <span><strong style="font-size:20px;margin-left:5px;vertical-align:bottom;">INFORMACIÓN</strong></span>
                    <p style="font-size:18px">La postulación a esta oferta es vía correo electrónico.</p>            
                </div>  
               <button @click="homePage" class="btn btn-primary "> Volver<div class="ripple-container"><div class="ripple ripple-on ripple-out" style="left: 75.7188px; top: -1px; background-color: rgb(255, 255, 255); transform: scale(3.34034);"></div><div class="ripple ripple-on ripple-out" style="left: 53.5313px; top: 4px; background-color: rgb(255, 255, 255); transform: scale(2.97101);"></div></div></button>         
               </div>
            </div>
         </div>
      </div>
   </div>

</section>
</template>

<script>
import config from '../../../src/config'
export default {
   name: 'Oferta',
   data(){
      return{
         mode:-1,
         itemOferta:JSON.parse(sessionStorage.getItem("ofertaItem")),
         
      }
   } ,
   mounted() {
      this.init()
   }, 
   methods: {
      init() {
         this.mode = config.mode  
      },
      formatoFecha(fecha){
         return (fecha.split('/')[2]+'/'+fecha.split('/')[1]+'/'+fecha.split('/')[0])
      },
      
      homePage(){
         this.$router.push('/')     
      },
   },   
}
</script>
