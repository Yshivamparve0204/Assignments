import { Component } from "react";

export default  class Uppercase extends Component{
    state={input:"",output:""}
    setvalue=(e)=>{
        this.setState({input:e.target.value});
    }
    Uppercase=()=>{
        this.setState({output:this.state.input.toUpperCase()});
    }
    Lowercase=()=>{
        this.setState({output:this.state.input.toLowerCase()});
    }
    Titlecase=()=>{
        this.setState({outpit:this.state.input.titleCase})
    }
    render()
    {
        return(
            <>
            <input type="text" value={this.state.input} onChange={this.setvalue}
            placeholder="enter text here"/>
            <input type="radio" name="case" onChange={this.Uppercase}/>uppercase
            <input type="radio"  name="case" onChange={this.Lowercase}/>lowercase
             <input type="radio"  name="case" onChange={this.Titlecase}/>Titlecase
            <p>ouput:{this.state.output}</p>
            </>
        )
    }
}