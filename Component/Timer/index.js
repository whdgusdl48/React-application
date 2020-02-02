import {connect} from 'react-redux'; //connect를 통해 연결한다. 리듀서에 있는 함수들을 Timer에 옮긴다. 
import {bindActionCreators} from 'redux'; 
import {actionCreators as tomatoActions} from '../../reducer'; 
import Timer from './presenter';

function mapStateToProps(state){//컴포넌트의 현재 state를 불러온다.
    const {isPlaying,elapsedTime,duration} = state;
    return {
        isPlaying,
        elapsedTime,
        duration,
    }//props를 리턴해준다.
}
//mapStateToProps 함수를 생성을해서 connect를 통해 Timer에 상태를 전달해준다.

function mapDispatchToProps(dispatch){
    return{
        startTimer : bindActionCreators(tomatoActions.startTimer,dispatch), 
        restartTimer: bindActionCreators(tomatoActions.restartTimer,dispatch),
        addSecond : bindActionCreators(tomatoActions.addSecond,dispatch)
    };
}
//reducer.js에 있는 리듀서를 bindActionCreator를 통해 묶어줘서 dispatch형태로 전달해준다.
export default connect(mapStateToProps,mapDispatchToProps)(Timer);

