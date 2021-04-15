// core
import xml2js from "xml2js";

// constants
import {
    REQUESTED_FEEDS,
    REQUESTED_FEEDS_FAILED,
    REQUESTED_FEEDS_SUCCEEDED,
    REMOVE_FEED,
    ADD_FEED,
    SET_CURRENT_FEED,
    SET_ARTICLE_ID,
} from "../constants";

const initialState = {
    feeds: [],
    loading: false,
    error: false,
    currentFeed: null,
    currentArticle: null
}

const newFeeds = feeds => {

    let items1 = [];
    let items2 = [];
    let items3 = [];

    if (feeds.length > 1) {

        // to feed 1
        const {description: desc1, title: tit1} = feeds[0].rss.channel[0]

        items1 = feeds[0].rss.channel[0].item.map(item => {
            return {
                id: item['dc:identifier'][0],
                title: item.title[0],
                description: item.description[0],
                pubDate: item.pubDate[0]
            }
        })

        const feed1 = {
            id: 1,
            title: tit1[0],
            description: desc1[0],
            items: items1
        }

        // to feed2
        const {title: tit2} = feeds[1].feed

        items2 = feeds[1].feed.entry.map(item => {
            return {
                id: item.id[0],
                title: item.title[0],
                description: item.content[0]._,
                pubDate: item.published[0]
            }
        })

        const feed2 = {
            id: 2,
            title: tit2[0],
            description: "Without description",
            items: items2
        }

        // to feed 3
        const {description: desc3, title: tit3} = feeds[2].rss.channel[0]

        items3 = feeds[2].rss.channel[0].item.map(item => {
            return {
                id: item['post-id'][0]._,
                title: item.title[0],
                description: item.description[0],
                pubDate: item.pubDate[0]
            }
        })

        const feed3 = {
            id: 3,
            title: tit3[0],
            description: desc3[0],
            items: items3
        }

        return [
            feed1,
            feed2,
            feed3
        ]
    }

    return []
}

const xmlToJSON = (feeds) => {

    let parser = new xml2js.Parser();
    let data = []
    feeds.map(feed => parser.parseString(`${feed}`, (err, result) => {
            data.push(result)
        })
    )

    return newFeeds(data)
}

export const feedsReducer = (state = initialState, action) => {

    switch (action.type) {
        case REQUESTED_FEEDS:
            return {
                ...state,
                loading: true,
                error: false,
            };

        case REQUESTED_FEEDS_SUCCEEDED:

            const feedsJSON = xmlToJSON(action.payload)

            return {
                feeds: feedsJSON,
                loading: false,
                error: false,
            }

        case REQUESTED_FEEDS_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
            };

        case REMOVE_FEED:

            const ind = state.feeds.findIndex(item => item.id === action.payload);

            const newArr = [
                ...state.feeds.slice(0, ind),
                ...state.feeds.slice(ind + 1),
            ]

            console.log(newArr)

            return {
                ...state,
                feeds: newArr
            };

        case ADD_FEED:

            const addItem = {
                id: Math.trunc(Math.random() * 100000),
                title: action.payload.title,
                description: action.payload.description,
                items: []
            }

            return {
                ...state,
                feeds: [
                    ...state.feeds,
                    addItem
                ]
            };

        case SET_CURRENT_FEED:

            return {
                ...state,
                currentFeed: action.payload
            };

        case SET_ARTICLE_ID:

            return {
                ...state,
                currentArticle: action.payload
            };

        default:
            return state;
    }
}