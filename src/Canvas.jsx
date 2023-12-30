import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { fabric } from "fabric";


export function Canvas ({ setCanvas, children }) {
    const canvasRef = useRef(null)

    const [num, setNum] = useState(0)

    function maisum() {
        setNum(num + 1)
    }

    useEffect(() => {
        setCanvas(new fabric.Canvas(canvasRef.current,{backgroundColor: 'blue'}))
        maisum()
        console.log("criando fabric canvas" + num)
    }, [setCanvas])

    

    return(
        <>
            <canvas ref={ canvasRef } ></canvas>
             {children}               
        </>    
    )
}