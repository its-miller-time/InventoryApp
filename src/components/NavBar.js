import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(      
                <nav>
                    <div className="nav-wrapper blue-grey darken-2">
                        <a href="#" className="brand-logo">Logo</a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><Link to="/">Entire Store</Link></li>
                                <li><Link to="/meat-dept">Meat Depy</Link></li>
                                <li><Link to="/dairy-dept">Dairy Dept </Link></li>
                                <li><Link to="/frozen-dept">Frozen Dept </Link></li>
                            </ul>
                    </div>
                </nav>
        )
    }
}

export default NavBar;