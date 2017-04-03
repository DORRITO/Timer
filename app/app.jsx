var React = require('react');
var ReactDOM = require('react-dom');
//es6 descructuring, indexroute and browserhistory are deprecated
var {Route, Router, HashRouter, Switch} = require('react-router-dom');
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

//load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
    //only need exact in one path
    <HashRouter>                
        <Main>          
            <Route exact path="/" component={Timer} />
            <Route path="/timer" component={Timer} />
            <Route path="/countdown" component={Countdown} />
        </Main>        
    </HashRouter>,
    document.getElementById("app")
);