<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  </template>
<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar los conocimientos relacionados con la gestión del talento humano, la planificación de la producción agropecuaria mecanizada, la productividad, las estrategias de mercadeo, el análisis y la validación de actividades mecanizadas, y la mejora continua.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal de gestionar el talento humano en los servicios agrícolas mecanizados?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Asignar todas las labores al operador con mayor experiencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Coordinar las capacidades del personal con las necesidades de la operación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Reducir la cantidad de personal en todas las actividades.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar la evaluación del desempeño de los trabajadores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia comprensión de los conceptos relacionados con la estructuración, validación y mejora de las actividades agrícolas mecanizadas, así como de la optimización de recursos y procesos productivos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'Una empresa necesita organizar la preparación del suelo, la siembra y la fertilización. ¿Qué instrumento permite ordenar estas actividades y programar su ejecución?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El análisis de la competencia comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La evaluación del talento humano.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La matriz de segmentación del mercado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El programa de producción agropecuaria mecanizada.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia comprensión de los conceptos relacionados con la estructuración, validación y mejora de las actividades agrícolas mecanizadas, así como de la optimización de recursos y procesos productivos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'Un tractor trabaja 6 horas y cubre 12 hectáreas. ¿Cuál es su productividad por hora, expresada en hectáreas por hora?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '2 ha/h.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '0,5 ha/h.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '6 ha/h.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '18 ha/h.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia comprensión de los conceptos relacionados con la estructuración, validación y mejora de las actividades agrícolas mecanizadas, así como de la optimización de recursos y procesos productivos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué diferencia existe entre eficiencia y eficacia en las actividades mecanizadas?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La eficiencia mide clientes y la eficacia calcula inventarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La eficiencia mide únicamente la calidad y la eficacia solo los costos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La eficiencia se relaciona con el uso de recursos y la eficacia con el logro de objetivos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La eficiencia y la eficacia significan exactamente lo mismo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia comprensión de los conceptos relacionados con la estructuración, validación y mejora de las actividades agrícolas mecanizadas, así como de la optimización de recursos y procesos productivos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'Antes de ofrecer un servicio de siembra mecanizada, una empresa consulta a los productores sobre sus cultivos, necesidades y fechas de siembra. ¿Qué proceso está realizando?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una inspección de mantenimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una investigación de mercado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una evaluación de productividad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una validación técnica de maquinaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia comprensión de los conceptos relacionados con la estructuración, validación y mejora de las actividades agrícolas mecanizadas, así como de la optimización de recursos y procesos productivos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuál de los siguientes elementos debe considerarse al establecer el precio de un servicio agrícola mecanizado?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El color de los implementos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La cantidad de publicaciones en redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El número de competidores de otro sector sin relación con el servicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los costos operativos y el margen esperado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia comprensión de los conceptos relacionados con la estructuración, validación y mejora de las actividades agrícolas mecanizadas, así como de la optimización de recursos y procesos productivos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Para qué sirve una lista de chequeo durante una actividad agrícola mecanizada?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para verificar requisitos y registrar su cumplimiento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Para reemplazar todos los registros de mantenimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para calcular automáticamente el precio de mercado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para seleccionar clientes según su ubicación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia comprensión de los conceptos relacionados con la estructuración, validación y mejora de las actividades agrícolas mecanizadas, así como de la optimización de recursos y procesos productivos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'Durante la preparación del suelo, el rendimiento del tractor disminuye. ¿Qué actuación es más apropiada antes de proponer una solución?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cambiar inmediatamente al operador sin revisar información.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Aumentar la jornada sin examinar las condiciones de trabajo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Revisar registros y analizar posibles causas de la disminución.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar el indicador de rendimiento del seguimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia comprensión de los conceptos relacionados con la estructuración, validación y mejora de las actividades agrícolas mecanizadas, así como de la optimización de recursos y procesos productivos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Qué permite validar una actividad de siembra mecanizada?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Confirmar que el operador terminó su jornada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Determinar si la labor cumple los requerimientos técnicos y los resultados esperados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Comprobar que el precio ofrecido es menor que el de todos los competidores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Establecer únicamente cuántos insumos quedan en inventario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia comprensión de los conceptos relacionados con la estructuración, validación y mejora de las actividades agrícolas mecanizadas, así como de la optimización de recursos y procesos productivos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'Una empresa identifica que las fallas recurrentes del tractor ocasionan retrasos y costos adicionales. ¿Qué debe hacer al diseñar una acción correctiva?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Modificar las tarifas sin revisar las fallas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Registrar el problema sin asignar responsables.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Aumentar las actividades programadas para compensar los retrasos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Analizar las causas, definir medidas, asignar responsables y establecer seguimiento.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia comprensión de los conceptos relacionados con la estructuración, validación y mejora de las actividades agrícolas mecanizadas, así como de la optimización de recursos y procesos productivos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'Después de una lluvia intensa, el terreno no reúne condiciones adecuadas para la maquinaria. ¿Qué decisión refleja un ajuste pertinente del programa de producción?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reprogramar la labor y revisar si otra actividad puede adelantarse.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Mantener el cronograma sin considerar el estado del suelo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Cancelar todas las actividades del programa sin analizarlas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Asignar el mismo tractor a dos labores simultáneas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia comprensión de los conceptos relacionados con la estructuración, validación y mejora de las actividades agrícolas mecanizadas, así como de la optimización de recursos y procesos productivos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es una práctica adecuada para gestionar los insumos de un servicio agrícola mecanizado?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solicitar materiales sin revisar las existencias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Utilizar los insumos sin registrar su consumo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Verificar existencias y programar el abastecimiento según las necesidades.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Mantener cantidades fijas sin considerar las labores previstas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia comprensión de los conceptos relacionados con la estructuración, validación y mejora de las actividades agrícolas mecanizadas, así como de la optimización de recursos y procesos productivos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'Una empresa compara el consumo de combustible por hectárea antes y después de un ajuste operativo. ¿Qué busca determinar principalmente?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de clientes nuevos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La variación en el uso de combustible por superficie trabajada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El nivel de formación académica del operador.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La ubicación geográfica de los competidores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia comprensión de los conceptos relacionados con la estructuración, validación y mejora de las actividades agrícolas mecanizadas, así como de la optimización de recursos y procesos productivos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Cuál es la finalidad de segmentar el mercado de los servicios agrícolas mecanizados?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Asignar el mismo servicio a todos los productores sin distinción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar la necesidad de investigar a los clientes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar analizar la demanda de las labores agrícolas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Agrupar clientes con características o necesidades similares.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia comprensión de los conceptos relacionados con la estructuración, validación y mejora de las actividades agrícolas mecanizadas, así como de la optimización de recursos y procesos productivos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Qué información resulta útil para analizar la competencia de una empresa de servicios mecanizados?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Los servicios ofrecidos, los precios, la cobertura y las condiciones de prestación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Únicamente el nombre comercial de cada competidor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Solo el número de trabajadores administrativos de otras empresas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La cantidad de combustible almacenado por clientes ajenos al mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia comprensión de los conceptos relacionados con la estructuración, validación y mejora de las actividades agrícolas mecanizadas, así como de la optimización de recursos y procesos productivos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué representa la etapa de verificación dentro del ciclo PHVA aplicado a las labores mecanizadas?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Asignar las primeras responsabilidades sin establecer objetivos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ejecutar las acciones sin recopilar datos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Comparar los resultados con los objetivos e indicadores establecidos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Cambiar todos los procedimientos antes de analizar resultados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia comprensión de los conceptos relacionados con la estructuración, validación y mejora de las actividades agrícolas mecanizadas, así como de la optimización de recursos y procesos productivos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Qué criterio debe tenerse en cuenta al priorizar oportunidades de mejora en una empresa agrícola?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La preferencia personal de quien propone la mejora, sin otros datos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El impacto, la frecuencia, la urgencia y los riesgos asociados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La facilidad de ignorar el problema durante la operación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El orden alfabético de las actividades programadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia comprensión de los conceptos relacionados con la estructuración, validación y mejora de las actividades agrícolas mecanizadas, así como de la optimización de recursos y procesos productivos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Por qué es importante conservar registros de las actividades mecanizadas y de las mejoras implementadas?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque sustituyen la inspección de la maquinaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Porque eliminan la necesidad de evaluar los indicadores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque garantizan que nunca ocurran nuevos problemas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque permiten comparar resultados, fundamentar decisiones y hacer seguimiento.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia comprensión de los conceptos relacionados con la estructuración, validación y mejora de las actividades agrícolas mecanizadas, así como de la optimización de recursos y procesos productivos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'Una empresa detecta que una mejora redujo las horas de inactividad, pero debe comprobar que no perjudicó la calidad de la labor. ¿Qué debe hacer?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Evaluar también la calidad, la seguridad y el cumplimiento de la programación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Mantener la mejora sin revisar ninguna otra condición.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar los registros anteriores para evitar comparaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Medir únicamente el número de clientes atendidos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia comprensión de los conceptos relacionados con la estructuración, validación y mejora de las actividades agrícolas mecanizadas, así como de la optimización de recursos y procesos productivos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Qué caracteriza a la mejora continua en los servicios agrícolas mecanizados?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Resolver un problema una vez y evitar nuevas evaluaciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Mantener siempre los procedimientos iniciales sin modificarlos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Evaluar resultados, aprender de la experiencia y ajustar los procesos cuando sea necesario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Aumentar la cantidad de maquinaria sin analizar su utilización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia comprensión de los conceptos relacionados con la estructuración, validación y mejora de las actividades agrícolas mecanizadas, así como de la optimización de recursos y procesos productivos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>
