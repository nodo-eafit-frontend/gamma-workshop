import logo from './logo.svg';
import './App.scss';
import { useState, useEffect } from 'react';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const actionButton = 'Cambiar Color';
const styleBackground = {
  backgroundColor: '#FFF',
};

const App = (props) => {
  const { saludo, cedula } = props;
  const [background, setBackground] = useState(styleBackground);

  useEffect(() => {
    // Initialization
    console.log('Nací');

    const url = 'http://localhost:3001/';

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });

    return () => {
      // Destroy
      console.log('Morí X_X');
    };
  }, []);

  useEffect(() => {
    // Update
  }, [background, saludo]);

  const handlerClick = (event) => {
    const newBackground = { backgroundColor: getRandomColor() };
    setBackground(newBackground);
  };

  return (
    <div className='App'>
      <header className='App-header' style={background}>
        <img src={logo} className='App-logo' alt='logo' />
        <button className='colorBtn' onClick={handlerClick}>
          {actionButton}
        </button>
        <h1>{saludo}</h1>
        <code>{cedula}</code>
      </header>
    </div>
  );
};

export default App;
