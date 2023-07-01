document.addEventListener('DOMContentLoaded', (event) => {
    /* Cargar archivo json*/
    fetch('data/consolidado.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then(data => {
        // Manejo de datos cargados desde el archivo json

        document.getElementById('buscador').addEventListener('submit', function(e) {
            e.preventDefault(); // Para prevenir que la página se recargue al enviar el formulario

            var valorBuscado = document.getElementById('busqueda').value;

            // Si el valor buscado está vacío, no se realiza la búsqueda
            if (valorBuscado === "") {
                document.getElementById('texto-seccion').innerHTML = '';
                return;
            }

            /* Buscar el valor en data */
            var resultado = data.filter(function(obj) {
                return obj.nombre.toLowerCase().includes(valorBuscado.toLowerCase()) || 
                       obj.categoria.toLowerCase().includes(valorBuscado.toLowerCase());
            });

            /* Si se encontró al menos un resultado */
            if (resultado.length > 0) {
                /* Mostrar el valor de la columna 'cobertura' de cada resultado */
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
    .catch(function() {
        // Manejo de cualquier error que pueda haber ocurrido en los bloques 'fetch' o 'then' anteriores.
        console.log("Se produjo un error al cargar el archivo json");
    });
});
