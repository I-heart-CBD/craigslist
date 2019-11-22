import React, { Component } from 'react'

export default class Listing extends Component {

    constructor(props){
        super(props);
        this.state = {
            images: ["https://images.craigslist.org/00h0h_hA8e5gVGips_600x450.jpg", 
                "https://images.craigslist.org/00d0d_dx0edQ3Ull4_600x450.jpg",
                "https://images.craigslist.org/00202_b6dGFjkXyqp_600x450.jpg"      
                ]
        }
    }

    showImages = () => {
        let counter = true;
        return this.state.images.map((image) => {
            if (!counter){
                return (
                    <div className="carousel-item">
                        <img src={image} alt="Slide"/>
                    </div>
                )
            } else {
                counter = false;
                return (
                    <div className="carousel-item active">
                        <img src={image} alt="Slide"/>
                    </div>
                )
            }
        })
    }

    showIndicators = () => {
        let counter = 0;
        return this.state.images.map((image) => {
            if (counter > 0){
                counter++;
                return (
                    <li data-target="#carouselExampleIndicators" data-slide-to={counter-1} className="active"></li>
                )
            } else {
                counter++;
                return (
                    <li data-target="#carouselExampleIndicators" data-slide-to={counter-1}></li>
                )
            }
        })
    }

    render() {
        return (
            <div className="col-6 single-listing">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        {this.showIndicators()}
                    </ol>
                    <div className="carousel-inner h-25">
                        {this.showImages()}
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="listing-info">
                    <span>Listing title</span>
                    <p>Information about listing</p>
                </div>
            </div>

        )
    }
}