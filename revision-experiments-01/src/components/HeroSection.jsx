import { videos } from "../assets"

export default function HeroSection() {
    return (
        <section
            className=" py-10 laptop:py-15 pt-10 laptop:pt-20 flex flex-col justify-center bg-gradient-to-br from-blue-900 to bg-purple-700 text-white text-center">

            {/* Heading... */}
            <h1
                className="text-2xl mdphone:text-3xl lgphone::text-4xl mdtablet:text-5xl font-semibold  tracking-wide">
                <span className="bg-gradient-to-r from-yellow-400 via-green-300 to-green-300 text-transparent bg-clip-text inline-block">BEST</span> WAY TO USE LLMs FOR LEARNING SOMETHING</h1>

            <p className="my-3 md:my-5 lg:my-6 text-[15px] md:text-3xl font-semibold text-green-400">Start Building Your LLM Chat Graphs</p>

            {/* Buttons: "Start Now" & "Manual" */}
            <div className="flex flex-col justify-center gap-2 lgphone:flex-row">
                <div>
                    <button
                        className="w-[170px] bg-gradient-to-r from-blue-600 to-purple-600 text-[22px] p-2 rounded-[10px] font-semibold transition duration-100 ease-in active:invert hover:brightness-125"
                        onClick={() => { console.log('Application Starting!!') }}
                    >Start Now</button>
                </div>
                <div>
                    <button
                        className="w-[170px] bg-gradient-to-r from-blue-600 to-purple-600 text-[22px] p-2 rounded-[10px] font-semibold transition duration-100 ease-in active:invert hover:brightness-125"
                        onClick={() => { console.log('Application Starting!!') }}
                    >
                        Manual
                    </button>
                </div>
            </div>

            <div className="flex flex-col p-8 gap-2 items-center lgtablet:flex-row lgtablet:gap-5 lgtablet:justify-center pointer-events-none">

                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-[400px] rounded-[10px] smtablet:w-[600px] laptop:w-[650px] smdesktop:w-[800px]"
                >
                    <source src={videos.video1} type="video/mp4" />
                    Your Browser Does not support the video
                </video>

                <video
                    src={videos.video2}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-[400px] rounded-[10px] smtablet:w-[600px] laptop:w-[650px] smdesktop:w-[800px]"
                />

            </div>


        </section>
    )
}