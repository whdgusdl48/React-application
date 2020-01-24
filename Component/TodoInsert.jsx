import React,{useCallback} from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({onInsert}) =>{
    const [value,setValue] = React.useState('');
    const onChange = useCallback((e)=>{
        setValue(e.target.value);
    },[])
    const onSubmit = useCallback((e) => {
        onInsert(value);
        setValue('');
        e.preventDefault();
    },[onInsert,value])
    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input type="text" 
            placeholder="일정을 입력해주세요" 
            onChange={onChange}
            value = {value}/>
            <button>
                <MdAdd />
            </button>
        </form>
    );
}

export default TodoInsert;