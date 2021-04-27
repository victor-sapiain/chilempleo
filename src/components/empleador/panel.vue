<template lang="">
    <div>
        <principal-header></principal-header> 
        <div>        
          <router-view></router-view>
        </div>  
    </div>
</template>
<script>
import PrincipalHeader from '../../components/layout/principal/HeaderMenu'
export default {
    name: 'PanelEmpleador',
    components: {
        PrincipalHeader,
    }, 
}
</script>
<style lang="">
    
</style>