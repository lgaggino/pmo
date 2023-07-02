document.addEventListener('DOMContentLoaded', (event) => {
    /* Cargar archivo json */
    fetch('https://lgaggino.github.io/pmo/consolidado.json')
    .then(response => response.json())
    .then(data => {
        /* Obtener categorías únicas para el desplegable */
        let categories = [...new Set(data.map(item => item.categoria))];
        let selectElement = document.getElementById('categoria');
        categories.forEach(category => {
            let optionElement = document.createElement('option');
            optionElement.value = category;
            optionElement.textContent = category;
            selectElement.appendChild(optionElement);
        });

        document.getElementById('buscador').addEventListener('submit', function(e) {
            e.preventDefault(); // Evita que la página se recargue al enviar el formulario

            var valorBuscado = document.getElementById('busqueda').value;
            var valorCategoria = document.getElementById('categoria').value;

            /* Si el valor buscado está vacío, no se realiza la búsqueda */
            if (valorBuscado === "" && valorCategoria === "") {
                document.getElementById('texto-seccion').innerHTML = '';
                return;
            }

            /* Busca el valor en el dataset */
            var resultado = data.filter(function(obj) {
                return (obj.nombre.toLowerCase().includes(valorBuscado.toLowerCase()) || obj.categoria.toLowerCase().includes(valorBuscado.toLowerCase())) &&
                       (valorCategoria === "" || obj.categoria === valorCategoria);
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
