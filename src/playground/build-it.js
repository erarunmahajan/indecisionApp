console.log('build.it running')


class Visibility extends React.Component{

    constructor(props){
        super(props);
        this.visibilityToggle = this.visibilityToggle.bind(this)
        this.state={
            visibilityMode: false,
            appName: 'Visibility Toggle'
        }
    }

    visibilityToggle(){
      this.setState((prevState)=>{
          return{
              visibilityMode: !prevState.visibilityMode
          }
      })
    }

    render(){
        return(
            <div>
                <h1>{this.state.appName} </h1>
                <button onClick={this.visibilityToggle}>{this.state.visibilityMode?'Hide Details':'Show Details'}</button>
                {
                    this.state.visibilityMode?<p>There are some details that are being shown</p>:''
                }
                
            </div>
        )
    }
}

ReactDOM.render(<Visibility/>,document.getElementById('app'))









// let Visibility = false;

// const toggleVisibility =()=>{
//     Visibility = !Visibility;
//     render()
// }

// const render = ()=>{
//     const jsx =(
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>{Visibility?'Hide Details':'Show Details'}</button>
//             {Visibility && <div>
//                 <p>Hey These are some toggleable details</p>
//             </div>}
//         </div>
//     );

//     ReactDOM.render(jsx,document.getElementById('app'));
// }

// render();