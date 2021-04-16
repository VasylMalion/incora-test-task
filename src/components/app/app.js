// core
import React, {useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import {useHistory} from "react-router-dom"
import {connect} from "react-redux";

//components
import Header from "../header/header";

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";

// routes
import {privateRoutes, publicRoutes} from "../routes";

const App = ({isAuth}) => {

    let history = useHistory();

    useEffect(() => history.push("/auth"), []);

    return <>
        <Header/>
        <Container className="pt-5">
            <Switch>
                {
                    publicRoutes.map(({path, component}) => <Route
                        key = {path}
                        path = {path}
                        component = {component}
                        exact
                    />)
                }
                {
                    isAuth ? privateRoutes.map(({path, component}) => <Route
                        key = {path}
                        path = {path}
                        component = {component}
                        exact
                    />) : <Container className="text-center">
                        <h1> Page is not available </h1>
                    </Container>
                }
            </Switch>
        </Container>
    </>;
}

const mapStateToProps = state => {
    return {
        isAuth: state.user.isAuth
    }
}

export default connect(mapStateToProps)(App)