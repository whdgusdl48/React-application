const START_TIMER = 'START_TIMER';
const RESTART_TIMER = 'RESTART_TIMER';
const ADD_SECONDS = 'ADD_SECONDS'; //이름을 정의한다.

//ACTION CREATERS
//각각의 dispatch를 실행할 함수를 정의한다.
function startTimer() {
    return{
        type: START_TIMER
    }
} // reduce함수에 type을 전달한다. 

function restartTimer(){
    return{
        type : RESTART_TIMER
    }
}

function addSecond(){
    return{
        type : ADD_SECONDS
    }
}

//Reducer

const TIME_DURATION = 3000; //초기 시간을 정의한다.

const initialState = {
    isPlaying : false,
    elapsedTime : 0,
    duration : TIME_DURATION
}
//초기상태 정의

function reducer(state=initialState,action){ //여기에서 state 매개변수를 initialState로 설정한 후 action 매개변수 함수를 받는다.
    switch(action.type){
        case START_TIMER://startTIMER 를 받으면 밑에함수를 리턴해준다.
            return applyStartTimer(state);
        case RESTART_TIMER:
            return applyReStartTimer(state);
        case ADD_SECONDS:
            return applyAddSecond(state)     
        default:
            return state;//
    }
}

//Reducer Function 즉 리턴값을 가질 함수 정의 액션타입을 받게되면 밑에 함수들을 실행한다. 

function applyStartTimer(state){
    return{
        ...state,
        isPlaying : true,
    }
}

function applyReStartTimer(state){
    return{
        ...state,
        isPlaying : false,
        elapsedTime : 0
    }
}

function applyAddSecond(state){
  if(state.elapsedTime < TIME_DURATION){
      return{
          ...state,
          elapsedTime : state.elapsedTime + 1
      }
  }
  else{
      return{
          ...state,
          isPlaying : false
      }
  }
}

//Export Action Creators

const actionCreators = {
    startTimer,
    restartTimer,
    addSecond
}
// 이 함수들을 바깥으로 빼낸다. 여기서는 디스패치역할을 할 함수들을 빼낸다.

export {actionCreators};
//Export reducer
export default reducer;