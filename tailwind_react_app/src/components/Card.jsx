import React from "react";

function Card(props){
    // {image_link, title, price, id}){ 

    return (
        <>
        <div className="m-16 w-60 h-85 flex flex-col rounded-xl bg-amber-400 "> 
        
            <div>
            <img
                // src={image_link}
                src={props.image_link}
                alt="test"
                className="object-fit object-center rounded-t-xl p-2.5"
            />

            </div>
            <div className="flex flex-col py-3 px-3 pb-10">
            <div className="flex justify-between ">
                {/* <h1 className="font-bold ">{title}</h1> */}
                <h1 className="font-bold ">{props.title}</h1>
                <h1>Price</h1>
            </div>
            <div className="flex  justify-between">
                {/* <p>{id}</p>
                <p>{price}</p> */}
                <p>{props.id}</p>
                <p>{props.price}</p>
            </div>
            </div>
        </div>
        </>
    );
}


export default Card;