// ? ----- ----- Carrusel 1 ----- -----
const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas = Math.ceil(peliculas.length / 5);
for(let i = 0; i < numeroPaginas; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth;

		document.querySelector('.indicadores .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}
// ? ----- ----- Carrusel 1 close ----- -----
// ? ----- ----- Carrusel 2 ----- -----
const fila2 = document.querySelector('.contenedor-carousel2');
const peliculas2 = document.querySelectorAll('.pelicula2');

const flechaIzquierda2 = document.getElementById('flecha-izquierda2');
const flechaDerecha2 = document.getElementById('flecha-derecha2');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha2.addEventListener('click', () => {
	fila2.scrollLeft += fila2.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores2 .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda2.addEventListener('click', () => {
	fila2.scrollLeft -= fila2.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores2 .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas2 = Math.ceil(peliculas2.length / 5);
for(let i = 0; i < numeroPaginas2; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores2').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila2.scrollLeft = i * fila2.offsetWidth;

		document.querySelector('.indicadores2 .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}
// ? ----- ----- Carrusel 2 close ----- -----
// ? ----- ----- Carrusel 3 ----- -----
const fila3 = document.querySelector('.contenedor-carousel3');
const peliculas3 = document.querySelectorAll('.pelicula3');

const flechaIzquierda3 = document.getElementById('flecha-izquierda3');
const flechaDerecha3 = document.getElementById('flecha-derecha3');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha3.addEventListener('click', () => {
	fila3.scrollLeft += fila3.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores3 .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda3.addEventListener('click', () => {
	fila3.scrollLeft -= fila3.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores3 .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas3 = Math.ceil(peliculas3.length / 5);
for(let i = 0; i < numeroPaginas3; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores3').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila3.scrollLeft = i * fila3.offsetWidth;

		document.querySelector('.indicadores3 .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}
// ? ----- ----- Carrusel 3 close ----- -----
// ? ----- ----- Carrusel 4 ----- -----
const fila4 = document.querySelector('.contenedor-carousel4');
const peliculas4 = document.querySelectorAll('.pelicula4');

const flechaIzquierda4 = document.getElementById('flecha-izquierda4');
const flechaDerecha4 = document.getElementById('flecha-derecha4');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha4.addEventListener('click', () => {
	fila4.scrollLeft += fila4.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores4 .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda4.addEventListener('click', () => {
	fila4.scrollLeft -= fila4.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores3 .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas4 = Math.ceil(peliculas4.length / 5);
for(let i = 0; i < numeroPaginas4; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores4').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila4.scrollLeft = i * fila4.offsetWidth;

		document.querySelector('.indicadores4 .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}
// ? ----- ----- Carrusel 4 close ----- -----
// ? ----- ----- Hover ----- -----
peliculas.forEach((pelicula) => {
	pelicula.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});
// ? ----- ----- modal ----- -----
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
modal_container.classList.remove('show');
});