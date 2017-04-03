var React = require('react');
var Nav = require('Nav');

//{props.children}

var Main = (props) => {
    return (
        <div>
        <div>
            <div>
                <Nav />
                <p>Main.jsx rendered</p>
            </div>
        </div> 
        </div>
    );
}

module.exports = Main;