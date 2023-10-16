import React,{Component} from 'react';
class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            const:0,
        }
    }
    incrementHandler=()=>{
        this.setState({const:this.state.const+1});
    }
    decrementHandler=()=>{
        this.setState({const:this.state.const-1});
    }
    render(){
        return(
            <div>
                <button type="button" onClick={this.incrementHandler}>Increment</button>
                &nbsp;&nbsp;
                {this.state.const}
                &nbsp;&nbsp;
                <button type="button" onClick={this.decrementHandler}>Decrement</button>
            </div>
        )
    }
}
export default Counter;
