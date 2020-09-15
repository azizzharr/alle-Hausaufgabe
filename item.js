import React, {Component} from "react";
import List from "./list";
import './style.css'

class Item extends Component {

    render() {


        const {changeChecked,number,deleteItem, checked, label, id} = this.props
        let className = '';
        if (checked) {
            className = 'checked'
        }
        return (
                <li className={className}>

                <span onClick={changeChecked(id)}>{label}</span>

                    <span className="number">{number} </span>
                <span onClick={deleteItem(id)} className='close'>x</span>

                </li>

        )
    }
}

export default Item;
