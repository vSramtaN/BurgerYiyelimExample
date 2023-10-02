import React from 'react'
import '../Styles/Menu.css'

const MenuItem = ({image,name,content,price}) => {
  return (
    <div className='menuItem'>
        <div style={{backgroundImage:`url(${image})`}}></div>
            <h1 style={{marginBottom:'10px', fontSize:'27px'}}>{name}</h1>
            <h6 style={{marginBottom:'10px'}}>{content}</h6>
            <p>{price} TL</p>
    </div>
  )
}

export default MenuItem