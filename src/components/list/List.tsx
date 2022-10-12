import React, { ReactNode, useEffect } from 'react';
import Todo from '../todo/Todo';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setReduxTodos } from '../../redux/modules/todos';
import { RootState } from '../../redux/config/configStore';
type ListProps = {};

const List = ({}: ListProps) => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    const yes = todos.filter((value) => value.id !== id);
    dispatch(setReduxTodos([...yes]));
  };

  const handleToggle = (id: number) => {
    const yes = todos.filter((value) => value.id === id); // 버튼을 누른 객체
    const yes2 = todos.filter((value) => value.id !== id); // 버튼을 누르지 않은 객체
    const yes3 = { ...yes[0], isDone: !yes[0].isDone }; // 버튼을 누른 객체의 isDone값을 !
    dispatch(setReduxTodos([...yes2, yes3]));
  };

  return (
    <ListDiv>
      <ListH1>Working.. 🔥</ListH1>

      {todos
        .filter((todo) => todo.isDone === false)
        .map((val, index) => {
          return (
            <Todo
              key={index}
              todo={val}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
            />
          );
        })}

      <ListH1>Done..! 🎉</ListH1>

      {todos
        .filter((todo) => todo.isDone === true)
        .map((val, index) => {
          return (
            <Todo
              key={index}
              todo={val}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
            />
          );
        })}
    </ListDiv>
  );
};
export default List;

const ListDiv = styled.section``;

const ListH1 = styled.h1`
  font-size: 1.8rem;
`;
