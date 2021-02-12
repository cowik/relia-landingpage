import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="row content">
                <div className="col-lg-6">
                    <h2>About Relia</h2>
                    <h3>WHAT IS RELIA IS DEFINED HERE</h3>
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0">
                    <p>
                        RELIA provides one stop automated solution for your trade and industry. Depending on the size and field of your organization, we have different products and services to meet your requirements. We provide the optimum and customized solutions made for your organization.
                    </p>
                    <p>
                        Relia began its business operation as a hardware and network solutions providing company in January 2021.
                    </p>
                    <p>
                        Relia is focusing exclusively in high quality and cost-effective software development and implementation of services. We are advancing on a tremendous pace and with involvement of skilled and experienced people working in the organization. RELIA is currently doing business in Government, Banking, MNCs, Large Corporate, and Telecom.
                    </p>
                </div>
                </div>
            </div>
        </section>
    );
  }
}

export default About;