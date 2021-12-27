import { Route, Link, Routes, useMatch, useParams, NavLink } from "react-router-dom";

const Proyecto = () => {
  const match = useMatch("portafolio/:proyecto_id");
  const params = useParams();
  const {proyecto_id} = params;

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
          <NavLink
            className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}
            end
            to={'/portafolio/p1'}
          >
            Proyecto 1
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
            end
            to={'/portafolio/p2'}
          >
            Proyecto 2
          </NavLink>
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
            <NavLink exact to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink isActive={ (match, location) => {
              console.log(match, location);
              return true;
            }} exact to="/portafolio">Portafolio</NavLink>
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
