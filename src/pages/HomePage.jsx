

import { Link } from '@tanstack/react-router'

const HomePage = () => {
    return (
        <div className="mx-auto w-full max-w-6xl space-y-10">
            <section className="rounded-4xl border border-slate-200/80 bg-(--surface) p-10 shadow-xl shadow-slate-900/5 dark:border-slate-700/60 dark:bg-slate-900/95">
                <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 rounded-full bg-(--accent)/10 px-4 py-2 text-sm font-semibold text-(--accent-strong)">
                            <span>New</span>
                            <span className="rounded-full bg-(--accent-strong) px-2 py-0.5 text-white">Bright & Dark</span>
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-5xl font-semibold tracking-tight text-(--text) sm:text-6xl">
                                Shorten links with style and speed.
                            </h1>
                            <p className="max-w-xl text-lg leading-8 text-(--muted)">
                                Create short URLs instantly, track clicks, and control your experience with light or dark mode in one polished app.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/auth" className="rounded-full bg-(--accent) px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-(--accent-strong)">
                                Get Started
                            </Link>
                            <Link to="/dashboard" className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-(--text) transition hover:border-(--accent) dark:border-slate-600">
                                Open Dashboard
                            </Link>
                        </div>
                    </div>
                    <div className="rounded-4xl bg-linear-to-br from-purple-500/10 via-blue-400/10 to-sky-500/10 p-8 shadow-lg shadow-slate-900/10 dark:from-slate-700/20 dark:via-slate-800/20 dark:to-slate-900/30">
                        <div className="rounded-4xl border border-white/80 bg-(--bg) p-8 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/95">
                            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-(--accent-strong)">Fast links</p>
                            <h2 className="mt-4 text-3xl font-semibold text-(--text)">One-click link creation</h2>
                            <p className="mt-4 text-(--muted)">Paste your URL, choose an optional alias, and share a clean short link in seconds.</p>
                            <div className="mt-8 grid gap-4 text-sm text-(--text)">
                                <div className="rounded-3xl border border-slate-200/80 bg-(--surface) p-5 shadow-sm dark:border-slate-700/60 dark:bg-slate-900">
                                    <p className="font-semibold">Custom slug</p>
                                    <p className="mt-2 text-(--muted)">Brand your short links with easy custom aliases.</p>
                                </div>
                                <div className="rounded-3xl border border-slate-200/80 bg-(--surface) p-5 shadow-sm dark:border-slate-700/60 dark:bg-slate-900">
                                    <p className="font-semibold">Click analytics</p>
                                    <p className="mt-2 text-(--muted)">Monitor clicks and see how many times your links were opened.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="grid gap-5 md:grid-cols-3">
                {[
                    { title: 'Instant sharing', description: 'Generate links quickly and copy them for fast sharing.' },
                    { title: 'Elegant dashboard', description: 'Manage your URLs with a clear layout and easy controls.' },
                    { title: 'Themed experience', description: 'Switch between light and dark themes anytime.' },
                ].map((card) => (
                    <div key={card.title} className="rounded-4xl border border-slate-200/80 bg-(--surface) p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700/60 dark:bg-slate-900">
                        <h3 className="text-xl font-semibold text-(--text)">{card.title}</h3>
                        <p className="mt-3 text-(--muted)">{card.description}</p>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default HomePage