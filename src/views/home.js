import Chart from '../components/echarts/chart'
import { useEffect } from 'react'
const dataSource = {
  0: {
    title: {
      text: '2222222'
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 11, 1],
        type: 'line'
      }
    ]
  }
}
export default function App() {
  // 异步数据更新
  useEffect(() => {}, [])
  return (
    <div className='App'>
      <Chart options={dataSource['0']} />
    </div>
  )
}
