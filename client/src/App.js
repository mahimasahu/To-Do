import{ useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [popupActive, setpopupActive] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  use

  
  return (
    <div className="App">
      <h1>Welcome, Mahima</h1>
      <h4>Your Tasks </h4>
      <div className="todos">

        <div className="todo">
          <div className="checkbox"></div>
          <div className="text">Order pizza</div>
          <div className="delete-todo">x</div>
        </div>

        <div className="todo is-complete">
          <div className="checkbox"></div>
          <div className="text">complete the project</div>
          <div className="delete-todo">x</div>
        </div>

      </div>
    </div>
  );
}

export default App;
