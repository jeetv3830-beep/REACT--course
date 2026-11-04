import React from 'react'

function Card(props){
    console.log(props.user,props.age);  
  return (
    <div>
        <div className="card">
        <img src={props.img}></img>
        <h1>{props.user},{props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View profile</button>
      </div>
    </div>
  )
}

export default Card