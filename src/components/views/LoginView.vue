<template>
<div class="margen row">      
    <div class="login_wrapper" style="background-image: url('/static/img/login-background.jpg');">
      <div v-show="VerLogin"  class="container">
          <div v-if="isLoading">
            <square></square>
          </div>   
          <div v-else>              
              <div v-show="verify">  
                <div class="row" style="margin-top:-125px;">
                    <div class="col-md-8 col-md-offset-2">
                        <div class="card-flat">
                            <div class="container-card">
                                <!--<p v-show="TxtEmailRegistro!=''" style="font-size:16px;">Escriba el código que le hemos enviado a {{TxtEmail}} . Esto es para validar su cuenta.</p>-->
                                <h3><i class="fa fa-user" aria-hidden="true"></i> Verificación de cuenta de acceso</h3>          
                                <hr>                    
                                <div class="form-group">
                                    <input type="text" class="form-control" v-model="txtEmail"  placeholder="Correo electrónico">
                                </div>
                                <p style="font-size:16px;">Escriba el código de verificación que le hemos enviado a su correo eletrónico</p>
                                <div class="form-group">
                                    <input type="text" class="form-control" v-model="txtCodigo"  placeholder="Código de verificación">
                                </div>
                                <hr>
                                <button v-on:click="ValidarCodigo" class="btn btn-primary">Ingresar Código</button>
                            </div>    
                        </div>
                    </div>
                </div>
              </div>
              <div v-show="login" class="row login-box-12">                                                 
                  <!--
                  <div class="col-md-12">
                        <div class="alert alert-success">
                            <p>
							<span v-if="OpcionTipo=='Postulante'"> Ingresa tus credenciales como <strong> Postulante </strong> y podras postular a ofertas, subir tu CV, destacar tu perfil, participar en entrevistas.</span>
                            <span v-else><i class="fa fa-info-circle fa-lg fa-li" aria-hidden="true"></i> Ingresa tus credenciales como <strong> anunciante </strong> y podras publicar una oferta, destacar una oferta, acceder a base de datos de CVs, buscar perfiles postulantes, acceder a estadísticas.</span>
                            </p>
						</div>
                  </div>
                  -->
                  <div class="col-md-6" style="border-right-style: solid;border-right-width: 1px;border-right-color: #ccc;">
                      <div class="login-inner-form">
                          <div class="details">
                              <div v-if="OpcionTipo=='Postulante'">
                                <h3> <span>Ingreso postulante</span></h3>                              
                              </div>  
                              <div v-else>
                                <h3> <span>Ingreso empleador</span></h3>                              
                              </div>                 
                              <div style="min-height:200px;">            
                              <div class="form-group">
                                    <div v-if="OpcionTipo=='Postulante'">
                                        <input type="email" v-model="TxtEmailIngreso" class="input-text" placeholder="Correo electrónico postulante">
                                    </div>
                                    <div v-else>
                                        <input type="email" v-model="TxtEmailIngresoEmpleador" class="input-text" placeholder="Correo electrónico empleador">
                                    </div>
                              </div>
                              <div class="form-group">
                                    <div v-if="OpcionTipo=='Postulante'">
                                         <input type="password"  v-model="TxtClaveIngreso"  class="input-text" placeholder="Contraseña">
                                    </div>
                                    <div v-else>
                                         <input type="password"  v-model="TxtClaveIngresoEmpleador"  class="input-text" placeholder="Contraseña">
                                    </div>     
                              </div>
                              <div class="checkbox clearfix">                                      
                                  <a href="forgot-password.html">¿ Olvidó su contraseña ?</a>
                              </div>
                              </div>
                              <div class="form-group row">
                                    <div class="col-md-12 margin_bottom">
                                        <button  type="submit" v-on:click="AccesoLogin" class="btn btn-block btn-lg btn-primary"><i class="fa fa-user margin-left-25" aria-hidden="true" style="color:#fff"></i> ENTRAR</button>
                                    </div>                                                                                    
                              </div>
                          </div>
                      </div>
                  </div>                  
                  <div class="col-md-6" >
                    <div class="login-inner-form">
                        <div class="details">
                              <div v-if="OpcionTipo=='Postulante'">
                                <h3> <span>Crear cuenta postulante</span></h3>                                                       
                              </div>
                              <div v-else>
                                <h3> <span>Crear cuenta empleador</span></h3>                                                       
                              </div>
                              <div style="min-height:200px;"> 
                              <div class="form-group">
                                    <div v-if="OpcionTipo=='Postulante'">
                                        <input type="email" v-model="TxtEmailRegistro" class="input-text" placeholder="Correo electrónico postulante">
                                    </div>
                                    <div v-else>
                                        <input type="email" v-model="TxtEmailRegistroEmpleador" class="input-text" placeholder="Correo electrónico empleador">
                                    </div>
                              </div>
                              <div class="form-group">
                                    <div v-if="OpcionTipo=='Postulante'">
                                        <input type="password"  v-model="TxtClaveRegistro"  class="input-text" placeholder="Contraseña">
                                    </div>
                                    <div v-else>
                                        <input type="password"  v-model="TxtClaveRegistroEmpleador"  class="input-text" placeholder="Contraseña">
                                    </div>     
                              </div> 
                              <div class="form-group">
                                    <div v-if="OpcionTipo=='Postulante'">
                                        <input type="text"  v-model="TxtNombreRegistro"  class="input-text" placeholder="Nombre">
                                    </div>
                                    <div v-else>
                                        <input type="text"  v-model="TxtNombreRegistro"  class="input-text" placeholder="Nombre o Razón social">
                                    </div>    
                              </div>                              
                              </div>
                              <div class="form-group">
                                  <button type="submit" v-on:click="CrearCuenta" class="btn btn-block btn-lg btn-secondary"><i class="fa fa-pencil margin-left" aria-hidden="true" style="color:#fff"></i> CREAR CUENTA</button>
                              </div>
                          </div>
                    </div>                  
                  </div>            
                  <span v-if="OpcionTipo=='Postulante'" class="FormDivider__LineThrough-sc-1mk5332-0 dHVBa-D">o inicia con</span>                
                  <div v-if="OpcionTipo=='Postulante'" class="col-md-12" style="margin:10px;">
                        <div class="col-md-4">
                        <a class="btn btn-block btn-social btn-google" v-on:click="AccesoGoogle">
                            <span class="fa fa-google"></span> <span >Acceso por Google</span>
                        </a>
                        </div>
                        <div class="col-md-4">
                        <a class="btn btn-block btn-social btn-facebook">
                            <span class="fa fa-facebook"></span> <span >Acceso por Facebook</span>
                        </a>
                        </div>                       
                        <div class="col-md-4">
                        <a class="btn btn-block btn-social btn-linkedin">
                            <span class="fa fa-linkedin"></span> <span >Acceso por Linkedin</span>
                        </a>
                        </div>
                  </div>
               </div>
          </div>
      </div>
    </div>
