import React, {Component} from 'react';
import Lifecycle2 from './Lifecycle2';

class Lifecycle extends Component{

    constructor(props){
        console.log("LifecycleA constructor")
        super(props)
        this.state={
          count: 0
        }
    }

    static getDerivedStateFromProps(preProps,preState){
        console.log("LifecycleA getDerivedStateFormProps")
        return null
    }

    componentDidMount(){
        console.log("LifecycleA componentDidMount")
    }

    shouldComponentUpdate(){
          console.log('LifecycleA shouldComponentUpdate')
          return true
    }

    componentDidUpdate(preProps,preState){
           console.log("LifecycleA componentDidUpdate")
    }

    changeIncre=()=>{
        this.setState({
            count : this.state.count +1
        })
    }

    changeDecre=()=>{
        this.setState({
            count : this.state.count <=0 ? 0 : this.state.count -1
        })
    }



    render(){
        console.log("LifecycleA render")
        return(
            <div className='lifecycle'>
                <div className='container'>
                    <div className=' row'>
                        <h2> Count :{this.state.count}</h2>
                        <button className="incre-btn" onClick={this.changeIncre}>Increment</button>
                        
                        <button className="decre-btn" onClick={this.changeDecre}>Decrement</button>
                        

                        <Lifecycle2 />
                    </div>
                </div>
            </div>
        )
    }
}
export default Lifecycle;