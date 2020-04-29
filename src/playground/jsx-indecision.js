console.log('App.js is running')

//JSX - Javascript xml

const app ={
  title :'Indecision App',
  subtitle : 'Lets Have Fun',
  options : []
};

const onFormSubmint = (e)=>{
  e.preventDefault();
  const text = e.target.elements.option.value.toString();
 
  if(text && app.options.indexOf(text) == -1){
    app.options.push(text);
    e.target.elements.option.value = '';
    renderApp();
  }else{
    alert('Warning!!  \"'+text + '\" Already included')
    e.target.elements.option.value = '';
  }
}

const removeAll =()=>{
  app.options=[];
  renderApp();
};

const onMakeDecision= ()=>{
  const randomNum =Math.floor(Math.random()*app.options.length);
  const option = app.options[randomNum]
  alert(option)
};


const appRoot =document.getElementById("app");

const renderApp = ()=>{
  const template = (
    <div>
      <h1>{app.title}</h1>
      {(app.subtitle && <p>{app.subtitle}</p>)}
      {/* {app.subtitle?<p>{app.subtitle}</p>:''} */}
      {app.options.length>0?
        <div>
          <p>Here are the options</p>
          <p><button onClick={onMakeDecision}>What should I Do?</button><button onClick={removeAll}>Remove All</button></p>
        </div>
        :'No Options Available'}
        <ol>
          {
            app.options.map((option)=> <li key={option}>{option.toUpperCase()}</li>)
          }
        </ol>
        <form onSubmit={onFormSubmint}>
          <input type='text' name='option' autoFocus/>
          <button>Add Options</button>
        </form>
      </div>
  );
ReactDOM.render(template,appRoot)
}
renderApp()

