import React, { Component } from "react";

export class Features extends Component {
  render() {
    return (
        <section id="features" className="features">
            <div className="container">
                <div className="row">
                <div className="col-lg-3 col-md-4">
                    <div className="icon-box">
                        <i className="ri-store-line" style={{color: '#ffbb2c'}} />
                        <h3><a href>System Analysis</a></h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                    <div className="icon-box">
                        <i className="ri-bar-chart-box-line" style={{color: '#5578ff'}} />
                        <h3><a href>Internet & LAN Management</a></h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                    <div className="icon-box">
                        <i className="ri-calendar-todo-line" style={{color: '#e80368'}} />
                        <h3><a href>Process Development</a></h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                    <div className="icon-box">
                        <i className="ri-vip-fill" style={{color: '#e361ff'}} />
                        <h3><a href>Enterprise Server</a></h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                    <div className="icon-box">
                        <i className="ri-database-2-line" style={{color: '#47aeff'}} />
                        <h3><a href>E-business Solutions</a></h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                    <div className="icon-box">
                        <i className="ri-gradienter-line" style={{color: '#ffa76e'}} />
                        <h3><a href>Power Solution</a></h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                    <div className="icon-box">
                        <i className="ri-file-list-3-line" style={{color: '#11dbcf'}} />
                        <h3><a href>Project Management</a></h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                    <div className="icon-box">
                        <i className="ri-base-station-fill" style={{color: '#4233ff'}} />
                        <h3><a href>Systems Integration</a></h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                    <div className="icon-box">
                        <i className="ri-account-pin-circle-fill" style={{color: '#b2904f'}} />
                        <h3><a href>Production Operations</a></h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                    <div className="icon-box">
                        <i className="ri-24-hours-line" style={{color: '#b20969'}} />
                        <h3><a href>Project Support</a></h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                    <div className="icon-box">
                        <i className="ri-24-hours-line" style={{color: '#ff5828'}} />
                        <h3><a href>Standby Support</a></h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                    <div className="icon-box">
                        <i className="ri-chrome-fill" style={{color: '#29cc61'}} />
                        <h3><a href>Web App Development</a></h3>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Features;