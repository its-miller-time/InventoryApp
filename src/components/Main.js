import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import clearInv from '../actions/clearInv'
import resetInv from '../actions/resetInv';
import './Main.css'

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
                            <td>Frozen Total </td>
                            <td>{frozenQuantity}</td>
                        </tr>
                        <tr>
                            <td>Meat Total</td>
                            <td>{meatQuantity}</td>
                        </tr>
                        <tr>
                            <td>Dairy Total</td>
                            <td>{dairyQuantity}</td>
                        </tr>
                    </tbody>
                    <br/>
                    {storeProductArr}
                    <div className="main-button-group">
                        <button className="waves-effect waves-light btn blue-grey darken-2" onClick={this.props.clearInv}>Clear Inventory</button>
                        <button className="waves-effect waves-light btn blue-grey darken-2" onClick={this.props.resetInv}>Reset Inventory</button>
                    </div>
                   
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