// core
import React from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {useHistory} from "react-router-dom";
import {bindActionCreators} from "redux";

// styles
import "./header.css";
import {Button, Nav, Navbar} from "react-bootstrap";

// actions
import {logOutUser} from "../../redux/actions/userActions";

const Header = ({isAuth, logOutUser}) => {

    let history = useHistory();

    const logOut = () => {
        logOutUser();
        history.push("/auth")
    }

    const authTab = isAuth
        ? <Nav style={{textDecoration: "none"}}>
            <NavLink to="/cabinet" className="pr-3">
                <Button variant="info"> Cabinet </Button>
            </NavLink>
            <Button variant="info" onClick={logOut}> Sign-out </Button>
        </Nav>
        : <Nav>
            <NavLink to="/auth">
                <Button variant="info"> Sign-in </Button>
            </NavLink>
        </Nav>


    return <>
        <Navbar bg="dark" variant="dark" className="pr-5 pl-5">
            <Navbar.Brand>
                <NavLink to="/">
                    <Button variant="info"> Home </Button>
                </NavLink>
            </Navbar.Brand>
            <Nav className="mr-auto"> </Nav>
            { authTab }
        </Navbar>
    </>
}

const mapStateToProps = state => {
    return {
        isAuth: state.user.isAuth
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    logOutUser
}, dispatch)

export default connect (mapStateToProps, mapDispatchToProps)(Header)