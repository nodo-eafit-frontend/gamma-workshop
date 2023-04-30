import React, { useEffect, useReducer, useState } from 'react';
import Button from '@mui/material/Button';

const response = {
  card: {
    title: '¡Datazo!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat saepe laboriosam possimus praesentium provident ut rerum, illo eius illum, fugiat amet laborum temporibus? Ullam alias nemo sed fugit non hic!',
  },
  form: {
    textInput: {
      placeholder: 'Nickname',
      id: 'username',
    },
    selectInput: {
      id: 'time',
      placeholder: 'Choose your time',
      options: [
        { value: 10, label: '10 seg' },
        { value: 20, label: '20 seg' },
        { value: 30, label: '30 seg' },
      ],
    },
    submit: {
      text: 'Ir a jugar',
    },
  },
};

const { textInput, selectInput, submit } = response.form;

const initalState = {
  username: undefined,
  time: undefined,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'USER_NAME': {
      return { ...state, username: payload };
    }

    case 'TIME': {
      return { ...state, time: payload };
    }

    default:
      return state;
  }
};

export const Home = () => {
  const [form, dispatch] = useReducer(reducer, initalState);

  const handlerForm = (event) => {
    event.preventDefault();

    console.log('handlerForm desde event', {
      username: event.target[0].value,
      time: event.target[1].value,
    });

    // Eviar info a un servicio
    console.log('handlerForm para enviar', form);
  };

  const handlerUserName = (event) => dispatch({ type: 'USER_NAME', payload: event.target.value });
  const handlerTime = (event) => dispatch({ type: 'TIME', payload: event.target.value });

  return (
    <main>
      <h2>{response.card.title}</h2>
      <p>{response.card.description}</p>
      <hr />
      <form onSubmit={handlerForm}>
        <label htmlFor={textInput.id}>{textInput.placeholder}</label>
        <input type='text' name={textInput.id} id={textInput.id} onChange={handlerUserName} required />

        <label htmlFor={selectInput.id}>Level</label>
        <select name={selectInput.id} id={selectInput.id} defaultValue={0} onChange={handlerTime} required>
          <option disabled value={0}>
            {selectInput.placeholder}
          </option>
          {selectInput.options.map(({ value, label }, index) => {
            return (
              <option key={index} value={value}>
                {label}
              </option>
            );
          })}
        </select>

        <input type='submit' value={submit.text} />
      </form>
    </main>
  );
};