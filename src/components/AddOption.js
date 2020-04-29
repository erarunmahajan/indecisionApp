import React from 'react'

class AddOption extends React.Component{
  state={
    error:undefined
  }

handleAddOption=(e)=>{
  e.preventDefault();
  const text = e.target.elements.option.value.toString().trim();
  const error = this.props.handleAddOption(text)
  this.setState(()=>({error}))
  if(!error){
    e.target.elements.option.value=''
  }

}
render(){
  return(
    <div>
      {this.state.error && <h3 className='add-option__error'>{this.state.error}</h3>}
      <form onSubmit={this.handleAddOption} className='add-option'>
        <input type='text' name='option' className='add-option__input-text' autoFocus={true}/>
        <button className='button' >Add Option</button>
      </form>
    </div>
  );
}
}

export {AddOption}