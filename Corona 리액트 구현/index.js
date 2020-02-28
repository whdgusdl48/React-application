import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 
import {actionCreators} from '../reducer'; 
import Corona from './Corona.jsx';

function mapStateToProps(state){
    const {explain,list} = state;
    return{
        explain,
        list
    }
}

function mapDispatchToProps(dispatch){
    return{
        seoul : bindActionCreators(actionCreators.seoul,dispatch),
        daegu : bindActionCreators(actionCreators.daegu,dispatch),
        daejeon : bindActionCreators(actionCreators.daejeon,dispatch),
        busan : bindActionCreators(actionCreators.busan,dispatch),
        ulsan : bindActionCreators(actionCreators.ulsan,dispatch),
        incheon : bindActionCreators(actionCreators.incheon,dispatch),
        gwangju : bindActionCreators(actionCreators.gwangju,dispatch),
        kyunggi : bindActionCreators(actionCreators.kyunggi,dispatch),
        kangwon : bindActionCreators(actionCreators.kangwon,dispatch),
        chungchung : bindActionCreators(actionCreators.chungchung,dispatch),
        jeonna : bindActionCreators(actionCreators.jeonna,dispatch),
        kyungsang : bindActionCreators(actionCreators.kyungsang,dispatch),
        corona : bindActionCreators(actionCreators.corona,dispatch),
        corona_cop : bindActionCreators(actionCreators.corona_cop,dispatch),
        corona_sym : bindActionCreators(actionCreators.corona_sym,dispatch),
        world : bindActionCreators(actionCreators.world,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Corona);