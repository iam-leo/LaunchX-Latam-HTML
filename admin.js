const titulo = document.querySelector('#title-section')
const buttons = document.querySelectorAll('aside button');
const tablaStock = document.querySelector('#tabla-stock');
const tablaPedidos = document.querySelector('#tabla-pedidos');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        //Remover texto rosa de todos los botones y agregar el color por default
        buttons.forEach( button => {
            button.classList.remove('text-pink-500');
            button.classList.add('text-gray-200');
        });

        //Agregar texto rosado al botón clickeado
        btn.classList.add('text-pink-500');

        //Modificamos el titulo de la sección
        titulo.textContent = btn.textContent.trim();

        //Mostramos la tabla correspondiente conmutando la clase hidden
        tablaStock.classList.toggle('hidden');
        tablaPedidos.classList.toggle('hidden');

    });
});