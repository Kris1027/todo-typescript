import styled from 'styled-components';
import Todo from './Todo';

const ListOfTodos = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
`;

interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ListOfTodos>
      {props.items.map((todo) => (
        <Todo key={todo.id} todo={todo} onDeleteTodo={props.onDeleteTodo} />
      ))}
    </ListOfTodos>
  );
};

export default TodoList;
