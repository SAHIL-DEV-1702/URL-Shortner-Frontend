import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { createShortUrl } from '../api/shortUrl.api'

const UrlForm = () => {
    const urlRef = useRef(null)
    const [url, setUrl] = useState('')
    const [shortenedUrl, setShortenedUrl] = useState('')
    const [customSlug, setCustomSlug] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [copyStatus, setCopyStatus] = useState('Copy')

    const { isAuthenticated } = useSelector((state) => state.auth)

    const handleShorten = async () => {
        if (!url) {
            setErrorMessage('Please enter a valid URL to shorten.')
            return
        }

        setErrorMessage('')
        setIsSubmitting(true)

        try {
            const response = await createShortUrl({ url, slug: customSlug })
            const shortUrl = response?.shortUrl || response?.short_url || response?.data?.shortUrl || response?.data?.short_url || ''
            setShortenedUrl(shortUrl)
        } catch (err) {
            setErrorMessage(err?.response?.data?.message || err?.message || 'Unable to shorten URL. Please try again.')
            setShortenedUrl('')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleCopy = () => {
        const text = shortenedUrl || ''
        navigator.clipboard.writeText(text)
        setCopyStatus('Copied!')
        setTimeout(() => setCopyStatus('Copy'), 2000)
    }

    return (
        <div className="space-y-6">
            <div className="rounded-[1.75rem] border border-slate-200/80 bg-(--surface) p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/80">
                <div className="space-y-4">
                    <div>
                        <h2 className="text-2xl font-semibold text-(--text)">Shorten your URL</h2>
                        <p className="mt-2 text-sm text-(--muted)">Paste any link and get a professional short URL instantly.</p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
                        <input
                            type="url"
                            placeholder="Enter your long URL"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            className="w-full rounded-2xl border border-slate-300 bg-(--input) px-4 py-3 text-sm text-(--text) outline-none transition focus:border-(--accent) focus:ring-2 focus:ring-(--accent)/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                            required
                        />
                        <button
                            onClick={handleShorten}
                            type="button"
                            disabled={isSubmitting}
                            className="rounded-2xl bg-(--accent) px-6 py-3 text-sm font-semibold text-white transition hover:bg-(--accent-strong) disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {isSubmitting ? 'Creating...' : 'Shorten URL'}
                        </button>
                    </div>

                    {isAuthenticated && (
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-(--text) shadow-sm dark:border-slate-700 dark:bg-slate-900">
                            <label className="mb-2 block font-medium text-(--text)">Custom slug</label>
                            <input
                                type="text"
                                value={customSlug}
                                onChange={(e) => setCustomSlug(e.target.value)}
                                placeholder="your-keyword"
                                className="w-full rounded-xl border border-slate-300 bg-(--input) px-4 py-3 text-sm text-(--text) outline-none transition focus:border-(--accent) focus:ring-2 focus:ring-(--accent)/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                            />
                            <p className="mt-2 text-(--muted)">Choose a memorable slug for your short link.</p>
                        </div>
                    )}

                    {errorMessage && <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-500/20 dark:bg-red-950/20">{errorMessage}</div>}
                </div>
            </div>

            {shortenedUrl && (
                <div className="rounded-[1.75rem] border border-slate-200/80 bg-(--surface) p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/80">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm uppercase tracking-[0.2em] text-(--muted)">Your short link</p>
                            <p className="mt-2 wrap-break-word text-lg font-semibold text-(--accent-strong)">{shortenedUrl}</p>
                        </div>
                        <button
                            type="button"
                            onClick={handleCopy}
                            className="inline-flex items-center justify-center rounded-full bg-(--accent) px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-(--accent-strong)"
                        >
                            {copyStatus}
                        </button>
                    </div>
                    <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-(--muted) dark:border-slate-700 dark:bg-slate-900">
                        This link is ready to use. Paste it anywhere or share it with your audience.
                    </div>
                </div>
            )}
        </div>
    )
}

export default UrlForm