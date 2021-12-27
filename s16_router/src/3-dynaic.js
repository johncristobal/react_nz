import { Route, Link, Routes, useMatch, useParams } from "react-router-dom";

const Proyecto = () => {
  const match = useMatch("portafolio/:proyecto_id");
  const params = useParams();
  const {proyecto_id} = params;
  console.log(params)

  return(
    <h2>Proyecto {proyecto_id}</h2>
  )
}
const Portafolio = () => {
  return(
    <div>
      <h1>Portafoil</h1>
      <ul>
        <li>
          <Link
            to={'/portafolio/p1'}
          >
            Proyecto 1
          </Link>
        </li>
        <li>
          <Link
            to={'/portafolio/p2'}
          >
            Proyecto 2
          </Link>
        </li>
      </ul>
      <div>
        <Routes>
          <Route
              path=":proyecto_id"            
              element={<Proyecto/>}
            />          
        </Routes>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/portafolio">Portafolio</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route
            path="/portafolio/*"            
            element={<Portafolio />}
          />
          <Route
            exact
            path="/"
            element={<h1>Inicio</h1>}
          />
        </Routes>
      </section>
    </div>
  );
}

export default App;
