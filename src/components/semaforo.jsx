import React , {useState , useRef} from "react";
import PropTypes from 'prop-types';
import Button from "./Button";



const Semaforo = () => {
    const [ color , setColor ] = useState("");
    console.log(color);


    const AlternarColores = () => {
        if (color === "red"){
            setColor("orange");
        } else if (color === "orange"){
            setColor("green");
        } else if (color === "green"){
            setColor("purple");
        } else {
            setColor("red");
        }
           
        
    }

    const AddLight = () => {
        console.log("AddLight");
        let selectDiv = document.querySelector("#prueba");
        selectDiv.classList.toggle("hidden");
        //Comprobamos que divRef no sea null

      /* if (divRef.current){
            divRef.current.classList.toggle("hidden");
       } */

       

    }

       

    return(
        <>
        <div className="grid justify-items-center">
        <span className="w-5 h-40 bg-black"></span>
        </div>
        <div className="grid justify-items-center">
        <div className="bg-black w-28 h-fit rounded text-center grid justify-center gap-2 py-2">
            <div onClick={() => setColor("red")} className={` size-12 rounded-full mt-1 ${color === "red" ? "bg-red-300" : "bg-red-900"}`}></div>
            <div onClick = {() => setColor("orange")} className= {`size-12 rounded-full ${color === "orange" ? "bg-orange-300 " : "bg-orange-800"}`  }></div>
            <div onClick = {() => setColor("green")} className={`size-12 rounded-full  ${color === "green" ? "bg-green-300" : "bg-green-900"}` }></div>
            <div id="prueba"  onClick = {() => setColor("purple")} className={`size-12 rounded-full ${color === "purple" ? "bg-purple-300" : "bg-purple-900"} `}> </div>
            
        </div>
        <Button type={"Botón para añadir luz lila"}func={AddLight}/>
        <Button type={"Alternar colores"} func={AlternarColores}/>
        </div> 
       
        
        
        </>
    )
}
 

Semaforo.propTypes = {
    claseHover : PropTypes.className
}



export default Semaforo