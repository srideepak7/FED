import React,{Component} from 'react'
class FruitsArray extends Component{
    constructor(props){
        super(props);
        this.state={
            fruits:[],
        }
    }
    saveInput=(e)=>{
        this.setState({inputValue:e.target.value});
    }
    addNewItem=()=>{
        this.setState({fruits:[...this.state.fruits,this.state.inputValue]});
        console.log(this.state.fruits);
    }
    render(){
        return(
            <div>
                <input type="text" onChange={this.saveInput}/>
                <button type="button" onClick={this.addNewItem}>Add</button>
                <ul>
                    {this.state.fruits.length>0 && this.state.fruits.map((ele)=>{
                        return <li key={ele.index}>{ele}</li>
                    })}
                </ul>
            </div>
        )
    }
}
export default FruitsArray;
