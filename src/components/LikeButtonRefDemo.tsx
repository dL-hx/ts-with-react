import React, { useContext, useEffect, useRef, useState } from 'react'
import { ThemeContext } from '../context/theme'

const LikeButtonRefDemo: React.FC = () => {
    const [like, setLike] = useState(0)
    const likeRef = useRef(0)
    const didMountRef = useRef(false)
    const domRef = useRef<HTMLInputElement>(null)


    const theme = useContext(ThemeContext) 

    const styles = {
        background:theme.background,
        color:theme.color
    }

    // 2. 模拟生命周期
    useEffect(() => {
        if (didMountRef.current) {
            console.log('this is update');
        } else {
            didMountRef.current = true
        }
    })


    // 3. 获取dom
    useEffect(() => {
        if (domRef && domRef.current) {
            domRef.current.focus() // 聚焦节点
        }
    })


    // 1. 缓存数据,使用同样一份数据进行同步
    function handleAlertClick (){
        setTimeout(() => {
            alert('you clicked on' + likeRef.current)
        }, 1000);
    }

    return (
        <div>
            <input type="text" ref={domRef} />

            <button onClick={()=>{setLike(like + 1);}}>
                {like} 👍
            </button>

            {/* 1. 同步数据 */}
            {/* <button onClick={()=>{setLike( ++likeRef.current );}}>
                {like} 👍
            </button> */}


            <button onClick={handleAlertClick}>Alert </button>

            <button style={styles}>Alert </button>
        </div>
    )
}

export default LikeButtonRefDemo