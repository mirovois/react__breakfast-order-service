import React from 'react';
import loader from "../images/loader.gif"

const Loading = () => {
    return (
        <div className="loading">
            <h2>image is loading</h2>
            <img src={loader} alt=""/>
        </div>
    )
}

export default Loading
