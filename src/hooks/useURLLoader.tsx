import { useEffect, useState } from 'react'
import axios from 'axios'
/**
 * url: 接口url
 * deps: 依赖项,传入数组, 依赖变化时候更新数据
 */
const useURLLoader = (url: string, deps: any[] = []) => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    axios.get(url).then(result => {
      setData(result.data)
      setLoading(false)
    })
  }, deps)
  return [data, loading]
}

export default useURLLoader