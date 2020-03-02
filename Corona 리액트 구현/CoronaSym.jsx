import React,{Component} from 'react';
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
        marginRight : '10px',
        marginLeft : '10px'
    },
    bold : {
        fontWeight : 'bold'
    },
    image : {
         width : '50%',
         height : '40%'
    }

})
class CoronaSym extends Component{
    constructor(props){
        super(props);
        this.state ={
            explain : false,
            explain : false,
        }
    }
    onclick = () => {
        if(this.state.explain === true){
            this.setState({
                explain : false,
            })
        }
        else{
            this.setState({
                explain : true,
            })
        }
    }
    onclick2 = () => {
        if(this.state.explain2 === true){
            this.setState({
                explain2 : false,
            })
        }
        else{
            this.setState({
                explain2 : true,
            })
        }
    }

    render(){
        const {classes} = this.props;
        return(
            <div>
                <Button variant="contained" color="primary" onClick={this.onclick} className={classes.button}>증상</Button>
                <Button variant="contained" color="secondary" onClick ={this.onclick2}>시간별 증상</Button>
                {this.state.explain === true ? 
                <div className={classes.root}>
                <h2>증상</h2>
                <p >
                코로나19에 감염되면 약 <strong>2~14일(추정)의 잠복기</strong>를 거친 뒤 <strong>발열(37.5도) 및 기침이나 호흡곤란 등 호흡기 증상, 폐렴</strong>이 주증상으로 나타난다.
                또 근육통과 피로감, 설사 증상이 나타나기도 하지만, 드물게 무증상 감염 사례도 있다. 
                실제로 세계보건기구(WHO)는 2월 1일 무증상 감염자의 전파 가능성을 재차 밝혔으며, 다만 무증상 감염자의 전파는 드물 수 있으며 주요 전염 경로가 아닐 수 있다고 알렸다. 
                또 우리 보건복지부도 2월 2일 코로나19는 무증상·경증 환자에서 감염증이 전파되는 경우도 나타나고 있다며,
                해당 증상들은 차도가 좋아지기도 하지만 일부에서 중증 폐렴을 유발할 가능성이 있어 주의가 요구된다고 밝혔다. 
                </p>
                </div> : ''}
                {
                this.state.explain2 === true ?
                
                <div className={classes.root}>
                    <h2>시간별 증상</h2>  
                    <Paper >
                    <Table className={classes.table}>
                        <TableRow>
                                <TableCell className={classes.bold}>초기 증상</TableCell>
                                <TableCell> 마른기침이 대부분 코 간지러움</TableCell>  
                        </TableRow>
                        <TableRow>
                                <TableCell className={classes.bold}>잠복기 </TableCell>
                                <TableCell>2~14일 (추정)</TableCell>  
                        </TableRow>
                        <TableRow>
                                <TableCell className={classes.bold}>주요 증상 </TableCell>
                                <TableCell>발열 및 기침이나 호흡곤란 증상</TableCell>  
                        </TableRow>
                        <TableRow>
                                <TableCell className={classes.bold}>심한 증상</TableCell>
                                <TableCell>객혈 및 혈액검사상, 림프구감소증, 백혈구 감소증</TableCell>  
                        </TableRow>
                        <TableRow>
                                <TableCell className={classes.bold}>사망</TableCell>
                                <TableCell>대부분 폐 기저환자이며 폐의 염증으로 인한 대부분 세포사망</TableCell>  
                        </TableRow>
                    </Table>
                </Paper>
                
                </div>
                 : ''}
                 <i>출처 : 네이버 지식사전</i>
            </div>
        )
    }
}

export default withStyles(style)(CoronaSym);