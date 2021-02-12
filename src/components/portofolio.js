import React, { Component } from "react";

export class Portofolio extends Component {
  render() {
    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                        <li data-filter="*" className="filter-active">All</li>
                        <li data-filter=".filter-app">App</li>
                        <li data-filter=".filter-card">Card</li>
                        <li data-filter=".filter-web">Web</li>
                        </ul>
                    </div>
                </div>
                <div className="row portfolio-container">
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                        <img src="img/portfolio/portfolio-1.jpg" className="img-fluid" alt />
                        <div className="portfolio-info">
                            <h4>App 1</h4>
                            <p>App</p>
                            <div className="portfolio-links">
                            <a href="img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus" /></a>
                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                            </div>
                        </div>
                        </div>
                    </div>    
                </div>
            </div>
        </section>
    );
  }
}

export default Portofolio;