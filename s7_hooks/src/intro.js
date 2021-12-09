
//destructuring desde aqui para eviatr una linea 
const MiComponente = ({miProp}) => {
    return(
      <div>
        Nombre: {miProp}
      </div>
    )
  }
  
  const App = () => {
    return (
      <MiComponente miProp={"Halooooo"} />
    )
  }
  
  export default App