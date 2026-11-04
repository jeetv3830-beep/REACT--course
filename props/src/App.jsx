import React from 'react'
import './index.css'
import Card from './components/card'

const App = () => {
  return (
    <>
    <div className="parent">
      <Card user="Jeet" age={18} img="https://images.unsplash.com/photo-1667419675013-e5f883eb3bc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"/>
      <Card user="vijay" age={48} img="https://images.unsplash.com/photo-1667419674841-079fb6d65fb2?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"/>
      <Card user="rajashree" age={38} img="https://i.pinimg.com/736x/bf/3b/17/bf3b171463c1e215086adda75b2a7d3d.jpg"/>
      
      </div>
      </>
  )
}

export default App