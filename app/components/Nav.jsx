var React = require('react');
var {NavLink} = require('react-router-dom');

var Nav = () => {
    

        return(
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Time App</li>
                        <li>
                            <NavLink to="/" activeClassName="active">Timer</NavLink></li>
                        <li>
                            <NavLink to="/" activeClassName="active">Countdown</NavLink>
                        </li>
                   </ul>
                </div>
                <div className="top-bar-right">
                   <ul className="menu">
                       <li className="menu-text">Created by <a>CHIp</a></li>
                   </ul>
                </div>
            </div>
        )
    
};

module.exports = Nav;