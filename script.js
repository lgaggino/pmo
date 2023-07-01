document.addEventListener('DOMContentLoaded', (event) => {

    /* Cargar archivo json*/
    fetch('data/consolidado.json')
    .then(response => response.json())
    .then(data => {

        document.getElementById('buscador').addEventListener('submit', function(e) {
            e.preventDefault(); // Evita que la página se recargue al enviar el formulario

            var valorBuscado = document.getElementById('busqueda').value;

            // Si el valor buscado está vacío, no se realiza la búsqueda
            if (valorBuscado === "") {
                document.getElementById('texto-seccion').innerHTML = '';
                return;
            }

            /* Busca el valor en el dataset */
            var resultado = data.filter(function(obj) {
                return obj.nombre.toLowerCase().includes(valorBuscado.toLowerCase()) || 
                       obj.categoria.toLowerCase().includes(valorBuscado.toLowerCase());
            });

            /* Si se encontró al menos un resultado, muestra el valor de la columna "cobertura" */
            if (resultado.length > 0) {
                var coberturas = resultado.map(function(obj) {
                    return '<p id="p_linea"">'+ obj.nombre +'</p>' +
                           '<p class="resultado">CategorÍa: ' + obj.categoria + '</p>' +
                           '<p class="resultado">SubcategorÍa: ' + obj.subcategoria + '</p>' +
                           '<p class="resultado">Normativa que la incluye: ' + obj.norma + '</p>' +
                           '<p class="resultado"><b>Nivel de cobertura: ' + (obj.cobertura * 100) + '</b>%</p>' + // pasa a porcentaje
                           '<p class="resultado">Recomendaciones de uso: ' + obj.recomendaciones + '</p>';
                });
                document.getElementById('texto-seccion').innerHTML = coberturas.join('<hr>');
                
            } else {
                alert('No se encontró el valor buscado');
            }
        });
    })
    .catch(error => console.error('Error:', error));
});
