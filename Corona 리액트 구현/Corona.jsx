import React from 'react';
import Seoul from './Seoul/Seoul';
import Daejeon from './DaeJeon/Daejeon';
import Daegu from './Daegu/Daegu';
import Busan from './Busan/Busan';
import Gwangjoo from './Gwangjoo/Gwangjoo';
import Ulsan from './Ulsan/Ulsan';
import Incheon from './Incheon/Incheon';
import KyungKi from './KyungKi/KyungKi';
import CoronaExplain from './CoronaExplain';
import CoronaSym from './CoronaSym';
import CoronaCop from './CoronaCop';
import WorldCorona from './WorldCorona';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import './Corona.css';
const style = theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    root: {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
        width : '100%',
        backgroundColor : '',
        height: '65px'
    },
    hover: {
        "&:hover": {
            backgroundColor: 'rgb(7, 177, 77, 0.42)'
          }
      }
})
class Corona extends React.Component {
    callList = () => {
        if (this.props.list == '서울') {
            return (<Seoul />)
        }
        else if (this.props.list == '대전') {
            return (<Daejeon />)
        }
        else if (this.props.list == '대구') {
            return (<Daegu />)
        }
        else if (this.props.list == '부산') {
            return (<Busan />)
        }
        else if (this.props.list == '광주') {
            return (<Gwangjoo />)
        }
        else if (this.props.list == '울산') {
            return (<Ulsan />)
        }
        else if (this.props.list == '인천') {
            return (<Incheon />)
        }
        else if (this.props.list == '코로나란?') {
            return (<CoronaExplain />)
        }
        else if (this.props.list == '코로나 증상') {
            return (<CoronaSym />)
        }
        else if (this.props.list == '코로나 대처') {
            return (<CoronaCop />)
        }
        else if (this.props.list == '세계 코로나 발병 현황') {
            return (<WorldCorona />)
        }
        else if (this.props.list == '경기도'){
            return (<KyungKi />)
        }
    }
    render() {
        const { seoul, daegu, daejeon, busan, ulsan, incheon, gwangju, kyunggi, kangwon, chungchung, jeonna, kyungsang, corona, corona_cop, corona_sym, world, classes } = this.props;
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <i className="material-icons"> </i>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            코로나바이러스(COVID-19)
                         </Typography>
                        <Button color="inherit">Created By Beak</Button>
                    </Toolbar>
                </AppBar>
                <List hover component="nav" className={classes.root} aria-label="contacts">
                    <ListItem button className={classes.hover}>
                        <ListItemText primary="서울" onClick={seoul} />
                    </ListItem>
                    <ListItem button className={classes.hover}>
                        <ListItemText primary="대전" onClick={daejeon} />
                    </ListItem>
                    <ListItem button className={classes.hover}>
                        <ListItemText primary="대구" onClick={daegu} />
                    </ListItem>
                    <ListItem button className={classes.hover}>
                        <ListItemText primary="부산" onClick={busan} />
                    </ListItem>
                    <ListItem button className={classes.hover}>
                        <ListItemText primary="광주" onClick={gwangju} />
                    </ListItem>
                    <ListItem button className={classes.hover}>
                        <ListItemText primary="울산" onClick={ulsan} />
                    </ListItem>
                    <ListItem button className={classes.hover}>
                        <ListItemText primary="인천" onClick={incheon} />
                    </ListItem>
                    <ListItem button className={classes.hover}>
                        <ListItemText primary="경기도" onClick={kyunggi} />
                    </ListItem>
                    <ListItem button className={classes.hover}>
                        <ListItemText primary="경상도" onClick={kyungsang} />
                    </ListItem>
                    <ListItem button className={classes.hover}>
                        <ListItemText primary="전라도" onClick={jeonna} />
                    </ListItem>
                    <ListItem button className={classes.hover}>
                        <ListItemText primary="충청도" onClick={chungchung} />
                    </ListItem>
                    <ListItem button className={classes.hover}>
                        <ListItemText primary="강원도" onClick={kangwon} />
                    </ListItem>
                    <ListItem button className={classes.hover}>
                        <ListItemText primary="코로나란?" onClick={corona} />
                    </ListItem>
                    <ListItem button className={classes.hover}>
                        <ListItemText primary="코로나 증상" onClick={corona_sym} />
                    </ListItem>
                    <ListItem button className={classes.hover}>
                        <ListItemText primary="코로나 대처" onClick={corona_cop} />
                    </ListItem>
                    <ListItem button className={classes.hover}>
                        <ListItemText primary="세계 코로나 현황" onClick={world} />
                    </ListItem>

                </List>
                <div>
                    {this.callList()}
                </div>
            </div>

        )
    }
}

export default withStyles(style)(Corona);