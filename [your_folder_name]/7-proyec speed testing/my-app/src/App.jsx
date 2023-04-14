import logo from './logo.svg';
import './App.scss';

const saludar = 'hola :)';

const App = () => {

  const SeRenderizaHTML = (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>hola </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
   );
    return SeRenderizaHTML;
  
}

export default App;
