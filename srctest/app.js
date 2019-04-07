import React from 'react'
import ReactDOM from 'react-dom'
import HeatMapCalendar from '../src/index.js'

const ParentWrapper = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
        alignItems: 'center'
      }}
    >
      <HeatMapCalendar />
    </div>
  )
}

ReactDOM.render(<ParentWrapper />, document.getElementById('root'))
