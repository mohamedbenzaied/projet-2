import React from "react";
import {Switch,Route,BrowserRouter} from "react-router-dom";
import Men from "./components/pages/Men.js";
import Women from "./components/pages/Women.js";
import Home from "./components/pages/Home.js";
import {Container} from "react-bootstrap"

export default function Router()
{
    return (
        <Switch>
            <Route exact path="/">
                <Container>
                <Home />
                </Container>

            </Route>
            <Route exact path="/men">
            <Container>
                <Men />
            </Container>
            </Route>
            <Route exact path="/women">
            <Container>
                <Women/>
                </Container>
            </Route>
        </Switch>
)
}
