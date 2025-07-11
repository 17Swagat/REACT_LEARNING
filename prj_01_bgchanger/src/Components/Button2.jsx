export default function Button2({text, onclick}){
    let bgColors = {
        red: 'bg-red-400',
        green: 'bg-green-400',
        pink: 'bg-pink-400',
        orange: 'bg-orange-400',
        yellow: 'bg-yellow-400',
        blue: 'bg-blue-400'
    }

    let color = text.toLowerCase();
    let style_ = `text-3xl mt-3 mb-3 ${bgColors[color]} p-3 font-semibold rounded-2xl`

    return (

        <button className={style_} onClick={()=>{onclick(text)}}>{text}</button>

    );
}