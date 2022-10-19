import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Nueva etiqueta</h1>
        <p>
          Modificar <code>src/App.js</code> guarda tu archivo y no necesitas recargar la pagina.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org/tutorial/tutorial.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende React y utiliza la documentacion oficial
        </a>
       
      </header>
    </div>
  );
}

export default App;
