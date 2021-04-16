import React, {useEffect, useState} from "react";
import {Alert, Card, Col, Container, Jumbotron, ListGroup, Row} from "react-bootstrap";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchedDeletePost, fetchedPosts, fetchedUpdatePost} from "../../../redux/actions/userActions";
import {RiDeleteBin7Fill} from "react-icons/ri";
import {FaPencilAlt} from "react-icons/fa";
import {CustomModal} from "../../modal/modal";

const Cabinet = ({user, fetchedPosts, posts, fetchedDeletePost, fetchedUpdatePost}) => {

    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [currentPost, setCurrentPost] = useState(null);

    useEffect(() => {
        fetchedPosts(user.id);
    }, [])

    const handleClose = () => {
        setShow(false);
    }

    const deletePost = id => {
        fetchedDeletePost(id);
    }

    const updatePost = () => {
        if (!title || !description) {
            return alert("Title or description is is empty!");
        }
        fetchedUpdatePost({userId: user.id, currentPost, title, description });
        setTitle('');
        setDescription('');
        setCurrentPost(null);
        setShow(false);
    }

    const allPosts = posts && posts.map(item => <Card className="mb-3 w-100" key = {`post - ${item.id}`}>
        <Card.Header className="d-flex justify-content-between">
            {item.title}
            <span>
                <RiDeleteBin7Fill
                    style={{fontSize: "30px", cursor: "pointer", paddingRight: "10px"}}
                    onClick={() => deletePost(item.id)}
                />
                <FaPencilAlt
                    onClick={() => {
                        setShow(true);
                        setCurrentPost(item.id);
                        }
                    }
                    style={{fontSize: "20px", cursor: "pointer"}}
                />
            </span>
        </Card.Header>
        <Card.Body>
            <Card.Text>
                {item.body}
            </Card.Text>
        </Card.Body>
    </Card>)

    return <div>
        <Container>
            <Jumbotron fluid className="p-1">
                <Container className="p-4">
                    <h1> Your personal cabinet </h1>
                </Container>
            </Jumbotron>
            <Row className="pb-4">
                <Col className="col-lg-4 col-12 mb-lg-0 mb-3">
                    <Alert variant="success"> Personal data </Alert>
                    <ListGroup>
                        <ListGroup.Item disabled> Email: {user.email} </ListGroup.Item>
                        <ListGroup.Item> Name: {user.name} </ListGroup.Item>
                        <ListGroup.Item> Username: {user.username} </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col>
                    <Alert variant="success"> Posts </Alert>
                    <Row className="m-0">
                        {allPosts}
                    </Row>
                </Col>
            </Row>
        </Container>
        <CustomModal
            show={show}
            handleClose={handleClose}
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            action={updatePost}
        />
    </div>
}

const mapStateToProps = state => {
    return {
        user: state.user.user,
        posts: state.user.posts
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchedPosts,
    fetchedDeletePost,
    fetchedUpdatePost
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cabinet)