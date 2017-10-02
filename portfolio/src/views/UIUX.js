import Component from 'react-pure-render/component';
import React from 'react';


export default class UIUX extends Component {
    render() {
        return (

            <div className="w3-content content-style">
                <div className="w3-container w3-content w3-center w3-padding-64" id="">
                    <h2 className="w3-wide">UI/UX Design</h2>
                    <p className="w3-opacity"><i>“Truly elegant design incorporates top-notch functionality into a simple,
                        uncluttered form.”<br/>
                        ― David Lewis</i></p>
                    <p className="w3-justify">Below is an example of a storyboard that I have created. If you are having
                        trouble viewing it, please try this link&nbsp;
                        <a href="https://xd.adobe.com/view/55f43d33-72d5-4ee7-ac52-4beaf72798dc/" rel="noopener noreferrer" target="_blank">here</a>.</p>
                    <div className="video-container"><iframe width="1922" height="1080" title="storyboard" src="https://xd.adobe.com/embed/55f43d33-72d5-4ee7-ac52-4beaf72798dc/" frameborder="0" allowfullscreen></iframe></div>
                </div>
            </div>

        );
    }

}