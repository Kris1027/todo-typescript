import { useState } from 'react';

import { Todo } from './todo.models';

import { GlobalStyle } from './style/GlobalStyle';

import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  max-width: 1024px;
  background-color: gray;
`;

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </Wrapper>
  );
};

export default App;
