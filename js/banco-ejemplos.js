
const organizaciones = {
  "clinica": {
    nombre: "Clínica / consultorio",
    caso: "Consultorio Integral Vita",
    sujeto: "el Consultorio Integral Vita",
    contexto: "servicios de salud y atención a pacientes",
    publicos: "pacientes actuales, pacientes potenciales, familiares, médicos aliados y comunidad local",
    canal: "redes sociales, recomendaciones, reseñas digitales y comunicación en sitio"
  },
  "despacho": {
    nombre: "Despacho profesional",
    caso: "Despacho Jurídico Lex & Co.",
    sujeto: "el Despacho Jurídico Lex & Co.",
    contexto: "servicios profesionales especializados",
    publicos: "clientes actuales, prospectos, aliados estratégicos, cámaras empresariales y comunidad profesional",
    canal: "LinkedIn, sitio web, recomendaciones, eventos profesionales y comunicación directa"
  },
  "empresa": {
    nombre: "Empresa local",
    caso: "Potosí Verde Servicios",
    sujeto: "la empresa local Potosí Verde Servicios",
    contexto: "mercado local de servicios",
    publicos: "clientes actuales, clientes potenciales, proveedores, colaboradores y comunidad local",
    canal: "redes sociales, sitio web, atención al cliente y comunicación comunitaria"
  },
  "laboratorio": {
    nombre: "Laboratorio",
    caso: "Castro Patton Laboratorios",
    sujeto: "Castro Patton Laboratorios",
    contexto: "servicios especializados para sector salud y clientes empresariales",
    publicos: "clientes empresariales, médicos, instituciones de salud, proveedores y aliados estratégicos",
    canal: "comunicación institucional, reuniones B2B, redes profesionales y materiales corporativos"
  },
  "marca_personal": {
    nombre: "Marca personal",
    caso: "Dra. Mariana Torres",
    sujeto: "la marca personal de la Dra. Mariana Torres",
    contexto: "posicionamiento profesional y reputación individual",
    publicos: "audiencia digital, pacientes, colegas, medios, instituciones y comunidad profesional",
    canal: "redes sociales, conferencias, entrevistas, sitio web y publicaciones profesionales"
  },
  "directivo": {
    nombre: "Directivo",
    caso: "Director de Innovación Empresarial",
    sujeto: "el Director de Innovación Empresarial",
    contexto: "liderazgo ejecutivo y comunicación institucional",
    publicos: "equipo interno, socios, medios especializados, clientes y aliados estratégicos",
    canal: "vocería, LinkedIn, eventos corporativos, entrevistas y comunicación interna"
  },
  "candidato": {
    nombre: "Candidato institucional",
    caso: "Candidatura a presidencia de cámara empresarial",
    sujeto: "la candidatura institucional a presidencia de cámara empresarial",
    contexto: "representación pública y liderazgo gremial",
    publicos: "miembros de la cámara, líderes empresariales, medios y comunidad sectorial",
    canal: "eventos, discursos, medios, redes profesionales y reuniones con actores clave"
  },
  "artista": {
    nombre: "Artista",
    caso: "Los 512 Cumbia Band",
    sujeto: "la banda local Los 512 Cumbia Band",
    contexto: "escena musical y entretenimiento local",
    publicos: "seguidores actuales, nuevos públicos, medios, promotores, recintos y comunidad cultural",
    canal: "redes sociales, presentaciones, prensa, plataformas musicales y eventos"
  },
  "cafeteria": {
    nombre: "Cafetería / restaurante",
    caso: "Cafebrería San Luis",
    sujeto: "Cafebrería San Luis",
    contexto: "cafetería cultural con enfoque en lectura, espiritualidad y comunidad",
    publicos: "clientes actuales, lectores, jóvenes universitarios, familias, comunidad católica y público cultural",
    canal: "Instagram, Facebook, TikTok, eventos presenciales, reseñas y medios locales"
  },
  "emprendimiento": {
    nombre: "Emprendimiento",
    caso: "Nexo Creativo Studio",
    sujeto: "el emprendimiento Nexo Creativo Studio",
    contexto: "lanzamiento y consolidación de marca emergente",
    publicos: "clientes potenciales, aliados, emprendedores, comunidad digital y proveedores",
    canal: "redes sociales, portafolio digital, networking, recomendaciones y eventos locales"
  },
  "institucion_educativa": {
    nombre: "Institución educativa",
    caso: "Instituto Horizonte",
    sujeto: "el Instituto Horizonte",
    contexto: "servicios educativos y comunidad académica",
    publicos: "estudiantes, docentes, familias, administrativos, egresados y comunidad educativa",
    canal: "correo institucional, redes sociales, reuniones, sitio web, eventos académicos y comunicación interna"
  },
  "fundacion": {
    nombre: "Fundación",
    caso: "Fundación Semillas de Futuro",
    sujeto: "la Fundación Semillas de Futuro",
    contexto: "acción social, voluntariado y procuración de fondos",
    publicos: "beneficiarios, donantes, voluntarios, aliados, comunidad y medios",
    canal: "redes sociales, boletines, eventos, testimonios, informes y relación con aliados"
  },
  "asociacion": {
    nombre: "Asociación civil",
    caso: "Asociación Vecinos Unidos",
    sujeto: "la Asociación Vecinos Unidos",
    contexto: "organización comunitaria y participación social",
    publicos: "vecinos, voluntarios, autoridades, aliados, comercios locales y comunidad",
    canal: "reuniones, grupos digitales, carteles, redes sociales y comunicación comunitaria"
  },
  "universidad": {
    nombre: "Universidad",
    caso: "Universidad Metropolitana del Centro",
    sujeto: "la Universidad Metropolitana del Centro",
    contexto: "educación superior, vinculación académica y reputación institucional",
    publicos: "estudiantes, aspirantes, docentes, egresados, empleadores, familias e instituciones aliadas",
    canal: "sitio web, redes sociales, eventos, correo institucional, prensa y vinculación"
  },
  "dependencia": {
    nombre: "Dependencia pública",
    caso: "Secretaría Educativa Estatal",
    sujeto: "la Secretaría Educativa Estatal",
    contexto: "servicio público, comunicación institucional y atención ciudadana",
    publicos: "ciudadanía, usuarios, servidores públicos, medios, escuelas, familias y autoridades",
    canal: "comunicados, redes oficiales, sitio web, ventanillas, campañas y comunicación interna"
  },
  "proyecto_cultural": {
    nombre: "Proyecto cultural",
    caso: "Festival Barrio Vivo",
    sujeto: "el proyecto cultural Festival Barrio Vivo",
    contexto: "gestión cultural, participación comunitaria y difusión artística",
    publicos: "artistas, asistentes, comunidad local, patrocinadores, medios y autoridades culturales",
    canal: "redes sociales, medios locales, carteles, alianzas, eventos y vocería cultural"
  },
  "equipo_deportivo": {
    nombre: "Equipo deportivo",
    caso: "Rojos SLP",
    sujeto: "el equipo deportivo Rojos SLP",
    contexto: "deporte local, comunidad de aficionados y vinculación institucional",
    publicos: "jugadores, familias, aficionados, patrocinadores, escuelas, medios y comunidad deportiva",
    canal: "redes sociales, partidos, activaciones, clínicas deportivas, prensa y alianzas"
  },
  "marca_local": {
    nombre: "Marca local",
    caso: "Dulce Raíz SLP",
    sujeto: "la marca local Dulce Raíz SLP",
    contexto: "producto local con identidad regional",
    publicos: "consumidores locales, turistas, distribuidores, aliados comerciales y comunidad digital",
    canal: "puntos de venta, redes sociales, eventos, empaques, recomendaciones y prensa local"
  },
  "restaurante": {
    nombre: "Restaurante",
    caso: "Restaurante Los Gavilanes",
    sujeto: "el Restaurante Los Gavilanes",
    contexto: "servicio gastronómico y reputación digital",
    publicos: "clientes, familias, turistas, seguidores en redes, repartidores, proveedores y comunidad local",
    canal: "reseñas, redes sociales, atención presencial, plataformas de entrega y medios locales"
  }
};

