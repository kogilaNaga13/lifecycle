import React, { Component } from "react";


class Lifecycle2 extends Component{

    constructor(props){
        console.log("LifecycleB constructor")
        super(props)
        this.state={
          name: "hello"
        }
    }

    static getDerivedStateFromProps(preProps,preState){
        console.log("LifecycleB getDerivedStateFormProps")
        return null
    }

    componentDidMount(){
        console.log("LifecycleB componentDidMount")
    }

    shouldComponentUpdate(){
          console.log('LifecycleB shouldComponentUpdate')
          return true
    }

    componentDidUpdate(preProps,preState){
           console.log("LifecycleB componentDidUpdate")
    }

    changeState=()=>{
        this.setState({
            name : "Welcome"
        })
    }


    render(){
        console.log("LifecycleB render")
        return(
            <div>
                <h2> Message :{this.state.name}</h2>
                <button className="update-btn" onClick={this.changeState}>Update</button>
                
            </div>
        )
    }
}
export default Lifecycle2;