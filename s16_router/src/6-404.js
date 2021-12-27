import { Route, Link, Routes, Navigate } from "react-router-dom";



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
        </ul>
      </nav>
      <section>
        <Routes>         
          <Route
            path="/perfil"
            element={<h1>perfil</h1>}
          />
          <Route
            exact
            path="/"
            element={<h1>Inicio</h1>}
          />
          <Route 
            path="*"
            element={<p>404 not found</p>}
          />
        </Routes>
      </section>
    </div>
  );
}

export default App;
