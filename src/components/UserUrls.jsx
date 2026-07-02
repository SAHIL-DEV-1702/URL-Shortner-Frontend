
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

    console.log(urlsData, "user urlsData (should be full API response)")
    const urls = urlsData?.urls || urlsData || [];

    console.log(urls, "user urls") // undefined ahe 
    console.log(urls)
    console.log(urls?.data)

    const [copyId, setCopyId] = useState('')
    const baseUrl = import.meta.env.VITE_APP_URL || 'http://localhost:8000'

    const handleCopy = (shortUrl, id) => {
        navigator.clipboard.writeText(shortUrl)
        setCopyId(id)
        setTimeout(() => {
            setCopyId('')
        }, 2000)
    }

    const handleDelete = (id) => {
        deleteMutation.mutate(id)
    }

    if (isLoading) {
        console.log("Loading...")
    }

    console.log(urls, "AFTER LOAD 🔥")

    if (isError) {
        return <div>Error: {error.message}</div>
    }

    if (!urls || urls.length === 0) {
        return <div className="text-center text-gray-500 mt-4">No URLs found. Start by creating a new short URL!<br />Debug: {JSON.stringify(urlsData)}</div>
    }
    return (
        <div className="space-y-4 mt-4 py-5 border-2 border-amber-200">
            {urls.map((item) => (

                <div

                    key={item._id}
                    className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition">


                    <div className="md:hidden space-y-2">
                        <div>
                            <p className="text-xs text-gray-400">Short URL</p>
                            <p className="text-indigo-600 font-semibold">{item.short_url}</p>
                        </div>

                        <div>
                            <p className="text-xs text-gray-400">Original URL</p>
                            <p className="text-gray-500 break-all">{item.originalUrl}</p>
                        </div>

                        <div className="flex justify-between text-sm text-gray-400">
                            <span>{item.date}</span>
                            <span>{item.clicks} clicks</span>
                        </div>

                        <div className="flex gap-2 pt-2">
                            <button className="flex-1 text-sm px-2 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                                Copy
                            </button>

                        </div>
                    </div>

                    <div className="hidden md:grid grid-cols-5 gap-4 items-center">
                        <div className="text-indigo-600 font-semibold w-60">
                            <a href={`${baseUrl}/${item.short_url}`} target="_blank" rel="noreferrer" className="hover:underline break-words">
                                {item.short_url}
                            </a>
                        </div>

                        <div className="w-140 m-3 text-gray-500 truncate">
                            {item.originalUrl}
                        </div>

                        <div className="text-gray-400 text-sm">
                            {item.date}
                        </div>

                        <div className="items-center gap-4">

                            <span className="text-gray-700 font-medium">
                                {item.clicks}
                            </span>

                            <button className="text-sm m-1 py-1 px-1 bg-indigo-600 text-white rounded hover:bg-indigo-700" onClick={() => handleCopy(`${baseUrl}/${item.short_url}`, item._id)} >
                                Copy
                            </button>

                            <button className="text-sm m-1 py-1 px-1 bg-red-500 text-white rounded hover:bg-red-600" onClick={() => handleDelete(item._id)}>
                                {deleteMutation.isLoading ? 'Deleting...' : 'Delete'}
                            </button>

                        </div>

                    </div>
                </div>
            ))}
        </div>

    );
};

export default UserUrls;