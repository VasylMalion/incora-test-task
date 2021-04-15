// core
import React from "react";
import {connect} from "react-redux";

// styles
import {Card, Container} from "react-bootstrap";

const SingleArticle = ({currentFeed, feeds, currentArticle}) => {

    const feed = feeds.find(item => item.id === currentFeed);
    const article = feed.items.find(item => item.id === currentArticle);

    return <Container>
        <Card className="w-75 m-auto">
            <Card.Header className="text-center" as="h5">{article.title}</Card.Header>
            <Card.Body>
                <Card.Text>
                    {article.description}
                </Card.Text>
                <div className="text-right"> Created at: {article.pubDate} </div>
            </Card.Body>
        </Card>
    </Container>
}

const mapStateToProps = state => {
    return {
        feeds: state.feeds.feeds,
        currentFeed: state.feeds.currentFeed,
        currentArticle: state.feeds.currentArticle
    }
}

export default connect(mapStateToProps)(SingleArticle)