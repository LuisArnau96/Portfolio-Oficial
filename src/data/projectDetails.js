export const projectDetails = {
  lolocal: {
    year: '2025',
    role:     { es: 'UX Research · UI Design · Branding', en: 'UX Research · UI Design · Branding' },
    subtitle: {
      es: 'App marketplace para conectar comercios locales con compradores del barrio',
      en: 'Marketplace app connecting local shops with neighborhood buyers',
    },
    context: {
      es: 'Más de 40.000 comercios cerraron en España entre 2019 y 2023. LoLocal nace para combatir la falta de visibilidad digital de los pequeños negocios frente a las grandes plataformas.',
      en: 'Over 40,000 shops closed in Spain between 2019 and 2023. LoLocal was created to fight the digital invisibility of small businesses competing against large platforms.',
    },
    problem: {
      es: 'Los comercios locales no tienen herramientas digitales accesibles. Los compradores no saben qué tiendas existen en su barrio ni cómo contactarlas.',
      en: 'Local shops lack accessible digital tools. Buyers don\'t know what stores exist in their neighborhood or how to contact them.',
    },
    objectives: {
      es: [
        'Dar visibilidad a los comercios locales mediante una presencia digital ágil',
        'Crear una conexión emocional entre el comprador y el comercio de proximidad',
        'Facilitar el descubrimiento por geolocalización',
        'Implementar mecanismos de fidelización',
        'Hacer la interfaz accesible para comerciantes sin experiencia digital',
      ],
      en: [
        'Give local shops digital visibility through a streamlined presence',
        'Create an emotional connection between buyers and nearby commerce',
        'Enable geolocation-based discovery',
        'Implement loyalty mechanisms',
        'Make the interface accessible for digitally inexperienced merchants',
      ],
    },
    roleText: {
      es: 'UX Research, User Personas, Análisis competitivo, Arquitectura de información, Wireframing, UI Design, Sistema de diseño, Estrategia de marca',
      en: 'UX Research, User Personas, Competitive Analysis, Information Architecture, Wireframing, UI Design, Design System, Brand Strategy',
    },
    process: {
      es: [
        'Desk Research + Mind Mapping',
        'Entrevistas a comerciantes y consumidores',
        'Encuestas y benchmarking de competidores',
        'Desarrollo de 3 User Personas',
        'Definición de propuesta de valor y MVP',
        'Estructura del sitio y navegación',
        'Aplicación de sesgos cognitivos a la interfaz',
        'Wireframes de baja y media fidelidad',
        'Creación de UI Kit con librería de componentes',
        'Prototipo interactivo en Figma',
      ],
      en: [
        'Desk Research + Mind Mapping',
        'Interviews with merchants and consumers',
        'Surveys and competitor benchmarking',
        'Development of 3 User Personas',
        'Value proposition and MVP definition',
        'Site structure and navigation design',
        'Cognitive bias application to interface',
        'Low and medium-fidelity wireframes',
        'UI Kit creation with component library',
        'Interactive Figma prototype',
      ],
    },
    result: {
      es: 'Aplicación marketplace completamente diseñada: sistema de navegación dual, UI Kit completo con tipografía Work Sans, mapa de sitio, flujos de tareas principales y prototipo interactivo funcional.',
      en: 'Fully designed marketplace app: dual navigation system, complete UI Kit with Work Sans typeface, sitemap, primary task flows, and functional interactive prototype.',
    },
    reflection: {
      es: '"No es solo un marketplace. Es el barrio digitalizado. Recuperamos el boca a boca y lo metimos en una app."',
      en: '"It\'s not just a marketplace. It\'s the neighborhood digitized. We took word of mouth and put it in an app."',
    },
    prototype: 'https://www.figma.com/proto/tsvGnRXFTtUxC9JPHY9lxz/Lolocal?node-id=1259-14935&t=61AzZSrJZyDvVOKp-1',
    cover: './projects/lolocal-cover.png',
    gallery: [
      {
        title: { es: 'Propuesta de valor', en: 'Value Proposition' },
        desc: { es: 'Humanización de la compra, facilidad para comprar local y apoyo al comercio como herramienta de transformación social.', en: 'Humanising the purchase, ease of buying local and supporting commerce as a tool for social transformation.' },
        image: './projects/lolocal-conectar.png',
      },
      {
        title: { es: 'User Personas', en: 'User Personas' },
        desc: { es: 'Carmen Lamadrid (comerciante), Amaïa López (consumidora), Pedro Muñoz (no consumidor).', en: 'Carmen Lamadrid (merchant), Amaïa López (consumer), Pedro Muñoz (non-consumer).' },
        image: './projects/lolocal-personas.png',
      },
      {
        title: { es: 'Sesgos cognitivos', en: 'Cognitive Biases' },
        desc: { es: 'Efecto posición serial, Visión periférica, Gestalt, FOMO, Hick-Hyman y Ley de Fitts.', en: 'Serial position effect, Peripheral vision, Gestalt, FOMO, Hick-Hyman and Fitts\' Law.' },
        image: './projects/lolocal-sesgos.png',
      },
      {
        title: { es: 'Wireframes', en: 'Wireframes' },
        image: './projects/lolocal-estilo.png',
      },
      {
        title: { es: 'Design System', en: 'Design System' },
        desc: { es: 'Work Sans, paleta (Primary-Green, Accent dorado), iconografía por categoría, componentes de card, botones, filtros, chat y fidelización.', en: 'Work Sans, palette (Primary-Green, golden Accent), category iconography, card, button, filter, chat and loyalty components.' },
        image: './projects/lolocal-uikit.png',
      },
    ],
  },

  remitly: {
    year: '2025',
    role:     { es: 'UX Research · UX Writing · UI Design', en: 'UX Research · UX Writing · UI Design' },
    subtitle: {
      es: 'Rediseño del flujo de confirmación y seguimiento de transferencias',
      en: 'Redesign of the transfer confirmation and tracking flow',
    },
    context: {
      es: 'Remitly es una de las plataformas más usadas para remesas. La falta de claridad en los mensajes de confirmación generaba desconfianza y envíos duplicados.',
      en: 'Remitly is one of the most used remittance platforms. Unclear confirmation messages generated mistrust and duplicate transactions.',
    },
    problem: {
      es: 'Los usuarios no sabían si su transferencia se había completado, lo que provocaba envíos duplicados y pérdida de confianza en la plataforma.',
      en: 'Users didn\'t know if their transfer had been completed, leading to duplicate sends and loss of trust in the platform.',
    },
    objectives: {
      es: [
        'Eliminar los envíos duplicados mediante una confirmación clara',
        'Mostrar el estado de la transferencia en tiempo real',
        'Mejorar la claridad de los mensajes del sistema (UX Writing)',
        'Reorganizar el historial de transacciones por estado',
        'Recuperar la confianza del usuario en el proceso de envío',
      ],
      en: [
        'Eliminate duplicate transactions through clear confirmation',
        'Display real-time transfer status',
        'Improve system message clarity (UX Writing focus)',
        'Reorganize transaction history by status',
        'Rebuild user confidence in the sending process',
      ],
    },
    roleText: {
      es: 'UX Research, User Persona, Journey Mapping, UX Writing, UI Design, Prototipado, Test de usabilidad',
      en: 'UX Research, User Persona, Journey Mapping, UX Writing, UI Design, Prototyping, Usability Testing',
    },
    process: {
      es: [
        'Research de escritorio y análisis de reseñas',
        'Aplicación del principio de Pareto para identificar puntos de dolor',
        'Creación de User Persona (Martín Benítez)',
        'Journey Map completo del flujo actual',
        'Identificación de puntos de intervención',
        'Rediseño del flujo de confirmación',
        'Reescritura de mensajes del sistema',
        'Evaluación heurística',
        'Test de usabilidad con 8 participantes',
        'Evaluación NPS post-test',
      ],
      en: [
        'Desktop research and review analysis',
        'Pareto principle applied to pain point identification',
        'User Persona creation (Martín Benítez)',
        'Complete Journey Map of current flow',
        'Intervention point identification',
        'Confirmation flow redesign',
        'System message copywriting refinement',
        'Heuristic evaluation',
        'Usability testing with 8 participants',
        'Post-test NPS assessment',
      ],
    },
    result: {
      es: 'Flujo de confirmación rediseñado con mensajes mejorados. El 100% de los participantes completó las tareas principales. NPS del 62,5% en el rediseño del historial.',
      en: 'Redesigned confirmation flow with improved messaging. 100% of participants completed primary tasks. 62.5% NPS for the history redesign.',
    },
    reflection: {
      es: '"Pequeños cambios en los mensajes tienen un impacto directo en la confianza. La transparencia es clave en apps fintech."',
      en: '"Small changes in messaging have a direct impact on trust. Transparency is key in fintech apps."',
    },
    prototype: 'https://www.figma.com/proto/N2vZDX3fSpePXeR2rCssBZ/Prueba-Estudio-Cactus?node-id=2017-21186&viewport=-307%2C-47%2C0.11&t=DnouGepIJtR0Vg0y-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2017%3A21186&show-proto-sidebar=1',
    cover: './projects/remitly-cover.png',
    gallery: [
      {
        title: { es: 'Research y Ley de Pareto', en: 'Research & Pareto Principle' },
        desc: { es: 'Audiencia: migrantes latinos 25-34 años. El 20% de causas provocan el 80% de los problemas.', en: 'Audience: Latino migrants aged 25-34. 20% of causes drive 80% of problems.' },
        image: './projects/remitly-pareto.png',
      },
      {
        title: { es: 'User Persona y Journey Map', en: 'User Persona & Journey Map' },
        desc: { es: 'Martín Benítez, conductor de Uber de 30 años en Barcelona. Envía dinero a Perú sin confirmación clara.', en: 'Martín Benítez, 30-year-old Uber driver in Barcelona. Sends money to Peru with no clear confirmation.' },
        image: './projects/remitly-journey.png',
      },
      {
        title: { es: 'Rediseño: confirmación', en: 'Redesign: confirmation' },
        image: './projects/remitly-seguimiento.png',
      },
      {
        title: { es: 'Mensajes del sistema', en: 'System messages' },
        image: './projects/remitly-mensajes.png',
      },
      {
        title: { es: 'Historial de transferencias', en: 'Transfer history' },
        image: './projects/remitly-envios.png',
      },
    ],
  },

  pedidosya: {
    year: '2024',
    role:     { es: 'UX Research · Ideación · Prototipado', en: 'UX Research · Ideation · Prototyping' },
    subtitle: {
      es: 'Feature preventiva: checklist colaborativo entre rider y restaurante',
      en: 'Preventive feature: collaborative checklist between rider and restaurant',
    },
    context: {
      es: 'PedidosYA opera en toda América Latina. El 80% de los usuarios había tenido problemas con su pedido; el 53% recibió un voucher en lugar de reembolso; el 34% encontró el proceso de reclamación tedioso.',
      en: 'PedidosYA operates across Latin America. 80% of users experienced order issues; 53% received a voucher instead of a refund; 34% found the complaint process tedious.',
    },
    problem: {
      es: 'La desconfianza venía de un soporte reactivo, no preventivo. El sistema atendía las quejas cuando el problema ya había ocurrido, en lugar de impedirlo.',
      en: 'User mistrust stemmed from reactive support, not preventive. The system addressed complaints after problems occurred instead of preventing them.',
    },
    objectives: {
      es: [
        'Prevenir errores antes de que se inicie una reclamación',
        'Implementar un checklist colaborativo en la app del Rider',
        'Aumentar la precisión del pedido en el momento de la recogida',
        'Recuperar la confianza del usuario final en la plataforma',
        'Medir el impacto sin alterar los tiempos operativos',
      ],
      en: [
        'Prevent errors before a complaint is initiated',
        'Implement a collaborative checklist in the Rider app',
        'Increase order accuracy during pickup',
        'Restore end-user confidence in the platform',
        'Measure impact without disrupting operational timelines',
      ],
    },
    roleText: {
      es: 'UX Research, Ideación, Desarrollo de solución, Prototipado, Test de usuario, Análisis heurístico',
      en: 'UX Research, Ideation, Solution Development, Prototyping, User Testing, Heuristic Analysis',
    },
    process: {
      es: [
        'Investigación cuantitativa con encuestas y analítica',
        'Identificación del problema (tasa de incidencias 80%)',
        'Formulación de preguntas "How Might We"',
        'Evaluación y descarte de hipótesis reactivas',
        'Desarrollo de la solución: checklist colaborativo',
        'Prototipado del nuevo flujo de recogida',
        'Testing con riders y personal de restaurante',
        'Evaluación heurística y de accesibilidad',
        'Definición de métricas de éxito',
        'Iteración basada en feedback de usuarios',
      ],
      en: [
        'Quantitative research via surveys and analytics',
        'Problem identification (80% incident rate)',
        '"How Might We" question formulation',
        'Evaluation and rejection of reactive hypotheses',
        'Collaborative checklist solution development',
        'New pickup flow prototyping',
        'Testing with riders and restaurant staff',
        'Heuristic and accessibility evaluation',
        'Success metrics definition',
        'Iteration based on user feedback',
      ],
    },
    result: {
      es: 'Diseño de feature con checklist integrado en el flujo de recogida. El botón "Continuar con la recogida" solo se activa cuando rider y restaurante han verificado conjuntamente los artículos.',
      en: 'Feature design with checklist integrated in the pickup flow. The "Continue with pickup" button only activates when rider and restaurant have jointly verified items.',
    },
    reflection: {
      es: '"Una pequeña mejora con un gran impacto. El problema no está en cómo evitar un reclamo, sino en cómo evitar que ocurra."',
      en: '"A small improvement with a big impact. The problem isn\'t how to avoid a complaint, but how to prevent it from happening."',
    },
    prototype: 'https://www.figma.com/proto/N2vZDX3fSpePXeR2rCssBZ/Prueba-Estudio-Cactus?page-id=1%3A2&node-id=2027-3289&viewport=-307%2C-1400%2C0.11&t=dQGxMttcB5mxbjyU-9&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2027%3A3289&show-proto-sidebar=1',
    cover: './projects/pedidosya-portada.png',
    gallery: [
      {
        title: { es: 'Identificación del problema', en: 'Problem Identification' },
        desc: { es: '80% tuvo problemas · 53% recibió cupones en vez de devolución · 34% percibe el reclamo como tedioso.', en: '80% had issues · 53% received coupons instead of refunds · 34% find the complaint process tedious.' },
        image: 'https://lh3.googleusercontent.com/d/1sskFzgMxEZFpvpxYl1Z-IqDn5hE0UyCq',
      },
      {
        title: { es: 'HMW', en: 'HMW' },
        desc: { es: '¿Cómo podríamos prevenir el problema antes de que el usuario tenga que reclamar?', en: 'How might we prevent the problem before the user has to complain?' },
        image: 'https://lh3.googleusercontent.com/d/1Jk3W2-OtkbCP3XXwjpWr4g7l54zfUuQR',
      },
      {
        title: { es: 'Propuesta de solución', en: 'Solution Design' },
        desc: { es: 'Checklist colaborativo integrado en la app PedidosYA Rider.', en: 'Collaborative checklist integrated into the PedidosYA Rider app.' },
        image: 'https://lh3.googleusercontent.com/d/1rZC5jRrfjVjIiA6EZ0_-NAVo2owRPeMu',
      },
      {
        title: { es: 'Nuevo proceso de confirmación', en: 'New confirmation flow' },
        image: 'https://lh3.googleusercontent.com/d/1HghKAwVqiTkOfkVVzFxMuH4q937SxKC0',
      },
      {
        title: { es: 'Testeo con usuarios', en: 'User testing' },
        image: 'https://lh3.googleusercontent.com/d/1eYgeWNgyUPb1MpXOHmk7Fcb0Ggi-YGYG',
      },
      {
        title: { es: 'Métricas de éxito', en: 'Success metrics' },
        image: 'https://lh3.googleusercontent.com/d/13mTncKaT-EA3tFjYEggw_A6pawWdQQ-U',
      },
      {
        title: { es: 'Conclusiones', en: 'Conclusions' },
        image: 'https://lh3.googleusercontent.com/d/1Ra5GxnChffC9Dz4ZHG80SAW0tk7n8YHJ',
      },
    ],
  },

  tlp: {
    year: '2024',
    role:     { es: 'UX Research · Diseño de onboarding', en: 'UX Research · Onboarding Design' },
    subtitle: {
      es: 'Rediseño del onboarding para comunidad de apoyo a personas con TLP',
      en: 'Onboarding redesign for a borderline personality disorder support community',
    },
    context: {
      es: 'TLPianxs Haciendo Cosas es la primera asociación latinoamericana creada por y para personas con Trastorno Límite de Personalidad. El registro tardaba hasta 3 semanas, generando ansiedad en una población vulnerable.',
      en: 'TLPianxs Haciendo Cosas is the first Latin American association created by and for people with Borderline Personality Disorder. Registration took up to 3 weeks, causing anxiety in a vulnerable population.',
    },
    problem: {
      es: 'Los nuevos usuarios experimentaban invisibilidad durante el registro. La espera prolongada sin comunicación elevaba la ansiedad en personas susceptibles a crisis.',
      en: 'New users experienced invisibility during registration. The extended wait without communication heightened anxiety in crisis-susceptible people.',
    },
    objectives: {
      es: [
        'Reducir la incertidumbre en el proceso de registro',
        'Establecer un flujo prioritario para usuarios en crisis',
        'Implementar un indicador de progreso numerado',
        'Contextualizar la selección de grupos de preferencia',
        'Cumplir las heurísticas H5 (prevención de errores) y H6 (reconocimiento vs. recuerdo)',
      ],
      en: [
        'Reduce uncertainty in the registration process',
        'Establish a priority flow for users in crisis',
        'Implement a numbered progress indicator',
        'Contextualize preference group selection',
        'Meet heuristics H5 (error prevention) and H6 (recognition vs. recall)',
      ],
    },
    roleText: {
      es: 'UX Research, User Persona, Journey Mapping, Ideación, Prototipado, Test de usabilidad, Evaluación heurística, Diseño iterativo',
      en: 'UX Research, User Persona, Journey Mapping, Ideation, Prototyping, Usability Testing, Heuristic Evaluation, Iterative Design',
    },
    process: {
      es: [
        'Análisis de la experiencia actual (plataforma web fragmentada)',
        'Creación de User Persona (Milagros, 21 años, Argentina)',
        'Journey Map desde el reconocimiento de la necesidad hasta el registro',
        'Selección del problema refinado frente a alternativas',
        'Ideación del onboarding con selección de estado emocional',
        'Desarrollo de prototipo con flujo prioritario y estándar',
        'Test de usabilidad con 4 participantes del grupo objetivo',
        'Evaluación heurística H5 y H6',
        'Iteración basada en hallazgos',
        'Validación del rediseño final',
      ],
      en: [
        'Current experience analysis (fragmented web platform)',
        'User Persona creation (Milagros, 21, Argentina)',
        'Journey Map from need recognition through registration',
        'Refined problem selection against alternatives',
        'Onboarding ideation with emotional state selection',
        'Priority and standard flow prototype development',
        'Usability testing with 4 target group participants',
        'Heuristic evaluation H5 and H6',
        'Findings-based iteration',
        'Final redesign validation',
      ],
    },
    result: {
      es: 'Onboarding rediseñado con selección de estado emocional (crisis / estable), modal de llamada inmediata para usuarios en crisis, barra de progreso numerada (1 de 4) y descripciones contextualizadas. Tasa de completado: 100%.',
      en: 'Redesigned onboarding with emotional state selection (crisis/stable), immediate call modal for crisis users, numbered progress bar (1 of 4), and contextualized descriptions. Completion rate: 100%.',
    },
    reflection: {
      es: '"Alta fricción en un momento crítico es inaceptable. Cuando el usuario está en crisis, cada clic de más puede ser el clic que lo lleve a abandonar."',
      en: '"High friction at a critical moment is unacceptable. When a user is in crisis, each extra click can be the one that makes them leave."',
    },
    prototype: 'https://www.figma.com/proto/N2vZDX3fSpePXeR2rCssBZ/Prueba-Estudio-Cactus?node-id=2017-5041&viewport=-307%2C-47%2C0.11&t=DnouGepIJtR0Vg0y-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2017%3A5041&show-proto-sidebar=1',
    cover: './projects/telepianxs-portada.png',
    gallery: [
      {
        title: { es: 'User Persona y Journey Map', en: 'User Persona & Journey Map' },
        desc: { es: 'Milagros, 21 años, estudiante de diseño en Argentina. Journey: reconoce que necesita ayuda → conoce TLPianxs → problemas al registrarse → espera 2 semanas → es admitida.', en: 'Milagros, 21, design student in Argentina. Journey: realises she needs help → discovers TLPianxs → struggles to register → waits 2 weeks → gets admitted.' },
        image: 'https://lh3.googleusercontent.com/d/16NInLIYUWCK0vwY_cFrGjElPLcxfp53_',
      },
      {
        title: { es: 'User Journey', en: 'User Journey' },
        image: 'https://lh3.googleusercontent.com/d/142024bAxhQN3EyoTGIrUVE3XNRPvAYmE',
      },
      {
        title: { es: 'Problema e ideación', en: 'Problem & ideation' },
        image: 'https://lh3.googleusercontent.com/d/1gUlYBasYmVqdwW-Qwe0Pw3TTLik4mHc5',
      },
      {
        title: { es: 'Selección de estado de ánimo', en: 'Emotional state selection' },
        image: 'https://lh3.googleusercontent.com/d/1vzruTzVXVTW-sZJT2YWkW8RV7R1S8Dyl',
      },
      {
        title: { es: 'Prototipo', en: 'Prototype' },
        desc: { es: 'Flujo de crisis (izquierda): botón "Llamar ahora" visible desde el inicio. Flujo estándar (derecha): registro paso a paso con barra de progreso.', en: 'Crisis flow (left): "Call now" button visible from the start. Standard flow (right): step-by-step registration with progress bar.' },
        image: 'https://lh3.googleusercontent.com/d/15CgscOk9zxDmCLFfyWcRVykg5Fh_QCJx',
      },
      {
        title: { es: 'Testeo de usabilidad', en: 'Usability testing' },
        image: 'https://lh3.googleusercontent.com/d/1ubQFwonhIlyczxwfICdcJyUE0ZQr65kc',
      },
      {
        title: { es: 'Iteraciones', en: 'Iterations' },
        image: 'https://lh3.googleusercontent.com/d/1SIcKce2IsQws0AeffqHU8O8_gvLW7K5r',
      },
    ],
  },

  cactus: {
    year: '2025',
    role:     { es: 'UX/UI Design · Branding', en: 'UX/UI Design · Branding' },
    subtitle: {
      es: 'Challenge UX/UI — Rediseño de navegación en mapa 3D interactivo',
      en: 'UX/UI Challenge — Navigation redesign for a 3D interactive map',
    },
    context: {
      es: 'Challenge real de proceso de selección: mejora de la navegación del mapa 3D interactivo del terminal AMPT Pier 400 (Long Beach, EE. UU.).',
      en: 'Real selection process challenge: improve the 3D interactive map navigation for AMPT Pier 400 Terminal (Long Beach, USA).',
    },
    problem: {
      es: 'La navegación del menú lateral carecía de intuitividad en móvil. Ciertas zonas del mapa tenían numeración incorrecta.',
      en: 'Side menu navigation lacked mobile intuitiveness. Certain map zones had incorrect numbering.',
    },
    objectives: {
      es: [
        'Establecer patrones de navegación claros para móvil',
        'Crear un sistema de menú desplegable más intuitivo',
        'Optimizar el uso del espacio en pantalla',
        'Corregir las inconsistencias de numeración con una progresión lógica',
      ],
      en: [
        'Establish clear mobile navigation patterns',
        'Create a more intuitive dropdown menu system',
        'Optimize screen space usage',
        'Correct numbering inconsistencies with logical progression',
      ],
    },
    roleText: {
      es: 'UX/UI Design, Análisis de interfaz, Prototipado',
      en: 'UX/UI Design, Interface Analysis, Prototyping',
    },
    process: {
      es: [
        'Reorganización del menú existente',
        'Implementación de menú hamburguesa (preserva la visibilidad del mapa)',
        'Notas explicativas para ítems del submenú',
        'Corrección de numeración con lógica paralela',
      ],
      en: [
        'Menu reorganization',
        'Hamburger menu implementation (preserves map visibility)',
        'Explanatory notes for submenu items',
        'Numbering correction using parallel logic',
      ],
    },
    result: {
      es: 'Mayor claridad, menor fricción y experiencia de usuario móvil significativamente mejorada.',
      en: 'Enhanced clarity, reduced friction, and significantly improved mobile user experience.',
    },
    reflection: {
      es: '"Ejercicio sólido de navegación, claridad y diseño funcional."',
      en: '"A solid exercise in navigation, clarity, and functional design."',
    },
    prototype: 'https://www.figma.com/proto/N2vZDX3fSpePXeR2rCssBZ/Prueba-Estudio-Cactus?node-id=2040-5766&viewport=726%2C505%2C0.13&t=DnouGepIJtR0Vg0y-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2040%3A5766&show-proto-sidebar=1',
    cover: './projects/cactus-logo.png',
    gallery: [],
  },
}
