import Component from 'react-pure-render/component';
import React from 'react';


export default class Artwork extends Component {

    render() {
        return (
            <div className="w3-content content-style">
                <div class="w3-container w3-content w3-center w3-padding-64" id="">
                    <h2 class="w3-wide">Artwork</h2>
                    <p class="w3-opacity"><i>“Art washes away from the soul the dust of everyday life.”<br/>
                        ― Pablo Picasso</i></p>
                    <p class="w3-justify">My paintings </p>
                </div>
            </div>

        );
    }

}