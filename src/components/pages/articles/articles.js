// core
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {useHistory} from "react-router-dom";

// actions
import {setCurrentArticle} from "../../../redux/actions/feedsActions";

// styles
import {Alert} from "react-bootstrap";

const Articles = ({currentFeed, feeds, setCurrentArticle}) => {

    let history = useHistory();

    const [feed, setFeed] = useState(null);

    useEffect(() => {
        currentFeed && setFeed(feeds.find(item => item.id === currentFeed));
    }, [currentFeed])

    const toSingleArticle = (payload) => {
        setCurrentArticle(payload);
        history.push(`/articles:${payload}`);
    }

    return <div>
        {feed && feed.items.map( item =>
            <Alert
                key = {item.id}
                variant="success"
                onClick = {() => toSingleArticle(item.id)}
                style={{cursor: "pointer"}}
            >
                {item.title}
            </Alert>
        )}
    </div>
}

const mapStateToProps = state => {
    return {
        feeds: state.feeds.feeds,
        currentFeed: state.feeds.currentFeed
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    setCurrentArticle
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Articles)