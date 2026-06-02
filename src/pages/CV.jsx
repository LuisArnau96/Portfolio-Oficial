import { useLang } from '../context/LanguageContext'
import s from '../styles/CV.module.css'

const content = {
  es: {
    role: 'Product Designer · UX/UI',
    profile: 'Diseñador de producto con formación en ingeniería y un Máster en UX/UI. Combino pensamiento analítico con sensibilidad visual para diseñar experiencias digitales claras, funcionales y centradas en las personas. Experiencia trabajando tanto en proyectos de portfolio como con clientes reales.',
    sections: {
      experience: 'Experiencia',
      education: 'Formación',
      projects: 'Proyectos de diseño',
      tools: 'Herramientas',
    },
    experience: [
      {
        role: 'Diseñador UX/UI — Freelance',
        company: 'Estudio Cactus',
        period: '2025',
        desc: 'Diseño de mapa interactivo 3D para navegación del estudio. Proyecto real de cliente.',
      },
      {
        role: 'Diseñador Gráfico',
        company: 'Esmalglass',
        period: 'Jun 2021 – Jul 2022',
        desc: 'Diseño y adaptación de productos para impresión Inkjet. Gestión de flujos de color y composiciones decorativas para aplicaciones cerámicas.',
      },
      {
        role: 'Ingeniero de Producción',
        company: 'SCN (Stadler Rail)',
        period: 'May 2024 – Actualidad',
        desc: 'Análisis de procesos productivos, coordinación interdepartamental y documentación técnica.',
      },
      {
        role: 'Ingeniero de Producción',
        company: 'Tecnobit – Grupo Oesía',
        period: 'Oct 2023 – Abr 2024',
        desc: 'Optimización de flujos de trabajo mediante SAP. Soporte en análisis de incidencias y mejora de procesos.',
      },
    ],
    education: [
      { title: 'Máster en UX/UI Design', school: 'Nuclio Digital School', period: '2024' },
      { title: 'Grado en Ingeniería', school: 'Universidad Politécnica de Valencia', period: '2017 – 2022' },
    ],
    projects: [
      { name: 'LoLocal', desc: 'App marketplace para comercios locales — UX Research, UI Design, Branding' },
      { name: 'Remitly', desc: 'Rediseño de flujos de la app fintech — UX Research, UI Design' },
      { name: 'PedidosYA', desc: 'Nueva funcionalidad para plataforma de delivery — UX/UI' },
      { name: 'Telepianxs', desc: 'Onboarding para comunidad de salud mental — UX/UI' },
      { name: 'Estudio Cactus', desc: 'Mapa interactivo 3D para navegación de estudio — Cliente real' },
    ],
    tools: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'InDesign', 'Framer', 'WordPress', 'Notion', 'HTML / CSS'],
    portfolio: 'Portfolio',
    print: 'Imprimir / Guardar PDF',
    back: '← Volver',
  },
  en: {
    role: 'Product Designer · UX/UI',
    profile: 'Product designer with an engineering background and a Master\'s in UX/UI. I combine analytical thinking with visual sensibility to design clear, functional, and human-centred digital experiences. Experience working on both portfolio projects and real client work.',
    sections: {
      experience: 'Experience',
      education: 'Education',
      projects: 'Design projects',
      tools: 'Tools',
    },
    experience: [
      {
        role: 'UX/UI Designer — Freelance',
        company: 'Estudio Cactus',
        period: '2025',
        desc: 'Designed an interactive 3D map for studio navigation. Real client project.',
      },
      {
        role: 'Graphic Designer',
        company: 'Esmalglass',
        period: 'Jun 2021 – Jul 2022',
        desc: 'Product and format design for Inkjet printing. Colour flow management and decorative compositions for ceramic applications.',
      },
      {
        role: 'Production Engineer',
        company: 'SCN (Stadler Rail)',
        period: 'May 2024 – Present',
        desc: 'Production process analysis, cross-department coordination and technical documentation.',
      },
      {
        role: 'Production Engineer',
        company: 'Tecnobit – Grupo Oesía',
        period: 'Oct 2023 – Apr 2024',
        desc: 'Workflow optimisation using SAP. Support on incident analysis and process improvement.',
      },
    ],
    education: [
      { title: 'Master\'s in UX/UI Design', school: 'Nuclio Digital School', period: '2024' },
      { title: 'Engineering Degree', school: 'Universitat Politècnica de València', period: '2017 – 2022' },
    ],
    projects: [
      { name: 'LoLocal', desc: 'Marketplace app for local businesses — UX Research, UI Design, Branding' },
      { name: 'Remitly', desc: 'Fintech app flow redesign — UX Research, UI Design' },
      { name: 'PedidosYA', desc: 'New feature for delivery platform — UX/UI' },
      { name: 'Telepianxs', desc: 'Mental health community onboarding — UX/UI' },
      { name: 'Estudio Cactus', desc: '3D interactive map for studio navigation — Real client' },
    ],
    tools: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'InDesign', 'Framer', 'WordPress', 'Notion', 'HTML / CSS'],
    portfolio: 'Portfolio',
    print: 'Print / Save as PDF',
    back: '← Back',
  },
}

