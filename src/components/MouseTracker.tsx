import React, { useEffect, useState } from 'react'

const MouseTracker: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        console.log('add effect',position.x);

        const updateMouse = (e: MouseEvent) => {
            console.log('inner');
            setPosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        document.addEventListener('click', updateMouse)
        return () => {
            console.log('remove effect',position.x);

            document.removeEventListener('click', updateMouse)

        }
    },[])

    console.log('before render',position.x);
    return (
        <div>
            X :{position.x} {` `} Y :{position.y}
        </div>
    )
}

export default MouseTracker