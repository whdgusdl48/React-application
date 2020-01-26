import React, {useContext} from 'react';
import { TableContext } from './CheckMemo';
import Li from './Li';

const Ul = () => {

  const { dispatch,message} = useContext(TableContext);
  console.log(message);
 
    return(

        <ul>
          <Li dispatch={dispatch}/>
        </ul>

    );
}

export default Ul;