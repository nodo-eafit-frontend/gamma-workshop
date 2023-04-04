import logo from './logo.svg';
import './App.scss';
import React from 'react';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const actionButton = 'Cambiar color';

//estado inicial
const style = {
  backgroundColor: '#fff',
}

const App = (props) => {

  const { saludo, cedula } = props;
  const [background, setBackground] = React.useState(style);

  const handleOnclick = () => {
    setBackground({ backgroundColor: getRandomColor() });
  }

  const rendering =
    <div className="App">
      <header className="App-header" style={background}>
        <h1>{saludo}</h1>
        <code>{cedula}</code>
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <button className='colorBtn' onClick={(event) => handleOnclick()} >{actionButton}</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 🤓
        </a>
      </header>
    </div>
  return <div>{rendering}</div>;
}

export default App;
