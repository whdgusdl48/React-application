import React from 'react';
import Timer from './Component/Timer/index';
import reducer from './reducer'; // 리듀서 함수 이용을 위해 구현
import {createStore} from 'redux'; //store로 저장하기 위해 구현
import {Provider} from 'react-redux'; //리덕스를 사용하기위해 Provider를 이용해야함

let store = createStore(reducer);//리듀서 함수를 통해 store 구현
export default class App extends React.Component{
  render(){
    return(
      <Provider store={store}> 
        <Timer />
      </Provider>
    )
  }
}
//Provider를 통해 store값을 전달 이제 여기서 initialState가 변경되면 store가 처리해준다.