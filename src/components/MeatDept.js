import React, {Component} from 'react';
//in order for this component to know about redux, we need some glue...the connect method
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import updateMeat from '../actions/meatInvUpdate'
import AddItem from './AddItem'

class MeatDept extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidUpdate(){

    }

    changeQuantity = (operation,indexToChange) => {
        this.props.updateMeat(operation,indexToChange)
    }

    render(){
        console.log(connect)
        const meatArr = this.props.meatData
        const meats = meatArr.map(({food, quantity},i)=>{
            return(
                <div key={i}>
                    <li >{food} On Hand: {quantity}</li>
                    <input type='button' onClick={()=>{this.changeQuantity('+',i)}} value='+' />
                    <input type='button' onClick={()=>{this.changeQuantity('-',i)}} value='-' />
                </div>
            ) 
        })
            return(
                <div className="container">
                    <AddItem dept='Meat' />
                    <ul>{meats}</ul>     
                </div>
            )    
    }
}

    function mapStateToProps(state){
        //<mapStateToProps takes 1 arg: "state"
        //that 'state' var IS the rootReducer (store)
        // mstp returns an object with 
        // key/property is the local prop name in THIS conpenent 
        // value will be the property in the rootReducer
        return {
            meatData: state.meat
        }
    }

    function mapDispatchToProps(dispatch){
        return bindActionCreators({
            updateMeat: updateMeat
        },dispatch)
    }

// export default MeatDept;
//we dont export the class when we need redux 
//we export connect (a function)
//connect takes 2 args:
// 1. a function that is going to map state to props
// 2. a function that maps the dispatch to props
// 3. Connect is a function that returns a function 
// 3.1 that function that an arg of the class
export default connect(mapStateToProps,mapDispatchToProps)(MeatDept);