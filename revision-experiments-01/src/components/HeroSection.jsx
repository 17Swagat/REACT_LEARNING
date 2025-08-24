export default function HeroSection(){
    return (
        <section
            className="h-[50vh] flex flex-col justify-center bg-gradient-to-br from-blue-800 to bg-purple-700 text-white text-center">
            
            <h1 className="smphone:text-2xl mdphone:text-4xl mdtablet:text-5xl font-semibold font-mono">BEST WAY TO USE LLMs FOR LEARNING SOMETHING</h1>

            <p className="my-3 md:my-5 lg:my-6 text-[15px] md:text-3xl font-semibold text-green-400">Start Building Your LLM Chat Graphs</p>

            <div className="">
                <button 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-3xl p-2 rounded-[10px] font-semibold transition duration-100 ease-in active:invert hover:brightness-125" 
                    onClick={()=>{console.log('Application Starting!!')}}
                >START NOW</button>
            </div>
        </section>
    )
}