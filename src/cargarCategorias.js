import dataCategorias from './datos/categorias'
const { categorias } = dataCategorias
const contenedorCategorias = document.getElementById('categorias')


categorias.forEach((categorias) => {
    const nuevaCategoria = document.createElement('a');
    const plantilla = `		
    <img class="categoria__img" src="${categorias.imagenPortada}" alt="" />
    <div class="categoria__datos">
        <p class="categoria__nombre">${categorias.nombre}</p>
        <p class="categoria__numero-fotos">${categorias.numeroFotos} Fotos</p>
    </div>`

    nuevaCategoria.innerHTML = plantilla;
    nuevaCategoria.classList.add('categoria')
    nuevaCategoria.href = '#'
    nuevaCategoria.dataset.categorias = categorias.id


    contenedorCategorias.append(nuevaCategoria)
})