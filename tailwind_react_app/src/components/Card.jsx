import React from "react";

function Card({image_link, title = ' ', price = 0, id = ' '}){ 

    return (
        <>
        <div className="m-16 w-60 h-85 flex flex-col rounded-xl bg-amber-400 "> 
        
            <div>
            <img
                src={image_link}
                alt="No Image loaded"
                className="object-fit object-center rounded-t-xl p-2.5"
            />

            </div>
            <div className="flex flex-col py-3 px-3 pb-10">
            <div className="flex justify-between ">
                <h1 className="font-bold ">{title}</h1>
                <h1>Price</h1>
            </div>
            <div className="flex  justify-between">
                <p>{id}</p>
                <p>{price}</p>
            </div>
            </div>
        </div>
        </>
    );
}


export default Card;