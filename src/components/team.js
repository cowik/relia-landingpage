import React, { Component } from "react";

export class Team extends Component {
  render() {
    return (
        <section id="team" className="team section-bg">
            <div className="container">
                <div className="section-title">
                <h2>Team</h2>
                </div>
                <div className="row">
                <div className="col-lg-4">
                    <div className="member">
                    <div className="member-img">
                        <img src="img/team/wikrama.png" className="img-fluid" alt />
                        <div className="social">
                        <a href><i className="bi bi-twitter" /></a>
                        <a href><i className="bi bi-facebook" /></a>
                        <a href><i className="bi bi-instagram" /></a>
                        <a href><i className="bi bi-linkedin" /></a>
                        </div>
                    </div>
                    <div className="member-info">
                        <h4>Oki Reganoto</h4>
                        <span>Chief Executive Officer</span>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="member">
                    <div className="member-img">
                        <img src="img/team/rahmalia.png" className="img-fluid" alt />
                        <div className="social">
                        <a href><i className="bi bi-twitter" /></a>
                        <a href><i className="bi bi-facebook" /></a>
                        <a href><i className="bi bi-instagram" /></a>
                        <a href><i className="bi bi-linkedin" /></a>
                        </div>
                    </div>
                    <div className="member-info">
                        <h4>Rahmalia</h4>
                        <span>Product Manager</span>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="member">
                    <div className="member-img">
                        <img src="img/team/wikrama.png" className="img-fluid" alt />
                        <div className="social">
                        <a href><i className="bi bi-twitter" /></a>
                        <a href><i className="bi bi-facebook" /></a>
                        <a href><i className="bi bi-instagram" /></a>
                        <a href><i className="bi bi-linkedin" /></a>
                        </div>
                    </div>
                    <div className="member-info">
                        <h4>Wikrama Wardana</h4>
                        <span>CTO</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

    );
  }
}

export default Team;