const lineas = {
  "reputacion": {
    nombre: "Reputación",
    organizaciones: ["clinica","despacho","empresa","laboratorio"],
    tema: "Fortalecimiento de la reputación de {sujeto} mediante estrategias de Relaciones Públicas en el contexto de {contexto}.",
    problema: "{sujeto} requiere fortalecer la confianza y percepción positiva de sus públicos, debido a que su comunicación actual no comunica de manera consistente sus atributos, experiencia y valor diferencial.",
    objetivoGeneral: "Fortalecer la reputación de {sujeto} mediante estrategias de Relaciones Públicas orientadas a confianza, credibilidad y comunicación consistente con sus públicos clave.",
    objetivos: [
      "Identificar los factores que influyen en la percepción actual de {sujeto} ante sus públicos clave.",
      "Diseñar acciones de comunicación que refuercen credibilidad, transparencia y valor diferencial.",
      "Establecer mecanismos de seguimiento para valorar cambios en confianza y percepción pública."
    ],
    estrategias: [
      "Diagnóstico reputacional con públicos clave.",
      "Comunicación de atributos institucionales y casos de valor.",
      "Monitoreo de percepción y retroalimentación reputacional."
    ],
    tacticas: [
      "Aplicar entrevistas breves y revisar reseñas, comentarios y menciones sobre la organización.",
      "Crear mensajes clave, testimonios y contenidos que evidencien experiencia, calidad y compromiso.",
      "Implementar una matriz mensual de percepción con comentarios positivos, negativos y áreas de mejora."
    ],
    indicadores: ["Nivel de percepción positiva", "Número de testimonios o recomendaciones", "Menciones favorables", "Reducción de comentarios negativos", "Confianza declarada por públicos clave"],
    instrumentos: ["Entrevistas a profundidad", "Encuesta de percepción", "Matriz de análisis de comentarios", "Clipping de menciones", "FODA comunicacional"]
  },
  "imagen_publica": {
    nombre: "Imagen pública",
    organizaciones: ["marca_personal","directivo","candidato","artista"],
    tema: "Gestión de la imagen pública de {sujeto} mediante estrategias de comunicación, presencia y posicionamiento profesional.",
    problema: "{sujeto} cuenta con elementos de reconocimiento, pero su imagen pública requiere mayor coherencia entre discurso, presencia digital, mensajes y expectativas de sus públicos.",
    objetivoGeneral: "Gestionar la imagen pública de {sujeto} mediante estrategias de Relaciones Públicas orientadas a coherencia, credibilidad y presencia estratégica.",
    objetivos: [
      "Analizar la percepción actual de la imagen pública de {sujeto} ante sus públicos prioritarios.",
      "Definir mensajes, atributos y elementos de presencia que fortalezcan su posicionamiento público.",
      "Proponer acciones de visibilidad que comuniquen una imagen coherente y profesional."
    ],
    estrategias: [
      "Diagnóstico de percepción e identidad pública.",
      "Construcción de narrativa personal/institucional.",
      "Activación de presencia pública y digital."
    ],
    tacticas: [
      "Revisar perfiles digitales, entrevistas, publicaciones y comentarios de públicos clave.",
      "Diseñar una guía de mensajes clave, tono comunicacional y atributos diferenciadores.",
      "Programar publicaciones, participaciones o entrevistas alineadas con la narrativa definida."
    ],
    indicadores: ["Coherencia de mensajes", "Alcance de publicaciones", "Interacciones cualitativas", "Reconocimiento de atributos", "Invitaciones o menciones públicas"],
    instrumentos: ["Auditoría de imagen digital", "Entrevistas a públicos clave", "Análisis de contenido", "Matriz de atributos", "Checklist de presencia pública"]
  },
  "posicionamiento": {
    nombre: "Posicionamiento",
    organizaciones: ["cafeteria","emprendimiento","empresa","institucion_educativa"],
    tema: "Posicionamiento estratégico de {sujeto} mediante Relaciones Públicas para fortalecer su reconocimiento ante públicos clave.",
    problema: "{sujeto} posee una propuesta de valor relevante, pero su nivel de reconocimiento y diferenciación ante sus públicos potenciales es limitado.",
    objetivoGeneral: "Fortalecer el posicionamiento de {sujeto} mediante estrategias de Relaciones Públicas orientadas a visibilidad, diferenciación y vinculación con públicos clave.",
    objetivos: [
      "Identificar los atributos diferenciadores de {sujeto} que pueden fortalecer su posicionamiento.",
      "Diseñar acciones de visibilidad que comuniquen su propuesta de valor ante públicos estratégicos.",
      "Generar experiencias o contenidos que refuercen el reconocimiento de la organización."
    ],
    estrategias: [
      "Definición de propuesta de valor comunicable.",
      "Visibilidad digital y presencial con públicos estratégicos.",
      "Vinculación mediante experiencias de marca."
    ],
    tacticas: [
      "Elaborar una matriz de atributos diferenciales, mensajes clave y públicos prioritarios.",
      "Publicar una serie de contenidos temáticos que destaquen beneficios, historia y diferenciadores.",
      "Organizar una actividad o experiencia piloto que acerque la marca a sus públicos clave."
    ],
    indicadores: ["Recordación de marca", "Alcance digital", "Asistencia a experiencias", "Interacciones por contenido", "Reconocimiento de atributos"],
    instrumentos: ["Encuesta de recordación", "Análisis de redes sociales", "Benchmarking", "Entrevista con encargados", "Registro de asistencia"]
  },
  "publicos_clave": {
    nombre: "Públicos clave",
    organizaciones: ["fundacion","asociacion","universidad","dependencia"],
    tema: "Identificación y gestión de públicos clave para fortalecer la relación estratégica de {sujeto} con su entorno.",
    problema: "{sujeto} mantiene relación con diversos públicos, pero no cuenta con una clasificación clara que permita priorizar mensajes, canales y acciones de comunicación.",
    objetivoGeneral: "Definir los públicos clave de {sujeto} mediante un análisis de interés, influencia y relación estratégica para orientar acciones de Relaciones Públicas.",
    objetivos: [
      "Identificar los públicos internos, externos y estratégicos relacionados con {sujeto}.",
      "Clasificar a los públicos según nivel de interés, influencia y vínculo con el problema de intervención.",
      "Proponer acciones diferenciadas de comunicación para los públicos prioritarios."
    ],
    estrategias: [
      "Mapeo integral de públicos y actores.",
      "Priorización de públicos estratégicos.",
      "Comunicación segmentada por tipo de público."
    ],
    tacticas: [
      "Elaborar una lista de públicos internos, externos, aliados, beneficiarios y actores de entorno.",
      "Construir una matriz poder/interés para determinar públicos prioritarios.",
      "Diseñar mensajes y canales específicos para tres públicos clave."
    ],
    indicadores: ["Número de públicos identificados", "Matriz de priorización completa", "Claridad de mensajes por público", "Participación de públicos prioritarios", "Pertinencia de canales"],
    instrumentos: ["Mapeo de actores", "Matriz poder/interés", "Entrevistas", "Análisis documental", "Ficha de segmentación de públicos"]
  },
  "comunicacion_interna": {
    nombre: "Comunicación interna",
    organizaciones: ["institucion_educativa","empresa","dependencia","fundacion"],
    tema: "Fortalecimiento de la comunicación interna de {sujeto} mediante estrategias de Relaciones Públicas organizacionales.",
    problema: "{sujeto} presenta áreas de oportunidad en el flujo de información, coherencia de mensajes y participación de sus públicos internos.",
    objetivoGeneral: "Fortalecer la comunicación interna de {sujeto} mediante estrategias que mejoren canales, mensajes y participación de sus públicos internos.",
    objetivos: [
      "Diagnosticar el funcionamiento de los canales internos y la percepción de los colaboradores.",
      "Diseñar acciones que mejoren la claridad, oportunidad y coherencia de la comunicación interna.",
      "Promover la participación e identidad organizacional de los públicos internos."
    ],
    estrategias: [
      "Auditoría de canales internos.",
      "Sistema de mensajes internos claros y periódicos.",
      "Activación de identidad y participación interna."
    ],
    tacticas: [
      "Revisar correos, circulares, reuniones, grupos internos e intranet mediante una matriz de comunicación.",
      "Crear un boletín interno mensual con información prioritaria, logros y próximos pasos.",
      "Implementar una dinámica de reconocimiento o participación para colaboradores."
    ],
    indicadores: ["Nivel de comprensión de mensajes", "Uso de canales internos", "Participación en actividades", "Satisfacción interna", "Frecuencia de comunicación"],
    instrumentos: ["Auditoría de comunicación", "Encuesta interna", "Entrevistas a colaboradores", "Matriz de canales", "Observación organizacional"]
  },
  "comunicacion_externa": {
    nombre: "Comunicación externa",
    organizaciones: ["fundacion","clinica","empresa","dependencia"],
    tema: "Mejora de la comunicación externa de {sujeto} para fortalecer su relación con públicos externos.",
    problema: "{sujeto} necesita mejorar la claridad, consistencia y pertinencia de sus mensajes externos para conectar mejor con sus públicos prioritarios.",
    objetivoGeneral: "Mejorar la comunicación externa de {sujeto} mediante estrategias que fortalezcan mensajes, canales y relación con públicos externos.",
    objetivos: [
      "Analizar los mensajes y canales externos actualmente utilizados por {sujeto}.",
      "Diseñar mensajes clave adaptados a públicos externos prioritarios.",
      "Proponer acciones de difusión que incrementen claridad y alcance de la comunicación externa."
    ],
    estrategias: [
      "Auditoría de comunicación externa.",
      "Diseño de mensajes clave por público.",
      "Difusión multicanal de información estratégica."
    ],
    tacticas: [
      "Revisar sitio web, redes, folletos, comunicados y materiales de atención externa.",
      "Crear una guía de mensajes clave para clientes, comunidad, aliados y medios.",
      "Publicar contenidos informativos y materiales de apoyo adaptados a cada canal."
    ],
    indicadores: ["Claridad del mensaje", "Alcance por canal", "Interacciones externas", "Consultas recibidas", "Percepción de utilidad de la información"],
    instrumentos: ["Análisis de contenido", "Encuesta de opinión", "Auditoría de canales", "Benchmarking", "Entrevistas"]
  },
  "relacion_medios": {
    nombre: "Relación con medios",
    organizaciones: ["proyecto_cultural","artista","empresa","institucion_educativa"],
    tema: "Fortalecimiento de la relación con medios de comunicación de {sujeto} para incrementar visibilidad pública.",
    problema: "{sujeto} cuenta con actividades o atributos de interés, pero su presencia en medios es limitada y no existe una gestión sistemática de prensa.",
    objetivoGeneral: "Fortalecer la relación de {sujeto} con medios de comunicación mediante estrategias de vocería, contenidos noticiosos y gestión de prensa.",
    objetivos: [
      "Identificar medios, periodistas y espacios informativos relevantes para {sujeto}.",
      "Diseñar materiales de prensa que comuniquen noticias, atributos y actividades de interés público.",
      "Gestionar oportunidades de difusión en medios locales o especializados."
    ],
    estrategias: [
      "Mapeo de medios y periodistas clave.",
      "Producción de materiales de prensa.",
      "Gestión activa de cobertura mediática."
    ],
    tacticas: [
      "Crear una base de datos de medios locales, secciones, periodistas y contactos relevantes.",
      "Redactar un comunicado de prensa y ficha informativa sobre una actividad o diferenciador.",
      "Enviar el material a medios seleccionados y dar seguimiento para entrevista o nota."
    ],
    indicadores: ["Número de medios contactados", "Menciones obtenidas", "Entrevistas gestionadas", "Tono de la cobertura", "Alcance estimado"],
    instrumentos: ["Clipping de medios", "Base de datos de medios", "Análisis de contenido", "Registro de seguimiento", "Guía de vocería"]
  },
  "crisis": {
    nombre: "Crisis",
    organizaciones: ["restaurante","clinica","dependencia","marca_personal"],
    tema: "Plan de manejo de crisis comunicacional para proteger la reputación de {sujeto}.",
    problema: "{sujeto} no cuenta con criterios claros de prevención, respuesta y seguimiento ante situaciones que puedan afectar su reputación o confianza pública.",
    objetivoGeneral: "Diseñar un plan de manejo de crisis comunicacional para fortalecer la capacidad de respuesta de {sujeto} ante contingencias reputacionales.",
    objetivos: [
      "Identificar riesgos y escenarios de crisis que podrían afectar la reputación de {sujeto}.",
      "Diseñar protocolos de respuesta, mensajes clave y responsables de comunicación.",
      "Establecer mecanismos de seguimiento para evaluar la atención y recuperación posterior a la crisis."
    ],
    estrategias: [
      "Diagnóstico de riesgos reputacionales.",
      "Protocolo de respuesta y vocería.",
      "Monitoreo y evaluación postcrisis."
    ],
    tacticas: [
      "Elaborar una matriz de riesgos con escenarios, públicos afectados y nivel de gravedad.",
      "Crear mensajes base, árbol de decisión y roles de respuesta para casos críticos.",
      "Registrar menciones, comentarios, tiempos de respuesta y evolución del sentimiento público."
    ],
    indicadores: ["Tiempo de respuesta", "Reducción de menciones negativas", "Claridad del mensaje", "Número de incidencias atendidas", "Recuperación de percepción"],
    instrumentos: ["Matriz de riesgos", "Social listening manual", "Análisis de sentimiento", "Guía de vocería", "Bitácora de crisis"]
  },
  "comunidad": {
    nombre: "Comunidad",
    organizaciones: ["asociacion","equipo_deportivo","cafeteria","proyecto_cultural"],
    tema: "Fortalecimiento de comunidad alrededor de {sujeto} mediante acciones de Relaciones Públicas participativas.",
    problema: "{sujeto} tiene oportunidad de fortalecer el sentido de pertenencia y participación de sus públicos mediante experiencias, comunicación cercana y vinculación comunitaria.",
    objetivoGeneral: "Fortalecer la comunidad de {sujeto} mediante estrategias de Relaciones Públicas orientadas a participación, pertenencia y vínculo con públicos clave.",
    objetivos: [
      "Identificar intereses, motivaciones y formas de participación de la comunidad vinculada a {sujeto}.",
      "Diseñar acciones de interacción que fortalezcan pertenencia y cercanía.",
      "Impulsar canales de comunicación que mantengan activa la relación con la comunidad."
    ],
    estrategias: [
      "Escucha y diagnóstico comunitario.",
      "Activaciones participativas de comunidad.",
      "Comunicación continua con públicos cercanos."
    ],
    tacticas: [
      "Aplicar una encuesta breve o sondeo para conocer intereses y expectativas de la comunidad.",
      "Organizar una actividad presencial o digital que convoque a los públicos alrededor de un interés común.",
      "Crear un calendario de contenidos, recordatorios y mensajes de seguimiento comunitario."
    ],
    indicadores: ["Participación en actividades", "Número de asistentes", "Interacciones comunitarias", "Recomendaciones", "Retención de públicos"],
    instrumentos: ["Encuesta de intereses", "Registro de asistencia", "Observación directa", "Análisis de redes", "Matriz de participación"]
  },
  "confianza": {
    nombre: "Confianza",
    organizaciones: ["fundacion","despacho","clinica","dependencia"],
    tema: "Fortalecimiento de la confianza hacia {sujeto} mediante comunicación transparente y evidencias de valor.",
    problema: "{sujeto} requiere fortalecer la confianza de sus públicos mediante mensajes claros, evidencia de resultados y comunicación transparente.",
    objetivoGeneral: "Fortalecer la confianza hacia {sujeto} mediante estrategias de Relaciones Públicas orientadas a transparencia, evidencia y cercanía con públicos clave.",
    objetivos: [
      "Analizar los factores que influyen en la confianza de los públicos hacia {sujeto}.",
      "Diseñar mensajes y evidencias que comuniquen transparencia, calidad y compromiso.",
      "Establecer canales de retroalimentación que permitan atender dudas y fortalecer la relación."
    ],
    estrategias: [
      "Diagnóstico de factores de confianza.",
      "Comunicación transparente basada en evidencias.",
      "Retroalimentación y atención a públicos clave."
    ],
    tacticas: [
      "Aplicar entrevistas o encuestas para identificar dudas, barreras y expectativas de confianza.",
      "Publicar testimonios, resultados, procesos o datos verificables en canales institucionales.",
      "Habilitar un formulario, buzón o dinámica de preguntas frecuentes para atender inquietudes."
    ],
    indicadores: ["Confianza percibida", "Consultas atendidas", "Comentarios positivos", "Testimonios obtenidos", "Percepción de transparencia"],
    instrumentos: ["Encuesta de confianza", "Entrevistas", "Análisis documental", "Matriz de preguntas frecuentes", "Registro de atención"]
  },
  "vinculacion": {
    nombre: "Vinculación institucional",
    organizaciones: ["laboratorio","universidad","equipo_deportivo","asociacion"],
    tema: "Fortalecimiento de la vinculación institucional de {sujeto} con actores estratégicos.",
    problema: "{sujeto} tiene potencial de fortalecer alianzas y relaciones estratégicas, pero requiere una gestión más ordenada de actores, beneficios y canales de vinculación.",
    objetivoGeneral: "Fortalecer la vinculación institucional de {sujeto} mediante estrategias de Relaciones Públicas orientadas a alianzas, colaboración y presencia estratégica.",
    objetivos: [
      "Identificar actores e instituciones con potencial de colaboración para {sujeto}.",
      "Diseñar propuestas de vinculación alineadas con intereses mutuos y beneficios compartidos.",
      "Gestionar acciones de acercamiento institucional que consoliden relaciones estratégicas."
    ],
    estrategias: [
      "Mapeo de aliados e instituciones estratégicas.",
      "Diseño de propuestas de colaboración.",
      "Gestión de acercamientos y seguimiento institucional."
    ],
    tacticas: [
      "Crear una matriz de actores con nivel de interés, influencia, posible aporte y contacto.",
      "Elaborar una carta o presentación institucional con beneficios de colaboración.",
      "Agendar reuniones, visitas o actividades piloto con actores seleccionados."
    ],
    indicadores: ["Número de aliados identificados", "Reuniones gestionadas", "Convenios o acuerdos", "Actividades colaborativas", "Seguimiento de relaciones"],
    instrumentos: ["Mapeo de actores", "Matriz de vinculación", "Entrevistas", "Registro de reuniones", "Ficha de aliados"]
  },
  "branding": {
    nombre: "Branding",
    organizaciones: ["emprendimiento","marca_local","artista","cafeteria"],
    tema: "Fortalecimiento del branding de {sujeto} mediante identidad, narrativa y comunicación consistente.",
    problema: "{sujeto} cuenta con una propuesta reconocible, pero requiere ordenar su identidad, mensajes y experiencia de marca para comunicar de forma más consistente.",
    objetivoGeneral: "Fortalecer el branding de {sujeto} mediante estrategias de Relaciones Públicas orientadas a identidad, narrativa y coherencia comunicacional.",
    objetivos: [
      "Identificar los atributos de identidad y diferenciación de {sujeto}.",
      "Diseñar una narrativa de marca coherente con sus públicos y propuesta de valor.",
      "Proponer acciones de comunicación que refuercen reconocimiento y consistencia de marca."
    ],
    estrategias: [
      "Diagnóstico de identidad y percepción de marca.",
      "Construcción de narrativa y mensajes de marca.",
      "Aplicación coherente de identidad en puntos de contacto."
    ],
    tacticas: [
      "Elaborar una matriz de atributos, tono, valores, personalidad y diferenciadores.",
      "Redactar mensajes clave, historia breve y promesa de marca para canales principales.",
      "Actualizar piezas de comunicación digital o presencial con lineamientos visuales y verbales básicos."
    ],
    indicadores: ["Coherencia de marca", "Reconocimiento de atributos", "Interacciones con contenidos", "Consistencia visual/verbal", "Recordación"],
    instrumentos: ["Auditoría de marca", "Benchmarking", "Encuesta de percepción", "Análisis de contenido", "Matriz de identidad"]
  },
  "lovemarks": {
    nombre: "Lovemarks",
    organizaciones: ["artista","equipo_deportivo","cafeteria","marca_local"],
    tema: "Construcción de vínculos emocionales entre {sujeto} y sus públicos mediante estrategias de Relaciones Públicas.",
    problema: "{sujeto} tiene oportunidad de fortalecer la conexión emocional, lealtad y sentido de pertenencia de sus públicos mediante experiencias y relatos significativos.",
    objetivoGeneral: "Fortalecer el vínculo emocional entre {sujeto} y sus públicos mediante estrategias de Relaciones Públicas orientadas a experiencia, identidad y pertenencia.",
    objetivos: [
      "Identificar elementos emocionales, simbólicos y experienciales asociados con {sujeto}.",
      "Diseñar acciones que generen cercanía, pertenencia y conexión afectiva con los públicos.",
      "Promover contenidos o experiencias que refuercen lealtad y recomendación."
    ],
    estrategias: [
      "Diagnóstico de vínculos emocionales y símbolos de marca.",
      "Experiencias memorables para públicos clave.",
      "Storytelling emocional y participación de comunidad."
    ],
    tacticas: [
      "Aplicar sondeos o entrevistas para detectar recuerdos, emociones y símbolos asociados con la marca.",
      "Diseñar una experiencia especial, encuentro, dinámica o ritual de comunidad.",
      "Publicar historias de clientes, seguidores o miembros que conecten emocionalmente con la marca."
    ],
    indicadores: ["Lealtad declarada", "Recomendaciones", "Participación en experiencias", "Comentarios emocionales", "Contenido generado por usuarios"],
    instrumentos: ["Entrevistas", "Encuesta de lealtad", "Análisis de comentarios", "Observación directa", "Registro de participación"]
  },
  "contenidos": {
    nombre: "Contenidos / storytelling",
    organizaciones: ["marca_personal","artista","cafeteria","emprendimiento"],
    tema: "Estrategia de contenidos y storytelling para fortalecer la comunicación de {sujeto}.",
    problema: "{sujeto} comunica de manera irregular o poco estratégica, por lo que requiere contenidos alineados con sus públicos, atributos y objetivos de Relaciones Públicas.",
    objetivoGeneral: "Diseñar una estrategia de contenidos y storytelling para {sujeto} que fortalezca su comunicación, visibilidad y conexión con públicos clave.",
    objetivos: [
      "Identificar temas, relatos y atributos relevantes para comunicar la propuesta de valor de {sujeto}.",
      "Diseñar una línea editorial alineada con públicos, canales y objetivos de comunicación.",
      "Proponer contenidos que generen interacción, comprensión y recordación."
    ],
    estrategias: [
      "Diagnóstico de contenidos actuales.",
      "Diseño de narrativa y línea editorial.",
      "Calendarización de contenidos estratégicos."
    ],
    tacticas: [
      "Analizar publicaciones previas para identificar temas, tono, formatos y respuesta del público.",
      "Crear pilares de contenido, mensajes clave y ejemplos de storytelling por canal.",
      "Elaborar un calendario mensual con formatos, fechas, responsables y llamados a la acción."
    ],
    indicadores: ["Frecuencia de publicación", "Alcance", "Interacciones", "Comentarios cualitativos", "Consistencia temática"],
    instrumentos: ["Análisis de contenido", "Matriz de contenidos", "Benchmarking", "Métricas de redes", "Calendario editorial"]
  },
  "eventos": {
    nombre: "Eventos y activaciones",
    organizaciones: ["equipo_deportivo","cafeteria","universidad","marca_local"],
    tema: "Diseño de eventos y activaciones de Relaciones Públicas para fortalecer la presencia de {sujeto}.",
    problema: "{sujeto} necesita generar experiencias presenciales o digitales que acerquen la organización a sus públicos y refuercen visibilidad, comunidad o posicionamiento.",
    objetivoGeneral: "Diseñar eventos y activaciones de Relaciones Públicas para {sujeto} que fortalezcan la interacción, visibilidad y vínculo con públicos clave.",
    objetivos: [
      "Identificar los intereses y expectativas de los públicos ante posibles eventos o activaciones.",
      "Diseñar una experiencia alineada con la identidad, objetivos y públicos de {sujeto}.",
      "Proponer mecanismos de difusión y evaluación para medir participación e impacto."
    ],
    estrategias: [
      "Diagnóstico de intereses y oportunidades de activación.",
      "Diseño de experiencia o evento estratégico.",
      "Difusión, ejecución y evaluación del evento."
    ],
    tacticas: [
      "Aplicar un sondeo breve para detectar temas, horarios, formatos y motivadores de asistencia.",
      "Diseñar una ficha del evento con objetivo, público, dinámica, recursos, responsables y mensaje clave.",
      "Crear piezas de difusión, registrar asistencia y aplicar una encuesta breve posterior."
    ],
    indicadores: ["Asistencia", "Participación", "Alcance de difusión", "Satisfacción del público", "Nuevos contactos generados"],
    instrumentos: ["Encuesta de intereses", "Ficha de evento", "Registro de asistencia", "Encuesta de satisfacción", "Matriz de evaluación"]
  },
  "fidelizacion": {
    nombre: "Fidelización",
    organizaciones: ["restaurante","clinica","cafeteria","despacho"],
    tema: "Estrategia de fidelización para fortalecer la relación de {sujeto} con sus públicos actuales.",
    problema: "{sujeto} cuenta con públicos actuales valiosos, pero requiere acciones sistemáticas para mantener relación, recompra, recomendación y satisfacción.",
    objetivoGeneral: "Fortalecer la fidelización de los públicos actuales de {sujeto} mediante estrategias de Relaciones Públicas orientadas a satisfacción, seguimiento y relación continua.",
    objetivos: [
      "Conocer el nivel de satisfacción, expectativas y motivos de permanencia de los públicos actuales.",
      "Diseñar acciones de seguimiento y reconocimiento que fortalezcan la relación con públicos actuales.",
      "Proponer mecanismos de medición para evaluar satisfacción, recomendación y continuidad."
    ],
    estrategias: [
      "Diagnóstico de satisfacción y expectativas.",
      "Programa de seguimiento y reconocimiento.",
      "Medición continua de fidelización."
    ],
    tacticas: [
      "Aplicar una encuesta breve de satisfacción y recomendación a clientes o usuarios actuales.",
      "Diseñar una tarjeta, mensaje, beneficio o dinámica de reconocimiento para públicos recurrentes.",
      "Crear una base de seguimiento con frecuencia de visita, comentarios, recomendaciones y oportunidades de mejora."
    ],
    indicadores: ["Satisfacción", "Recompra o retorno", "Recomendaciones", "Participación en programa", "Comentarios positivos"],
    instrumentos: ["Encuesta de satisfacción", "Registro de clientes recurrentes", "Entrevistas breves", "Matriz de seguimiento", "NPS adaptado"]
  }
};

