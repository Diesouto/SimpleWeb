$(document).ready(function(){
	
	//Slider
	if(window.location.href.indexOf('index') > -1){
		$('.slider').bxSlider({
			mode: 'fade',
			cations: true,
			slideWidth: 1200,
			responsive: true,
			pager: false,
		});
	}
	
	//Posts
	if(window.location.href.indexOf('index') > -1){
		var posts = [
			{
				title: 'Prueba de titulo 1',
				date: moment().format("MMMM Do YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			},
			{
				title: 'Prueba de titulo 2',
				date: moment().format("MMMM dddd YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			},
			{
				title: 'Prueba de titulo 3',
				date: 'publicado el día: ' +moment().format("dddd ") +moment().date() +moment().format(" MMMM YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			},
			{
				title: 'Prueba de titulo 4',
				date: new Date(),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			},
		];
	
	posts.forEach((item, index) => {
		var post = `
			<article class="post">
				<h2>${item.title}</h2>
				<span class="date">${item.date}</span>
				<p>
					${item.content}
				</p>
				<a href="#" class="button-more">Leer más</a>
			</article>
		`;
		
		$("#posts").append(post);
		
		console.log(post);
	});
	
	console.log(posts);
	}
	
	//Selector de tema
	var theme = $("#theme");
	
	$("#to-green").click(function() {
		theme.attr("href", "css/green.css");
	});
	
	$("#to-red").click(function() {
		theme.attr("href", "css/red.css");
	});
	
	$("#to-blue").click(function() {
		theme.attr("href", "css/blue.css");
	});
	
	
	//Scroll arriba web
	$(".subir").click(function(){
		$('html, body').animate({
			scrollTop: 0
		}, 500);
		
		return false;
	});
	
	//Login falso
	$("#login").submit(function(){
		var nombre = $("#form-nombre").val();
		localStorage.setItem("form-name", nombre)
	});
	
	var nomAlmacenado = localStorage.getItem("form-name");
	
	if(nomAlmacenado != null && nomAlmacenado != "undefined"){
		var about_parrafo = $("#about p");
	
		about_parrafo.html("<br/><strong>Bienvenido, " + nomAlmacenado +"</strong>");
		about_parrafo.append("<a href='#' id='logout'> Cerrar sesión </a>");
		
		$("#login").hide();
		
		$("#logout").click(function(){
			localStorage.clear();
			location.reload();
		});
	}
	
	//Acordeon
	if(window.location.href.indexOf('about') > -1){
		$("#acordeon").accordion();
	}
	
	//Reloj
	if(window.location.href.indexOf('reloj') > -1){
	
		setInterval(function(){
			var reloj = moment().format("hh:mm:ss");
			$("#reloj").html(reloj);
		}, 1000);
	}
	
	//Validator
	if(window.location.href.indexOf('contact') > -1){
		
		$("form input[name='date']").datepicker({
			dateFormat: 'dd/mm/yy'
		});
		
		$.validate({
			lang:'es',
			errorMessagePosition: 'top',
			scrollToTopOnError: true
		});
	}
});








