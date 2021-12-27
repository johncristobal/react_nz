import { Route, Link, Routes, useNavigate, useLocation } from "react-router-dom";

function useQuery(){
  return new URLSearchParams(useLocation().search)
}

function App() {
  const navigate = useNavigate();
  const forward = () => {
    navigate(1);
  };
 
  const back = () => {
    navigate(-1);
  };
 
  const push = (url) => {
    navigate(url);
  };
  const query = useQuery();
  const chancho = query.get('chanchito');
  const nombre = query.get('nombre');
  console.log({ chancho, nombre})

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
        <button onClick={() => push('/chanchitofeliz')}>Push</button>
        <Routes>
          <Route exact path="/" element={<h1>Inicio</h1>}></Route>
          <Route exact path="/perfil" element={<h1>Perfil</h1>}></Route>
          <Route path="*" element={'404 Ruta no encontrada'} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
