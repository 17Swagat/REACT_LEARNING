function Button_1({text="", onclick}){
    return (
        <div className="bg-[#064ae7] w-[80px] h-[100px] rounded-[10px] font-semibold flex justify-center items-center text-2xl active:invert transition duration-300 cursor-pointer select-none" onClick={onclick}>
            {text}
        </div>
    )
    ;
}
export default  Button_1