import dataFotos from './datos/fotos'
const contenedorCategotias = document.getElementById('categorias')
const galeria = document.getElementById('galeria')

contenedorCategotias.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.closest('a')) {

        galeria.classList.add('galeria--active');
        document.body.style.overflow = 'hidden'
        const categoriaActiva = e.target.dataset.categorias
        const fotos = dataFotos.fotos[categoriaActiva]

        fotos.forEach((foto) => {
            const slide = `
            <a href="#" class="galeria__carousel-slide">
			    <img class="galeria__carousel-image" src="${foto.ruta}" alt="" />
			</a>
            `;

            galeria.querySelector('.galeria__carousel-slides').innerHTML += slide;
        });

        galeria.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active')

    }
})