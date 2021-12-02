import Button from "./button";

const arr = ['feliz', 'trsite','emocionado'];
const App = () => {

  const mivar = false;

  if(mivar){
    return (
      <p>Mi variable dio true</p>
    )
  }
  return (
    <div>
      <h1 onClick={ (e) => console.log("Click", e)}>Hola Alex</h1>
      {
        arr.map( el => <p key={el}>{el}</p> )
      }
      <Button onClick={ () => console.log('Clickeado')}>
        Enviar 
      </Button>
    </div>
  )
}

export default App;