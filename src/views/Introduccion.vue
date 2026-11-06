<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/intro/img01.svg', alt='')
      .col.col-lg-11.col-12.order-lg-2.order-2
        .cajon.mb-0
          p.mb-0(data-aos="fade-down") La prestación de servicios agrícolas mecanizados requiere una adecuada organización del talento humano, los recursos y las actividades que conforman el programa de producción agropecuaria. Para lograrlo, es necesario establecer procedimientos de trabajo, evaluar la productividad, reconocer las condiciones del mercado y utilizar herramientas que permitan analizar el desempeño de las labores mecanizadas.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/intro/img02.jpg', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.color-secundario.p-4.mb-4
          p.mb-0 En este contexto, la estructuración y validación de las actividades permiten determinar si los procesos responden a los requerimientos técnicos y a los criterios establecidos por la empresa. Asimismo, el análisis de los resultados facilita la identificación de dificultades, la formulación de acciones correctivas y la implementación de oportunidades de mejora.
        p.mb-4(data-aos="fade-down") A lo largo de este componente formativo se abordarán los fundamentos para organizar las actividades mecanizadas, evaluar su productividad, aplicar estrategias de mercadeo y utilizar herramientas de análisis y validación. Estos conocimientos contribuirán a proponer ajustes en el programa de producción, optimizar el uso de los recursos y fortalecer la eficiencia y la mejora continua de los servicios agrícolas mecanizados.
        p.mb-0 Para complementar la comprensión de los temas abordados, se recomienda acceder al siguiente video.
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>
<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
