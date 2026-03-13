export default function GuarderyLandingPage() {
  const features = [
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
  ];

  const programs = [
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
  ];

  const highlights = [
    'Petits groupes pour une attention plus personnalisée',
    'Communication simple et transparente avec les parents',
    'Activités d’éveil, créativité, lecture et motricité',
    'Ambiance chaleureuse, rassurante et professionnelle',
  ];

  return (
    <div className="min-h-screen bg-[#fffaf8] text-slate-800">
      <header className="sticky top-0 z-40 border-b border-rose-100/80 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-300 via-pink-300 to-amber-200 text-xl shadow-md shadow-rose-100">
              🐻
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-400">
                Guardery
              </p>
              <h1 className="text-xl font-bold tracking-tight text-slate-900">
                Garderie & Éveil
              </h1>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#about" className="transition hover:text-rose-500">
              À propos
            </a>
            <a href="#programs" className="transition hover:text-rose-500">
              Programmes
            </a>
            <a href="#parents" className="transition hover:text-rose-500">
              Parents
            </a>
            <a href="#contact" className="transition hover:text-rose-500">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-rose-200 px-4 py-2 text-sm font-semibold text-rose-500 transition hover:bg-rose-50 md:inline-flex">
              WhatsApp
            </button>
            <a
              href="#contact"
              className="rounded-full bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rose-200 transition hover:bg-rose-600"
            >
              Inscription
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
                Garderie chaleureuse et pensée pour les familles
              </span>

              <h2 className="mt-6 max-w-2xl text-5xl font-black leading-tight tracking-tight text-slate-900 lg:text-6xl">
                Un lieu doux et stimulant pour bien grandir.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Guardery accueille les enfants dans un environnement
                bienveillant où l&apos;éveil et la sérénité des parents avancent
                ensemble, chaque jour.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-200 transition hover:bg-rose-600"
                >
                  Planifier une visite
                </a>
                <a
                  href="#programs"
                  className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-rose-300 hover:text-rose-500"
                >
                  Voir les programmes
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
                        <div className="rounded-3xl bg-white/85 p-5 shadow-sm backdrop-blur-sm">
                          <div className="text-3xl">🍼</div>
                          <p className="mt-3 font-bold text-slate-900">
                            Tout-petits
                          </p>
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            Rythme respecté, soins attentifs et environnement
                            rassurant.
                          </p>
                        </div>
                        <div className="rounded-3xl bg-white/85 p-5 shadow-sm backdrop-blur-sm">
                          <div className="text-3xl">📚</div>
                          <p className="mt-3 font-bold text-slate-900">
                            Éveil quotidien
                          </p>
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            Lecture, jeux éducatifs, découverte et créativité.
                          </p>
                        </div>
                        <div className="rounded-3xl bg-white/85 p-5 shadow-sm backdrop-blur-sm">
                          <div className="text-3xl">🎵</div>
                          <p className="mt-3 font-bold text-slate-900">
                            Activités ludiques
                          </p>
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            Musique, motricité, ateliers et moments joyeux.
                          </p>
                        </div>
                        <div className="rounded-3xl bg-white/85 p-5 shadow-sm backdrop-blur-sm">
                          <div className="text-3xl">🤍</div>
                          <p className="mt-3 font-bold text-slate-900">
                            Confiance parentale
                          </p>
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            Une relation simple, humaine et transparente avec
                            les familles.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-rose-500 p-6 text-white">
                      <p className="text-sm uppercase tracking-[0.2em] text-rose-100">
                        Places disponibles
                      </p>
                      <p className="mt-2 text-2xl font-bold leading-tight">
                        Inscriptions ouvertes pour la prochaine rentrée.
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
                À propos
              </p>
              <h3 className="mt-4 text-4xl font-black tracking-tight text-slate-900">
                Une garderie conçue pour rassurer les parents et faire rayonner
                les enfants.
              </h3>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Nous créons un cadre tendre, structuré et rassurant où chaque
                enfant peut explorer, jouer, apprendre et développer sa confiance
                dans le respect de sa personnalité.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((item, index) => (
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
                Programmes
              </p>
              <h3 className="mt-4 text-4xl font-black tracking-tight text-slate-900">
                Des parcours adaptés à chaque étape de l&apos;enfance.
              </h3>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {programs.map((program) => (
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
                    En savoir plus
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
                Pour les parents
              </p>
              <h3 className="mt-4 text-4xl font-black tracking-tight">
                Une vraie tranquillité d&apos;esprit au quotidien.
              </h3>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item} className="rounded-3xl bg-white/15 p-5 backdrop-blur-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-rose-100 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-400">
                Infos rapides
              </p>
              <div className="mt-6 space-y-5 text-slate-600">
                <div>
                  <p className="font-semibold text-slate-900">Horaires</p>
                  <p className="mt-1">Du lundi au vendredi, de 7h30 à 18h30.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Âges accueillis</p>
                  <p className="mt-1">De 3 mois à 5 ans selon les groupes.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Visites</p>
                  <p className="mt-1">
                    Sur rendez-vous pour découvrir les espaces et l&apos;équipe.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Admission</p>
                  <p className="mt-1">
                    Pré-inscription simple avec échange personnalisé avec les
                    familles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-400">
                Contact
              </p>
              <h3 className="mt-4 text-4xl font-black tracking-tight text-slate-900">
                Planifiez une visite et découvrez Guardery.
              </h3>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Rencontrez l&apos;équipe, visitez les espaces et échangez avec
                nous sur les besoins de votre enfant.
              </p>

              <div className="mt-8 space-y-4 text-slate-600">
                <p>📍 Adresse de la garderie</p>
                <p>📞 +52 XX XX XX XX XX</p>
                <p>✉️ contact@guardery.com</p>
                <p>💬 WhatsApp disponible pour les demandes rapides</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-100 bg-[#fffaf7] p-8 shadow-sm">
              <div className="grid gap-4">
                <input
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-rose-300"
                  placeholder="Nom du parent"
                />
                <input
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-rose-300"
                  placeholder="Email"
                />
                <input
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-rose-300"
                  placeholder="Téléphone"
                />
                <input
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-rose-300"
                  placeholder="Âge de l’enfant"
                />
                <textarea
                  className="min-h-[140px] rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-rose-300"
                  placeholder="Votre message"
                />
                <div className="flex flex-wrap gap-3">
                  <button className="rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-200 transition hover:bg-rose-600">
                    Envoyer la demande
                  </button>
                  <button className="rounded-full border border-rose-200 px-6 py-3 text-sm font-semibold text-rose-500 transition hover:bg-rose-50">
                    Contacter par WhatsApp
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
            <p className="text-lg font-bold text-slate-900">Guardery</p>
            <p className="mt-1 text-sm text-slate-500">
              Garderie, éveil et sérénité pour les familles.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-500">
            <a href="#about" className="hover:text-rose-500">
              À propos
            </a>
            <a href="#programs" className="hover:text-rose-500">
              Programmes
            </a>
            <a href="#contact" className="hover:text-rose-500">
              Contact
            </a>
            <a href="#" className="hover:text-rose-500">
              Mentions légales
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
