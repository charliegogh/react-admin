import React, { useEffect } from 'react'
import { getAction } from '../axios'
export default function App() {
  useEffect(() => {
    const getData = async() => {
      const rs = await getAction('http://47.93.4.29:81/test/')
      console.log(rs)
    }
    getData()
  })
  return <div className='App'>home1111111111</div>
}
