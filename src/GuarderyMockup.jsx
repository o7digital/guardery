export default function GuarderyMockup() {
  const alerts = [
    {
      id: 'AL-2041',
      site: 'Entrepôt Nord',
      type: 'Intrusion périmétrique',
      level: 'Critique',
      time: 'Il y a 3 min',
    },
    {
      id: 'AL-2038',
      site: 'Villa Horizon',
      type: 'Caméra hors ligne',
      level: 'Moyen',
      time: 'Il y a 14 min',
    },
    {
      id: 'AL-2034',
      site: 'Résidence Palma',
      type: 'Accès non autorisé',
      level: 'Élevé',
      time: 'Il y a 27 min',
    },
  ];

  const sites = [
    { name: 'Villa Horizon', status: 'Sécurisé', cameras: 12, guards: 3 },
    { name: 'Entrepôt Nord', status: 'Alerte active', cameras: 28, guards: 5 },
    { name: 'Résidence Palma', status: 'Surveillance', cameras: 8, guards: 2 },
    { name: 'Tour Delta', status: 'Sécurisé', cameras: 31, guards: 7 },
  ];

  const activities = [
    'Nouvel agent affecté à Entrepôt Nord',
    'Test de sirène validé sur Villa Horizon',
    'Rapport de ronde nocturne généré',
    'Badge temporaire émis pour prestataire',
  ];

  const getBadge = (level) => {
    switch (level) {
      case 'Critique':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'Élevé':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getStatus = (status) => {
    if (status === 'Alerte active') return 'bg-red-500';
    if (status === 'Surveillance') return 'bg-amber-500';
    return 'bg-emerald-500';
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 flex-col border-r border-white/10 bg-slate-900/80 backdrop-blur-xl lg:flex">
          <div className="border-b border-white/10 p-6">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-400 shadow-lg shadow-emerald-900/40" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">
                  O7 Digital
                </p>
                <h1 className="text-2xl font-semibold">Guardery</h1>
              </div>
            </div>
          </div>

          <nav className="flex-1 space-y-2 p-4 text-sm">
            {[
              'Dashboard',
              'Sites',
              'Alertes',
              'Agents',
              'Caméras',
              'Accès',
              'Rapports',
              'Paramètres',
            ].map((item, index) => (
              <div
                key={item}
                className={`rounded-2xl px-4 py-3 transition ${
                  index === 0
                    ? 'bg-white text-slate-900 shadow-lg'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item}
              </div>
            ))}
          </nav>

          <div className="p-4">
            <div className="rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">
                Statut système
              </p>
              <p className="mt-2 text-lg font-semibold">
                Tous les capteurs synchronisés
              </p>
              <p className="mt-1 text-sm text-slate-300">
                Dernière vérification: 14:32
              </p>
            </div>
          </div>
        </aside>

        <main className="flex-1">
          <header className="sticky top-0 z-10 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4 px-5 py-4 lg:px-8">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">
                  Security operations
                </p>
                <h2 className="text-2xl font-semibold">Centre de contrôle</h2>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 md:flex">
                  Recherche site, agent, incident...
                </div>
                <button className="rounded-2xl bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-lg">
                  Nouvelle intervention
                </button>
              </div>
            </div>
          </header>

          <div className="space-y-6 p-5 lg:p-8">
            <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
              {[
                { label: 'Sites surveillés', value: '24', note: '+3 ce mois' },
                { label: 'Alertes ouvertes', value: '7', note: '2 critiques' },
                { label: 'Agents actifs', value: '46', note: '8 en ronde' },
                {
                  label: 'Caméras en ligne',
                  value: '189',
                  note: '97.9% uptime',
                },
              ].map((card) => (
                <div
                  key={card.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20"
                >
                  <p className="text-sm text-slate-400">{card.label}</p>
                  <div className="mt-3 flex items-end justify-between">
                    <p className="text-4xl font-semibold">{card.value}</p>
                    <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                      {card.note}
                    </span>
                  </div>
                </div>
              ))}
            </section>

            <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
              <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-2xl shadow-black/20 xl:col-span-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-cyan-300">Vue globale</p>
                    <h3 className="mt-1 text-xl font-semibold">
                      Activité des sites
                    </h3>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">
                    Dernières 24h
                  </div>
                </div>

                <div className="mt-6 grid h-72 grid-cols-12 items-end gap-3">
                  {[42, 68, 51, 79, 58, 90, 62, 73, 65, 84, 54, 71].map(
                    (height, index) => (
                      <div key={index} className="flex flex-col items-center gap-2">
                        <div
                          className="w-full rounded-t-2xl bg-gradient-to-t from-emerald-400 to-cyan-400 shadow-lg shadow-emerald-900/20"
                          style={{ height: `${height * 2}px` }}
                        />
                        <span className="text-xs text-slate-400">
                          {index + 1}h
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-emerald-300">Urgence</p>
                    <h3 className="mt-1 text-xl font-semibold">
                      Alertes récentes
                    </h3>
                  </div>
                  <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs text-red-300">
                    Temps réel
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {alerts.map((alert) => (
                    <div
                      key={alert.id}
                      className="rounded-2xl border border-white/10 bg-slate-900/80 p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-medium">{alert.type}</p>
                          <p className="text-sm text-slate-400">{alert.site}</p>
                        </div>
                        <span
                          className={`rounded-full border px-3 py-1 text-xs ${getBadge(alert.level)}`}
                        >
                          {alert.level}
                        </span>
                      </div>
                      <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                        <span>{alert.id}</span>
                        <span>{alert.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="grid grid-cols-1 gap-6 xl:grid-cols-5">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 xl:col-span-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-cyan-300">Portefeuille</p>
                    <h3 className="mt-1 text-xl font-semibold">
                      Sites sous surveillance
                    </h3>
                  </div>
                  <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                    Voir tout
                  </button>
                </div>

                <div className="mt-5 overflow-hidden rounded-3xl border border-white/10">
                  <div className="grid grid-cols-4 gap-4 bg-white/5 px-5 py-3 text-sm text-slate-400">
                    <span>Site</span>
                    <span>Statut</span>
                    <span>Caméras</span>
                    <span>Agents</span>
                  </div>
                  {sites.map((site) => (
                    <div
                      key={site.name}
                      className="grid grid-cols-4 items-center gap-4 border-t border-white/10 px-5 py-4 text-sm"
                    >
                      <span className="font-medium text-white">{site.name}</span>
                      <div className="flex items-center gap-2">
                        <span
                          className={`h-2.5 w-2.5 rounded-full ${getStatus(site.status)}`}
                        />
                        <span className="text-slate-300">{site.status}</span>
                      </div>
                      <span className="text-slate-300">{site.cameras}</span>
                      <span className="text-slate-300">{site.guards}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-2xl shadow-black/20 xl:col-span-2">
                <p className="text-sm text-emerald-300">Journal</p>
                <h3 className="mt-1 text-xl font-semibold">Activité système</h3>
                <div className="mt-5 space-y-4">
                  {activities.map((item, index) => (
                    <div key={item} className="flex gap-3">
                      <div className="mt-1 h-3 w-3 rounded-full bg-emerald-400" />
                      <div>
                        <p className="text-sm text-slate-200">{item}</p>
                        <p className="text-xs text-slate-500">
                          Événement #{index + 301}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-4">
                  <p className="text-sm text-cyan-300">Module IA</p>
                  <p className="mt-2 text-lg font-semibold">
                    Détection prédictive
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    Analyse comportementale, détection d&apos;anomalies et scoring
                    de risque par site.
                  </p>
                  <button className="mt-4 rounded-2xl bg-cyan-300 px-4 py-2 text-sm font-medium text-slate-900">
                    Activer le module
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

