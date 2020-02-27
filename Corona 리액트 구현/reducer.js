const SEOUL = 'SEOUL';
const INCHEON = 'INCHEON';
const DAEJEON = 'DAEJEON';
const DAEGU = 'DAEGU'
const BUSAN = 'BUSAN';
const ULSAN = 'ULSAN';
const GWANGJU = 'GWANGJU'
const KYUNGGI = 'KYUNGGI';
const CHUNGCHUNG = 'CHUNGCHUNG';
const KANGWON = 'KANGWON';
const KYUNGSANG = 'KYUNGSANG';
const JEONNA = 'SJEONNA';
const CORONA = 'CORONA';
const CORONA_SYMPTOM = 'CORONA_SYMPTOM';
const CORONA_COPE = 'CORONA_COPE';
const WORLD_CORONA = 'WORLD_CORONA';

function seoul(){
    return{
        type:SEOUL
    }
}

function daegu(){
    return{
        type:DAEGU
    }
}

function gwangju(){
    return{
        type:GWANGJU
    }
}

function daejeon(){
    return{
        type:DAEJEON
    }
}
function incheon(){
    return{
        type:INCHEON
    }
}
function busan(){
    return{
        type:BUSAN
    }
}
function ulsan(){
    return{
        type:ULSAN
    }
}
function kyunggi(){
    return{
        type:KYUNGGI
    }
}
function chungchung(){
    return{
        type:CHUNGCHUNG
    }
}
function kangwon(){
    return{
        type:KANGWON
    }
}
function kyungsang(){
    return{
        type : KYUNGSANG
    }
}

function jeonna(){
    return{
        type : JEONNA
    }
}

function corona(){
    return {
        type : CORONA
    }
}

function corona_sym(){
    return{
        type : CORONA_SYMPTOM
    }
}

function corona_cop(){
    return{
        type : CORONA_COPE
    }
}

function world(){
    return{
        type: WORLD_CORONA
    }
}

const initialState = {
    explain : '',
    list : ''
}

function reducer(state = initialState,action){
    switch(action.type){
        case SEOUL:
            return applySeoul(state);
        case DAEJEON:
            return applyDaejeon(state);
        case GWANGJU:
            return applyGwangju(state);   
        case DAEGU:
            return applyDaegu(state);
        case BUSAN:
            return applyBusan(state);    
        case INCHEON:
            return applyIncheon(state);
        case ULSAN:
            return applyulsan(state);    
        case KYUNGGI:
            return applykyunggi(state);
        case KANGWON:
            return applyKangwon(state);    
        case KYUNGSANG:
            return applyKyungsang(state);
        case JEONNA:
            return applyJeonna(state);    
        case CHUNGCHUNG:
            return applyChungchung(state);
        case CORONA:
            return applyCorona(state);    
        case CORONA_SYMPTOM:
            return applyCoronaSymptom(state);
        case CORONA_COPE:
            return applyCoronaCope(state);    
        case WORLD_CORONA:
            return applyWorldCorona(state);
        default :
            return state;       
    }
}

function applySeoul(state){
    return{
        ...state,
        explain : '현재 서울 감염',
        list : '서울'
    }
}

function applyDaejeon(state){
    return{
        ...state,
        explain : '',
        list : '대전'
    }
}
function applyDaegu(state){
    return{
        ...state,
        explain : '',
        list : '대구'
    }
}
function applyBusan(state){
    return{
        ...state,
        explain : '',
        list : '부산'
    }
}
function applyGwangju(state){
    return{
        ...state,
        explain : '',
        list : '광주'
    }
}
function applyulsan(state){
    return{
        ...state,
        explain : '',
        list : '울산'
    }
}
function applyIncheon(state){
    return{
        ...state,
        explain : '',
        list : '인천'
    }
}
function applykyunggi(state){
    return{
        ...state,
        explain : '',
        list : '경기도'
    }
}
function applyKangwon(state){
    return{
        ...state,
        explain : '',
        list : '강원도'
    }
}
function applyKyungsang(state){
    return{
        ...state,
        explain : '',
        list : '경상도'
    }
}
function applyChungchung(state){
    return{
        ...state,
        explain : '',
        list : '충청도'
    }
}
function applyJeonna(state){
    return{
        ...state,
        explain : '',
        list : '전라도'
    }
}

function applyCorona(state){
    return{
        ...state,
        explain : '코로나는 중국에서부터',
        list : '코로나란?'
    }
}

function applyCoronaSymptom(state){
    return{
        ...state,
        explain : '',
        list : '코로나 증상'
    }
}
function applyCoronaCope(state){
    return{
        ...state,
        explain : '',
        list : '코로나 대처'
    }
}
function applyWorldCorona(state){
    return{
        ...state,
        explain : '',
        list : '세계 코로나 발병 현황'
    }
}

const actionCreators = {
    seoul,daegu,daejeon,busan,ulsan,incheon,gwangju,kyunggi,kangwon,chungchung,jeonna,kyungsang,corona,corona_cop,corona_sym,world
}

export {actionCreators};

export default reducer;