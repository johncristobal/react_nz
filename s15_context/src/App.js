import { createContext, useContext, useState } from "react";

const Context = createContext()

const ContadorProvider = ({children}) => {
  const [contador, setCont] = useState(0);

  const inc = () => setCont(contador + 1)
  const dec = () => setCont(contador - 1)

  return(
    <Context.Provider
    value={{contador, inc, dec}}
    >
      {children}
    </Context.Provider>
  )
}

const App = () => {
  return(
    <Provider>
      <Componente />
    </Provider>
  )
}

export default App;