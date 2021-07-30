<template lang="">
    <div class="container">
    <div class="ancho">
        <div class = "posicionar-texto">
            <h2>El mejor Plan para tu negocio</h2> 
            <h3>Elige la opción que mejor se adapte a tus necesidades</h3>
        </div>
        <br>
        <planes-disponibles></planes-disponibles>
    </div>
    </div>
</template>
<script>
import PlanesDisponibles from '../../components/layout/planes/planes'
export default {
    components: {
        PlanesDisponibles,
    }, 
   
    head: {
        title: {
            inner: 'Chilempleo',
            separator: '-',
            complement: 'planes'
        },      
        meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'application-name', content: 'Chilempleo' },
            { name: 'robots', content: 'index,follow'},
            { name: 'keywords', content: 'chile empleos, empleos, trabajo, profesor, profesores,'},
            { name: 'description', content: 'Chilempleo. Cientos de Empleos. Empleos todo Chile.', id: 'desc' }]
    },
	mounted() {    
		 let token = localStorage.getItem('token')
         //if(token !== null) 
		 //   console.log(token['payload']['sub'])
	}
}
</script>
<style lang="">
    .ancho{
        width:90%;
    }
    .posicionar-texto{
        margin-left:20px !important;
        margin-top:20px;
    }
</style>