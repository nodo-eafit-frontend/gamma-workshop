import { useContext } from 'react';
import { BoardContext } from './context';

export const useBoard = () => {
  const { state } = useContext(BoardContext);

  return state;
};

export const useBoardContext = () => {
  const todoTodito = useContext(BoardContext);

  return todoTodito;
};
