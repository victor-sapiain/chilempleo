<template lang="">
   <div>
       <principal-header></principal-header> 
      <div>
          
          <router-view></router-view>
     
      </div>          
    </div>  
</template>
<script>
import config from '../../config'
import PrincipalHeader from '../../components/layout/principal/HeaderMenu'

export default {
    name: 'PanelPostulante',
    components: {
        PrincipalHeader,
    }, 
}
</script>
<style lang="">
    
</style>