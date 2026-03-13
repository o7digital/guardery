import { useEffect, useState } from 'react';

const DEFAULT_LANG = 'es';
const LANGS = /** @type {const} */ (['fr', 'es', 'en']);

const COPY = {
  fr: {
    brand: {
      name: 'Guardery',
      tagline: 'Garderie & Éveil',
    },
    nav: {
      about: 'À propos',
      programs: 'Programmes',
      parents: 'Parents',
      contact: 'Contact',
    },
    header: {
      whatsapp: 'WhatsApp',
      cta: 'Inscription',
      langLabel: 'Langue',
    },
    hero: {
      pill: 'Garderie chaleureuse et pensée pour les familles',
      title: 'Un lieu doux et stimulant pour bien grandir.',
      subtitle:
        "Guardery accueille les enfants dans un environnement bienveillant où l'éveil et la sérénité des parents avancent ensemble, chaque jour.",
      primaryCta: 'Planifier une visite',
      secondaryCta: 'Voir les programmes',
    },
    rightCards: {
      availability: 'Places disponibles',
      availabilityText: 'Inscriptions ouvertes pour la prochaine rentrée.',
      cards: [
        {
          icon: '🍼',
          title: 'Tout-petits',
          text: 'Rythme respecté, soins attentifs et environnement rassurant.',
        },
        {
          icon: '📚',
          title: 'Éveil quotidien',
          text: 'Lecture, jeux éducatifs, découverte et créativité.',
        },
        {
          icon: '🎵',
          title: 'Activités ludiques',
          text: 'Musique, motricité, ateliers et moments joyeux.',
        },
        {
          icon: '🤍',
          title: 'Confiance parentale',
          text: 'Une relation simple, humaine et transparente avec les familles.',
        },
      ],
    },
    about: {
      eyebrow: 'À propos',
      title:
        'Une garderie conçue pour rassurer les parents et faire rayonner les enfants.',
      text:
        'Nous créons un cadre tendre, structuré et rassurant où chaque enfant peut explorer, jouer, apprendre et développer sa confiance dans le respect de sa personnalité.',
      features: [
        {
          icon: '🧸',
          title: 'Encadrement bienveillant',
          text: 'Une équipe attentive accompagne chaque enfant avec douceur, sérénité et respect de son rythme.',
        },
        {
          icon: '🎨',
          title: 'Éveil & créativité',
          text: 'Ateliers ludiques, motricité, lecture, musique et activités adaptées selon l’âge.',
        },
        {
          icon: '🌿',
          title: 'Cadre sain et rassurant',
          text: 'Un environnement propre, lumineux et structuré pour favoriser le bien-être au quotidien.',
        },
      ],
    },
    programs: {
      eyebrow: 'Programmes',
      title: 'Des parcours adaptés à chaque étape de l’enfance.',
      more: 'En savoir plus',
      items: [
        {
          title: 'Nursery',
          age: '3 à 18 mois',
          text: 'Un espace cocon pour les tout-petits avec accompagnement individualisé, temps calmes et éveil sensoriel.',
        },
        {
          title: 'Toddler',
          age: '18 mois à 3 ans',
          text: 'Découverte, motricité, premiers apprentissages, socialisation et activités joyeuses au quotidien.',
        },
        {
          title: 'Pré-maternelle',
          age: '3 à 5 ans',
          text: 'Une préparation douce à l’école grâce à des jeux éducatifs, l’autonomie et l’expression créative.',
        },
      ],
    },
    parents: {
      eyebrow: 'Pour les parents',
      title: 'Une vraie tranquillité d’esprit au quotidien.',
      highlights: [
        'Petits groupes pour une attention plus personnalisée',
        'Communication simple et transparente avec les parents',
        'Activités d’éveil, créativité, lecture et motricité',
        'Ambiance chaleureuse, rassurante et professionnelle',
      ],
      quick: {
        eyebrow: 'Infos rapides',
        hoursTitle: 'Horaires',
        hoursText: 'Du lundi au vendredi, de 7h30 à 18h30.',
        agesTitle: 'Âges accueillis',
        agesText: 'De 3 mois à 5 ans selon les groupes.',
        visitsTitle: 'Visites',
        visitsText: 'Sur rendez-vous pour découvrir les espaces et l’équipe.',
        admissionTitle: 'Admission',
        admissionText:
          'Pré-inscription simple avec échange personnalisé avec les familles.',
      },
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Planifiez une visite et découvrez Guardery.',
      text:
        'Rencontrez l’équipe, visitez les espaces et échangez avec nous sur les besoins de votre enfant.',
      details: [
        '📍 Adresse de la garderie',
        '📞 +52 XX XX XX XX XX',
        '✉️ contact@guardery.com',
        '💬 WhatsApp disponible pour les demandes rapides',
      ],
      form: {
        parentName: 'Nom du parent',
        email: 'Email',
        phone: 'Téléphone',
        childAge: 'Âge de l’enfant',
        message: 'Votre message',
        send: 'Envoyer la demande',
        whatsapp: 'Contacter par WhatsApp',
      },
    },
    footer: {
      title: 'Guardery',
      subtitle: 'Garderie, éveil et sérénité pour les familles.',
      legal: 'Mentions légales',
    },
  },
  es: {
    brand: { name: 'Guardery', tagline: 'Guardería & Estimulación' },
    nav: { about: 'Sobre nosotros', programs: 'Programas', parents: 'Familias', contact: 'Contacto' },
    header: { whatsapp: 'WhatsApp', cta: 'Inscripción', langLabel: 'Idioma' },
    hero: {
      pill: 'Guardería cálida y pensada para las familias',
      title: 'Un lugar suave y estimulante para crecer con alegría.',
      subtitle:
        'En Guardery acompañamos a cada niño en un entorno cercano donde la estimulación y la tranquilidad de las familias avanzan juntas, día a día.',
      primaryCta: 'Agendar una visita',
      secondaryCta: 'Ver programas',
    },
    rightCards: {
      availability: 'Cupos disponibles',
      availabilityText: 'Inscripciones abiertas para el próximo ciclo.',
      cards: [
        { icon: '🍼', title: 'Bebés', text: 'Ritmos respetados, cuidados atentos y un entorno acogedor.' },
        { icon: '📚', title: 'Estimulación diaria', text: 'Lectura, juegos educativos, descubrimiento y creatividad.' },
        { icon: '🎵', title: 'Actividades lúdicas', text: 'Música, motricidad, talleres y momentos felices.' },
        { icon: '🤍', title: 'Confianza familiar', text: 'Una relación simple, humana y transparente con las familias.' },
      ],
    },
    about: {
      eyebrow: 'Sobre nosotros',
      title: 'Una guardería diseñada para dar calma a las familias y hacer brillar a los niños.',
      text:
        'Creamos un marco tierno, estructurado y acogedor donde cada niño puede explorar, jugar, aprender y desarrollar su confianza respetando su personalidad.',
      features: [
        { icon: '🧸', title: 'Acompañamiento cercano', text: 'Un equipo atento acompaña a cada niño con cariño, calma y respeto por su ritmo.' },
        { icon: '🎨', title: 'Estimulación & creatividad', text: 'Talleres, motricidad, lectura, música y actividades adaptadas por edad.' },
        { icon: '🌿', title: 'Entorno sano', text: 'Un espacio limpio, luminoso y ordenado para favorecer el bienestar diario.' },
      ],
    },
    programs: {
      eyebrow: 'Programas',
      title: 'Recorridos adaptados a cada etapa de la infancia.',
      more: 'Saber más',
      items: [
        { title: 'Nursery', age: '3 a 18 meses', text: 'Un espacio tipo nido con atención individual, tiempos tranquilos y estimulación sensorial.' },
        { title: 'Toddler', age: '18 meses a 3 años', text: 'Descubrimiento, motricidad, primeros aprendizajes, socialización y actividades alegres.' },
        { title: 'Preescolar', age: '3 a 5 años', text: 'Preparación suave para la escuela con juegos educativos, autonomía y expresión creativa.' },
      ],
    },
    parents: {
      eyebrow: 'Para familias',
      title: 'Tranquilidad real en el día a día.',
      highlights: [
        'Grupos pequeños para una atención más personalizada',
        'Comunicación simple y transparente con las familias',
        'Estimulación, creatividad, lectura y motricidad',
        'Ambiente cálido, acogedor y profesional',
      ],
      quick: {
        eyebrow: 'Info rápida',
        hoursTitle: 'Horarios',
        hoursText: 'Lunes a viernes, de 7:30 a 18:30.',
        agesTitle: 'Edades',
        agesText: 'De 3 meses a 5 años según el grupo.',
        visitsTitle: 'Visitas',
        visitsText: 'Con cita para conocer los espacios y al equipo.',
        admissionTitle: 'Admisión',
        admissionText: 'Preinscripción simple con una charla personalizada con la familia.',
      },
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Agenda una visita y descubre Guardery.',
      text: 'Conoce al equipo, visita los espacios y conversemos sobre las necesidades de tu hijo.',
      details: [
        '📍 Dirección de la guardería',
        '📞 +52 XX XX XX XX XX',
        '✉️ contact@guardery.com',
        '💬 WhatsApp disponible para consultas rápidas',
      ],
      form: {
        parentName: 'Nombre del padre/madre',
        email: 'Email',
        phone: 'Teléfono',
        childAge: 'Edad del niño',
        message: 'Tu mensaje',
        send: 'Enviar solicitud',
        whatsapp: 'Contactar por WhatsApp',
      },
    },
    footer: { title: 'Guardery', subtitle: 'Guardería, estimulación y tranquilidad para las familias.', legal: 'Aviso legal' },
  },
  en: {
    brand: { name: 'Guardery', tagline: 'Daycare & Early Learning' },
    nav: { about: 'About', programs: 'Programs', parents: 'For Parents', contact: 'Contact' },
    header: { whatsapp: 'WhatsApp', cta: 'Enroll', langLabel: 'Language' },
    hero: {
      pill: 'A warm daycare designed for families',
      title: 'A gentle, inspiring place to grow with confidence.',
      subtitle:
        'At Guardery, children thrive in a caring environment where early learning and parents’ peace of mind go hand in hand, every day.',
      primaryCta: 'Schedule a visit',
      secondaryCta: 'See programs',
    },
    rightCards: {
      availability: 'Open spots',
      availabilityText: 'Enrollment open for the next term.',
      cards: [
        { icon: '🍼', title: 'Infants', text: 'Respectful routines, attentive care, and a cozy environment.' },
        { icon: '📚', title: 'Daily learning', text: 'Stories, educational play, discovery, and creativity.' },
        { icon: '🎵', title: 'Playful activities', text: 'Music, movement, workshops, and joyful moments.' },
        { icon: '🤍', title: 'Parent confidence', text: 'Simple, human, and transparent communication with families.' },
      ],
    },
    about: {
      eyebrow: 'About',
      title: 'A daycare built to reassure parents and help children shine.',
      text:
        'We create a gentle, structured, welcoming setting where every child can explore, play, learn, and build confidence while honoring their personality.',
      features: [
        { icon: '🧸', title: 'Caring guidance', text: 'A thoughtful team supports each child with kindness, calm, and respect for their pace.' },
        { icon: '🎨', title: 'Learning & creativity', text: 'Workshops, movement, reading, music, and age-adapted activities.' },
        { icon: '🌿', title: 'Healthy environment', text: 'A clean, bright, organized space that supports everyday wellbeing.' },
      ],
    },
    programs: {
      eyebrow: 'Programs',
      title: 'Paths tailored to every stage of childhood.',
      more: 'Learn more',
      items: [
        { title: 'Nursery', age: '3 to 18 months', text: 'A cozy nest for little ones with individualized care, calm moments, and sensory learning.' },
        { title: 'Toddler', age: '18 months to 3 years', text: 'Discovery, movement, early skills, social play, and joyful daily activities.' },
        { title: 'Pre-K', age: '3 to 5 years', text: 'A gentle school readiness approach through educational play, autonomy, and creative expression.' },
      ],
    },
    parents: {
      eyebrow: 'For parents',
      title: 'Real peace of mind, every day.',
      highlights: [
        'Small groups for more individualized attention',
        'Simple, transparent communication with families',
        'Early learning, creativity, reading, and movement',
        'A warm, welcoming, professional atmosphere',
      ],
      quick: {
        eyebrow: 'Quick info',
        hoursTitle: 'Hours',
        hoursText: 'Monday to Friday, 7:30am to 6:30pm.',
        agesTitle: 'Ages',
        agesText: 'From 3 months to 5 years depending on the group.',
        visitsTitle: 'Visits',
        visitsText: 'By appointment to meet the team and see the spaces.',
        admissionTitle: 'Enrollment',
        admissionText: 'A simple pre-enrollment with a personalized conversation with the family.',
      },
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Schedule a visit and discover Guardery.',
      text: 'Meet the team, tour the spaces, and tell us about your child’s needs.',
      details: [
        '📍 Daycare address',
        '📞 +52 XX XX XX XX XX',
        '✉️ contact@guardery.com',
        '💬 WhatsApp available for quick questions',
      ],
      form: {
        parentName: 'Parent name',
        email: 'Email',
        phone: 'Phone',
        childAge: "Child's age",
        message: 'Your message',
        send: 'Send request',
        whatsapp: 'Message on WhatsApp',
      },
    },
    footer: { title: 'Guardery', subtitle: 'Daycare, early learning, and peace of mind for families.', legal: 'Legal notice' },
  },
};

