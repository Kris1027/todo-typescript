import { useRef } from 'react';
import Button from '../ui/Button';

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    if (enteredText === '') return;
    props.onAddTodo(enteredText);
    textInputRef.current!.value = '';
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <input
        type='text'
        placeholder='Create a new todo...'
        ref={textInputRef}
      />
      <Button type='submit'>ADD TODO</Button>
    </form>
  );
};

export default NewTodo;
