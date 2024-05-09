const contenedorCategotias = document.getElementById('categorias')
const galeria = document.getElementById('galeria')

contenedorCategotias.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.closest('a')) {

        galeria.classList.add('galeria--active');
        document.body.style.overflow = 'hidden'
    }
})