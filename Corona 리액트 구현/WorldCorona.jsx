import React, { Component } from 'react';
import ReactMapGL, { Marker, Popup, NavigationControl, FlyToInterpolator } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './WorldCorona.css';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
const style = theme => ({
    button : {
        position : 'fix',
        marginLeft : '1.6%'
    }
})
const Asia = [
    {location:[39.9035, 116.338]}, //중국
    {location:[22.4060834, 114.1201536]}, //홍콩
    {location:[25.0175862, 121.226193]}, //대만
    {location:[22.198745, 113.543873]}, // 마카오
    {location:[35.6684415, 139.6007845]}, //일본
    {location:[1.3447483, 103.85]}, //싱가포르
    {location:[13.7251088, 100.3529249]}, //태국
    {location:[3.138675, 101.6169]},//말레이시아
    {location:[21.013013, 105.781571]}, //베트남
    {location:[28.5768884, 77.1351626]}, //인도
    {location:[14.596654, 120.9095198]}, //필리핀
    {location:[11.5799023, 104.6099995]}, //캄보디아
    {location:[27.7090947, 85.2560929]}, //네팔
    {location:[55.5815245,36.82514]}, //러시아
    {location:[6.9219226, 79.821186]}, //스리랑카
    {location:[34.5539525, 68.9175489]}, //아프가니스탄
    {location:[33.616, 72.805]}, //파키스탄
    {location:[-6.2293867,106.6894336]}, //인도네시아
]

const centerAsia = [
    {location:[35.6970472,51.0696369]}, //이란
    {location:[29.3761354, 47.9468473]}, //쿠웨이트
    {location:[26.2266894, 50.5540068]}, //바레인
    {location:[24.3871984, 54.2784353]}, //아랍에미리트
    {location:[33.3119455, 44.075225]}, //이라크
    {location:[23.584387, 58.1434]}, //오만
    {location:[33.8684823, 35.4692629]}, //레바논
    {location:[31.7965337, 35.0352754]}, //이스라엘
    {location:[30.0596185, 31.1884245]}, //이집트
    {location:[36.7598666, 2.9964705]}, //알제리
    {location:[25.2842534, 51.37192]}, //카타르
]

const America = [
    {location:[38.89378, -77.154659]}, //미국
    {location:[45.2497533, -76.3606629]}, //캐나다
    {location:[-15.721387, -48.0774418]}, //브라질
    {location:[19.3911668, -99.4237988]}, //멕시코
    {location:[-0.1862504, -78.5706227]}, //에콰도르
    {location:[18.4865769, -70.01697642]}, //도미니카 공화국
]
const Europe = [
    {location:[41.9102416, 12.2558187]}, //이탈리아
    {location:[52.5063566, 12.8643413]}, //독일
    {location:[48.859, 2.2069779]}, //프랑스
    {location:[51.528308, 0]}, //영국
    {location:[40.4381311, -3.8196195]}, //스페인
    {location:[48.2208021, 16.0998836]}, //오스트리아
    {location:[45.8403496, 15.8242493]}, //크로아티아
    {location:[60.11021, 24.7385101]}, //핀란드
    {location:[59.3261917, 17.7018818]}, //스웨덴
    {location:[46.9548189, 7.2547879]}, //스위스
    {location:[50.8550625, 4.3053506]}, //벨기에
    {location:[55.6713812, 12.4537427]}, //덴마크
    {location:[59.471421, 24.4580708]}, //에스토니아
    {location:[41.7326314, 44.5586736]}, //조지아
    {location:[37.8025037, 23.6682997]}, //그리스
    {location:[41.99992603, 21.2848076]}, //북마케도니아
    {location:[59.8939021,10.5049461]}, //노르웨이
    {location:[44.4379853,25.9545551]}, //루마니아
    {location:[52.3547071, 4.623786]}, //네덜란드
    {location:[53.8847186, 27.313949]}, //벨라루스
    {location:[54.7007582, 24.9728605]}, //리투아니아
    {location:[43.9428566, 12.3900539]}, //산마리노
    {location:[40.3947774, 49.5747798]}, //아르제바이잔
    {location:[64.1335729, -21.9925224]}, //아이슬란드
    {location:[43.73785011, 7.418471]}, //모나코
    {location:[49.6054469, 6.0853387]}, //룩셈부르크
    {location:[40.1535684, 44.3484842]}, //아르메니아
    {location:[53.2992974, -6.525878]}, //아일랜드
    {location:[50.0597733, 14.1854484]}, //체코
    {location:[38.7437396, -9.2302429]}, //포르투칼
    {location:[56.9715357, 23.8489905]}, //라트비아
    {location:[42.5051154, 1.502856]}, //안도라
]
const Oseania = [    
    {location:[-35.3136188, 148.9898]}, //호주
    {location:[-41.244027, 174.6217729]}, //뉴질랜드
]
const Afreeca = [
    {location:[9.0549055, 7.1141693]}, //나이지리아
    ]
const cruise = [
    {location:[33.649659, 129.9837918]},
    ]
