import React, {useState} from "react";


const Button = ({func , type}) => {

    return (
        <button onClick={func} className="mt-3 bg-violet-700 rounded-2xl w-32  text-white font-bold hover:-translate-y-1 hover:scale-110">{type}</button>
    )
}


export default Button;