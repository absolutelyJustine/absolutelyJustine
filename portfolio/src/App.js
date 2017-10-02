import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Home from './views/Home'
import UIUX from './views/UIUX'
import Artwork from './views/Artwork'
import Code from './views/Code'

// eslint-disable-next-line

export default class App extends React.Component {

    render() {

        let handleClick = function navbarFunction() {
            var x = document.getElementById("navBar");
            if (x.className.indexOf("w3-show") === -1) {
                x.className += " w3-show";
            } else {
                x.className = x.className.replace(" w3-show", "");
            }
        }

        let handleClick2 = function navbarFunction2() {
            var x = document.getElementById("navBar");
            if (x.className.indexOf("w3-show") === -1) {
                x.className += " w3-hide";
            } else {
                x.className = x.className.replace(" w3-show", "");
            }
        }

        return (
            <Router>
                <div>
                    <div className="w3-top">
                        <div className="w3-bar darkGray w3-card-2">
                            <button className="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right"
                                onClick={handleClick}><i className="fa fa-bars"></i></button>

                            <Link to="/" className="w3-bar-item w3-button w3-padding-large">Home</Link>
                            <Link to="/UIUX"
                                  className="w3-bar-item w3-button w3-padding-large w3-hide-small">UI/UX</Link>
                            <Link to="/artwork"
                                  className="w3-bar-item w3-button w3-padding-large w3-hide-small">Artwork</Link>
                            <Link to="/code"
                                  className="w3-bar-item w3-button w3-padding-large w3-hide-small">Code</Link>
                            <div className="page-title">Absolutely Justine</div>
                        </div>
                    </div>
                    <div id="navBar" className="w3-bar-block darkGray w3-hide w3-hide-large w3-hide-medium w3-top">
                        <Link to="/" className="w3-bar-item w3-button w3-padding-large"
                              onClick={handleClick2}>Home</Link>
                        <Link to="/UIUX" className="w3-bar-item w3-button w3-padding-large"
                              onClick={handleClick2}>UI/UX</Link>
                        <Link to="/artwork" className="w3-bar-item w3-button w3-padding-large" onClick={handleClick2}>Artwork</Link>
                        <Link to="/code" className="w3-bar-item w3-button w3-padding-large"
                              onClick={handleClick2}>Code</Link>
                    </div>


                    <Route exact path="/" component={Home}/>
                    <Route path="/UIUX" component={UIUX}/>
                    <Route path="/artwork" component={Artwork}/>
                    <Route path="/code" component={Code}/>
                </div>
            </Router>)
    }
}
