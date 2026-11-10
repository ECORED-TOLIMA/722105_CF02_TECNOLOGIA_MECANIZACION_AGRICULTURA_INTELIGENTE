<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Talento humano en los servicios mecanizados
    p.mb-4 La prestación de servicios agrícolas mecanizados requiere la participación de personas con conocimientos, habilidades y experiencia para organizar, ejecutar y supervisar las labores propias de la producción agropecuaria. La adecuada gestión del talento humano permite asignar funciones, establecer responsabilidades y coordinar las actividades de acuerdo con los requerimientos técnicos y las necesidades de la empresa.
    figure.mb-0
      img(src='@/assets/curso/temas/t1/img01.png', alt='') 
    .cajon.c01.p-4.mb-4
      p.mb-0 En este contexto, la selección del personal, la definición de los perfiles ocupacionales y el cumplimiento de la legislación laboral son aspectos fundamentales para garantizar una adecuada organización del trabajo. Asimismo, la evaluación del desempeño permite reconocer fortalezas, identificar necesidades de formación y establecer estrategias que contribuyan al cumplimiento de los objetivos productivos.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t1/img02.svg', alt='')
      .col.col-lg-11.col-12.order-lg-2.order-2
        .cajon.mb-0
          p.mb-0(data-aos="fade-down") Por tanto, la gestión del talento humano en los servicios mecanizados no se limita a la contratación de trabajadores, sino que comprende la organización de los equipos de trabajo, el aprovechamiento de sus capacidades y el fortalecimiento de sus competencias para desarrollar las actividades de manera eficiente, segura y responsable.
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Concepto, alcance y características del talento humano
    p.mb-4 El talento humano comprende el conjunto de personas que aportan sus conocimientos, habilidades, experiencias y capacidades al desarrollo de las actividades de una organización. En los servicios agrícolas mecanizados, constituye un recurso fundamental para planificar, ejecutar, supervisar y evaluar las labores relacionadas con el uso de maquinaria, equipos e implementos agrícolas.
    .bloque-texto-g.bl01.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img03.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") A diferencia de una visión centrada únicamente en la mano de obra, la gestión del talento humano reconoce que las personas contribuyen al cumplimiento de los objetivos productivos mediante sus competencias técnicas, su capacidad para resolver problemas, el trabajo colaborativo y la toma de decisiones. Por ello, es importante identificar las capacidades requeridas para cada actividad y asignar responsabilidades de acuerdo con la formación, la experiencia y las condiciones de seguridad establecidas.
    p.mb-4 El alcance del talento humano comprende las actividades relacionadas con la incorporación, organización, desarrollo y evaluación del personal que participa en la prestación de servicios agrícolas mecanizados. Entre ellas se encuentran:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img04.svg' alt='AvatarTop')
          h4.text-center Planificación del personal
          p.text-center Determinar la cantidad de trabajadores y los perfiles requeridos según las actividades del programa de producción.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img05.svg' alt='AvatarTop')
          h4.text-center Asignación de funciones
          p.text-center Distribuir tareas y responsabilidades de acuerdo con las competencias y los cargos.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img06.svg' alt='AvatarTop')
          h4.text-center Desarrollo de competencias
          p.text-center Fortalecer los conocimientos y las habilidades técnicas necesarias para operar, mantener y supervisar maquinaria y equipos.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img07.svg' alt='AvatarTop')
          h4.text-center Coordinación del trabajo
          p.text-center Promover la comunicación y la colaboración entre quienes participan en las labores mecanizadas.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img08.svg' alt='AvatarTop')
          h4.text-center Seguridad laboral
          p.text-center Fomentar el cumplimiento de los procedimientos de trabajo seguro y el uso adecuado de los elementos de protección personal.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img09.svg' alt='AvatarTop')
          h4.text-center Evaluación del desempeño
          p.text-center Analizar el cumplimiento de las funciones, la calidad del trabajo y el aporte al logro de los objetivos productivos.
    p.mb-4 El talento humano presenta características que influyen en la organización y el desempeño de los servicios agrícolas mecanizados, como se presenta a continuación:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Características del talento humano
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Característica
                th(data-aos="fade-down")(style= "width: 70%") Descripción
            tbody
              tr
                td.td-c01(data-aos="fade-down") Conocimientos
                td.td-c01(data-aos="fade-down") Información técnica y conceptual necesaria para comprender y desarrollar las actividades asignadas.
              tr
                td(data-aos="fade-down") Habilidades
                td(data-aos="fade-down") Capacidades para ejecutar tareas, manejar equipos, resolver problemas y aplicar procedimientos.
              tr
                td.td-c01(data-aos="fade-down") Experiencia
                td.td-c01(data-aos="fade-down") Aprendizajes adquiridos mediante la participación en actividades laborales y situaciones prácticas.
              tr
                td(data-aos="fade-down") Competencias
                td(data-aos="fade-down") Integración de conocimientos, habilidades y actitudes para desempeñar una función de acuerdo con los requerimientos establecidos.
              tr
                td.td-c01(data-aos="fade-down") Adaptabilidad
                td.td-c01(data-aos="fade-down") Capacidad para responder a cambios en las condiciones de trabajo, los equipos, los procesos y las necesidades productivas.
              tr
                td(data-aos="fade-down") Trabajo colaborativo
                td(data-aos="fade-down") Disposición para coordinar actividades, compartir información y contribuir al cumplimiento de objetivos comunes.
              tr
                td.td-c01(data-aos="fade-down") Responsabilidad
                td.td-c01(data-aos="fade-down") Compromiso con las funciones asignadas, los procedimientos establecidos y el uso adecuado de los recursos.
              tr
                td(data-aos="fade-down") Aprendizaje continuo
                td(data-aos="fade-down") Interés y disposición para actualizar conocimientos y fortalecer competencias frente a nuevas tecnologías y métodos de trabajo.
    .row.justify-content-center.mb-0
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t1/img10.png', alt='')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .cajon.cajon.color-secundario.p-4.mb-4
          p.mb-0 En una empresa que presta servicios de mecanización agrícola, estas características se reflejan en la capacidad del personal para desarrollar las labores de acuerdo con la programación, utilizar adecuadamente la maquinaria y responder a las condiciones del terreno y del cultivo. Por ejemplo, un operador de tractor requiere conocimientos sobre el funcionamiento del equipo, habilidades para conducirlo y regular los implementos, experiencia práctica y responsabilidad para cumplir los procedimientos de seguridad.
        p.mb-0(data-aos="fade-down") En consecuencia, la adecuada gestión del talento humano permite relacionar las capacidades de las personas con las necesidades del servicio, favorecer la coordinación de las actividades y contribuir al cumplimiento de los objetivos de producción. De esta manera, se fortalece la organización del trabajo y el aprovechamiento de las competencias del personal en las labores agrícolas mecanizadas.
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Tipos de talento humano, funciones y responsabilidades
    p En los servicios agrícolas mecanizados, el talento humano se organiza de acuerdo con las actividades que deben ejecutarse, el nivel de especialización requerido y las responsabilidades asociadas a cada labor. La participación coordinada del personal permite organizar las operaciones, utilizar adecuadamente la maquinaria y los recursos disponibles, y cumplir con la programación de la producción agropecuaria.
    p.mb-4 Los tipos de personal pueden variar según el tamaño de la empresa, la naturaleza del servicio, la maquinaria disponible y la complejidad de las labores. De manera general, se pueden identificar los siguientes perfiles:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Tipos de talento humano, funciones y responsabilidades
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Tipo de personal
                th(data-aos="fade-down")(style= "width: 30%") Funciones
                th(data-aos="fade-down")(style= "width: 50%") Responsabilidades
            tbody
              tr
                td.td-c01(data-aos="fade-down") Personal directivo o administrativo
                td.td-c01(data-aos="fade-down") Planificar las operaciones, coordinar los recursos y organizar la prestación de los servicios.
                td.td-c01(data-aos="fade-down") Tomar decisiones, asignar recursos, verificar el cumplimiento de los objetivos y gestionar los aspectos administrativos del servicio.
              tr
                td(data-aos="fade-down") Personal técnico o de supervisión
                td(data-aos="fade-down") Coordinar las labores mecanizadas, verificar las condiciones de operación y orientar al personal operativo.
                td(data-aos="fade-down") Comprobar el cumplimiento de los requerimientos técnicos, supervisar los procedimientos y reportar novedades durante la ejecución de las actividades.
              tr
                td.td-c01(data-aos="fade-down") Operadores de maquinaria agrícola
                td.td-c01(data-aos="fade-down") Operar tractores, cosechadoras y otros equipos, de acuerdo con la labor programada.
                td.td-c01(data-aos="fade-down") Realizar las verificaciones previas, utilizar los equipos de forma segura, seguir los procedimientos establecidos y reportar fallas o condiciones inseguras.
              tr
                td(data-aos="fade-down") Personal de mantenimiento
                td(data-aos="fade-down") Ejecutar actividades de inspección, mantenimiento preventivo y reparación de maquinaria e implementos.
                td(data-aos="fade-down") Aplicar los procedimientos técnicos y de seguridad, registrar las intervenciones y comunicar las condiciones que puedan afectar el funcionamiento de los equipos.
              tr
                td.td-c01(data-aos="fade-down") Personal auxiliar de campo
                td.td-c01(data-aos="fade-down") Apoyar la preparación de las labores, el alistamiento de materiales y las actividades complementarias de la operación.
                td.td-c01(data-aos="fade-down") Cumplir las instrucciones recibidas, utilizar adecuadamente las herramientas y los elementos de protección personal, y mantener el orden en las áreas de trabajo.
    p.mb-4 La distribución de funciones y responsabilidades debe responder a las necesidades de cada servicio y a las competencias del personal disponible. Por ejemplo, antes de realizar una labor de preparación del suelo, el responsable de la programación organiza los recursos y define las actividades; el personal técnico verifica las condiciones de ejecución; el operador prepara y utiliza la maquinaria, y el personal de mantenimiento atiende los requerimientos técnicos del equipo.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.c01.px-4.py-3.h-100.w-100
          .row.mb-0
            .col-lg-2.d-none.d-lg-block.mb-4
              figure
                img(src='@/assets/curso/temas/t1/img11.svg', alt='')
            .col.col-12
              p.mb-0(data-aos="fade-down") Es importante precisar que estos perfiles no necesariamente corresponden a cargos independientes. En algunas empresas, una persona puede asumir varias funciones, siempre que cuente con las competencias necesarias y que se respeten los requisitos técnicos y de seguridad aplicables.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t1/img12.jpg', alt='')
    p.mb-0 Por tanto, la definición de funciones y responsabilidades contribuye a evitar duplicidades, mejorar la comunicación entre los integrantes del equipo y facilitar el seguimiento de las labores mecanizadas. La asignación adecuada del personal también favorece el uso eficiente de los recursos y el cumplimiento de los objetivos establecidos para el servicio agrícola.
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Reclutamiento y selección del personal
    p.mb-4 El reclutamiento y la selección del personal son procesos que permiten identificar y vincular personas que cuentan con las competencias necesarias para desempeñar las funciones requeridas por una organización. En los servicios agrícolas mecanizados, estos procesos contribuyen a disponer de personal capacitado para operar maquinaria, realizar actividades de mantenimiento, supervisar labores y apoyar la organización de la producción agropecuaria.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t1/img13.jpg', alt='')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .cajon.cajon.c02.p-4.mb-4
          p.mb-0 Aunque están relacionados, el reclutamiento y la selección tienen propósitos diferentes. El reclutamiento busca atraer candidatos que cumplan con el perfil requerido, mientras que la selección permite evaluar sus conocimientos, habilidades, experiencia y demás requisitos para determinar su idoneidad para el cargo.
        p.mb-4(data-aos="fade-down") El reclutamiento comprende las acciones que realiza una empresa para atraer personas interesadas en ocupar una vacante. Para ello, es necesario identificar las necesidades de personal, establecer el perfil requerido y elegir los medios de difusión adecuados.
        p.mb-0 Entre las principales fuentes de reclutamiento se encuentran:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12.col-lg-10
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta.c01.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t1/img14.svg', alt='')(style="width: 85%")
            h4.text-center Fuentes internas
            p.mb-0(data-aos="fade-down") Permiten identificar candidatos entre los trabajadores de la organización, mediante procesos de promoción, traslado o asignación de nuevas funciones, según sus competencias.
          .col-xl.col-lg-6.tarjeta.tarjeta.c02.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t1/img15.svg', alt='')(style="width: 85%")
            h4.text-center Fuentes externas
            p.mb-0(data-aos="fade-down") Facilitan la búsqueda de candidatos fuera de la empresa, mediante bolsas de empleo, instituciones de formación, agencias de empleo, convocatorias y recomendaciones profesionales.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t1/img16.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        p.mb-3 En una empresa de servicios agrícolas mecanizados, por ejemplo, la necesidad de contratar un operador de tractor puede surgir cuando aumenta la demanda de labores de preparación del suelo o se incorpora maquinaria que requiere competencias específicas.
        .row.justify-content-center.align-items-center.mb-4
          .cajon.cajon.c03.p-4
            .row.justify-content-center
              .col.col-lg-auto.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/t1/img17.svg', alt='')
              .col.col-lg-10.col-12.order-lg-2.order-2
                p.mb-0(data-aos="fade-down") La selección consiste en evaluar a los candidatos para establecer cuál se ajusta mejor al perfil del cargo y a las necesidades de la organización. Este proceso debe considerar tanto las competencias técnicas como las condiciones necesarias para desarrollar las actividades de manera segura y responsable.
        p.mb-0 Las etapas pueden variar según el cargo y las características de la empresa, pero generalmente incluyen las siguientes:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Etapas del proceso de selección del personal
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Etapa
                th(data-aos="fade-down")(style= "width: 70%") Descripción
            tbody
              tr
                td.td-c01(data-aos="fade-down") Revisión de hojas de vida
                td.td-c01(data-aos="fade-down") Verificar la formación, la experiencia y los requisitos definidos para el cargo.
              tr
                td(data-aos="fade-down") Entrevista
                td(data-aos="fade-down") Conocer la trayectoria, las competencias, la disponibilidad y las expectativas del candidato.
              tr
                td.td-c01(data-aos="fade-down") Evaluación técnica
                td.td-c01(data-aos="fade-down") Comprobar los conocimientos y las habilidades requeridos para desempeñar las funciones.
              tr
                td(data-aos="fade-down") Verificación de requisitos
                td(data-aos="fade-down") Confirmar las certificaciones, licencias u otros requisitos exigibles para el cargo, cuando corresponda.
              tr
                td.td-c01(data-aos="fade-down") Valoración de resultados
                td.td-c01(data-aos="fade-down") Comparar los resultados obtenidos por los candidatos con el perfil establecido y los criterios de selección.
              tr
                td(data-aos="fade-down") Vinculación e inducción
                td(data-aos="fade-down") Formalizar la relación laboral conforme a las condiciones aplicables y orientar al trabajador sobre sus funciones, los procedimientos y las medidas de seguridad.
    p En el caso de los operadores de maquinaria agrícola, la evaluación técnica puede incluir la identificación de los componentes del equipo, las verificaciones previas a la operación y la demostración de habilidades prácticas, siempre que se realice bajo condiciones controladas y con las medidas de seguridad correspondientes.
    p.mb-4 Para realizar estos procesos, la empresa debe establecer criterios relacionados con las funciones del cargo y las características del servicio. Entre los aspectos que pueden considerarse se encuentran:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.position-relative.mb-4.mb-lg-0
        .crd.crd--avatarHorizontal.crd--first.py-3.mb-0
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/t1/img18.svg", alt="alt").img60
            .col
              p.mb-0 Formación académica o técnica requerida.
        .crd.crd--avatarHorizontal.py-3.mb-0
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/t1/img19.svg", alt="alt").img60
            .col
              p.mb-0 Experiencia en actividades agrícolas o manejo de maquinaria.
        .crd.crd--avatarHorizontal.py-3.mb-0
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/t1/img20.svg", alt="alt").img60
            .col
              p.mb-0 Conocimientos sobre mantenimiento, operación y seguridad.
        .crd.crd--avatarHorizontal.py-3.mb-0
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/t1/img21.svg", alt="alt").img60
            .col
              p.mb-0 Habilidades para trabajar en equipo y resolver situaciones operativas.
        .crd.crd--avatarHorizontal.py-3.mb-0
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/t1/img22.svg", alt="alt").img60
            .col
              p.mb-0 Disponibilidad para cumplir los horarios y las condiciones del servicio.
        .crd.crd--avatarHorizontal.crd--last.py-3.mb-0
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/t1/img23.svg", alt="alt").img60
            .col
              p.mb-0 Cumplimiento de los requisitos legales y técnicos aplicables al cargo.
      .col-lg-3.d-none.d-lg-block
        figure
          img(src="@/assets/curso/temas/t1/img24.png", alt="alt")
    p Los criterios deben guardar relación con las funciones que se van a desempeñar y aplicarse de manera objetiva, sin discriminación.
    p.mb-0 En conclusión, el reclutamiento y la selección permiten vincular personal acorde con las necesidades de los servicios agrícolas mecanizados. Una adecuada definición de los perfiles y una evaluación coherente de los candidatos favorecen la asignación de funciones, el desarrollo seguro de las labores y el cumplimiento de los objetivos de producción.
    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Mercado laboral y tipos de vinculación
    p.mb-4 El mercado laboral comprende la relación entre las personas que ofrecen sus conocimientos y capacidades para trabajar y las organizaciones que requieren personal para desarrollar sus actividades. En los servicios agrícolas mecanizados, está influenciado por las necesidades de producción agropecuaria, la disponibilidad de maquinaria, los ciclos de los cultivos, la ubicación de las explotaciones y la demanda de labores como preparación del suelo, siembra, fumigación y cosecha.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-6.col-12.order-lg-2.order-2
        .cajon.c02.px-4.py-3.h-100.w-100.d-flex.align-items-center
          p.mb-0 Las empresas y los productores agropecuarios requieren personal con diferentes niveles de formación y experiencia, desde operadores de maquinaria y técnicos de mantenimiento hasta supervisores y responsables de la gestión administrativa. La disponibilidad de estos perfiles puede variar según la región, la temporada agrícola y el grado de mecanización de las actividades.
      .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t1/img25.svg', alt='') 
    p.mb-4 Por ello, conocer las condiciones del mercado laboral permite identificar la disponibilidad de trabajadores, determinar los perfiles requeridos y planificar la contratación de acuerdo con las necesidades del servicio.
    .row.align-items-center.mb-5(data-aos="flip-down")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 57px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-3
          h3.mb-0.ms-2 Características del mercado laboral en los servicios agrícolas mecanizados
    p.mb-4 Entre los factores que influyen en la demanda de personal se encuentran:
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .cajon.c03.p-4.h-100.w-100
          ul.lista-ul--color.lista-ul.mb-0
            li 
              i.fas.fa-seedling
              p.mb-0 <b>Estacionalidad de la producción</b>: algunas labores se concentran en determinadas épocas del año, lo que puede generar necesidades temporales de personal.
            li 
              i.fas.fa-seedling
              p.mb-0 <b>Nivel de mecanización</b>: la incorporación de maquinaria y tecnologías requiere trabajadores con competencias específicas para operar, mantener y supervisar los equipos.
            li 
              i.fas.fa-seedling
              p.mb-0 <b>Disponibilidad de personal calificado</b>: la oferta de trabajadores con formación y experiencia puede variar entre regiones.
            li 
              i.fas.fa-seedling
              p.mb-0 <b>Condiciones del entorno productivo</b>: el tipo de cultivo, la extensión del terreno, las condiciones del suelo y la ubicación de la explotación influyen en los perfiles requeridos.
            li 
              i.fas.fa-seedling
              p.mb-0 <b>Modalidad de prestación del servicio</b>: las empresas que ofrecen servicios a diferentes productores pueden necesitar personal de acuerdo con la cantidad y duración de los trabajos contratados.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t1/img26.jpg', alt='')
      .col.col-lg-8.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") Estos factores deben considerarse al organizar el talento humano, pues permiten anticipar las necesidades de contratación y ajustar la disponibilidad de trabajadores a la programación de las actividades mecanizadas.
        .cajon.cajon.c02.color-primario.p-4.mb-4
          p.mb-0 La vinculación del personal corresponde a la forma jurídica mediante la cual una persona se incorpora a una organización para desarrollar determinadas actividades. La elección depende de la naturaleza del trabajo, su duración, las necesidades de la empresa y las condiciones legales aplicables.        
        p.mb-0 En Colombia, es importante distinguir entre el contrato de trabajo y el contrato de prestación de servicios, ya que tienen características y efectos jurídicos diferentes. Entre las modalidades que pueden encontrarse en el sector agropecuario están las siguientes:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Tipos de vinculación del personal
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Modalidad
                th(data-aos="fade-down")(style= "width: 35%") Características
                th(data-aos="fade-down")(style= "width: 35%") Ejemplo en los servicios agrícolas mecanizados
            tbody
              tr
                td.td-c01(data-aos="fade-down") Contrato de trabajo a término indefinido
                td.td-c01(data-aos="fade-down") No establece una fecha de finalización; se mantiene mientras subsistan las condiciones que le dieron origen.
                td.td-c01(data-aos="fade-down") Contratación de un operador de maquinaria para atender de manera permanente los servicios de la empresa.
              tr
                td(data-aos="fade-down") Contrato de trabajo a término fijo
                td(data-aos="fade-down") Se pacta por un periodo determinado y debe cumplir los requisitos legales correspondientes.
                td(data-aos="fade-down") Vinculación de un auxiliar administrativo para apoyar la gestión durante un periodo establecido.
              tr
                td.td-c01(data-aos="fade-down") Contrato de trabajo por duración de obra o labor determinada
                td.td-c01(data-aos="fade-down") Se celebra para ejecutar una obra o labor específica, que debe quedar claramente definida.
                td.td-c01(data-aos="fade-down") Contratación de personal para realizar una labor mecanizada delimitada, cuando se cumplan las condiciones legales de esta modalidad.
              tr
                td(data-aos="fade-down") Contrato de trabajo ocasional, accidental o transitorio
                td(data-aos="fade-down") Se aplica a labores de corta duración que reúnen las condiciones establecidas en la legislación laboral.
                td(data-aos="fade-down") Contratación para una actividad ocasional que no corresponde a las labores normales del empleador, cuando se cumplan los requisitos legales.
              tr
                td.td-c01(data-aos="fade-down") Contrato de prestación de servicios
                td.td-c01(data-aos="fade-down") Es una relación contractual de naturaleza civil o comercial, caracterizada por la autonomía e independencia del contratista y la ausencia de subordinación laboral.
                td.td-c01(data-aos="fade-down") Contratación de un profesional independiente para realizar una asesoría técnica especializada sobre la operación de maquinaria.
    p Es importante precisar que el contrato de prestación de servicios no es una modalidad de contrato laboral. Su naturaleza depende de las condiciones reales en las que se ejecuta la actividad; por tanto, no debe utilizarse para encubrir una relación laboral cuando existen los elementos que la caracterizan.
    p.mb-4 La elección de la modalidad debe responder a las necesidades reales del servicio y a la normativa vigente. Para ello, conviene considerar los siguientes aspectos:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img27.svg' alt='AvatarTop')
          h4.text-center Duración de la actividad
          p.text-center Establecer si la necesidad de personal es permanente, temporal o está asociada a una labor específica.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img28.svg' alt='AvatarTop')
          h4.text-center Naturaleza de las funciones
          p.text-center Identificar las actividades que se van a realizar y el grado de continuidad requerido.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img29.svg' alt='AvatarTop')
          h4.text-center Competencias necesarias
          p.text-center Determinar la formación, la experiencia y las habilidades requeridas para el cargo.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img30.svg' alt='AvatarTop')
          h4.text-center Condiciones de ejecución
          p.text-center Precisar las responsabilidades, los recursos disponibles y el nivel de autonomía con el que se desarrollará la actividad.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img31.svg' alt='AvatarTop')
          h4.text-center Requisitos legales
          p.text-center Verificar las condiciones aplicables a la modalidad contractual, las obligaciones de las partes y los derechos que correspondan.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.c02.p-4
          p.mb-0 Por ejemplo, una empresa que presta servicios de mecanización durante todo el año puede requerir operadores vinculados de manera permanente, mientras que una necesidad específica puede justificar una contratación por obra o labor, siempre que se cumplan los requisitos legales correspondientes.
    p.mb-0 En consecuencia, el conocimiento del mercado laboral y de las modalidades de vinculación permite planificar la disponibilidad del personal, responder a las necesidades de la producción agropecuaria y establecer relaciones contractuales acordes con la naturaleza de las actividades y la legislación vigente.
    separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.5 Legislación laboral aplicable
    p.mb-4 La legislación laboral colombiana establece los derechos, deberes y condiciones que regulan las relaciones de trabajo entre empleadores y trabajadores. En los servicios agrícolas mecanizados, su aplicación permite orientar la contratación del personal, definir las condiciones laborales, garantizar el reconocimiento de los derechos de los trabajadores y promover ambientes de trabajo dignos, seguros y respetuosos.
    .bloque-texto-g.bl01.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img32.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") El cumplimiento de estas disposiciones es importante para las empresas y los productores que contratan operadores de maquinaria, personal de mantenimiento, auxiliares de campo, supervisores y trabajadores administrativos. Además de las normas laborales, deben considerarse las disposiciones relacionadas con la seguridad y salud en el trabajo, la afiliación al sistema de seguridad social y la prevención de riesgos derivados de las actividades productivas.
    p.mb-4 La normativa aplicable comprende disposiciones constitucionales, leyes y decretos que regulan distintos aspectos de las relaciones laborales. Entre las principales se encuentran las siguientes:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Principales normas laborales aplicables en Colombia
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Norma
                th(data-aos="fade-down")(style= "width: 70%") Aspecto que regula
            tbody
              tr
                td.td-c01(data-aos="fade-down") Constitución Política de Colombia de 1991, artículos 25 y 53
                td.td-c01(data-aos="fade-down") Reconoce el trabajo como un derecho y una obligación social, y establece principios para garantizar condiciones dignas y justas.
              tr
                td(data-aos="fade-down") Código Sustantivo del Trabajo, adoptado mediante el Decreto 2663 de 1950 y sus modificaciones
                td(data-aos="fade-down") Regula aspectos de las relaciones laborales, los contratos de trabajo, las obligaciones de empleadores y trabajadores y las condiciones laborales. 
              tr
                td.td-c01(data-aos="fade-down") Ley 2466 de 2025
                td.td-c01(data-aos="fade-down") Introduce una reforma laboral que modifica parcialmente el Código Sustantivo del Trabajo y otras normas, con disposiciones relacionadas con el trabajo digno y decente. 
              tr
                td(data-aos="fade-down") Ley 100 de 1993
                td(data-aos="fade-down") Establece el Sistema de Seguridad Social Integral, que comprende, entre otros, los sistemas de salud, pensiones y riesgos laborales. 
              tr
                td.td-c01(data-aos="fade-down") Ley 1562 de 2012
                td.td-c01(data-aos="fade-down") Modifica disposiciones del Sistema General de Riesgos Laborales y fortalece la prevención de accidentes y enfermedades laborales.
              tr
                td(data-aos="fade-down") Decreto 1072 de 2015
                td(data-aos="fade-down") Compila la reglamentación del sector trabajo e incluye disposiciones para implementar el Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST).
    p.mb-4 El cumplimiento de la legislación laboral se refleja en acciones concretas dentro de las empresas y unidades productivas agropecuarias, entre ellas:
    .row.justify-content-center.mb-4
      .col.col-lg-3.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t1/img33.jpg', alt='')
      .col.col-lg-9.col-12.order-lg-1.order-2
        .cajon.c03.p-4.h-100.w-100.d-flex.align-items-center
          ul.lista-ul--color.lista-ul.mb-0
            li 
              i.fas.fa-seedling
              p.mb-0 <b>Formalización de las relaciones laborales</b>: establecer las condiciones de vinculación y reconocer los derechos y obligaciones que correspondan.
            li 
              i.fas.fa-seedling
              p.mb-0 <b>Reconocimiento de derechos laborales</b>: cumplir las obligaciones relacionadas con remuneración, jornada laboral, descansos, prestaciones sociales y demás garantías aplicables.
            li 
              i.fas.fa-seedling
              p.mb-0 <b>Afiliación al sistema de seguridad social</b> : efectuar las afiliaciones y cotizaciones que correspondan según la relación de trabajo y la normativa vigente.
            li 
              i.fas.fa-seedling
              p.mb-0 <b>Prevención de riesgos laborales</b>: identificar los peligros asociados con la operación de maquinaria, establecer medidas de prevención y mantener las condiciones de seguridad requeridas.
            li 
              i.fas.fa-seedling
              p.mb-0 <b>Información y capacitación</b>: orientar al personal sobre sus funciones, los procedimientos de trabajo seguro y las responsabilidades relacionadas con la actividad que desempeña.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.c02.p-4
          p.mb-0 Por ejemplo, una empresa que contrata operadores de tractores debe formalizar la relación laboral conforme a la modalidad aplicable, cumplir las obligaciones de seguridad social y establecer medidas para prevenir accidentes durante la operación y el mantenimiento de los equipos.
    p.mb-0 En consecuencia, conocer y aplicar la legislación laboral permite organizar el talento humano conforme a las disposiciones vigentes, proteger los derechos de los trabajadores y favorecer el desarrollo responsable de los servicios agrícolas mecanizados.
    separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.6 Evaluación y estrategias de gestión del talento humano
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t1/img34.jpg', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") La evaluación y la gestión del talento humano permiten conocer el desempeño del personal, identificar necesidades de formación y establecer acciones para fortalecer las competencias requeridas en los servicios agrícolas mecanizados. Estos procesos contribuyen a verificar el cumplimiento de las funciones asignadas, reconocer oportunidades de mejora y favorecer el logro de los objetivos de producción.
        .cajon.cajon.c02.color-primario.p-4.mb-0
          p.mb-0 La evaluación del desempeño consiste en analizar cómo los trabajadores desarrollan sus funciones, teniendo en cuenta los criterios establecidos para cada cargo. En las actividades de mecanización agrícola, esta evaluación puede considerar el cumplimiento de la programación, la calidad de las labores ejecutadas, el uso adecuado de la maquinaria, el seguimiento de los procedimientos de seguridad y el aprovechamiento de los recursos disponibles.
    p.mb-4 La evaluación debe realizarse con criterios claros, relacionados con las funciones y responsabilidades del personal. Algunos aspectos que pueden considerarse son los siguientes:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Criterios para evaluar el desempeño del talento humano
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Criterio
                th(data-aos="fade-down")(style= "width: 30%") Aspecto por evaluar
                th(data-aos="fade-down")(style= "width: 50%") Ejemplo de aplicación
            tbody
              tr
                td.td-c01(data-aos="fade-down") Cumplimiento de las actividades
                td.td-c01(data-aos="fade-down") Ejecución de las tareas asignadas dentro de los plazos establecidos.
                td.td-c01(data-aos="fade-down") Verificar si el operador realiza las labores mecanizadas de acuerdo con la programación.
              tr
                td(data-aos="fade-down") Calidad del trabajo
                td(data-aos="fade-down") Cumplimiento de las especificaciones técnicas de la labor.
                td(data-aos="fade-down") Comprobar si la profundidad de labranza o la distribución de la siembra corresponde a los parámetros establecidos.
              tr
                td.td-c01(data-aos="fade-down") Productividad
                td.td-c01(data-aos="fade-down") Relación entre el trabajo realizado y los recursos utilizados.
                td.td-c01(data-aos="fade-down") Analizar la superficie trabajada por hora, considerando las condiciones de operación.
              tr
                td(data-aos="fade-down") Seguridad laboral
                td(data-aos="fade-down") Cumplimiento de los procedimientos de seguridad y prevención de riesgos.
                td(data-aos="fade-down") Verificar la inspección previa de la maquinaria y el uso de los elementos de protección personal.
              tr
                td.td-c01(data-aos="fade-down") Trabajo colaborativo
                td.td-c01(data-aos="fade-down") Comunicación y coordinación con los demás integrantes del equipo.
                td.td-c01(data-aos="fade-down") Evaluar la coordinación entre el operador, el supervisor y el personal de apoyo.
              tr
                td(data-aos="fade-down") Cuidado de los recursos
                td(data-aos="fade-down") Uso responsable de la maquinaria, los insumos y los materiales.
                td(data-aos="fade-down") Identificar prácticas que contribuyan a reducir desperdicios y evitar daños en los equipos.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.c03.p-4
          .row.justify-content-center
            .col.col-lg-auto.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t1/img35.svg', alt='')
            .col.col-lg-10.col-12.order-lg-2.order-2
              p.mb-0(data-aos="fade-down") La información obtenida puede recopilarse mediante observación directa, listas de verificación, revisión de registros de producción, informes de supervisión y reuniones de retroalimentación. La selección de los instrumentos depende del cargo, las actividades realizadas y los criterios que se hayan definido previamente.
    p.mb-4 La gestión del talento humano comprende las acciones orientadas a organizar, desarrollar y aprovechar las capacidades del personal. Para ello, pueden implementarse estrategias como las siguientes:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img36.svg' alt='AvatarTop')
          h4.text-center Capacitación y actualización
          p.text-center Fortalecer los conocimientos y las habilidades relacionadas con la operación de maquinaria, el mantenimiento, las tecnologías agrícolas y los procedimientos de seguridad.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img37.svg' alt='AvatarTop')
          h4.text-center Asignación de funciones según las competencias
          p.text-center Distribuir las responsabilidades de acuerdo con la formación, la experiencia y las capacidades de cada trabajador.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img38.svg' alt='AvatarTop')
          h4.text-center Comunicación y coordinación
          p.text-center Establecer canales para compartir instrucciones, informar novedades y organizar las actividades del equipo de trabajo.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img39.svg' alt='AvatarTop')
          h4.text-center Motivación y reconocimiento
          p.text-center Promover el compromiso mediante el reconocimiento del desempeño, la participación y el cumplimiento de los objetivos.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img40.svg' alt='AvatarTop')
          h4.text-center Retroalimentación
          p.text-center Comunicar los resultados de la evaluación, reconocer fortalezas y acordar acciones para mejorar el desempeño.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img41.svg' alt='AvatarTop')
          h4.text-center Seguimiento y mejora
          p.text-center Revisar los avances de las acciones implementadas y determinar si contribuyen a mejorar la ejecución de las labores mecanizadas.
    P.mb-4 Estas estrategias pueden aplicarse de acuerdo con las necesidades identificadas durante la evaluación del desempeño. Algunos ejemplos de su implementación en los servicios agrícolas mecanizados se presentan a continuación:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span Ejemplo de aplicación de estrategias de gestión del talento humano
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Situación identificada
                th(data-aos="fade-down")(style= "width: 30%") Estrategia
                th(data-aos="fade-down")(style= "width: 40%") Resultado esperado
            tbody
              tr
                td.td-c01(data-aos="fade-down") Errores frecuentes en la regulación de implementos agrícolas.
                td.td-c01(data-aos="fade-down") Capacitación práctica y acompañamiento técnico.
                td.td-c01(data-aos="fade-down") Mejorar la precisión de las labores y reducir errores operativos.
              tr
                td(data-aos="fade-down") Retrasos por falta de coordinación entre los trabajadores.
                td(data-aos="fade-down") Definición de responsabilidades y reuniones breves de programación.
                td(data-aos="fade-down") Favorecer la organización del trabajo y el cumplimiento de los tiempos previstos.
              tr
                td.td-c01(data-aos="fade-down") Incumplimiento de procedimientos de seguridad.
                td.td-c01(data-aos="fade-down") Reinducción, supervisión y seguimiento de las prácticas de trabajo seguro.
                td.td-c01(data-aos="fade-down") Fortalecer el cumplimiento de las medidas preventivas.
              tr
                td(data-aos="fade-down") Uso inadecuado de maquinaria e insumos.
                td(data-aos="fade-down") Orientación técnica y evaluación periódica de las prácticas de trabajo.
                td(data-aos="fade-down") Promover el aprovechamiento responsable de los recursos.
    .row.justify-content-center.mb-0
      .col.col-lg-3.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t1/img42.jpg', alt='')
      .col.col-lg-9.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") Los resultados de la evaluación deben servir para tomar decisiones y no limitarse a calificar el desempeño de los trabajadores. Su análisis permite determinar si es necesario ajustar la distribución de funciones, desarrollar actividades de capacitación, mejorar la comunicación o fortalecer los procedimientos de trabajo.
        .cajon.cajon.c02.color-primario.p-4.mb-4
          p.mb-0 Por ejemplo, si la evaluación evidencia que una labor de preparación del suelo presenta retrasos recurrentes debido a dificultades en la operación de la maquinaria, la empresa puede revisar las competencias del operador, las condiciones del equipo y la organización de las actividades antes de definir las acciones correctivas.
        p.mb-0 De esta manera, la evaluación y las estrategias de gestión del talento humano contribuyen al fortalecimiento de las competencias, la coordinación del personal y el cumplimiento de los requerimientos técnicos de los servicios agrícolas mecanizados.
</template>
<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass">
.crd--avatarHorizontal
  position: relative
  padding-right: 2rem
  padding-left: 1.5rem
  background-color: transparent // Para que mande el fondo del pseudo-elemento ::before
  & > *
    position: relative
  h5
    color: #12263F
  p
    margin-bottom: 0
  &::before
    position: absolute
    content: ''
    top: 0
    right: 0
    width: calc(100% - 40px) // Ajuste correcto del ancho restando el espacio del avatar
    height: 100%
    background-color: #EEFFDB // Tono verde claro base para las tarjetas intermedias
  &:nth-child(even)::before
    background-color: #F8EDD3 !important // Color par (Beige)
  @media (max-width: 1000px)
    padding-right: 1.5rem
    &::before
      width: 100%
.crd--first
  &::before
    border-top-left-radius: 25px
.crd--last
  &::before
    border-bottom-left-radius: 25px
</style>
