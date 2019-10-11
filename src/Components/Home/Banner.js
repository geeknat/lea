import React, {useEffect, useState} from "react";

const Banner = props => {
    return (
        <div>
            <div className="page-section" style={{
                padding:'80px 0 44px'
            }}>

                <div className="container">

                    <div className="content-element5">

                        <div className="align-center">

                            <h2 className="section-title heat">Welcome to Lea Nurture</h2>


                        </div>

                    </div>
                </div>
            </div>

            <div className="icons-box style-2 flex-row no-gutters item-col-2">

                <div className="icons-wrap">

                    <div className="bg-img" data-bg="images/top5.jpg"></div>
                    <div className="icons-item">
                        <div className="item-box">
                            <h3 className="icons-box-title">
                                <a href="#">Looking For Childcare</a>
                            </h3>
                            <p></p>
                            <div className="hidden-area">
                                <a href="#" className="btn btn-style-3">I'm A Parent</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="icons-wrap">

                    <div className="bg-img" data-bg="images/top3.jpg"></div>
                    <div className="icons-item">
                        <div className="item-box">
                            <h3 className="icons-box-title"><a href="#">Looking For Opportunities</a></h3>
                            <p></p>
                            <div className="hidden-area">
                                <a href="#" className="btn btn-style-3">I'm a Caregiver</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
};

export default Banner;