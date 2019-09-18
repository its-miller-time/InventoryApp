import React, {Component} from 'react';
import {connect} from 'react-redux';
import updateDairy from '../actions/dairyInvUpdate'
import { bindActionCreators } from 'redux';
import AddItem from './AddItem';
import getInv from '../actions/getInv';


class DairyDept extends Component{

    componentDidMount(){
        //run an action that gets the dairy inv 
        //from back-end (express in this app)
        this.props.getInv('dairy')
    }

    changeQuantity = (operation,indexToChange) => {
       
            this.props.updateDairy(operation,indexToChange)
        
    }

    render(){
        const dairyData = this.props.dairyData.map(({food, quantity}, i)=>{
            return (
               <div key={i}>
                    <h6>{food.toUpperCase()} in stock: {quantity}</h6>
                    <input className='add-button' type='button' onClick={()=> {this.changeQuantity('+',i)}} value="+" />
                    <input className='add-button' type='button' onClick={()=> {this.changeQuantity('-',i)}} min='0' value="-" />
               </div> 
            )
        })
        return(
            <div className="container">
                <AddItem dept="Dairy"/>
                <ul>
                    {dairyData}
                </ul>
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
        dairyData: state.dairy
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        updateDairy,
        getInv
    },dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(DairyDept);