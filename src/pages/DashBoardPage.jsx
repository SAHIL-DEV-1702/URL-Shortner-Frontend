import React from 'react'
import NavBar from '../components/NavBar'
import UrlForm from '../components/UrlForm'
import UserUrls from '../components/UserUrls'

const DashBoardPage = () => {
    return (
        <>
            <h2>DASHBOARD PAGE</h2>
        </>

        // <div className="mx-auto w-full max-w-6xl space-y-8">
        //     <section className="rounded-4xl border border-slate-200/80 bg-(--surface) p-8 shadow-xl shadow-slate-900/5 dark:border-slate-700/60 dark:bg-slate-900/95">
        //         <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        //             <div>
        //                 <h1 className="text-4xl font-semibold text-(--text)">Your Dashboard</h1>
        //                 <p className="mt-2 max-w-2xl text-(--muted)">Create, manage, and monitor your URLs in one clean space.</p>
        //             </div>
        //             <div className="rounded-full bg-(--bg) px-4 py-2 text-sm font-medium text-(--text) shadow-sm dark:bg-slate-950/80">
        //                 Hover any short URL to open it in a new tab.
        //             </div>
        //         </div>

        //         <div className="mt-8 rounded-4xl bg-(--bg) p-6 shadow-sm dark:bg-slate-950/80">
        //             <UrlForm />
        //         </div>
        //     </section>

        //     <section className="rounded-4xl border border-slate-200/80 bg-(--surface) p-6 shadow-xl shadow-slate-900/5 dark:border-slate-700/60 dark:bg-slate-900/95">
        //         <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        //             <div>
        //                 <h2 className="text-2xl font-semibold text-(--text)">Your Links</h2>
        //                 <p className="mt-1 text-sm text-(--muted)">Review click counts, copy links, or delete old entries.</p>
        //             </div>
        //         </div>
        //         <UserUrls />
        //     </section>
        // </div>
    )
}

export default DashBoardPage