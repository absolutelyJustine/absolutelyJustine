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
                    <p class="w3-justify">All my artwork can be viewed via &nbsp;<a href="https://www.behance.net/absolutelyjustine" target="_blank">Behance</a>, &nbsp;<a href="https://absolutelyjustine.artstation.com" target="_blank">ArtStation</a> and &nbsp;<a href="https://absolutelyjustine.myportfolio.com" target="_blank">Adobe Portfolio</a>.
                    I specialize in character design, but I also dabble in landscapes. My favorite 2D mediums are arcylic,
                    charcoal, and pencil. My current 3D medium is Procreate on the iPad Pro with an Apple Pencil.</p>
                </div>
            </div>

        );
    }

}