export default function CV() {
  const { lang, toggle } = useLang()
  const c = content[lang]

  return (
    <div className={s.page}>
      {/* Controls — hidden on print */}
      <div className={s.controls}>
        <a href="#/" className={s.backBtn}>{c.back}</a>
        <div className={s.controlsRight}>
          <div className={s.langToggle}>
            <button className={`${s.langBtn} ${lang === 'es' ? s.active : ''}`} onClick={() => lang !== 'es' && toggle()}>ES</button>
            <span>/</span>
            <button className={`${s.langBtn} ${lang === 'en' ? s.active : ''}`} onClick={() => lang !== 'en' && toggle()}>EN</button>
          </div>
          <button className={s.printBtn} onClick={() => window.print()}>{c.print}</button>
        </div>
      </div>

      {/* CV document */}
      <div className={s.doc}>
        {/* Header */}
        <header className={s.header}>
          <div>
            <h1 className={s.name}>Luis Arnau Rodríguez</h1>
            <p className={s.role}>{c.role}</p>
          </div>
          <div className={s.contact}>
            <span>luisarnau9@gmail.com</span>
            <span>linkedin.com/in/luis-arnau</span>
            <span>luis-arnau.vercel.app</span>
            <span>Sagunto, Valencia</span>
          </div>
        </header>

        <div className={s.divider} />

        {/* Profile */}
        <section className={s.section}>
          <p className={s.profileText}>{c.profile}</p>
        </section>

        <div className={s.divider} />

        {/* Two columns */}
        <div className={s.cols}>
          {/* Left column */}
          <div className={s.colMain}>
            {/* Experience */}
            <section className={s.section}>
              <h2 className={s.sectionTitle}>{c.sections.experience}</h2>
              {c.experience.map((exp, i) => (
                <div key={i} className={s.entry}>
                  <div className={s.entryHeader}>
                    <span className={s.entryRole}>{exp.role}</span>
                    <span className={s.entryPeriod}>{exp.period}</span>
                  </div>
                  <span className={s.entryCompany}>{exp.company}</span>
                  <p className={s.entryDesc}>{exp.desc}</p>
                </div>
              ))}
            </section>

            {/* Projects */}
            <section className={s.section}>
              <h2 className={s.sectionTitle}>{c.sections.projects}</h2>
              {c.projects.map((p, i) => (
                <div key={i} className={s.projectEntry}>
                  <span className={s.projectName}>{p.name}</span>
                  <span className={s.projectDesc}>{p.desc}</span>
                </div>
              ))}
            </section>
          </div>

          {/* Right column */}
          <div className={s.colSide}>
            {/* Education */}
            <section className={s.section}>
              <h2 className={s.sectionTitle}>{c.sections.education}</h2>
              {c.education.map((edu, i) => (
                <div key={i} className={s.entry}>
                  <span className={s.entryRole}>{edu.title}</span>
                  <span className={s.entryCompany}>{edu.school}</span>
                  <span className={s.entryPeriod}>{edu.period}</span>
                </div>
              ))}
            </section>

            {/* Tools */}
            <section className={s.section}>
              <h2 className={s.sectionTitle}>{c.sections.tools}</h2>
              <ul className={s.toolsList}>
                {c.tools.map((tool, i) => (
                  <li key={i} className={s.toolItem}>{tool}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