function fillTemplate(text, org){
  return text
    .replaceAll("{sujeto}", org.sujeto)
    .replaceAll("{contexto}", org.contexto)
    .replaceAll("{publicos}", org.publicos)
    .replaceAll("{canal}", org.canal);
}

function buildCase(lineKey, orgKey){
  const line = lineas[lineKey];
  const org = organizaciones[orgKey];
  return {
    linea: line.nombre,
    organizacion: org.nombre,
    caso: org.caso,
    tema: fillTemplate(line.tema, org),
    problema: fillTemplate(line.problema, org),
    objetivoGeneral: fillTemplate(line.objetivoGeneral, org),
    objetivos: line.objetivos.map(x => fillTemplate(x, org)),
    estrategias: line.estrategias.map(x => fillTemplate(x, org)),
    tacticas: line.tacticas.map(x => fillTemplate(x, org)),
    indicadores: line.indicadores,
    instrumentos: line.instrumentos,
    publicos: org.publicos,
    canales: org.canal
  };
}

document.addEventListener("DOMContentLoaded", () => {
  const lineSelect = document.getElementById("lineaSelect");
  const orgSelect = document.getElementById("orgSelect");
  const result = document.getElementById("result");
  const empty = document.getElementById("emptyState");
  const clearBtn = document.getElementById("clearBtn");

  Object.entries(lineas).forEach(([key, line]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = line.nombre;
    lineSelect.appendChild(option);
  });

  lineSelect.addEventListener("change", () => {
    orgSelect.innerHTML = '<option value="">Selecciona una organización recomendada</option>';
    orgSelect.disabled = !lineSelect.value;
    if(lineSelect.value){
      lineas[lineSelect.value].organizaciones.forEach(orgKey => {
        const option = document.createElement("option");
        option.value = orgKey;
        option.textContent = organizaciones[orgKey].nombre;
        orgSelect.appendChild(option);
      });
    }
    renderResult();
  });

  orgSelect.addEventListener("change", renderResult);

  clearBtn.addEventListener("click", () => {
    lineSelect.value = "";
    orgSelect.innerHTML = '<option value="">Primero selecciona una línea</option>';
    orgSelect.disabled = true;
    renderResult();
  });

  function renderResult(){
    const lineKey = lineSelect.value;
    const orgKey = orgSelect.value;
    if(!lineKey || !orgKey){
      result.innerHTML = "";
      result.style.display = "none";
      empty.style.display = "block";
      return;
    }
    empty.style.display = "none";
    result.style.display = "block";
    const ex = buildCase(lineKey, orgKey);

    result.innerHTML = `
      <article class="result-card">
        <div class="result-head">
          <div class="mb-2">
            <span class="badge-soft"><i class="bi bi-bullseye"></i> ${ex.linea}</span>
            <span class="badge-soft"><i class="bi bi-building"></i> ${ex.organizacion}</span>
            <span class="badge-soft"><i class="bi bi-folder2-open"></i> ${ex.caso}</span>
          </div>
          <h2 class="h3 fw-black mb-2">${ex.tema}</h2>
          <p class="mb-0 text-white-50">Ejemplo sintetizado con alineación objetivo–estrategia–táctica.</p>
        </div>
        <div class="result-body" id="copyContent">
          <div class="row g-3 mb-4">
            <div class="col-lg-6">
              <div class="info-box">
                <h5>Problema de intervención</h5>
                <p class="mb-0">${ex.problema}</p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="info-box">
                <h5>Objetivo general</h5>
                <p class="mb-0">${ex.objetivoGeneral}</p>
              </div>
            </div>
          </div>

          <h3 class="h4 fw-bold text-success mb-3">Alineación central del protocolo</h3>
          <div class="table-responsive mb-4">
            <table class="alignment-table">
              <thead>
                <tr>
                  <th>Objetivo específico</th>
                  <th>Estrategia alineada</th>
                  <th>Táctica alineada</th>
                </tr>
              </thead>
              <tbody>
                ${ex.objetivos.map((obj, i) => `
                  <tr>
                    <td><span class="align-number">${i+1}</span>${obj}</td>
                    <td><span class="align-number">${i+1}</span>${ex.estrategias[i]}</td>
                    <td><span class="align-number">${i+1}</span>${ex.tacticas[i]}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>

          <div class="row g-3">
            <div class="col-lg-6">
              <div class="info-box">
                <h5>Públicos sugeridos</h5>
                <p class="mb-0">${ex.publicos}</p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="info-box">
                <h5>Canales sugeridos</h5>
                <p class="mb-0">${ex.canales}</p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="info-box">
                <h5>Indicadores</h5>
                <ul class="tool-list">${ex.indicadores.map(x => `<li>${x}</li>`).join("")}</ul>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="info-box">
                <h5>Instrumentos o técnicas de diagnóstico</h5>
                <ul class="tool-list">${ex.instrumentos.map(x => `<li>${x}</li>`).join("")}</ul>
              </div>
            </div>
          </div>

          <div class="alert alert-warning mt-4 mb-0">
            <strong>Uso académico:</strong> este ejemplo es una guía de apoyo. Debe adaptarse al caso real, contexto, públicos y alcance del proyecto. No debe copiarse de manera literal.
          </div>
        </div>
      </article>
    `;
    document.getElementById("copyBtn").disabled = false;
  }
});
