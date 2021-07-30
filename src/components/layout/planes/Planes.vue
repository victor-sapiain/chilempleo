<template lang="">
    <!-- Contenedor -->
	<div class="pricing-wrapper clearfix">
		<!-- Titulo -->
        <div class="col-md-3 row">
		<div class="pricing-table">
			<h3 class="pricing-title">Básico</h3>
			<div class="price">Gratis</div>
			<!-- Lista de Caracteristicas / Propiedades -->
			<ul class="table-list">
				<li>2 publicaciones <span>grátis por mes</span></li>
				<li>Visualización<span> simple  de CVs</span></li>
				<li>Hasta 14 días <span>visible</span></li>
			</ul>
            <br>
            <a href = "#">
                Ver detalle
            </a>
			<!-- Contratar / Comprar 
			<div class="table-buy">
				<a href="#" class="pricing-action">Comprar</a>
			</div>
            -->
		</div>
        </div>
        <div class="col-md-3 row">

		<div class="pricing-table recommended">
			<h3 class="pricing-title">Plata (*)</h3>
			<div class="price">$11.990<sup>+ IVA / mes</sup> </div>
			<!-- Lista de Caracteristicas / Propiedades -->
			<ul class="table-list">
				<li>7 publicaciones <span>por mes</span></li>
                <li>4 publicaciones <span>destacadas</span></li>
                <li>Visualización y descarga<span>  de CVs</span></li>
				<li>Hasta 20 días <span>visible</span></li>
				<li>Ver video<span> presentaciones de postulantes</span></li>
			</ul>
			<!-- Contratar / Comprar -->
            <br>
            <a href = "#">
                Ver detalle
            </a>
			<div class="table-buy">
				<a href="#" class="pricing-action">Comprar</a>
			</div>
		</div>
        </div>
        <div class="col-md-3 row">
		<div class="pricing-table">
			<h3 class="pricing-title">Oro (*)</h3>
			<div class="price">$35.990<sup>+ IVA / mes </sup></div>
			<!-- Lista de Caracteristicas / Propiedades -->
			<ul class="table-list">
				<li>15 publicaciones <span>por mes</span></li>
                <li>8 publicaciones <span>destacadas</span></li>
                <li>Visualización y descarga<span>  de CVs</span></li>
				<li>Hasta 30 días <span>visible</span></li>
                <li>Ver video<span> presentaciones de postulantes</span></li>
                <li>Realizar video entrevistas<span> (muchos participantes)</span> </li>
 			</ul>
			<!-- Contratar / Comprar -->
            <br>
            <a href = "#">
                Ver detalle
            </a>
			<div class="table-buy">
				<a href="#" class="pricing-action">Comprar</a>
			</div>
		</div>
        </div>
        <div class="col-md-3 row">
        <div class="pricing-table">
			<h3 class="pricing-title">Oro Plus(*)</h3>
			<div class="price">$45.990<sup>+ IVA / mes </sup></div>
			<!-- Lista de Caracteristicas / Propiedades -->
			<ul class="table-list">
				<li>Publicaciones Indefinidas</li>
                <li>16 publicaciones <span>destacadas</span></li>
                <li>Visualización y descarga<span>  de CVs</span></li>
				<li>Hasta 45 días <span>visible</span></li>
                <li>Ver video<span> presentaciones de postulantes</span></li>
                <li>Realizar video entrevistas<span> (muchos participantes)</span></li>
 			</ul>
			<!-- Contratar / Comprar -->
            <br>
            <a href = "#">
                Ver detalle
            </a>
			<div class="table-buy">
				<a href="#" class="pricing-action">Comprar</a>
			</div>
		</div>
        </div>
        <div>
        (*) Flexibilidad para cambios de planes y cancelación de servicio.
        </div>
	</div>
    
</template>
<script>
export default {
    
}
</script>
<style scoped lang="">
 * {
	margin: 0;
	padding: 0;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}
 
.pricing-table-title {
	text-transform: uppercase;
	font-weight: 700;
	font-size: 2.6em;
	color: #FFF;
	margin-top: 15px;
	text-align: left;
	margin-bottom: 25px;
	text-shadow: 0 1px 1px rgba(0,0,0,0.4);
}

