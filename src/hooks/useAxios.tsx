import { useEffect, useState } from 'react'
import axios from 'axios'

const useAxios = (config = {}) => {
    // 1. 定义
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<any>(null)
    useEffect(() => {
        setLoading(true)
        // 2. 设置, 发送请求
        axios(config)
            .then(result => {
                setData(result.data)
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [config])// deps : 中避免出现引用类型, 会出现死循环问题

    // 返回
    return [data, loading, error]
}

export default useAxios