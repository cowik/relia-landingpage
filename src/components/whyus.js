import React, { Component } from "react";

export class Whyus extends Component {
  render() {
    return (
        <section id="why-us" className="why-us">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mt-4 mt-lg-0">
                        <div className="box">
                            <h4>Our Mission</h4>
                            <p> 
                                Is to achieve the reputation of a quality, high standard & reliable solution & service Provider Company in the ICT industry.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-4 mt-lg-0">
                        <div className="box">
                            <h4>Our Vision</h4>
                            <p> 
                                Is to achieve 100% customer satisfaction by delivering quality products and services at an affordable cost.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Whyus;