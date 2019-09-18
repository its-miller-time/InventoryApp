import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from '../../../../../../Library/Caches/typescript/3.6/node_modules/redux';
import clearInv from '../actions/clearInv'
import resetInv from '../actions/resetInv';

class Main extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){

        const frozenQuantity = this.props.frozenData.reduce((a,b)=> a+b.quantity,0)
        const meatQuantity = this.props.meatData.reduce((a,b)=> a+b.quantity,0)
        const dairyQuantity = this.props.dairyData.reduce((a,b)=> a+b.quantity,0)


        const storeInventory = [
            ...this.props.frozenData,
            ...this.props.meatData,
            ...this.props.dairyData
        ]

        let storeProductArr = storeInventory.map(({food, quantity},i)=> <li key={i}>{food} in stock: {quantity}</li> )

        return(
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>Dept</th>
                            <th>In Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Frozen Total: {frozenQuantity}</td>
                        </tr>
                        <td>Meat Total: {meatQuantity}</td>
                        <td>Dairy Total: {dairyQuantity}</td>
                    </tbody>
                    <h1>Frozen Total: {frozenQuantity}</h1>
                    <h1>Meat Total: {meatQuantity}</h1>
                    <h1>Dairy Total: {dairyQuantity}</h1>
                    <br/>
                    {storeProductArr}
                    <button onClick={this.props.clearInv}>Clear Inventory</button>
                    <button onClick={this.props.resetInv}>Reset Inventory</button>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        dairyData: state.dairy,
        frozenData: state.frozen,
        meatData: state.meat
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        clearInv,
        resetInv
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);