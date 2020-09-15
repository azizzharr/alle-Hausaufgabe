import React from "react";
import ReactDom from 'react-dom'
import List from "./list";
import './style.css';
import './bootstrap.css'

const Header = () => {
    return (
        <div>
        <div id="myDIV" className="header container">
            <h2 className='h2'>
                Menu
            </h2>
            <div>
                <List/>
            </div>

        </div>
        </div>
    )
}

export default Header;
