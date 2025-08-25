import { features } from "../constants/contants"

export default function FeatureSection() {
    return <section className="flex flex-col text-center">
        <h1 className="text-orange-500 text-[20px] py-5 smdesktop:text-3xl">Features</h1>
        <h2 className="font-semibold text-3xl laptop:text-4xl smdesktop:text-5xl">
            Easily Build Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">Learning Chart</span>
        </h2>
        <div className="bg-transparent px-5 py-10 flex flex-col items-center sm:items-stretch  gap-y-2.5 rounded-2xl lgphone:flex-row lgphone:flex-wrap lgphone:gap-x-2.5 smtablet:gap-x-4 lgtablet:gap-x-4.5 lgtablet:gap-y-4.5 lgphone:justify-center">
            {features.map((item) => {
                return (<div className="w-[50vw] bg-gradient-to-br from-blue-800 to bg-purple-600 p-2 rounded-2xl overflow-hidden lgphone:w-[40%] lgtablet:w-[30%] smdesktop:px-5 smdesktop:py-1">
                    {/* Heading */}
                    <div className="bg-gradient-to-br from-blue-500 to bg-purple-600  rounded-2xl flex justify-center items-center gap-2 p-1.5">
                        {item.icon}
                        {item.text}
                    </div>
                    {/* Content */}
                    {/* <div className="bg-purple-500 p-4 text-center"> */}
                    <div className="bg-transparent p-4 text-center">
                        {item.description}
                    </div>
                </div>);
            })}
        </div>

    </section>
}