function normalizeLang(lang) {
  return LANGS.includes(lang) ? lang : DEFAULT_LANG;
}

function getInitialLang() {
  if (typeof window === 'undefined') return DEFAULT_LANG;
  const saved = window.localStorage.getItem('guardery.lang');
  if (saved) return normalizeLang(saved);
  const browser = (window.navigator.language || '').slice(0, 2).toLowerCase();
  return normalizeLang(browser);
}

export default function GuarderyLandingPage() {
  const [lang, setLang] = useState(getInitialLang);
  const t = COPY[lang] ?? COPY[DEFAULT_LANG];

  useEffect(() => {
    window.localStorage.setItem('guardery.lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen bg-[#fffaf8] text-slate-800">
      <header className="sticky top-0 z-40 border-b border-rose-100/80 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-300 via-pink-300 to-amber-200 text-xl shadow-md shadow-rose-100">
              🐻
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-400">{t.brand.name}</p>
              <h1 className="text-xl font-bold tracking-tight text-slate-900">
                {t.brand.tagline}
              </h1>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#about" className="transition hover:text-rose-500">
              {t.nav.about}
            </a>
            <a href="#programs" className="transition hover:text-rose-500">
              {t.nav.programs}
            </a>
            <a href="#parents" className="transition hover:text-rose-500">
              {t.nav.parents}
            </a>
            <a href="#contact" className="transition hover:text-rose-500">
              {t.nav.contact}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-rose-200 px-4 py-2 text-sm font-semibold text-rose-500 transition hover:bg-rose-50 md:inline-flex">
              {t.header.whatsapp}
            </button>
            <label className="hidden items-center gap-2 rounded-full border border-rose-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm md:inline-flex">
              <span className="text-rose-500">{t.header.langLabel}</span>
              <select
                className="cursor-pointer bg-transparent outline-none"
                value={lang}
                onChange={(e) => setLang(normalizeLang(e.target.value))}
                aria-label={t.header.langLabel}
              >
                <option value="fr">FR</option>
                <option value="es">ES</option>
                <option value="en">EN</option>
              </select>
            </label>
            <a
              href="#contact"
              className="rounded-full bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rose-200 transition hover:bg-rose-600"
            >
              {t.header.cta}
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-amber-50 to-sky-100" />
          <div className="absolute -left-16 top-12 h-64 w-64 rounded-full bg-pink-200/50 blur-3xl" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div>
              <span className="inline-flex rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-sm font-medium text-rose-500 shadow-sm">
                {t.hero.pill}
              </span>

              <h2 className="mt-6 max-w-2xl text-5xl font-black leading-tight tracking-tight text-slate-900 lg:text-6xl">
                {t.hero.title}
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                {t.hero.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-200 transition hover:bg-rose-600"
                >
                  {t.hero.primaryCta}
                </a>
                <a
                  href="#programs"
                  className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-rose-300 hover:text-rose-500"
                >
                  {t.hero.secondaryCta}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] bg-white p-4 shadow-2xl shadow-rose-100">
                <div className="overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-rose-50 via-amber-50 to-sky-50">
                  <div className="grid min-h-[560px] grid-rows-[1fr_auto]">
                    <div className="relative flex items-end p-8">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.95),_rgba(255,255,255,0.15))]" />
                      <div className="relative grid w-full gap-4 sm:grid-cols-2">
                        {t.rightCards.cards.map((card) => (
                          <div
                            key={card.title}
                            className="rounded-3xl bg-white/85 p-5 shadow-sm backdrop-blur-sm"
                          >
                            <div className="text-3xl">{card.icon}</div>
                            <p className="mt-3 font-bold text-slate-900">
                              {card.title}
                            </p>
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                              {card.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-rose-500 p-6 text-white">
                      <p className="text-sm uppercase tracking-[0.2em] text-rose-100">
                        {t.rightCards.availability}
                      </p>
                      <p className="mt-2 text-2xl font-bold leading-tight">
                        {t.rightCards.availabilityText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-400">
                {t.about.eyebrow}
              </p>
              <h3 className="mt-4 text-4xl font-black tracking-tight text-slate-900">
                {t.about.title}
              </h3>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                {t.about.text}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {t.about.features.map((item, index) => (
                <div
                  key={item.title}
                  className={`rounded-[1.75rem] border border-rose-100 bg-white p-6 shadow-sm ${
                    index === 2 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="mb-4 inline-flex rounded-2xl bg-rose-50 p-3 text-2xl">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h4>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="programs" className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-400">
                {t.programs.eyebrow}
              </p>
              <h3 className="mt-4 text-4xl font-black tracking-tight text-slate-900">
                {t.programs.title}
              </h3>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {t.programs.items.map((program) => (
                <div
                  key={program.title}
                  className="rounded-[2rem] border border-slate-100 bg-[#fffaf7] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
                    {program.age}
                  </div>
                  <h4 className="mt-5 text-2xl font-bold text-slate-900">
                    {program.title}
                  </h4>
                  <p className="mt-4 leading-7 text-slate-600">
                    {program.text}
                  </p>
                  <button className="mt-6 rounded-full border border-rose-200 px-5 py-2.5 text-sm font-semibold text-rose-500 transition hover:bg-rose-500 hover:text-white">
                    {t.programs.more}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="parents" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2.5rem] bg-gradient-to-r from-rose-500 to-pink-400 px-8 py-12 text-white shadow-2xl shadow-rose-100 lg:px-12">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-100">
                {t.parents.eyebrow}
              </p>
              <h3 className="mt-4 text-4xl font-black tracking-tight">
                {t.parents.title}
              </h3>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {t.parents.highlights.map((item) => (
                  <div key={item} className="rounded-3xl bg-white/15 p-5 backdrop-blur-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-rose-100 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-400">
                {t.parents.quick.eyebrow}
              </p>
              <div className="mt-6 space-y-5 text-slate-600">
                <div>
                  <p className="font-semibold text-slate-900">{t.parents.quick.hoursTitle}</p>
                  <p className="mt-1">{t.parents.quick.hoursText}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{t.parents.quick.agesTitle}</p>
                  <p className="mt-1">{t.parents.quick.agesText}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{t.parents.quick.visitsTitle}</p>
                  <p className="mt-1">{t.parents.quick.visitsText}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{t.parents.quick.admissionTitle}</p>
                  <p className="mt-1">{t.parents.quick.admissionText}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-400">
                {t.contact.eyebrow}
              </p>
              <h3 className="mt-4 text-4xl font-black tracking-tight text-slate-900">
                {t.contact.title}
              </h3>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                {t.contact.text}
              </p>

              <div className="mt-8 space-y-4 text-slate-600">
                {t.contact.details.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-100 bg-[#fffaf7] p-8 shadow-sm">
              <div className="grid gap-4">
                <input
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-rose-300"
                  placeholder={t.contact.form.parentName}
                />
                <input
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-rose-300"
                  placeholder={t.contact.form.email}
                />
                <input
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-rose-300"
                  placeholder={t.contact.form.phone}
                />
                <input
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-rose-300"
                  placeholder={t.contact.form.childAge}
                />
                <textarea
                  className="min-h-[140px] rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-rose-300"
                  placeholder={t.contact.form.message}
                />
                <div className="flex flex-wrap gap-3">
                  <button className="rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-200 transition hover:bg-rose-600">
                    {t.contact.form.send}
                  </button>
                  <button className="rounded-full border border-rose-200 px-6 py-3 text-sm font-semibold text-rose-500 transition hover:bg-rose-50">
                    {t.contact.form.whatsapp}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-rose-100 bg-[#fff6f3]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-lg font-bold text-slate-900">{t.footer.title}</p>
            <p className="mt-1 text-sm text-slate-500">
              {t.footer.subtitle}
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-500">
            <a href="#about" className="hover:text-rose-500">
              {t.nav.about}
            </a>
            <a href="#programs" className="hover:text-rose-500">
              {t.nav.programs}
            </a>
            <a href="#contact" className="hover:text-rose-500">
              {t.nav.contact}
            </a>
            <a href="#" className="hover:text-rose-500">
              {t.footer.legal}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
