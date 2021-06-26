<template lang="">
<section  class="find-job section login_wrapper">
    <div class="container">
        <nav aria-label="breadcrumb" v-show="!loginUser">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/"><i class="fa fa-home" aria-hidden="true"></i> Inicio</a></li>
                <li class="breadcrumb-item active" aria-current="page">Ofertas</li>
            </ol>
        </nav>
        <div class="col-md-12 row"><label class="titulo4">Publicar oferta de trabajo</label></div>  
        <div v-show="!loginUser" class="col-md-3 row">
            <div class="card-flat">
                 <div class="container-card">
                    <div class="login-inner-form">
                        <div class="details">
                            <h3> <span>Ingreso empleador</span></h3>   
                             <div style="min-height:200px;">            
                              <div class="form-group">
                                    <input type="email" v-model="TxtEmailIngresoEmpleador" class="input-text" placeholder="Correo electrónico">
                              </div>
                              <div class="form-group">
                                    <input type="password"  v-model="TxtClaveIngresoEmpleador"  class="input-text" placeholder="Contraseña">
                              </div>
                              <div class="checkbox clearfix">                                      
                                  <a @click="olvidoContrasena()">¿ Olvidó su contraseña ?</a>
                              </div>
                              </div>      
                              <div class="form-group row">
                                    <div class="col-md-12 margin_bottom">
                                        <button  type="submit" v-on:click="Login" class="btn btn-block btn-lg btn-primary"><i class="fa fa-user margin-left-25" aria-hidden="true" style="color:#fff"></i> ENTRAR</button>

                                    </div>               
                                     <div class="col-md-12 margin_bottom">
                                        <button type="submit" v-on:click="CrearCuentaEmpleador" class="btn btn-block btn-lg btn-secondary"><i class="fa fa-smile-o margin-left-25" aria-hidden="true" style="color:#fff"></i> SOY NUEVO</button>
                                    </div>                                                                       
                              </div>                     
                        </div>
                    </div>    
                </div> 
            </div>  
        </div>
        <div v-bind:class="ajusteColumna">
            <div class="card-flat">
                <div class="container-card">
                    <h3 class="titulo6"> <span>Datos oferta</span></h3>   
                    <div>
                        <div class="col-md-6">
                            <div class="col-md-12">
                                <label class="label-destacado">Puesto / Título</label>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <input type="text" class="form-control"    placeholder="Titulo">
                                </div>    
                            </div>        
                        </div>
                        <div class="col-md-6">
                            <div class="col-md-12">
                                <label class="label-destacado">Clasificación</label>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <input type="text" class="form-control"    placeholder="Titulo">
                                </div>    
                            </div>        
                        </div>
                        <div  class="col-md-12">
                            <div class="col-md-12">
                                <label class="label-destacado">Descripción</label>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <textarea name="textarea" class="form-control"  rows="8" cols="50"></textarea>

                                </div>    
                            </div>      
                        </div>
                         <h3 class="titulo6"> <span>Ubicación</span></h3>   
                        <div class="col-md-12">
                            <div class="col-md-12">
                                <label class="label-destacado">Dirección</label>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <input type="text" class="form-control"    placeholder="Titulo">
                                </div>    
                            </div>        
                        </div>
                        <div class="col-md-6">
                            <div class="col-md-12">
                                <label  class="label-destacado">Ubicación</label>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <input type="text" class="form-control"    placeholder="Titulo">
                                </div>    
                            </div>        
                        </div>
                        <div class="col-md-6">
                            <div class="col-md-12">
                                <label  class="label-destacado">Comuna</label>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <input type="text" class="form-control"    placeholder="Titulo">
                                </div>    
                            </div>        
                        </div>
                    </div>
                    <h3 class="titulo6"> <span>Requisitos</span></h3>   
                        <ul>
                            <li><input type="radio" name="optradio" value="-1" v-model = "rdb" />Cualquiera</li>
                            <li><input type="radio" name="optradio" value="1" v-model = "rdb" /><a href = "www.google.cl">Hoy</a></li>
                            <li><input type="radio" name="optradio" value="2" v-model = "rdb" />Ayer</li>
                            <li><input type="radio" name="optradio" value="3" v-model = "rdb"/>Hace 3 días</li>
                            <li><input type="radio" name="optradio" value="4" v-model = "rdb"/>Hace una semana</li>
                            <li><input type="radio" name="optradio" value="5" v-model = "rdb"/>Otra fecha</li>                            
                            <li v-show="rdb==5"><datepicker></datepicker></li>
                            <li v-show="rdb==5"><datepicker></datepicker></li>
                        </ul>
                </div>
            </div>
        </div>
    </div>

    
</section>

</template>
<script>
export default {
    data() {
        return {
            loginUser:false,
            TxtEmailIngresoEmpleador:'',
            TxtClaveIngresoEmpleador:'',
        }
    },
    mounted () {
        if (this.$store.state.user!="" && window.localStorage.getItem('user')!="")
            this.loginUser = true
        else
            this.loginUser = false
    },
    methods: {
        Login(){
            alert(1)
        },
        async CrearCuentaEmpleador(){
            const { value: formValues } =  await this.$swal.fire({
            title: 'Crear cuenta empleador',
            html:
                '<input id="swal-input1" placeholder="Correo electrónico" class="swal2-input" >' +
                '<input id="swal-input2" type="password" placeholder="Contraseña" class="swal2-input">' +
                '<input id="swal-input3" placeholder="Nombre o nombre fantasía" class="swal2-input">',
            customClass: {
                validationMessage: 'my-validation-message'
            },
            focusConfirm: false,
            allowOutsideClick: false,
            showCancelButton: true,
            confirmButtonText: '<i class="fa fa-pencil margin-left"></i> CREAR CUENTA',
            cancelButtonText: '<i class="fa fa-sign-out" aria-hidden="true"></i> SALIR',
            preConfirm: () => {
                if (document.getElementById('swal-input1').value!="" && document.getElementById('swal-input2').value!="" && document.getElementById('swal-input3').value!="" ){
                    return [
                    document.getElementById('swal-input1').value,
                    document.getElementById('swal-input2').value,
                    document.getElementById('swal-input3').value

                    ]
                }else{
                    this.$swal.showValidationMessage(
                            ' Datos Requeridos no Ingresados'
                    )
                    return false
                }
            }
            })

            if (formValues) {
                this.$swal.fire(JSON.stringify(formValues))
                
            }
        }
    },
    computed:{
        ajusteColumna() {
            return this.loginUser ? 'col-md-12 row' : 'col-md-9 row';
        }
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
 

.form-control:focus {
    box-shadow: none;
}
  
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
     color: rgb(117, 117, 117);
    position: relative;
    text-align: center;
    width: 92%;
}
.container-card{
    height: 100%;
    display: flex;
    flex-direction: column;
}
ul li {
  display:inline;
}
</style>
