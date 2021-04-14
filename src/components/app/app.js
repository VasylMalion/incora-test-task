// core
import React from "react";
import xml2js from "xml2js";

// styles
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {

    let parser = new xml2js.Parser();
    parser.parseString(
        ``,
        function(err, result) {
            console.log(result);
        }
    );
    return <div>Parse XML using ReactJs</div>;
}