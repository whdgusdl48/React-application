import React,{Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import SeoulList from './SeoulList';
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
        const response = await fetch('/api/Seoul1');
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
                    {`현재 서울 확진자 ${this.state.number.확진자}명 검사중 ${this.state.number.검사중}명 자가격리자 ${this.state.number.자가격리자}명`}
                </div>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>번호</TableCell>
                                <TableCell>환자</TableCell>
                                <TableCell>확진일</TableCell>
                                <TableCell>성별</TableCell>
                                <TableCell>거주지</TableCell>
                                <TableCell>여행력</TableCell>
                                <TableCell>접촉력</TableCell>
                                <TableCell>조치사항</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.list?
                                this.state.list.map(c => {
                                    return <SeoulList list={c} />
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
