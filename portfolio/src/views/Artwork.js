import Component from 'react-pure-render/component';
import React from 'react';


export default class Artwork extends Component {

    render() {
        return (
            <div className="w3-content content-style">
                <div class="w3-container w3-content w3-center w3-padding-64" style="max-width:800px" id="band">
                    <h2 class="w3-wide">Artwork</h2>
                    <p class="w3-opacity"><i>I love painting!</i></p>
                    <p class="w3-justify">My painting </p>
                    <div class="w3-row w3-padding-32">
                        <div class="w3-third">
                            <p>Name</p>
                            <img src="/w3images/bandmember.jpg" class="w3-round w3-margin-bottom" alt="Random Name" style="width:60%"/>
                        </div>
                        <div class="w3-third">
                            <p>Name</p>
                            <img src="/w3images/bandmember.jpg" class="w3-round w3-margin-bottom" alt="Random Name" style="width:60%"/>
                        </div>
                        <div class="w3-third">
                            <p>Name</p>
                            <img src="/w3images/bandmember.jpg" class="w3-round" alt="Random Name" style="width:60%"/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}