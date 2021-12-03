const { Component } = require("react");

class Button extends Component {

  constructor(props){
    super(props);
    console.log('constructor', props);
  }

  componentDidMount(){
    console.log('didMount');
  }

  componentDidUpdate(prevProp, prevState){
    console.log('Did update', prevProp, prevState);
  }

  componentWillUnmount(){
    console.log("UnMount", this.props, this.state);
  }

  render(){
    console.log('ejecutando metodo render de Button');
    return(
      <button onClick={() => this.setState({ prop: 1})}>
        Enviar de Button
      </button>
    )
  }
}

class App extends Component{

  state = {
    valor: 3
  }

  render(){
    console.log(this.state.valor);
    return(
      <div>
        <p>hOLA MuND</p>
        { this.state.valor === 3 ? <Button chancho='feliz' /> : null }
        <button onClick={ () => this.setState({ valor: 2} )}>
          Enviar en App
        </button>
      </div>
    )
  }
}

export default App;
