console.log('counter example is running')


class Counter extends React.Component{
  constructor(props){
    super(props);
    this.handleAddOne =this.handleAddOne.bind(this)
    this.handleSubOne =this.handleSubOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.state ={
      count:0,
      name:props.name
    }
  }
 
  componentDidMount(){
    try{
      const json = localStorage.getItem('count')
      const count = JSON.parse(json)
      
      if(count && !isNaN(count)){
        this.setState(()=>({
          count:count
        }))
      }
    } catch(e){}
  }
  
  componentDidUpdate(prevProps,prevState){
    if(prevState.count !== this.state.count){
      const json = JSON.stringify(this.state.count)
      localStorage.setItem('count',json)
    }
  }



  handleAddOne(){
    this.setState((prevState)=>{
      return {
        count:prevState.count+1
      }
    })
  }
  handleSubOne(){
    this.setState((prevState)=>{
      return {
        count:prevState.count-1
      }
    })

  }
  handleReset(){
//preferred syntax
    this.setState(()=>{
      return {
        count:0
      }
    })

    // this.setState({
    //   count:0
    // })
    // this.setState({
    //   count:this.state.count + 1
    // })
  }
  render(){
    
    return (
      <div>
        {this.state.name}
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleSubOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}
Counter.defaultProps={
  name:'Arun Mahajan'
}

ReactDOM.render(<Counter count={20}/>,document.getElementById('app'))







// // var userProps = ['Arun',27,'J&K']; //arrays

// const user = { //object
//   name:'Arun Mahajan',
//   age: 20,
//   Location: 'India'
// };

// function getLocation(location){
//   if(location){
//     return <p>Location: {location}</p>;
//   }else{
//     return undefined;
//   }
// }

// const template2 = (
//   <div>
//     <h4>{user.name ? user.name:'Unknown User'}</h4>
//     {(user.age && user.age >=18) && <p>Age : {user.age}</p> /*logical operators*/}
//     {getLocation(user.Location)}
//   </div>
// );


// // manually binding of elements
// let count=0

// const addOne = ()=>{
//   count++;
//   renderCounterApp()
// }

// const subOne = ()=>{
//   count--;
//   renderCounterApp()
// }

// const reset = ()=>{
//   count = 0;
//   renderCounterApp()
// }



// const appRoot =document.getElementById("app");

// const renderCounterApp = ()=>{
//   const templateNew = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={subOne}>-1</button>
//       <button onClick={reset}>reset</button>
      
//     </div>
//   )
//   ReactDOM.render(templateNew,appRoot);
// };
// renderCounterApp();