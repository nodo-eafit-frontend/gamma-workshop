import logo from './logo.svg';
import './App.scss';
import React from 'react';
import { useState, useEffect } from 'react';

function getRandomColor(){
  var letters='0123456789ABCDEF';
  var color ='#';
  for(var i=0;i<6;i++){
    color+=letters[Math.floor(Math.random()*16)];
  }
  return color;
}

const actionButton='Cambiar color';
const styleBackground={
  backgroundColor:'#FFF',
};

const App= (props) => {

  const {saludo,id}=props;
  const [background,setBackground]=React.useState(styleBackground);

  useEffect(() => {

    //Initialization
    console.log('Nací');

    const url = 'http://localhost:3001/';

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });

    return () => {
      //Destroy
      console.log('Morí X_X');
    };
  }, []);

  useEffect(()=>{
  //Update
  },[background,saludo])

  const handlerClick=(event)=>{
    setBackground({backgroundColor:getRandomColor()});
  };
  //render
  //{logo}= se hace asi porque se importó desde arriba import logo from './logo.svg';
  const SeRenderiza = (
    <div className="App" >
      <header className="App-header" style={background}>
        <img src={logo} className="App-logo" alt="logo" />
        <button className='colorBtn' onClick={handlerClick}>{actionButton}</button>
        <h1>{saludo+'!!!!!!'}</h1>
        <code>{id}</code>
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

  return SeRenderiza;
}

export default App;
