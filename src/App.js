import react from "react";
import { TodoCounter } from "./componentes/TodoCounter/TodoCounter";
import { TodoSearch } from "./componentes/TodoSearch/TodoSearch";
import { TodoList } from "./componentes/TodoList/TodoList";
import { TodoItem } from "./componentes/TodoItem/TodoItems";
import { CreateTodoButtom } from "./componentes/CreateTodoButton/CreateTodoButton";

//import './App.css';

const todos=[
  {text:'Cortar cebolla', completed:false},
  {text:'Tormar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:false}
];
function App() {
  return (
    <react.Fragment>

      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todos.map(todo =>(
        <TodoItem key={todo.text} text={todo.text} /> ) ) 
        }
      </TodoList>

      <CreateTodoButtom />

    </react.Fragment>
  );
}

export default App;
