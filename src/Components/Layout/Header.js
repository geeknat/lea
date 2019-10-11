import React from "react";

const Header = props => {
    return (
        <div>
            <nav id="mobile-advanced" className="mobile-advanced"></nav>

            <header id="header" className="header-4 header-abs">

                <div className="searchform-wrap">
                    <div className="vc-child h-inherit relative">

                        <form>
                            <input type="text" name="search" placeholder="Start typing..."/>
                            <button type="button"></button>
                        </form>

                    </div>
                    <button className="close-search-form"></button>
                </div>


                <div className="top-header">

                    <div className="container">

                        <div className="menu-holder">

                            <div className="menu-wrap">

                                <div className="table-row">

                                    <div className="logo-wrap">

                                        <a href="index.html" className="logo"><img src="" alt=""/></a>

                                    </div>

                                    <div className="nav-item">

                                        <nav id="main-navigation" className="main-navigation">
                                            <ul id="menu" className="clearfix">
                                                <li><a href="#">Join as a sitter</a></li>
                                                <li><a href="#">Help</a>
                                                </li>
                                                <li><a href="#">Log in</a>
                                                </li>
                                            </ul>
                                        </nav>

                                        <a href="#" className="btn btn-style-2"
                                           style={{
                                               float: 'right',
                                               borderRadius: 2
                                           }}
                                        >Sign up</a>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </header>
        </div>
    )
};

export default Header;