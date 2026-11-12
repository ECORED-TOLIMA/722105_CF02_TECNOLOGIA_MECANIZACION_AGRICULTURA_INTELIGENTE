export default {
  global: {
    Name: 'Estructuración, validación y mejora de los servicios agrícolas mecanizados',
    Description:
      'El componente formativo aborda la estructuración, validación y mejora de los servicios agrícolas mecanizados mediante la gestión del talento humano, la organización del programa de producción agropecuaria y el análisis de la productividad. Asimismo, comprende estrategias de mercadeo, herramientas para analizar y validar las actividades mecanizadas, e identificación de oportunidades de mejora orientadas a optimizar los recursos, los procesos y los resultados de la producción.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Talento humano en los servicios mecanizados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto, alcance y características del talento humano',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de talento humano, funciones y responsabilidades',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Reclutamiento y selección del personal',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Mercado laboral y tipos de vinculación',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Legislación laboral aplicable',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Evaluación y estrategias de gestión del talento humano',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Programa de producción agropecuaria mecanizada',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Características del programa de producción',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Gestión de inventarios y control de calidad',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Eficiencia operativa',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Optimización de procesos',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Gestión de costos y sostenibilidad del programa',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo:
              'Organización y estructuración de las actividades mecanizadas',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Productividad de las actividades mecanizadas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Características y tipos de productividad',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Eficiencia y eficacia e indicadores de desempeño',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Fórmulas para el cálculo de la productividad',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Factores que influyen en la productividad',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo:
              'Medición, retroalimentación y limitaciones de los indicadores',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estrategias de mercadeo para servicios mecanizados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Tipos de estrategias de mercadeo',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Investigación y segmentación del mercado',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Desarrollo de servicios y fijación de precios',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Canales de distribución y análisis de la competencia',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Análisis de datos, tendencias del mercado y adaptabilidad',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Herramientas para el análisis y la validación de actividades mecanizadas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'Tipos, características y selección de herramientas de análisis',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Análisis, modelado e interpretación de datos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Validación de actividades mecanizadas y optimización de procesos',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Mejora de las actividades mecanizadas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Identificación y priorización de oportunidades de mejora',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Diseño de acciones correctivas y de mejora',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Ajuste del programa de producción',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Gestión de recursos',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Evaluación de resultados',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo: 'Mejora continua',
            hash: 't_6_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/722105_CF02_CFA.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Agricultura de precisión',
      significado:
        'Conjunto de tecnologías y técnicas que permiten gestionar las actividades agrícolas de acuerdo con las condiciones específicas del terreno y las necesidades del cultivo.',
    },
    {
      termino: 'Análisis de datos',
      significado:
        'Proceso de organizar e interpretar información para identificar tendencias, reconocer problemas y orientar la toma de decisiones.',
    },
    {
      termino: 'Calibración',
      significado:
        'Ajuste de una máquina o implemento para garantizar que opere de acuerdo con los parámetros técnicos requeridos.',
    },
    {
      termino: 'Eficacia',
      significado:
        'Capacidad de alcanzar los objetivos establecidos para una actividad o proceso productivo.',
    },
    {
      termino: 'Eficiencia operativa',
      significado:
        'Capacidad de ejecutar las actividades utilizando adecuadamente los recursos disponibles, como tiempo, combustible, maquinaria e insumos.',
    },
    {
      termino: 'Indicador de desempeño',
      significado:
        'Medida cuantitativa o cualitativa que permite evaluar los resultados de una actividad y compararlos con los objetivos establecidos.',
    },
    {
      termino: 'Inventario',
      significado:
        'Registro organizado de los materiales, repuestos, insumos, herramientas y equipos disponibles para desarrollar las actividades productivas.',
    },
    {
      termino: 'Mantenimiento preventivo',
      significado:
        'Conjunto de actividades programadas para conservar la maquinaria en condiciones adecuadas de funcionamiento y reducir la probabilidad de fallas.',
    },
    {
      termino: 'Mercadeo',
      significado:
        'Conjunto de estrategias orientadas a identificar las necesidades de los clientes, promover servicios y fortalecer las relaciones comerciales.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'Proceso sistemático de evaluación y ajuste de las actividades para optimizar los resultados, reducir errores y aprovechar mejor los recursos.',
    },
    {
      termino: 'Optimización de procesos',
      significado:
        'Aplicación de acciones y ajustes destinados a mejorar el desarrollo de las operaciones, reducir desperdicios y aumentar la productividad.',
    },
    {
      termino: 'Productividad',
      significado:
        'Relación entre los resultados obtenidos y los recursos utilizados durante una actividad productiva.',
    },
    {
      termino: 'Programa de producción agropecuaria mecanizada',
      significado:
        'Planificación organizada de las actividades agrícolas que establece las labores, los recursos, los tiempos y las responsabilidades necesarias para alcanzar los objetivos productivos.',
    },
    {
      termino: 'Validación',
      significado:
        'Proceso mediante el cual se determina si una actividad o sus resultados cumplen los requisitos técnicos y los objetivos establecidos.',
    },
    {
      termino: 'Talento humano',
      significado:
        'Conjunto de conocimientos, habilidades, competencias y experiencias de las personas que participan en la ejecución y gestión de las actividades productivas.',
    },
  ],
  referencias: [
    {
      referencia: 'Congreso de Colombia. (2012). Ley 1562 de 2012.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=48365',
    },
    {
      referencia: 'Congreso de Colombia. (2025). Ley 2466 de 2025.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=260676',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1993). Ley 100 de 1993.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=5248',
    },
    {
      referencia:
        'Constitución Política de Colombia de 1991. (1991). Artículos 25 y 53.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4125',
    },
    {
      referencia:
        'International Organization for Standardization. (2015). Quality management systems - Requirements (ISO Standard No. 9001:2015).',
      link: '',
    },
    {
      referencia:
        'Ministerio de Justicia. (2018). ¿Qué se debe tener en cuenta al suscribir un contrato de prestación de servicios?',
      link: 'https://www.minjusticia.gov.co/programas-co/LegalApp/Paginas/Que-se-debe-tener-en-cuenta-al-suscribir-un-contrato-de-prestacion-de-servicios.aspx?utm_source=chatgpt.com',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura. (s. f.). Mecanización Agrícola Sostenible.',
      link: 'https://www.fao.org/sustainable-agricultural-mechanization/overview/whatissustainablemechanization/es/',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura. (2024). Promoting sustainable agricultural mechanization for smallholder farmers: Five steps to develop effective business models.',
      link: 'https://openknowledge.fao.org/handle/20.500.14283/cd2358en',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2015). Decreto 1072 de 2015.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=72173',
    },
    {
      referencia:
        'Presidente de la República de Colombia. (1950). Código Sustantivo del Trabajo, adoptado mediante el Decreto 2663 de 1950.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=199983',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Cindy Carolina Gámez Ávila',
          cargo: 'Instructora técnica',
          centro: 'Centro Agropecuario La Granja - Regional Tolima',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
