<template>
  <div>
       <principal-header></principal-header> 
      <div>
          <router-view></router-view>
      </div>          
      <principal-footer></principal-footer>       
  </div>  
</template>

<script>
import config from '../../config'
import PrincipalHeader from '../../components/layout/principal/HeaderMenu'
import PrincipalFooter from '../../components/layout/principal/Footer'
export default {
  name: 'Principal',
  components: {
    PrincipalHeader,
    PrincipalFooter
  },
  data: function () {
    return {
      
    }
  },
  computed: {
   
  }
}
</script>
