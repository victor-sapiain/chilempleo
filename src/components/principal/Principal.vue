<template>
  <div>
       <principal-header></principal-header> 
      <div>
          <router-view></router-view>
      </div>          
  </div>  
</template>

<script>
import config from '../../config'
import PrincipalHeader from '../../components/layout/principal/Header'
export default {
  name: 'Principal',
  components: {
    PrincipalHeader
  },
  data: function () {
    return {
      
    }
  },
  computed: {
   
  }
}
</script>
