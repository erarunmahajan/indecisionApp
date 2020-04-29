import React from 'react'
import {Header} from './Header'
import {Action} from './Action'
import {AddOption} from './AddOption'
import {Options} from './Options'
import {OptionModal} from './OptionModal'

class IndecisionApp extends React.Component{
  state ={
    options :[],
    subTitle : '!!Put Your Life In hand Of Computer!!',
    selectedOption:undefined
  }

//life cycle methods 
componentDidMount(){
  try{
    const json = localStorage.getItem('options')
    const options = JSON.parse(json)
    if(options){
      this.setState(()=>({
        options:options
      }))
    }
  } catch(e){}
}

componentDidUpdate(prevProps,prevState){
  if(prevState.options.length !== this.state.options.length){
    const json = JSON.stringify(this.state.options)
    localStorage.setItem('options',json)
  }
}

componentwillUnmount(){console.log('unmount')}


handleDeleteOptions=()=>{
  this.setState(()=>({options:[]}))
}

handleAddOption=(option)=>{
  if(!option){
    return 'Please enter a valid option!!'
  }else if(this.state.options.indexOf(option)>-1){
    return 'Option already exists'
  }
  this.setState((prevState)=>({options:prevState.options.concat([option])}))
  
}

handleDeleteOption =(optionToRemove)=>{
  this.setState((prevState)=>({
    options:prevState.options.filter((option)=> optionToRemove !== option)
  }))
}

handlePick=()=>{
  const randomNum =Math.floor(Math.random()*this.state.options.length);
  const option = this.state.options[randomNum]
  this.setState(()=>({
    selectedOption:option.toUpperCase()
  }))
}

handleDuplicateOption=(option)=>{
  return this.state.options.indexOf(option)
}

handleModalVisibility =()=>{
  this.setState(()=>(
    {
      selectedOption:undefined
    }
  ))
}

render=()=>{
  return(
    <div>
      <Header subTitle= {this.state.subTitle} />
      <div className='container'>
        <Action 
          options={this.state.options} 
          handlePick ={this.handlePick}
        />
        <div className='widget'>
          <Options 
            options={this.state.options} 
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption handleAddOption={this.handleAddOption} handleDuplicateOption={this.handleDuplicateOption} />
        </div>
        
      </div>
      <OptionModal
        selectedOption ={this.state.selectedOption}
        handleModalVisibility={this.handleModalVisibility}
      />
    </div>
  );
}
}

export {IndecisionApp}