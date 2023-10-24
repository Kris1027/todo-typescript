import styled from 'styled-components';
import Button from '../ui/Button';

const TodoText = styled.li`
  display: flex;
  justify-content: space-between;
  background-color: black;
  color: #bf4f74;
  padding: 1rem;
  font-size: 2rem;
  border-radius: 10px;
`;

interface TodoProps {
  todo: { id: string; text: string };
  onDeleteTodo: (id: string) => void;
}

const Todo: React.FC<TodoProps> = (props) => {
  return (
    <TodoText>
      <span>{props.todo.text}</span>
      <Button onClick={props.onDeleteTodo.bind(null, props.todo.id)}>
        DELETE
      </Button>
    </TodoText>
  );
};

export default Todo;
