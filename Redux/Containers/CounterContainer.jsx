import React from 'react';
import Counter from '../Component/counter';
import {connect} from 'react-redux';
import {increase,decrease} from '../modules/counter';

const CounterContainer = ({number,increase,decrease}) => {
    return <Counter number={number} onIncrease={increase} onDecrease={decrease} />;
}
console.log(decrease);

const mapStateToProps = state => ({
    number : state.counter.number
})

const mapDispatchToProps = dispatch =>({
    increase : () => {
       dispatch(increase());
    },
    decrease : () => {
       dispatch(decrease()); 
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CounterContainer);