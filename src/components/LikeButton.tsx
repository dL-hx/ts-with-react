// rafc  tsrafe
import React, { useEffect, useState } from 'react'

const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0)
    const [on, setOn] = useState(true)

    useEffect(()=>{//渲染和更新时候执行.
        console.log('click')
        document.title = `点击了 ${like} 次`
    },[like])

    return (
        <div>
            <button onClick={() => setLike(like + 1)}>
                {like} 👍
            </button>
            <button onClick={() => setOn(!on)}>
                {on ? 'ON':'OFF' }
            </button>
        </div>
    )
}

export default LikeButton