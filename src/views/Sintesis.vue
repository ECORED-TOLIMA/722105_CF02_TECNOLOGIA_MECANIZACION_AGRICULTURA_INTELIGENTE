<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo aborda la gestión del talento humano en los servicios agrícolas mecanizados, considerando sus funciones, responsabilidades, procesos de selección, modalidades de vinculación, normativa laboral y estrategias de evaluación. Asimismo, desarrolla la organización del programa de producción agropecuaria mecanizada mediante la gestión de inventarios, el control de calidad, la eficiencia operativa, la optimización de procesos, el control de costos y la sostenibilidad. También comprende el análisis de la productividad, sus indicadores, métodos de cálculo y factores asociados, junto con las estrategias de mercadeo para investigar el mercado, segmentar clientes, desarrollar servicios, establecer precios y analizar la competencia. Finalmente, aborda las herramientas para analizar y validar las actividades mecanizadas, así como la identificación de oportunidades de mejora, el diseño de acciones correctivas, el ajuste de la programación, la gestión de recursos, la evaluación de resultados y la mejora continua.
    .row.justify-content-center
      .col-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Texto alternativo: En la síntesis se presentan los principales temas relacionados con la gestión del talento humano, la planificación de la producción agropecuaria mecanizada, la productividad, las estrategias de mercadeo, las herramientas de análisis y validación, y la mejora continua de las actividades mecanizadas.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis
</template>
<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass"></style>
