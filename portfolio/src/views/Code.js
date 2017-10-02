import Component from 'react-pure-render/component';
import React from 'react';


export default class Code extends Component {

    render() {
        return (

            <div className="w3-content content-style">
                <div className="w3-container w3-content w3-center w3-padding-64" id="">
                    <h2 className="w3-wide">Code</h2>
                    <p className="w3-opacity"><i>“Most good programmers do programming not because they expect to get paid
                        or get adulation by the public, but because it is fun to program.”<br/>
                        ― Linus Torvalds</i></p>
                    <p className="w3-justify">This website was created by myself using ReactJs.
                        I chose this framework because it is the one I am least familiar with.
                        I wanted to give myself a challenge to approach, and here's the result.</p>
                    <p className="w3-justify">My great familiarity is with AngularJS, Bootstrap,
                        and Materialize. I have professional working knowledge of the aforementioned
                        languages and frameworks, as well as HTML, CSS, SASS, LESS, Jade/Pug, Javascript,
                        jQuery, Postgres SQL, XML, xQuery, XPATH, BaseX, npm, gulp, and NodeJS.</p>
                    <p className="w3-justify">Short version, you need a full-stack dev, I'm game.</p>
                    <hr/>
                    <p className="w3-justify">Check out my code on <a href="https://github.com/absolutelyJustine" rel="noopener noreferrer" target="_blank">github</a>. There you'll see a couple important repositories
                        that were assessments that I have taken with Devmountain to prove my skill set. These
                        assessments were meant to be hard and <em>completely</em> optional.
                        All four assessments were passed.</p>
                    <ul type="none" className="w3-center">
                        <li><a href="https://github.com/absolutelyJustine/html-layout" rel="noopener noreferrer" target="_blank">Responsive HTML and CSS</a></li>
                        <li><a href="https://github.com/absolutelyJustine/javascript-basic-assessment" rel="noopener noreferrer" target="_blank">Basic Javascript</a></li>
                        <li><a href="https://github.com/absolutelyJustine/intermediate-javascript-assessment" rel="noopener noreferrer" target="_blank">Intermediate Javascript</a></li>
                        <li><a href="https://github.com/absolutelyJustine/angular-assessment-v2" rel="noopener noreferrer" target="_blank">AngularJS</a></li>
                    </ul>
                </div>
            </div>

        );
    }

}