import React,{useCallback} from 'react';
import TodoTemplate from './Component/TodoTemplate';
import TodoInsert from './Component/TodoInsert';
import TodoList from './Component/TodoList';
const App = () =>{
  const [todos,setTodos] = React.useState([
    {
      id : 1,
      text : '정현수',
      checked : true,
    },
    {
      id : 2,
      text : '김충환',
      checked : true,
    },
    {
      id : 3,
      text : '이수빈',
      checked : false,
    },
  ]);

  const nextId = React.useRef(4);

  const onInsert = useCallback(
    (text)=>{
      const todo = {
        id : nextId.current,
        text,
        checked:false,
      }
      setTodos(todos.concat(todo));
      nextId.current += 1;
  },[todos]);

  const onRemove = useCallback((id) => {
    setTodos(todos.filter(todo=>todo.id !== id));
  },[todos]);

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map(todo => 
      todo.id === id ? {...todo,checked : !todo.checked} : todo
      ),
    );
  },[todos]);
   

  return(
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    </div>
  )
}

export default App;
