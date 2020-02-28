import React from 'react';
import Seoul from './Seoul/Seoul';
import Daejeon from './DaeJeon/Daejeon';
class Corona extends React.Component{
    callList = () => {
        if(this.props.list == '서울'){
            return(
                <Seoul />
            )
        }
        else if(this.props.list == '대전'){
            return(
                <Daejeon />
            )
        }
    }
    render(){
        const {explain,list,seoul,daegu,daejeon,busan,ulsan,incheon,gwangju,kyunggi,kangwon,chungchung,jeonna,kyungsang,corona,corona_cop,corona_sym,world} = this.props;
        return(
            <div>
                <div>
                <li onClick={seoul}>서울 </li> 
                <li onClick={daejeon}>대전</li>
                <li onClick={daegu}>대구</li>
                <li onClick={busan}>부산</li>
                <li onClick={gwangju}>광주</li>
                <li onClick={ulsan}>울산</li>
                <li onClick={incheon}>인천</li>
                <li onClick={kyunggi}>경기도</li>
                <li onClick={kyungsang}>경상도</li>
                <li onClick={jeonna}>전라도</li>
                <li onClick={chungchung}>충청도</li>
                <li onClick={kangwon}>강원도</li>
                <li onClick={corona}>코로나란?</li>
                <li onClick={corona_sym}>코로나 증상</li>
                <li onClick={corona_cop}>코로나 대처</li>
                <li onClick={world}>세계 코로나 현황</li>
                </div>
                <br />
                <br/>
                <div>
                    {this.callList()}
                </div>
            </div>
          
        )
    }
}

export default Corona;