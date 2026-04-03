
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllUser } from '../api/user.api'

const UserUrls = () => {

    const { data: urls, isLoading, isError, error } = useQuery({
        queryKey: ['userUrls'],
        queryFn: getAllUser,
        refetchInterval: 30000,
        staleTime: 0,
    })

    console.log(urls, "user urls") // undefined ahe 

    const [copyId, setCopyId] = useState('')

    const handleCopy = (url, id) => {
        navigator.clipboard.writeText(url)
        setCopyId(id)
        setTimeout(() => {
            setCopyId('')
        }, 2000)
    }

    if (isLoading) {
        console.log("Loading...")
    }

    console.log(urls, "AFTER LOAD 🔥")

    if (isError) {
        return <div>Error: {error.message}</div>
    }

    if (!urls || urls.length === 0) {
        return <div className="text-center text-gray-500 mt-4">No URLs found. Start by creating a new short URL!</div>
    }
    return (
        <div className="space-y-4 mt-4">
            {urls.map((item) => (
                <div

                    key={item._id}
                    className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition">

                    <div className="md:hidden space-y-2">
                        <div>
                            <p className="text-xs text-gray-400">Short URL</p>
                            <p className="text-indigo-600 font-semibold">{item.shortUrl}</p>
                        </div>

                        <div>
                            <p className="text-xs text-gray-400">Original URL</p>
                            <p className="text-gray-500 break-all">{item.longUrl}</p>
                        </div>

                        <div className="flex justify-between text-sm text-gray-400">
                            <span>{item.date}</span>
                            <span>{item.clicks} clicks</span>
                        </div>

                        <div className="flex gap-2 pt-2">
                            <button className="flex-1 text-sm px-3 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                                Copy
                            </button>

                        </div>
                    </div>

                    <div className="hidden md:grid grid-cols-5 gap-4 items-center">
                        <div className="text-indigo-600 font-semibold">
                            {item.shortUrl}
                        </div>

                        <div className="col-span-2 text-gray-500 truncate">
                            {item.longUrl}
                        </div>

                        <div className="text-gray-400 text-sm">
                            {item.date}
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-gray-700 font-medium">
                                {item.clicks}
                            </span>

                            <button className="text-sm px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700" >
                                Copy
                            </button>

                            <button className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserUrls;