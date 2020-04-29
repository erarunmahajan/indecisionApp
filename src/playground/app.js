console.log('app.js is running');


//Creating ReactComponents

class IndecisionApp extends React.Component{

  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleDuplicateOption = this.handleDuplicateOption.bind(this)
    this.handleDeleteOption=this.handleDeleteOption.bind(this)
    this.state ={
      options :[],
      subTitle : '!!Put Your Life In hand Of Computer!!'
    }
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
    } catch(e){
      
    }
  }
  
  componentDidUpdate(prevProps,prevState){
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options',json)
    }
  }

  componentwillUnmount(){console.log('unmount')}


  handleDeleteOptions(){
    this.setState(()=>({options:[]}))
  }

  handleAddOption(option){
    if(!option){
      return 'Please enter a valid option!!'
    }else if(this.state.options.indexOf(option)>-1){
      return 'Option already exists'
    }
    this.setState((prevState)=>({options:prevState.options.concat([option])}))
    
  }

  handleDeleteOption(optionToRemove){
    this.setState((prevState)=>({
      options:prevState.options.filter((option)=> optionToRemove !== option)
    }))
  }

  handlePick(){
    const randomNum =Math.floor(Math.random()*this.state.options.length);
    const option = this.state.options[randomNum]
    alert(option.toUpperCase())
  }

  handleDuplicateOption(option){
    return this.state.options.indexOf(option)
  }

  render(){
    return(
      <div>
        <Header subTitle= {this.subTitle} />
        <Action 
          options={this.state.options} 
          handlePick ={this.handlePick}
        />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} handleDuplicateOption={this.handleDuplicateOption} />
      </div>
    );
  }
}

const Header =(props)=>{//stateles functional component
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subTitle && <h2>{props.subTitle}</h2>}
    </div>
  );
}
Header.defaultProps ={
  title:'Indecision App'
}
//component created using class
// class Header extends React.Component {
//   render(){
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subTitle}</h2>
//       </div>
//     );
//   }
// }

const Action =(props)=>{//stateles functional component
  return (
    <div>
      {props.options.length>0?<button onClick={props.handlePick}>Randaom Select</button>:''}
    </div>
    
  );
}

//component created using class
// class Action extends React.Component{
//   render(){
//     return (
//       <div>
//         {this.props.options.length>0?<button onClick={this.props.handlePick}>What Should I do?</button>:''}
//       </div>
      
//     );
//   }
// }

const Options =(props)=>{
    const options = props.options
    const lenthOptions = props.options.length
    return (
      <div>
        {lenthOptions === 0 && <p>Please add an option to get started.</p>}
        {lenthOptions>0?<div>Here Are The Options:<button onClick={props.handleDeleteOptions}>Remove All</button></div>:undefined}
        {
          options.map((opt)=>(
            <Option 
              key={opt} 
              text={opt}
              handleDeleteOption={props.handleDeleteOption}
            />
          ))
        }
      </div>
    );
}
// class Options extends React.Component{//created using class
//   render (){
//     const options = this.props.options
//     const lenthOptions = this.props.options.length
    
//     return (
//       <div>
        
//         {lenthOptions>0?<div>Here Are The Options:<button onClick={this.props.handleDeleteOptions}>Remove All</button></div>:undefined}
//         {
//           options.map((opt)=><Option key={opt} text={opt}/>)
//         }
//       </div>
//     );
//   }
// }

const Option=(props)=>{ //stateless functional component
    return(
      <div>
        <p>
          {props.text.toUpperCase()} 
          <button onClick={()=>{props.handleDeleteOption(props.text)}}>Remove</button>
        </p>
      </div>
    )
}

// class Option extends React.Component{//created using class
//   render(){
//     return(
//       <div>
//         <p>
//           {this.props.text.toUpperCase()} {<button onClick={this.props.test}> Remove</button>}
//         </p>
//       </div>
//     )
//   }
// }


class AddOption extends React.Component{

  constructor(props){
    super(props)
    this.handleAddOption=this.handleAddOption.bind(this)
    this.state={
      error:undefined
    }
  }
  handleAddOption(e){
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
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' />
          <button  >Add Option</button>
          
        </form>
      </div>

    );
  }
}

//stateless functions
// const User =(props)=>{
//   return(
//   <div>
//     <h1>Name: {props.name}</h1>
//     <h2>Age : {props.age}</h2>
//   </div>
//   )
// }



ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))