.pricing-table-title a {
	font-size: 0.6em;
}

.clearfix:after {
	content: '';
	display: block;
	height: 0;
	width: 0;
	clear: both;
}
/** ========================
 * Contenedor
 ============================*/
.pricing-wrapper {
    margin-top:10px;
    margin-left:10px;
}

.pricing-table {
	margin: 0 10px;
	text-align: center;
	/*width: 300px;*/
	float: left;
	-webkit-box-shadow: 0 0 15px rgba(0,0,0,0.4);
	box-shadow: 0 0 15px rgba(0,0,0,0.4);
	-webkit-transition: all 0.25s ease;
	-o-transition: all 0.25s ease;
	transition: all 0.25s ease;
}

.pricing-table:hover {
	-webkit-transform: scale(1.06);
	-ms-transform: scale(1.06);
	-o-transform: scale(1.06);
	transform: scale(1.06);
}

.pricing-title {
	color: #FFF;
	background: #e95846;
	padding: 20px 0;
	font-size: 2em;
	text-transform: uppercase;
	text-shadow: 0 1px 1px rgba(0,0,0,0.4);
}

.pricing-table.recommended .pricing-title {
	background: #2db3cb;
}

.pricing-table.recommended .pricing-action {
	background: #2db3cb;
}

.pricing-table .price {
	background: #403e3d;
    color:#FFF;
	font-size: 2.8em;
	font-weight: 700;
	padding: 20px 0;
	text-shadow: 0 1px 1px rgba(0,0,0,0.4);
}

.pricing-table .price sup {
	font-size: 0.4em;
	position: relative;
	left: 5px;
}

.table-list {
	background: #FFF;
	color: #403d3a;
}

.table-list li {
	font-size: 1.4em;
	font-weight: 700;
	padding: 12px 8px;
}

.table-list li:before {
	content: "\f00c";
	font-family: 'FontAwesome';
	color: #3fab91;
	display: inline-block;
	position: relative;
	right: 5px;
	font-size: 16px;
} 

.table-list li span {
	font-weight: 400;
}

.table-list li span.unlimited {
	color: #FFF;
	background: #e95846;
	font-size: 0.9em;
	padding: 5px 7px;
	display: inline-block;
	-webkit-border-radius: 38px;
	-moz-border-radius: 38px;
	border-radius: 38px;
}


.table-list li:nth-child(2n) {
	background: #F0F0F0;
}

.table-buy {
	background: #FFF;
	padding: 15px;
	text-align: left;
	overflow: hidden;
}

.table-buy p {
	float: left;
	color: #37353a;
	font-weight: 700;
	font-size: 2.4em;
}

.table-buy p sup {
	font-size: 0.5em;
	position: relative;
	left: 5px;
}

.table-buy .pricing-action {
	float: right;
	color: #FFF;
	background: #e95846;
	padding: 10px 16px;
	-webkit-border-radius: 2px;
	-moz-border-radius: 2px;
	border-radius: 2px;
	font-weight: 700;
	font-size: 1.4em;
	text-shadow: 0 1px 1px rgba(0,0,0,0.4);
	-webkit-transition: all 0.25s ease;
	-o-transition: all 0.25s ease;
	transition: all 0.25s ease;
}

.table-buy .pricing-action:hover {
	background: #cf4f3e;
}

.recommended .table-buy .pricing-action:hover {
	background: #228799;	
}

/** ================
 * Responsive
 ===================*/
 @media only screen and (min-width: 768px) and (max-width: 959px) {
 	.pricing-wrapper {
 		width: 768px;
 	}

 	.pricing-table {
 		width: 236px;
 	}
	
	.table-list li {
		font-size: 1.3em;
	}

 }
a {
    color: #403e3d;
    text-decoration: revert;
    font-size: medium;
}
 @media only screen and (max-width: 767px) {
 	.pricing-wrapper {
 		width: 420px;
 	}

 	.pricing-table {
 		display: block;
 		float: none;
 		width: 100%;
 	}
 }
 
</style>