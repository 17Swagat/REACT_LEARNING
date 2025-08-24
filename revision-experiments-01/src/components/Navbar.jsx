import { images } from "../assets";
import { useState } from "react";

const Navbar = () => {
    const [drawerOpen, toggleDrawer] = useState(false)

    return (
        <nav className="sticky top-0 bg-[#53330285] flex justify-between xl:justify-around items-center">
            <div className="flex items-center">
                <img src={images.appLogo} className="size-20" alt="" />
                <span className="text-[22px]  lg:flex lg:text-[28px] tracking-widest">MindMap-LLM</span>
            </div>
            {/* Mobile View */}
            <button className="size-20 text-5xl z-50 xl:hidden" onClick={() => { toggleDrawer(prev => !prev) }}>
                {drawerOpen ? "X" : "="}
            </button>
            <div id="drawerBody"
                className={`fixed inset-0 overflow-x-hidden ${(drawerOpen) ? "pointer-events-auto" : "pointer-events-none"}  z-40 xl:hidden`} >
                {/* Close Area */}
                <div className={`${drawerOpen ? "absolute left-0 w-[20vw] h-full bg-transparent" : "hidden"}`} 
                    onClick={()=>{toggleDrawer(prev => !prev)}}></div>
                {/* Drawer */}
                <div id="drawer"
                    className={`w-[80vw] h-full bg-blue-500 absolute right-0 transition duration-300 
                ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>
                    {/* Drawer Header */}
                    <div className="w-full h-20 bg-[#919402]"></div>
                    <div className="w-full h-full bg-amber-700 flex flex-col">
                        {/* Navbar-Option */}
                        <ul className="text-3xl flex flex-col items-end p-3 gap-5">
                            <li className="active:text-black">
                                <a href="#">Home</a>
                            </li>
                            <li className="active:text-black">
                                <a href="#">Products</a>
                            </li>
                            <li className="active:text-black">
                                <a href="#">Pricing</a>
                            </li>
                            <li className="active:text-black">
                                <a href="#">Contact Us</a>
                            </li>
                        </ul>
                        {/* Sign-In & Create Account */}
                        <div className="bg-amber-500 h-full flex flex-col">
                            <div className="absolute bottom-0 right-0 flex flex-col gap-3 mb-2">
                                <button className="h-12 text-3xl bg-amber-600 px-2 rounded-[5px]
                                    flex items-center justify-end transition duration-100 active:invert">Sign In</button>
                                {/* <div className="w-5.5"></div> */}
                                <button className="h-12 text-3xl bg-amber-600 px-2 rounded-[5px]">Create Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Non Mobile View */}
            <ul className="hidden bg-transparent  hover:cursor-pointer xl:flex text-2xl  gap-10 font-mono font-semibold  p-3">
                <li>Home</li>
                <li>Products</li>
                <li>Pricing</li>
                <li>Contact Us</li>
            </ul>
            
            {/* Sign In */}
            <div className="hidden xl:flex font-mono gap-3">
                <button className="h-10 text-[18px] bg-transparent border-2 px-2 rounded-[5px] hover:invert-10 active:bg-amber-600">Sign In</button>
                {/* <div className="w-5.5"></div> */}
                <button className="h-10 text-[18px] bg-amber-700 px-2 rounded-[5px] active:invert">Create Account</button>
            </div>
        </nav>
    );
}

export default Navbar;
