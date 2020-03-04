import React,{Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import KyungKiList from './KyungKiList';
const styles = theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing.unit * 3,
        overflowX: "auto"
    },
    table: {
        minWidth: 1080,
    },
    progress: {
        margin: theme.spacing.unit * 2
    }

});

class KyungKi extends Component{
    state = {
        list: '',
        complete: 0,
        number : ''
    }
    componentDidMount() {
        this.timer = setInterval(this.progress, 20);
        this.callApi()
        .then((res) => {this.setState({list : res})}).catch(err => console.log(err));
        this.callApi2()
        .then((res) => {this.setState({number : res})}).catch(err => console.log(err));
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    callApi = async () => {
        const response = await fetch('/api/Kyungki');
        const body = await response.json();
        return body;
    }
    callApi2 = async () => {
        const response2 = await fetch('/api/Kyungki2');
        const body2 = await response2.json();
        return body2[0];
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <div>
                    <br/>
                    {`현재 경기도 확진자 ${this.state.number.입원환자}명 격리해제 ${this.state.number.퇴원자}명 사망자 ${this.state.number.사망자}명`}
                    <br/>
                    <a href="http://ncov.mohw.go.kr/bdBoardList_Real.do">경기도 확진자 이동경로 파악하기</a>
                    <br />
                </div>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>번호</TableCell>
                                <TableCell>확진자</TableCell>
                                <TableCell>성별</TableCell>
                                <TableCell>출생연도</TableCell>
                                <TableCell>확진일자</TableCell>
                                <TableCell>퇴원</TableCell>
                                <TableCell>지역</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {this.state.list?
                                this.state.list.map(c => {
                                    return <KyungKiList list={c} />
                                }) :
                                <TableRow>
                                    <TableCell colSpan="6" align="center">
                                        <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed} />
                                    </TableCell>
                                </TableRow>
                            }
                        </TableBody>
                    </Table>
                </Paper>
                
            </div>

        )
    }
}

export default withStyles(styles)(KyungKi);