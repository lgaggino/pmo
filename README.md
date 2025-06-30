PMNO https://lgaggino.github.io/pmo/
Buscador de prestaciones con cobertura garantizada por el Plan Médico Obligatorio y por Leyes Especiales.
Desarrollado para el Ministerio de Salud de la Nación.

¿Qué hace esta aplicación?  
PMO es una aplicación web que permite:

- Buscar prestaciones sanitarias incluidas en el marco del Plan Médico Obligatorio y leyes especiales nacionales.
- Consultar por nombre de la prestación o filtrar por categoría temática.
- Visualizar las normativas que las respaldan y el nivel de cobertura garantizado.
- Acceder a recomendaciones de uso para cada prestación.
- Descargar los resultados filtrados en formato Excel.
- Acceder al listado completo de leyes vinculadas y al texto del PMO (Programa Médico Obligatorio).

¿Para quién es?  
- Equipos técnicos y jurídicos del Ministerio de Salud de la Nación.  
- Supervisores y agentes de auditoría prestacional.  
- Personal de obras sociales y entidades de salud.  
- Público general que desea conocer sus derechos en materia de cobertura.

Contenido  
La app ofrece:

- Buscador por nombre de prestación o por categoría (ej. Diabetes, Reproducción Asistida).
- Detalle de cada prestación: categoría, normativas que la respaldan, nivel de cobertura, y recomendaciones.
- Botones de acción:  
  - Descargar resultados filtrados en Excel.  
  - Descargar la canasta completa consolidada.  
  - Ver legislación vinculada.

Requisitos mínimos  
- Navegador web moderno (Google Chrome, Firefox, Edge).  
- Conexión a internet para acceder al consolidado online.  
- No requiere instalación: es 100% cliente.

Estructura del proyecto  
- `index.html`: página principal con el buscador  
- `script.js`: lógica de interacción y exportación a Excel  
- `styles.css`: estilos y maquetación responsive  
- `legislacion.html`: listado expandible de leyes especiales por temática  
- `pmo.html`: referencia al Programa Médico Obligatorio (PMO)  
- `consolidado.json`: base de datos online con la información consolidada (consultada vía fetch)
