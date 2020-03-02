import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
const style = theme => ({
    root : {
        marginLeft : '35%'
    }
})
class CoronaCop extends Component{
    constructor(props){
        super(props);
        this.state = {
            explain : false,
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

    render(){
        const {classes} = this.props;
        return(
            <div className={classes.root}>
             <h2>
                 코로나 예방수칙
             </h2>
             <img src="http://blogfiles.naver.net/MjAyMDAxMjlfMzcg/MDAxNTgwMjczNjM5MTQy.Bx4bw_V5V6_l6Waf_cmsWDm50WJIWX54r11JYLpOQ4kg.iho3Q6SDRhpZ9G5VQU-H1wlDJHyG3UJkn7PpUbRhzCsg.JPEG.ariacarebukgajwa/%28%B1%B9%B9%AE%29%B1%E4%B1%DE_%C7%D8%BF%DC%B0%A8%BF%B0%BA%B4_%C6%F7%BD%BA%C5%CD_200128.jpg" />
            </div>
        )
    }
}

export default withStyles(style)(CoronaCop);