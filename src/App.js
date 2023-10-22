import React from 'react';
import './App.css';
import TodosInput from './components/TodosInput';
import TodosList from './components/TodosList';

function App() {
  const [todoItems, setTodoItems] = React.useState([
    // { todo: 'Mow the lawn', complete: false },
    // { todo: 'Do Laundry', complete: false },
    // { todo: 'Make Dinner', complete: false },
  ]);
  const createTodoItem = (todo) => {
    const newTodoitem = [...todoItems, { todo, complete: false }];
    setTodoItems(newTodoitem);
  };

  const deleteTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1);
    setTodoItems(newTodoItems);
  };

  const completeTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems[index].complete === false
      ? (newTodoItems[index].complete = true)
      : (newTodoItems[index].complete = false);
    setTodoItems(newTodoItems);
  };

  const updateTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    const item = newTodoItems[index];
    let newItem = prompt(`Update ${item.todo}?`, item.todo);
    let todoObj = { todo: newItem, complete: false };
    newTodoItems.splice(index, 1, todoObj);
    if (newItem === null || newItem === '') {
      return;
    } else {
      item.todo = newItem;
    }
    setTodoItems(newTodoItems);
  };
  return (
    <div className="App">
      <h1>Todos app</h1>
      <TodosInput createTodoItem={createTodoItem} />
      {todoItems.map((items, index) => (
        <TodosList
          key={index}
          index={index}
          item={items}
          deleteTodoItem={deleteTodoItem}
          completeTodoItem={completeTodoItem}
          updateTodoItem={updateTodoItem}
        />
      ))}
    </div>
  );
}

export default App;
