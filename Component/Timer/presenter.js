import React, { Component } from 'react';
import {View,Text,StyleSheet,Platform,Modal,TouchableHighlight,StatusBar} from 'react-native';
import Button from '../Button';

function formatTimes(time) { //시간을 나타내기 위한 함수 이쁘게 보여주기 위해
    //시간 포맷 변경
    let minutes = Math.floor(time / 60);
    time -= minutes * 60;
    let seconds = parseInt(time % 60, 10);
    return `${ minutes < 10 ? `0${minutes}` : minutes } : ${seconds < 10 
        ? `0${seconds}`: seconds }`;
}

class Timer extends Component {
    //ComponentWillReceiveProps 함수를 통해 다음 props 값이 변경될때 이 함수를 실행한다.
    componentWillReceiveProps(nextProps) {
        //call whenever components get new props
        const currentProps = this.props;//현재 상태의 값을 가져온다 여기서 store를 통해서 가져온다.
        if(!currentProps.isPlaying && nextProps.isPlaying) {
            //start the interval
            const timerInterval = setInterval(()=>{
                currentProps.addSecond();
            }, 1000); //초를 추가한다.
            this.setState({
                timerInterval
            });
        } else if(currentProps.isPlaying && !nextProps.isPlaying) {
            //stop the interval
            clearInterval(this.state.timerInterval); //초를 없애고 메모리 초기화
        }

    }

  render() {
    const {isPlaying, elapsedTime, duration, startTimer, restartTimer, addSecond } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <View style={styles.upperView}>
          <Text style={styles.time}>
            {formatTimes(duration - elapsedTime)}
          </Text>
        </View>
        <View style={styles.lowerView}>
          { !isPlaying && (
            <Button iconName={'play-circle-o'} onPress={startTimer} />
          )}
          { isPlaying && (
            <Button iconName={'stop-circle-o'} onPress={restartTimer} />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0061ce',
    },
    upperView: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lowerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
    },
    time: {
        color: '#fff',
        fontSize: 120,
        ...Platform.select({
            ios: {
                fontWeight: '100',
            },
            android: {
                fontFamily: 'sans-serif-thin',
            },
        }),
    }
});


export default Timer;