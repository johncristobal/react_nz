import { Route, Link, Routes, Navigate } from "react-router-dom";

const Portafolio = () => {
  const logged = false;
  if(!logged){
    return <Navigate push to="/" />
  }
  return <h1>Portafolio</h1>
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
            <Link to="/perfil">Perfil</Link>
          </li>
          <li>
            <Link to="/portafolio">Portafolio</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route
            path="/portafolio"
            element={<Portafolio />}
          />
          <Route
            path="/perfil"
            element={<h1>perfil</h1>}
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
