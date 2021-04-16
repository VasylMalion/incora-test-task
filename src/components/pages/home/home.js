// core
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {useHistory} from "react-router-dom";

// styles
import "./home.css";
import {Button, Card, Col, Container, Row, Spinner} from "react-bootstrap";

// actions
import {addFeed, fetchedFeeds, removeFeed, setCurrentFeed} from "../../../redux/actions/feedsActions";

// components
import {CustomModal} from "../../modal/modal";

const Home = ({fetchedFeeds, feeds, removeFeed, addFeed, setCurrentFeed}) => {

    let history = useHistory()

    useEffect(() => {
        fetchedFeeds();
    }, [])

    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleClose = () => {
        setShow(false);
    }

    const handleShow = () => setShow(true);

    const addNewFeed = () => {
        if (!title || !description) {
            return alert("Title or description is is empty!");
        }
        addFeed({ title, description });
        setTitle('');
        setDescription('');
        setShow(false);
    }

    const toArticles = (payload) => {
        setCurrentFeed(payload);
        history.push("/articles");
    }

    const feedsHTML = (feeds.length > 0) ? feeds.map( item => <Col key = {item.id}>
        <Card border="secondary" style={{ width: '60rem' }}>
            <Card.Header className="title-of-feed" onClick = {() => toArticles(item.id)}> {item.title} </Card.Header>
            <Card.Body>
                <Card.Text>
                    {item.description}
                </Card.Text>
                <Button variant="danger" onClick={() => removeFeed(item.id)}>
                    Delete
                </Button>
            </Card.Body>
        </Card>
        <br />
    </Col>) : null

    if (!feeds.length) {
        return <div className="d-flex justify-content-center mt-5">
            <Spinner animation="grow"/>
        </div>
    }

    return <Container className="mb-5">
        <Row>
            {feedsHTML}
        </Row>
        <Button variant="primary" onClick={handleShow}>
            Add feed
        </Button>
        <CustomModal
            show={show}
            handleClose={handleClose}
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            action={addNewFeed}
        />
    </Container>
}

const mapStateToProps = state => {
    return {
        feeds: state.feeds.feeds
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchedFeeds,
    removeFeed,
    addFeed,
    setCurrentFeed
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)