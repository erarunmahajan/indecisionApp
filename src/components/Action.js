import React from 'react'

const Action =(props)=>(
  <div>
      <button className='big-button' onClick={props.handlePick} disabled={props.options.length<=0?true:''}>What Should i Do?</button>
    </div>
)//stateles functional component

export {Action}