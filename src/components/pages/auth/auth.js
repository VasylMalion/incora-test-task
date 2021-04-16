// core
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {useHistory} from "react-router-dom";

// actions
import {fetchedUser} from "../../../redux/actions/userActions";

// styles
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const Auth = ({fetchedUser, isAuth, error}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory();

    const signIn = async () => {
        fetchedUser({username, password});
    }

    useEffect(() => {
        isAuth && history.push('/');
    }, [isAuth])

    useEffect(() => {
        error && alert("The data do not match");
    }, [error])

    return <>
        <Container>
            <Row>
                <Col className="col-12">
                    <h1 className="text-center pb-2"> Sign in to your account </h1>
                </Col>
            </Row>
            <Form className="offset-lg-4 col-lg-4 pb-4 col-8 offset-md-3 col-md-6 offset-sm-2 col-sm-8 col-12">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label> Username </Form.Label>
                    <Form.Control
                        type="username"
                        placeholder="Username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label> Password </Form.Label>
                    <Form.Control
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Group>
                <Button onClick={signIn}  variant="primary" type="">
                    Sign-in
                </Button>
            </Form>
        </Container>
    </>
}

const mapStateToProps = state => {
    return {
        isAuth: state.user.isAuth,
        error: state.user.error
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchedUser
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Auth)