const MAP_TOKEN = 'pk.eyJ1Ijoiam9uZ2h5ZW9uOTU4NyIsImEiOiJjazdhcXBzc24xMmxjM3ByMXhqbGV3ZGNkIn0.CIctXVxWNCJpxbScs3P0LA';
class Mapbox extends Component{
    constructor(props){
        super(props);
        this.state = {
            viewport : { 
                latitude: 0,
                longitude: 0,
                width: '100vw',
                height: '100vh',
                zoom: 1.5
            },
            selectedStore : null,
            country : null
        }
    }
    componentDidMount() {
        this.timer = setInterval(this.progress, 20);
        this.callApi()
        .then((res) => this.setState({country : res})).catch(err => console.log(err));
    }
    callApi = async () => {
        const response = await fetch('/api/World1');
        const body = await response.json();
        let i = 0;
        for(i;i<Asia.length;i++){
            body[i]['location'] = Asia[i].location;
        }
        for(var j = 0;j<centerAsia.length;j++){
            body[i]['location'] = centerAsia[j].location;
            i++;
        }
        for(var j = 0;j<America.length;j++){
            body[i]['location'] = America[j].location;
            i++;
        }
        for(var j = 0;j<Europe.length;j++){
            body[i]['location'] = Europe[j].location;
            i++;
        }
        for(var j = 0;j<Oseania.length;j++){
            body[i]['location'] = Oseania[j].location;
            i++;
        }
        for(var j = 0;j<Afreeca.length;j++){
            body[i]['location'] = Afreeca[j].location;
            i++;
        }
        for(var j = 0;j<cruise.length;j++){
            body[i]['location'] = cruise[j].location;
            i++;
        }
        body.pop();
        return body;
    }

    GoToAsia = () => {
        this.setState({
            viewport : { 
                latitude: 22.198745,
                longitude: 113.543873,
                width: '100vw',
                height: '100vh',
                zoom: 3.3
            },
        })
    }
    GoToEurope = () => {
        this.setState({
        
            viewport : { 
                latitude: 50.0597733,
                longitude:  14.1854484,
                width: '100vw',
                height: '100vh',
                zoom: 3.3
            },
        })
    } 
    GoToAmerica = () => {
        this.setState({
            viewport : { 
                latitude: 19.3911668,
                longitude: -99.4237988,
                width: '100vw',
                height: '100vh',
                zoom: 3.3
            },
        })
    }
    GoToCenter = () => {
        this.setState({
            viewport : { 
                latitude: 29.3761354,
                longitude: 47.9468473,
                width: '100vw',
                height: '100vh',
                zoom: 3.3
            },
        })
    } 
    GoToOseania = () => {
        this.setState({
            viewport : { 
                latitude: -35.3136188,
                longitude: 148.9898,
                width: '100vw',
                height: '100vh',
                zoom: 3.3
            },
        })
    }
    GoToAfrica = () => {
        this.setState({
            viewport : { 
                latitude:  9.0549055,
                longitude: 7.1141693,
                width: '100vw',
                height: '100vh',
                zoom: 3.3
            },
        })
    }
   
    render(){
        const {viewport,selectedStore} = this.state;
        const {classes} = this.props;
        return (
            <div className="Mapbox">
        
                
                <ReactMapGL
                    {...viewport}
                    mapboxApiAccessToken={MAP_TOKEN}
                    transitionInterpolator={new FlyToInterpolator()}
                    mapStyle='mapbox://styles/mapbox/satellite-v9'
                    onViewportChange={(viewport) => {
                        this.setState({viewport :viewport})
                    }}
                >
                    <div className="navi-control">
                        <NavigationControl />
                    </div>
                    <Button variant="contained" color="primary" className={classes.button} onClick={this.GoToAsia}>아시아</Button>
                    <Button variant="contained" color="primary" className={classes.button} onClick={this.GoToEurope}>유럽</Button>
                    <Button variant="contained" color="primary" className={classes.button} onClick={this.GoToCenter}>중동</Button>
                    <Button variant="contained" color="primary" className={classes.button} onClick={this.GoToAmerica}>아메리카</Button>
                    <Button variant="contained" color="primary" className={classes.button} onClick={this.GoToOseania}>오세아니아</Button>
                    <Button variant="contained" color="primary" className={classes.button} onClick={this.GoToAfrica}>아프리카</Button>
                    {
                    this.state.country !== null ? 
                        this.state.country.map((country, i) => (
                           
                            <Marker
                                key={i}
                                latitude={country.location[0]}
                                longitude={country.location[1]}
                            >
                                <button
                                    className="btn-marker"
                                    onClick={() => this.setState({selectedStore : country})}
                                />
                            </Marker>
                        )) : ''
                    } 
                    {
                        selectedStore && (
                            <Popup
                                offsetLeft={10}
                                latitude={selectedStore.location[0]}
                                longitude={selectedStore.location[1]}
                                onClose={() => this.setState({selectedStore : null})}
                            >
                                <div>{selectedStore.name + selectedStore.number}</div>
                            </Popup>
                        )
                    }
    
    
    
                </ReactMapGL>
            </div>
        );
    }
    
};
export default withStyles(style)(Mapbox);
