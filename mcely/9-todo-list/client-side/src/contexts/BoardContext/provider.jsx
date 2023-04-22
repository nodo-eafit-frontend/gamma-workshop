import { useReducer } from 'react';
import { BoardContext } from './context';
import { initialState, reducer } from './reducer';

export const BoardProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  return <BoardContext.Provider value={{ state, dispatch }}>{children}</BoardContext.Provider>;
};
