import React,{Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import GwangjooList from './GwangjooList';
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

class Gwangjoo extends Component{
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
        const response = await fetch('/api/Gwangjoo');
        const body = await response.json();
        return body;
    }
    callApi2 = async () => {
        const response2 = await fetch('/api/Busan2');
        const body2 = await response2.json();
        return body2[0];
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <div>
                    <br/>
                    {`현재 광주 확진자 ${this.state.list.length}` }
                    <br/>
                    <a href="https://www.gwangju.go.kr/">광주광역시 이동경로 파악하기</a>
                    <br />

                </div>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>확진자번호</TableCell>
                                <TableCell>인적사항</TableCell>
                                <TableCell>확진경위</TableCell>
                                <TableCell>확진일</TableCell>
                                <TableCell>접촉</TableCell>
                                <TableCell>격리시설</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {this.state.list?
                                this.state.list.map(c => {
                                    return <GwangjooList list={c} />
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

export default withStyles(styles)(Gwangjoo);