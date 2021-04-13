export default {   
    TipoUsuario({commit},{tipo}){      
        commit('SET_TIPO_USUARIO', tipo)
    },
    Usuario({commit},{usuario}){
        commit('SET_USER',usuario)
    } 
}