</div>
</template>
<script>
import Auth from '@aws-amplify/auth';
export default {
    name: 'LoginView',
    watch:{
        "$store.state.tipoUsuario"(nv) {
            this.SeleccionarOpcion(nv)
        }  
    },
    data () {
        return {
            isLoading:false,
            verify:false,
            login:true,
            txtCodigo:'',
            txtEmail:'',
            TxtEmailRegistro:'',
            TxtEmailRegistroEmpleador:'',
            TxtPostulante : '',
            TxtEmailIngreso:'',
            TxtEmailIngresoEmpleador:'',
            TxtClaveRegistro:'',
            TxtClaveRegistroEmpleador:'',
            TxtClaveIngreso:'',
            TxtClaveIngresoEmpleador:'',
            TxtNombreRegistro:'',
            OpcionTipo : '',
            VerLogin : true,
            usrAws : null,
            SwitchOptions:{
                 layout: {
                    color: '#fff',
                    backgroundColor: '#BDC3C7',
                    selectedColor: 'white',
                    selectedBackgroundColor: 'green',
                    borderColor: '#cccccc',
                    fontFamily: 'Arial',
                    fontWeight: '400',
                    fontWeightSelected: '400',
                    squareCorners: true,
                    noBorder: false,
                },
                size: {
                    fontSize: 1.5,
                    height: 3.3,
                    padding: 0.3,
                    width: 80
                },
                items: {
                    delay: .4,
                    preSelected: 'Postulante',
                    disabled: false,
                    labels: [
                    {name: 'Postulante', color: 'white', backgroundColor: '#61CD73'}, 
                    {name: 'Empleador', color: 'white', backgroundColor: '#61CD73'}
                    ]
                }
            }
        }
    },
    head: {
        title: {
            inner: 'Chilempleo',
            separator: '-',
            complement: 'Acceso'
        },      
        meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'application-name', content: 'Chilempleo' },
            { name: 'robots', content: 'index,follow'},
            { name: 'keywords', content: 'chile empleos, empleos, trabajo, profesor, profesores,'},
            { name: 'description', content: 'Chilempleo. Cientos de Empleos. Empleos todo Chile.', id: 'desc' }]
    },
    mounted() {             
        let urlParams = new URLSearchParams(window.location.search)
        if (urlParams.has('type')){
            if (urlParams.get('type')=='verify'){
                this.verify=true
                this.login=false  
            }
        }
        
        this.SeleccionarOpcion(this.$store.state.tipoUsuario)       
        /*
        this.$swal({
            title: "ddsd", 
            html: "<input type=text value = 01111></input>",  
            confirmButtonText: "V redu", 
            allowOutsideClick: "true" 
        });
        */
       /*
       const inputOptions = new Promise((resolve) => {
        setTimeout(() => {
            resolve({
            '1': 'Postulante',
            '2': 'EMPLEADOR'
            })
        }, 1000)
        })
        this.$swal.fire({
            title: 'Ingresar a mi cuenta o Registrar una nueva cuenta como :',
            input: 'radio',
            inputOptions: inputOptions,
            confirmButtonText: 'ACEPTAR SELECCIÓN',
            cancelButtonText: 'VOLVER A INICIO',
            showCancelButton: true,
             allowOutsideClick: false,
            allowEscapeKey: false,
            width: '550px',
            inputValidator: (value) => {
                if (value==1){
                    this.OpcionTipo='Postulante'
                }else{
                    this.OpcionTipo='Empleador'
                }
                if (!value) {
                    return 'Necesitas seleccionar una opción'
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {                
                this.VerLogin = true
            }else if(result.isDismissed){
                window.location.href = '/'            
            }
        })
        */
    },
    methods: {
        limpiarFormPostulante(){
            this.TxtEmailIngreso=""
            this.TxtClaveRegistro=""
            this.TxtNombreRegistro =""
        },
        limpiarFormEmpleador(){
            this.TxtEmailIngreso=""
            this.TxtClaveRegistro=""
            this.TxtNombreRegistro = ""
            
        },
        SeleccionarOpcion(tipoUsuario){
            if(tipoUsuario==2)
                this.OpcionTipo = "Empleador"
            else if(tipoUsuario==1)
                this.OpcionTipo = "Postulante"
        },
        async AccesoLogin(){
            try {
                this.isLoading=true
                const user = await Auth.signIn(this.TxtEmailIngreso, this.TxtClaveIngreso);
                if (!user.attributes['email_verified']){
                    this.$swal({
                        icon: 'error',
                        title: 'Usuario no autorizado',
                        text: 'Cuenta de usuario no autorizada.',
                        confirmButtonText: "Aceptar", 
                    });
                }else{
                    this.$store.commit('SET_USER', this.TxtEmailIngreso)
                    this.$router.push('/panel') 


                    /*
                    if (this.OpcionTipo == "Postulante"){
                        alert(postulante)
                    }
                    */
                }
                this.isLoading=false
            } catch (error) {
                if (error.code=="NotAuthorizedException" || error.code=="UserNotFoundException"){
                    this.$swal({
                        icon: 'error',
                        title: 'Usuario no autorizado',
                        text: 'Usuario o clave de acceso incorrecta.',
                        confirmButtonText: "Aceptar", 
                    });
                }else{
                     this.$swal({
                        icon: 'error',
                        title: 'Error no controlado',
                        text: error,
                        confirmButtonText: "Aceptar", 
                    });
                }
                this.isLoading=false
            }
        },
        async AccesoGoogle(){
            const user = Auth.federatedSignIn({ provider: 'Google' })
            console.log(user)

        },
        async CrearCuenta(){
             try {
                this.verify=true
                this.login=false  

                this.usrAws = await Auth.signUp({username:this.TxtEmailRegistro,password:this.TxtClaveRegistro});                                  
                this.txtEmail = this.TxtEmailRegistro
                //this.$router.push({ name: 'acceso?type=verify' })
                //console.log(this.usrAws.user['username']);
            } catch (error) {
                console.log('error signing up:', error);
            }        
        },
        async confirmarCuenta(username,code){
            try {
                await Auth.confirmSignUp(username, code);
                this.$swal({
                        icon: 'success',
                        title: 'Confirmación',
                        text: 'Cuenta de usuario verificada correctamente',
                        confirmButtonText: "Aceptar", 
                    });
                this.$router.push({ name: "callback" });

                //console.log(respuesta);
            } catch (error) {
                console.log('error confirming sign up', error);              
            }
        },        
        ValidarCodigo(){
            //this.confirmarCuenta(this.usrAws.user['username'],this.TxtCodigo)
            this.confirmarCuenta(this.txtEmail,this.txtCodigo)
        },
        signOut() {
            Auth.signOut()
                .then(data => console.log(data))
                .catch(err => console.log(err))
        },
        
    },

}
</script>

