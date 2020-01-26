import React, {useContext} from 'react';
import {TableContext , CLICK_LI} from './CheckMemo';



const Li = () => {

  const { dispatch } = useContext(TableContext);
  const on = () => {
    dispatch({type:CLICK_LI});
  }
    return(
      <>
        <li onClick={on} ></li>
      </>
    );

}

export default Li;