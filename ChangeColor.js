import React,{Component} from "react";
class ChangeColor extends Component{
    constructor(props){
        super(props);
        this.state={
            color:'#FF0FF0',
        }
    }
    redHandler=()=>{
       this.setState({color:'#FF0000'});
    }
    greenHandler=()=>{
        this.setState({color:'#00FF00'});
    }
    blueHandler=()=>{
        this.setState({color:'#0000FF'});
    }
    render(){
        return(
            <div>
                <h1 style={{color:this.state.color}}>
                    TextColor
                </h1>
                <button type="submit" onClick={this.redHandler}>Red</button>
                &nbsp;&nbsp;
                <button type="submit" onClick={this.greenHandler}>Green</button>
                &nbsp;&nbsp;
                <button type="submit" onClick={this.blueHandler}>Blue</button>
                &nbsp;&nbsp;
            </div>
        );
    }
}
export default ChangeColor;
