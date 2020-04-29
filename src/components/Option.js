import React from 'react'

const Option=(props)=>(
  <div className='option'>
      
      <h4 className='option__text'>{props.count}. {props.text.toUpperCase()}</h4> 
      <button className='button--link' onClick={()=>{props.handleDeleteOption(props.text)}}>Remove</button>
  </div>
)

export {Option}