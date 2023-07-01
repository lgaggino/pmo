document.getElementById('excelFile').addEventListener('change', function(e) {
  var file = e.target.files[0];
  var reader = new FileReader();
  reader.onload = function(e) {
    var jsonContent = e.target.result;
    var data = JSON.parse(jsonContent);

    document.getElementById('buscarBtn').addEventListener('click', function(e) {
      e.preventDefault();

      var valorBuscado = document.getElementById('busqueda').value;
      var categoriaSeleccionada = document.getElementById('categoria').value;

      if (valorBuscado === "" && categoriaSeleccionada === "") {
        document.getElementById('texto-seccion').innerHTML = '';
        return;
      }

      var resultado = data.filter(function(obj) {
        if (valorBuscado !== "" && categoriaSeleccionada === "") {
          return (
            obj.nombre.toLowerCase().includes(valorBuscado.toLowerCase()) ||
            obj.categoria.toLowerCase().includes(valorBuscado.toLowerCase())
          );
        } else if (valorBuscado === "" && categoriaSeleccionada !== "") {
          return obj.categoria === categoriaSeleccionada;
        } else if (valorBuscado !== "" && categoriaSeleccionada !== "") {
          return (
            obj.nombre.toLowerCase().includes(valorBuscado.toLowerCase()) &&
            obj.categoria === categoriaSeleccionada
          );
        } else {
          return false;
        }
      });

      if (resultado.length > 0) {
        var coberturas = resultado.map(function(obj) {
          return (
            '<p id="p_linea">' +
            obj.nombre +
            "</p>" +
            '<p class="resultado">CategorÍa: ' +
            obj.categoria +
            "</p>" +
            '<p class="resultado">SubcategorÍa: ' +
            obj.subcategoria +
            "</p>" +
            '<p class="resultado">Normativa que la incluye: ' +
            obj.norma +
            "</p>" +
            '<p class="resultado"><b>Nivel de cobertura: ' +
