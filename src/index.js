import React from 'react'
import CreateRoot from 'react-dom'
import App from './App'

const OverAllComponets = () =>{
  return(
    <>
    <App/>
    </>
  )
}

CreateRoot.render(<OverAllComponets/>, document.getElementById('root'))