import { Route, Link, Routes } from "react-router-dom";

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
              path="p1"            
              element={<h2> Proyecto 1</h2>}
            />
          <Route
              path="p2"            
              element={<h2> Proyecto 2</h2>}
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
