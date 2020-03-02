import React,{Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import IncheonList from './IncheonList';

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

class Seoul extends Component {
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
        const response = await fetch('/api/Incheon');
        const body = await response.json();
        return body;
    }

    callApi2 = async () => {
        const response2 = await fetch('/api/Seoul2');
        const body2 = await response2.json();
        return body2[0];
    }

    progress = () => {
        const {complete} = this.state;
        this.setState({complete : complete >= 100 ? 0 : complete + 1})
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <div>
                    <br/>
                    {`현재 인천 확진자 ${this.state.list.length}명`}
                    <p>
                        <a href ="https://www.incheon.go.kr/corona19/IC010001">인천 확진자 동선 파악하기</a>
                    </p>
                </div>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>환자번호</TableCell>
                                <TableCell>성별/나이</TableCell>
                                <TableCell>최초 증상일</TableCell>
                                <TableCell>주요 증상</TableCell>
                                <TableCell>퇴원</TableCell>
                                <TableCell>비고</TableCell>    
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.list?
                                this.state.list.map(c => {
                                   return(
                                       <IncheonList list={c} />
                                   )
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

export default withStyles(styles)(Seoul);
