import { useEffect, useRef } from 'react'
import echarts from './core'
import { merge, deepClone } from './utils'
import defaultOptions from './options'
const Chart = (props) => {
  const { width, height, options, className } = props
  const chartDom = useRef(null)
  const _options = merge(deepClone(defaultOptions), options)
  useEffect(() => {
    const el = chartDom.current
    const chart = echarts.getInstanceByDom(el) || echarts.init(el, 'light')
    chart.setOption(_options)
    const resize = () => chart.resize()
    window.removeEventListener('resize', resize)
    window.addEventListener('resize', resize)
  })
  return (
    <div
      ref={chartDom}
      className={className}
      style={{
        width,
        height
      }}
    ></div>
  )
}
Chart.defaultProps = {
  width: '100%',
  height: 400,
  options: {},
  className: 'chart'
}
export default Chart
