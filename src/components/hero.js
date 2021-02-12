import React, { Component } from "react";

export class Hero extends Component {
  render() {
    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container">
                <div className="row">
                <div className="col-lg-6 pt-2 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                    <h1>Your Business Automation Partner</h1>
                    <div className="mt-3">
                        <a href="#about" className="btn-get-started scrollto">Get Started</a>
                    </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 hero-img">
                    <img src="img/hero-img.png" className="img-fluid" alt />
                </div>
                </div>
            </div>
        </section>
    );
  }
}
export default Hero;