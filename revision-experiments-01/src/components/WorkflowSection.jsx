import { images } from "../assets"
import { checklistItems } from "../constants/contants";
import { CheckCheck, CheckCircle2, TruckElectricIcon } from 'lucide-react';


export default function WorkflowSection() {
    return <section className="flex flex-col items-center">
        <h1 className="text-center text-3xl bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-600">Enhance Your Learning Experience With AI</h1>

        <div className="flex flex-col items-center mdtablet:flex-row  mdtablet:p-10 mdtablet:items-stretch">

            <img src={images.codeImg} alt="" className="bg-gradient-to-r from-purple-800 to-gray-700 p-1 w-[90vw] rounded-2xl my-2 mdtablet:w-[50vw]" />

            {/* Container */}
            <div className="bg-transparent p-3 mdphone:px-10 flex flex-col gap-3 mdtablet:gap-2 mdtablet:justify-around lgphone:gap-3 laptop:gap-5">
                {checklistItems.map((item, index) => {
                    return (
                        <div className="bg-gradient-to-r from-amber-800 via-pink-800 to-purple-500 flex justify-center items-start p-2 rounded-2xl lgphone:p-2 mdtablet:p-15 laptop:p-10">
                            <div className="text-[24px]">✅</div>
                            <div className="flex flex-col gap-y-2">
                                <h1 className="text-[25px] mdtablet:text-4xl">{item.title}</h1>
                                <p className="text-[20px]">{item.description}</p>
                            </div>
                        </div>);
                })}

            </div>

            {/* Card 1 */}

            {/* Card 2 */}
            {/* <div className="flex justify-center items-start px-2">
                <div className="text-[25px]">✅</div>
                <div>
                    <h1 className="text-3xl">Heading of the Card</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, nemo.</p>
                </div>
            </div> */}

        </div>


        {/* <div className="flex items-start gap-1">
            <div
                className="w-6.5 h-6.5 bg-green-500 flex justify-center items-center rounded-full">
                <CheckCheck />
            </div> */}
        {/* <CheckCircle2 /> */}
        {/* <div>
                <h1 className="text-3xl">Code merge made easy</h1>
                <p>Lorem ipsum, dolor sit quatur cumque deleniti repellendus quo magnam!</p>
            </div>
        </div> */}

    </section>
}