<style scoped>
.margen{
  margin-top:0px;
}
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}
/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.background-login{
  padding:15px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: darkgray;
}

@import url('https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&display=swap');

body {
    font-family: 'Nunito', sans-serif;
    color: #535353;
}

img{
    max-width: 100%;
}

.form-control:focus {
    box-shadow: none;
}

h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: 'Nunito', sans-serif;
}

/*---------- Global Style closed ----------------*/



/*---------- Loader Style ----------------*/
.loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    text-align: center;
    background: rgba(255,255,255,0.97);
    display: flex;
    align-items: center;
    justify-content: center;
}
.loader .loader_div {
    border: 6px solid #ffebea;
    border-radius: 50%;
    border-top: 6px solid #047DE5;
    width: 60px;
    height: 60px;
    -webkit-animation: spin 1.5s linear infinite;
    animation: spin 1.5s linear infinite;
}
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
/*---------- Loader Style closed ----------------*/


/*----Login page-----*/
.login_wrapper{
    top: 0;
    width: 100%;
    bottom: 0;
    min-height: 100vh;
    z-index: 9;
    opacity: 1;
    position: relative;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    /*background-image: url(../images/login-bg2.jpg);*/
    background-repeat: no-repeat;
    background-position: 0 bottom;
    background-size: cover;
}
.login_wrapper .login-inner-form {
    color: #272323;
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.login_wrapper .col-pad-0{
    padding: 0;
}
.login_wrapper .login-inner-form .details p{
    color: #403838;
    font-weight: 400;
    font-size: 15px;
}
a.logo_text {
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    align-items: center;
    width: 170px;
    justify-content: center;
    margin: 0 auto 15px;
}
a.logo_text span {
    background: #fff;
    line-height: 1;
    display: inline-block;
    padding: 4px 5px 2px;
    color: #047DE5;
    font-weight: 700;
    border-radius: 4px;
    margin-right: 10px;
}

.login_wrapper .login-inner-form .details p a{
    margin-left: 3px;
    color: #403838;
}
.login_wrapper .login-inner-form .details {
    padding: 15px 15px;
}
.login_wrapper .login_right {
    background-size: cover;
    width: 100%;
    bottom: 0;
    border-radius: 10px 0 0 10px;
    padding: 80px 20px;
    background: #047DE5;
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.login_wrapper .login_right:after {
    content: "\f061";
    height: 40px;
    width: 40px;
    background: #fff;
    border-radius: 50%;
    display: block;
    position: absolute;
    right: -20px;
    top: 50%;
    z-index: 1;
    margin-top: -20px;
    font-family: fontAwesome;
    line-height: 40px;
    color: #047DE5;
    font-size: 14px;
    box-shadow: 0 0 20px rgba(0,0,0,0.15);
}
.login-box-12 {
    margin: 0 auto;
    max-width: 750px;
    border-radius: 10px;
    background: #fff;
    background-size: cover;
    top: 0;
    bottom: 0;
    opacity: 1;
    text-align: center;
    overflow: hidden;
    align-items: stretch;
    box-shadow: 0 0 50px rgba(0,0,0,0.05);
    border : 1px solid #cccccc;

}
.login_wrapper .btn-outline {
    border-radius: 3px;
    padding: 6px 30px 6px 30px;
    color: #047DE5;
    background: #fff;
    letter-spacing: 1px;
    font-size: 14px;
    font-weight: 600;
    margin: 0 auto;
    border:2px solid #fff;
    transition: all ease 0.4s;
}
.login_wrapper .none-2{
    display: none;
}
.login_wrapper .btn-outline:hover {
    background: transparent;
    text-decoration: none;
    color: #fff;
    border-color: #fff;
}
.login_wrapper .login-inner-form h3 {
    margin: 0 0 25px;
    font-size: 22px;
    font-weight: 700;
    font-family: 'Nunito', sans-serif;
}
.login_wrapper .login-inner-form h3 span {
    color: #535353;
}
/*
.login_wrapper .login-inner-form h3:after {
    display: block;
    content: "";
    position: absolute;
    left: -46px !important ;
    right: 0;
    width: 30px;
    height: 1px;
    background: #047DE5;
    margin: 0 auto;
    bottom: 0;
}*/

.login_wrapper .login-inner-form .form-group {
    margin-bottom: 20px;
}
.login_wrapper .login-inner-form .input-text {
    font-weight: 600;
    outline: none;
    width: 100%;
    padding: 10px 20px;
    font-size: 15px;
    outline: 0;
    font-weight: 500;
    color: #717171;
    height: 45px;
    border-radius: 3px;
    border: 1px solid #ddd;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .04);
}
.login_wrapper .login-inner-form .btn-md {
    cursor: pointer;
    padding: 10px 50px 8px 50px;
    height: 45px;
    letter-spacing: 1px;
    font-size: 14px;
    font-weight: 600;
    font-family: 'Nunito', sans-serif;
    border-radius: 3px;
    text-transform: uppercase;
}
.login_wrapper .login_right .social-list li {
    display: inline-block;
    font-size: 16px;
}

.login_wrapper .login_right .logo{
    height: 30px;
    margin-bottom: 20px;
}
.login_wrapper .login_right p{
    font-size: 15px;
    color: #fff;
    margin-bottom: 30px;
}
.login_wrapper .login_right .btn-sm{
    padding: 6px 20px 6px 20px;
    font-size: 13px;
}
.login_wrapper .login_right .social-list{
    margin-top: 35px;
    padding: 0;
}
.login_wrapper .login_right .social-list li a {
    display: block;
    background: rgba(0,0,0,0.07);
    border-radius: 3px;
    display: inline-block;
    margin: 0 3px;
    width: 32px;
    height: 32px;
    color: rgb(255, 255, 255);
    font-size: 16px;
    line-height: 32px;
    transition: all ease 0.4s;
}
.login_wrapper .login_right .social-list li a:hover {
    background: #fff;
    color: #047DE5;
    transform: translateY(-3px);
}
.login_wrapper .login-inner-form input[type=checkbox], input[type=radio] {
    margin-right: 3px;
}
.login_wrapper .login-inner-form button:focus {
    outline: none;
    outline: 0 auto -webkit-focus-ring-color;
}
.login_wrapper .login-inner-form .btn-theme.focus, .btn-theme:focus {
    box-shadow: none;
}
.login_wrapper .login-inner-form .btn-theme {
    background: #047DE5;
    border: none;
    color: #fff;
}
.login_wrapper .login-inner-form .btn-theme:hover {
    background: #047DE5;
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
}
.login_wrapper .login-inner-form .terms{
    margin-left: 3px;
}
.login_wrapper .login-inner-form .checkbox {
    margin-bottom: 20px;
    font-size: 14px;
}
.login_wrapper .login-inner-form .form-check{
    float: left;
    margin-bottom: 0;
}
.login_wrapper .login-inner-form .form-check a {
    color: #717171;
    float: right;
}
.login_wrapper .login-inner-form .form-check-input {
    position: absolute;
    margin-left: 0;
    opacity: 0;
}
.slick-prev {
    left: -37px;
}
.login_wrapper .login-inner-form .form-check label::before {
    content: "";
    display: inline-block;
    position: absolute;
    width: 17px;
    height: 17px;
    margin-left: -25px;
    border: 1px solid #c5c3c3;
    border-radius: 3px;
    background-color: #fff;
}
.login_wrapper .login-inner-form .form-check-label {
    padding-left: 25px;
    margin-bottom: 0;
    font-size: 14px;
    color: #403838;
}
.login_wrapper .login-inner-form .checkbox-input input[type="checkbox"]:checked + label::before {
    background-color: #047DE5;
    border-color: #047DE5;
}
.login_wrapper .login-inner-form input[type=checkbox]:checked + label:before {
    font-weight: normal;
    color: #f3f3f3;
    line-height: 15px;
    font-size: 10px;
    content: "\f00c";
    background-color: #047DE5;
    border-color: #047DE5;
    font-family: fontAwesome;
}
.login_wrapper .login-inner-form input[type=checkbox], input[type=radio] {
    margin-top: 4px;
}
.login_wrapper .login-inner-form .checkbox a {
    font-size: 14px;
    color: #403838;
    float: left;
}


/** Media Queries 
-----------------------------------------------------------------------*/
@media (max-width: 991px) {
    .login_wrapper .pad-0{
        padding: 0;
    }
    .login_wrapper .login-box-12 {
        margin: 0 auto;
        max-width: 400px;
    }
    .login_wrapper .login-inner-form .details {
        padding: 30px;
    }
    .login_wrapper .login_right {
        border-radius:0px;
        padding: 40px 20px;
    }
    .login_wrapper .login_right:after {
        bottom: -20px;
        top: auto;
        left: 50%;
        right: auto;
        margin-left: -20px;
        transform: rotate(90deg);
    }
}
@media (max-width: 767px) { 
.login_wrapper .login-inner-form .details {
    padding: 40px 10px 30px;
} 
}
@media (max-width: 479px) { 
    .login_wrapper .login-inner-form .details {
        padding: 30px 10px;
    }
}
.dHVBa-D::before, .dHVBa-D::after {
    border-top: 1px solid rgb(189, 189, 189);
    content: "";
    display: table-cell;
    position: relative;
    top: 0.8em;
    width: 42%;
}
.dHVBa-D {
    display: table;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 2px;
    margin: 0px auto 1em;
    color: rgb(117, 117, 117);
    position: relative;
    text-align: center;
    width: 92%;
}
</style>
