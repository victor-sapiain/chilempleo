<template>
<section class="find-job section">
   <div class="container">
      <form>
      <div class="row">
         <div class="col-md-6 col-sm-6">
            <div class="form-group">
                  <input id="txtSearch" name="txtSearch" class="form-control-search" type="text" placeholder="EMPLEO A BUSCAR" />
            </div>
         </div>
         <div class="col-md-5 col-sm-6">
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
         <div class="col-md-1 col-sm-6">
            <button id="btnSearch" type="submit" class="btn-sm btn-primary"><i class="fa fa-search" aria-hidden="true"></i></button>
         </div>
      </div>
      </form>  
      
      <div class="detail-job">
         <div class="head-detail-job">
            <div class="row col-md-12">
               <div class="col-md-9">
                  <h3>Mozo/a de Almacén (Jornada PARCIAL)</h3>
                  <h4>Grupo Eulen - Barcelona, Barcelona provincia</h4>   
                  <div class="label-contenido1"><span><i style="color:red;" class="fa fa-calendar" aria-hidden="true"></i> 12/12/2020</span>  <span><i style="color:sandybrown;" class="fa fa-briefcase" aria-hidden="true"></i> Full Time</span></div>      

               </div>
               <div class="col-md-3">
                  <div class="pull-right"><a class="facebookBtn smGlobalBtn" href="#" ></a>
                     <a class="twitterBtn smGlobalBtn" href="#" ></a>
                     <a class="linkedinBtn smGlobalBtn" href="#" ></a>                                
                  </div>
               </div>
            </div>            
         </div>
         <div class="body-detail-job">
            <div class="contenido-card">
               Seleccionamos para importante multinacional de mensajería, servicios de carga y soluciones a medida para todo tipo de envíos, con extensa red terrestre en toda Europa ubicada en Zona Franca, UN/A MOZO/A CARRETILLERO/A.
               <h4 class="margin-top">Requisitos</h4>
               <div class="label-contenido1">ESTUDIOS : Formación Profesional grado medio</div>
               <h4 class="margin-top">Datos de la Oferta</h4>
               <div class="label-contenido1">SALARIO : $100.000</div>
               <div class="label-contenido1">JORNADA LABORAL: $100.000</div>
               <h4 class="margin-top">Beneficios</h4>
               <div class="label-contenido1">Cheque Restaurant</div>
               <div class="label-contenido1">Bonos</div>
               <br>
               <button class="btn btn-primary btn-principal-head"> Postular a la Vacante<div class="ripple-container"><div class="ripple ripple-on ripple-out" style="left: 75.7188px; top: -1px; background-color: rgb(255, 255, 255); transform: scale(3.34034);"></div><div class="ripple ripple-on ripple-out" style="left: 53.5313px; top: 4px; background-color: rgb(255, 255, 255); transform: scale(2.97101);"></div></div></button>         
            </div>
         </div>
      </div>
   </div>

</section>
</template>

<script>
export default {
   name: 'Oferta',
   data(){

   } ,
   mounted() {

   },  
}
</script>
