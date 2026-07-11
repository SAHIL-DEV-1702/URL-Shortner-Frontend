import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAllUser, deleteUserUrl } from '../api/user.api'

const UserUrls = () => {
    const queryClient = useQueryClient()

    const { data: urlsData, isLoading, isError, error } = useQuery({
        queryKey: ['userUrls'],
        queryFn: getAllUser,
        refetchInterval: 30000,
        staleTime: 0,
    })

    const deleteMutation = useMutation({
        mutationFn: deleteUserUrl,
        onSuccess: () => {
            queryClient.invalidateQueries(['userUrls'])
        }
    })

    const urls = urlsData?.urls || urlsData || []
    const [copyId, setCopyId] = useState('')
    const baseUrl = import.meta.env.VITE_APP_URL || 'http://localhost:8000'

    const handleCopy = (shortUrl, id) => {
        navigator.clipboard.writeText(shortUrl)
        setCopyId(id)
        setTimeout(() => setCopyId(''), 2000)
    }

    const handleDelete = (id) => {
        deleteMutation.mutate(id)
    }

    if (isLoading) {
        return (
            <div className="rounded-[1.75rem] border border-slate-200/80 bg-(--surface) p-8 text-center text-(--muted) shadow-sm dark:border-slate-700/60 dark:bg-slate-950/80">
                Loading your saved URLs...
            </div>
        )
    }

    if (isError) {
        return <div className="rounded-3xl border border-red-200 bg-red-50 p-6 text-red-700">Error: {error.message}</div>
    }

    if (!urls || urls.length === 0) {
        return <div className="rounded-[1.75rem] border border-slate-200/80 bg-(--surface) p-8 text-center text-(--muted) shadow-sm dark:border-slate-700/60 dark:bg-slate-950/80">No links saved yet. Create your first short URL to see it here.</div>
    }

    return (
        <div className="space-y-4 mt-4">
            {urls.map((item) => (
                <div key={item._id} className="rounded-[1.75rem] border border-slate-200/80 bg-(--surface) p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-950/80">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <div className="min-w-0 space-y-3">
                            <div className="flex flex-wrap items-center gap-2 text-sm text-(--muted)">
                                <span className="rounded-full bg-(--accent)/15 px-3 py-1 font-semibold uppercase tracking-[0.15em] text-(--accent-strong)">Saved URL</span>
                                {item.customSlug && <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">Custom slug</span>}
                            </div>
                            <div className="space-y-2">
                                <div className="flex flex-wrap items-center gap-2 text-sm text-(--muted)">
                                    <span className="font-semibold text-(--text)">Short:</span>
                                    <a href={`${baseUrl}/${item.short_url}`} target="_blank" rel="noreferrer" className="text-(--accent-strong) hover:text-(--accent) hover:underline truncate">
                                        {baseUrl}/{item.short_url}
                                    </a>
                                </div>
                                <div className="flex flex-wrap items-center gap-2 text-sm text-(--muted)">
                                    <span className="font-semibold text-(--text)">Original:</span>
                                    <span className="truncate text-slate-500 dark:text-slate-300">{item.originalUrl}</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-2 text-sm text-(--muted) sm:text-right">
                            <span className="rounded-2xl bg-slate-100 px-3 py-2 text-(--text) shadow-sm dark:bg-slate-800/80">{item.clicks} clicks</span>
                            <span className="rounded-2xl bg-slate-100 px-3 py-2 text-(--text) shadow-sm dark:bg-slate-800/80">{item.date || 'No date'}</span>
                        </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3">
                        <button
                            onClick={() => handleCopy(`${baseUrl}/${item.short_url}`, item._id)}
                            className="inline-flex items-center justify-center rounded-full bg-(--accent) px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-(--accent-strong)"
                        >
                            {copyId === item._id ? 'Copied!' : 'Copy link'}
                        </button>
                        <button
                            onClick={() => handleDelete(item._id)}
                            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-transparent px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-red-500 hover:text-red-600 dark:border-slate-700 dark:text-slate-200 dark:hover:text-red-400"
                        >
                            {deleteMutation.isLoading ? 'Deleting...' : 'Delete'}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default UserUrls;
