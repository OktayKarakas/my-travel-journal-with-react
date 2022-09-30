import React from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Data from './data'

function App() {
  const data = Data.map((item) => {
    return (
      <>
        <Content id={item.id} item={item} />
      </>
    )
  })

  return (
    <div className="App">
      <Navbar />
      <section className="container">{data}</section>
    </div>
  )
}

export default App
