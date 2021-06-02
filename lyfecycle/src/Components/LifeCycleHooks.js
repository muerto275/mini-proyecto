import React, { useEffect, useState } from 'react'

const LifeCycleHooks = () => {
    //1. Ejemplo 

    //Lo podemos tomar como el component Did mount
    // useEffect(() => {
    //     console.log('Se monto el componente');

    //2. Ejemplo
    // const [count, setCount] = useState(0)

    // useEffect(() =>{
    //     //Lo podemos contar como un component Did mount, y un component didupdate
    //     console.log(`Has hecho click${count} veces`);
    // })
    //     return (
    //         <div>
    //             <span>El contador esta a {count}</span>
    //             <button onClick={()=>setCount(count+1)}>Incrementar contador</button>
    //         </div>
    //     )
    // }

    //3. Ejemplo
    const [width, setWidth] = useState(0)

    useEffect(() => {
//Este lo podemos tomar como el component Did mount, y un component did update y un component Will Unmount

        const updateWidth = () => {
            const dinamicWidth = document.body.clientWidth
            //esto es para obtener el width de la ventana de la compu
            console.log(`update width con ${width}`);
            setWidth(dinamicWidth)
        }
        //actualizamos el width de la ventana cuando el componente se monte
        updateWidth()

        //Nos suscribimos al evento resize window
        window.addEventListener('resize', updateWidth)
        
        //Limpiamos o saneamos el useEffect, des-suscribiendome del evento resize
        return()=>{
            window.removeEventListener('resize', updateWidth)
        
        }
    })

    return (
        <div>
            <span>{width}</span>
        </div>
    )
}
export default LifeCycleHooks

//es un react functional export component
//Con use effect y una instruccion react automaticamente usa un did mount por detras usando ese hook