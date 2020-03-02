import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
const style = theme => ({
    root : {
        width : '50%',
        marginLeft : '10px',
        lineHeight : '160%'
    },
    button : {
        marginRight : '10px'
    },
    bold : {
        fontWeight : 'bold'
    },
    image : {
         width : '100%',
         height : '80%'
    }

})
class CoronaExplain extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            explain : false,
            explain2 : false,
        }
    }
   onclick = () => {
        if(this.state.explain === true){
            this.setState({
                explain : false
            })
        }
        else{
            this.setState({
                explain : true
            })
        }
    }
    onclick2 = () => {
        if(this.state.explain2 === true){
            this.setState({
                explain2 : false
            })
        }
        else{
            this.setState({
                explain2 : true
            })
        }
    }
    render(){
        const {classes} = this.props;
        return(
            <div className={classes.root}>
              <Button variant="contained" color="primary" onClick={this.onclick} className={classes.button}>감염병 정보</Button>
              <Button variant="contained" color="secondary" onClick={this.onclick2} className={classes.button}>전염 </Button>

                {this.state.explain === true ? 
                <div>
                <h2>감염병 정보</h2>
                <p >
                2019년 12월 중국 우한에서 처음 발생한 뒤 전 세계로 확산된, 새로운 유형의 코로나바이러스(SARS-CoV-2)에 의한 호흡기 감염질환이다. 
                코로나바이러스감염증-19는 감염자의 비말(침방울)이 호흡기나 눈·코·입의 점막으로 침투될 때 전염된다. 
                감염되면 약 2~14일(추정)의 잠복기를 거친 뒤 발열(37.5도) 및 기침이나 호흡곤란 등 호흡기 증상, 폐렴이 주증상으로 나타나지만 무증상 감염 사례도 드물게 나오고 있다.
                <br /> <br />
                (병원체) 코로나바이러스감염증-19(COVID-19)<br/>
                (감염원) 동물로 추정하고 조사중<br/>
                (전파경로)동물 → 사람 → 사람 전파 추정<br/>
                    사람간 전파는 비말(호흡기 분비물) 전파 추정
                    가족간, 의료기관 내 2차감염 확인<br/>
                (임상증상) 발열, 호흡기증상(기침, 호흡곤란), 폐렴   
                </p>
                <Paper >
                    <Table className={classes.table}>
                        <TableRow>
                                <TableCell className={classes.bold}>외국어 표기</TableCell>
                                <TableCell> virus disease 19 또는 COVID-19(영어)</TableCell>  
                        </TableRow>
                        <TableRow>
                                <TableCell className={classes.bold}>최초 발생 </TableCell>
                                <TableCell>2019년 12월 중국 후베이(湖北)성 우한(武漢)</TableCell>  
                        </TableRow>
                        <TableRow>
                                <TableCell className={classes.bold}>잠복기 </TableCell>
                                <TableCell>2~14일 (추정)</TableCell>  
                        </TableRow>
                        <TableRow>
                                <TableCell className={classes.bold}>감염 주요 증상 </TableCell>
                                <TableCell>발열(37.5°C 이상), 호흡기증상(기침, 인후통 등), 폐렴</TableCell>  
                        </TableRow>
                        <TableRow>
                                <TableCell className={classes.bold}>치료 </TableCell>
                                <TableCell>아직 백신이나 치료제는 없음. 따라서 환자의 증상에 따른 대증치료 진행 </TableCell>  
                        </TableRow>
                    </Table>
                </Paper>
                 </div> : ''
                 }
                 {
                     this.state.explain2 === true ? 
                     <div>
                     <h2>전염 정보</h2>
                         <p>
                         코로나바이러스감염증-19(코로나19)는 감염자의 비말(침방울)이 호흡기나 눈·코·입의 점막으로 침투될 때 전염된다. 
                         여기서 비말감염은 감염자가 기침·재채기를 할 때 침 등의 작은 물방울(비말)에 바이러스·세균이 섞여 나와 타인에게 감염되는 것으로 통상 이동거리는 2m로 알려져 있다. 
                         눈의 경우 환자의 침 등이 눈에 직접 들어가거나, 바이러스에 오염된 손으로 눈을 비비면 눈을 통해 전염될 수 있다. 
                         여기에 중국 당국은 2월 19일 공기 중에 떠 있는 고체 또는 액체 미립자, 즉 에어로졸에 의한 코로나19의 전파 가능성을 처음 인정한 바 있다.  
                         </p>
                         <img className={classes.image} src='https://post-phinf.pstatic.net/MjAyMDAzMDJfMjY4/MDAxNTgzMTE0OTYxNjU1.LDOBpXECs7YzzsSwOA_wq1J23FjJDIjehSWex0xLBvkg.7sUBECWEOstrpeKUdN1sUpt8lmJYhPN1dI7kpWmtIfMg.JPEG/GettyImages-1208336238.jpg?type=w1200'></img>
                     </div>
                  
                 : ''}
                 <i>출처 : 네이버 지식사전</i>
            </div>
            
            
        )
    }
   
}

export default withStyles(style)(CoronaExplain);