import React from 'react';
import '../styles/todoInput.css';
const TodosInput = ({ createTodoItem }) => {
  const [value, setValue] = React.useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === '') {
      return console.log('Please add some to-dos');
    }
    createTodoItem(value);
    setValue('');
  };

  return (
    <div id="add_todo">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          placeholder="Create ToDo"
          onChange={(e) => setValue(e.target.value)}
        />
        <button id="create" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
};

export default TodosInput;
