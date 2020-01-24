import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList =({todos,onRemove,onToggle})=>{
    console.log(todos.length);
    
    return(
        <div className="TodoList">
            {todos.map((i) => {
                return(<TodoListItem todo={i} key={i.id} onRemove={onRemove} onToggle={onToggle}/>);
            })}
        </div>
    )
}

export default TodoList;