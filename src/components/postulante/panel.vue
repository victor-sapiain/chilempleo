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
import PrincipalFooter from '../../components/layout/principal/Footer'
export default {
    name: 'PanelPostulante',
    components: {
        PrincipalHeader,
        PrincipalFooter
    },
    data: function () {
        return {
        
        }
    },

}
</script>
<style lang="">
    
</style>