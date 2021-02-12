import React, { Component } from "react";

export class Team extends Component {
  render() {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title">
                <h2>Contact</h2>
                </div>
                <div className="row">
                <div className="col-lg-6">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="info-box">
                        <i className="bx bx-map" />
                        <h3>Our Address</h3>
                        <p>Jl Bontang 3 no 68,, Jatimakmur Pondok Gede Bekassi</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="info-box mt-4">
                        <i className="bx bx-envelope" />
                        <h3>Email Us</h3>
                        <p>info@reliasolusi.com</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="info-box mt-4">
                        <i className="bx bx-phone-call" />
                        <h3>Call Us</h3>
                        <p>081928884224</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 mt-4 mt-lg-0">
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9023372348233!2d106.92111391585813!3d-6.27656986319085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d4804145c2d%3A0x854c652b0cf262f2!2sJl.%20Bontang%20III%2C%20RT.002%2FRW.017%2C%20Jatimakmur%2C%20Kec.%20Pondokgede%2C%20Kota%20Bks%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1613094075138!5m2!1sid!2sid" frameBorder={0} style={{border: 1, width: '100%', height: 377}} allowFullScreen />
                </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Team;