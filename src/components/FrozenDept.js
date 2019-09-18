import React, { Component } from 'react';
import { connect } from 'react-redux';
//We need our action creator (the function we wrote)
import updateFrozen from '../actions/frozenInvUpdate';
//In order for updateFrozen to be consi
import { bindActionCreators } from 'redux';
import AddItem from './AddItem';

class FrozenDept extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    
    componentDidMount(){
        // this.props.updateFrozen([{}])
    }

    changeQuantity = (operation,indexToChange) => {
        console.log(operation,indexToChange)
        this.props.updateFrozen(operation, indexToChange)
    }
    
    render(){
        const frozenFoods = this.props.frozenData.map(({food,quantity},i)=>{
            return(
                <div key={i}>
                    <li>{food} in stock: {quantity}</li>
                    <input className="add-button" type="button" onClick={() => {this.changeQuantity('+',i)}} value='+' />
                    <input className="add-button" type="button" onClick={() => {this.changeQuantity('-',i)}} value='-' />
                </div>
            )
        })
        return(
            <div>
                <ul>
                    <AddItem dept='Frozen' />
                    {frozenFoods}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        frozenData: state.frozen
    }
}

function mapDispatchToProps(dispatch){
    // this is how we connect our component 
    // using this action creator to the dispatch 
    // this function returns bindActionCreators
    // and we hand bindActionCreators and object 
    return bindActionCreators({
        // each property will be a local prop for this component 
        // each value will be a function (action creator)
        // that will have its return value sent to the dispatch
        updateFrozen: updateFrozen,
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(FrozenDept)