import React, { Component } from "react";

export class Cliens extends Component {
  render() {
    return (
        <section id="counts" className="counts section-bg">
            <div className="section-title">
            <h2>Our Clients</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-lg col-md">
                            <div className="count-box">
                                <img src="img/cliens/pelindo2.png" className="img-fluid" alt />
                            </div>
                        </div>
                        <div className="col-lg col-md">
                            <div className="count-box">
                                <img src="img/cliens/firstmedia.png" className="img-fluid" alt />
                            </div>
                        </div>
                        <div className="col-lg col-md">
                            <div className="count-box">
                                <img src="img/cliens/beacukai.png" className="img-fluid" alt />
                            </div>
                        </div>
                        <div className="col-lg col-md">
                            <div className="count-box">
                                <img src="img/cliens/kejoraventures.png" className="img-fluid" alt />
                            </div>
                        </div>
                        <div className="col-lg col-md">
                            <div className="count-box">
                                <img src="img/cliens/pnm.png" className="img-fluid" alt />
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </section>
    );
  }
}

export default Cliens;