import React,{useCallback,useContext} from 'react';
import  {CLICK_BTN, TableContext} from './CheckMemo';

const Form =() =>{
    const {dispatch} = useContext(TableContext);

    const on = useCallback((e) =>{
        e.preventDefault();
        dispatch({type:CLICK_BTN});
    },[]);

    return(
        <form>
      <input type="text" />
      <button onClick={on}>제출</button>
    </form>
    )
}

export default Form;