import { formatLabel } from './utils'
export default {
  title: {
    show: true,
    left: 'center',
    textStyle: {
      fontSize: 13
    }
  },
  tooltip: {
    trigger: 'axis',
    confine: true,
    show: true
  },
  // 图例
  legend: {
    show: true,
    icon: 'circle',
    textStyle: {
      fontSize: 11
    },
    y: 'bottom'
  },
  // 网格
  grid: {
    containLabel: true,
    x: '2%',
    y: '13%',
    x2: '2%',
    y2: '5%'
  },
  xAxis: {
    axisLabel: {
      fontSize: 12,
      lineHeight: 15,
      interval: 0,
      formatter: function(value) {
        return formatLabel(value)
      }
    },
    axisTick: {
      lineStyle: {
      },
      show: false
    },
    splitLine: {
      show: false
    },
    axisLine: {
      lineStyle: {
        width: 1
      },
      show: false
    }
  },
  yAxis: {
    axisLine: {
      lineStyle: {
        // color: '#c0c3cd'
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        // color: '#384267',
        type: 'dashed'
      }
    },
    axisLabel: {
      // color: '#c0c3cd',
      fontSize: 12
    },
    axisTick: { show: false },
    nameTextStyle: {
      // color: '#c0c3cd',
      fontSize: 11
    }
  },
  series: []
}
