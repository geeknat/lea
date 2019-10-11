import React from "react";
import Home from "../Home/Home";
import {Route, Switch} from "react-router-dom";

const Content = props => {

    return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                </Switch>
            </main>
    )

};

export default Content;