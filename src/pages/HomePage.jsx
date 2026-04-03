
import UrlForm from "../components/UrlForm"
import AuthPage from "./Authpage"

const HomePage = () => {


    return (
        <>
            <div>

                <h1 className="text-3xl font-bold text-center text-gray-800 mb-5 ">
                    URL Shortener
                </h1>

                <div className="overflow-hidden rounded bg-black py-4 shadow-xl">
                    <marquee behavior="scroll" direction="right">
                        <div className="flex animate-marquee hover:[animation-play-state:paused]">
                            <p className=" text-center mx-6 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400">
                                🚀 Create Short URLs instantly
                            </p>
                            <p className="text-center mx-6 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
                                🔥 Fast • Secure • Reliable
                            </p>
                            <p className="text-center mx-6 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400">
                                💡 Try it now & boost your workflow
                            </p>
                        </div>
                    </marquee >
                </div>

            </div>

        </>
    )
}

export default HomePage