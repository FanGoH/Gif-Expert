import React from 'react'
import PropTypes from "prop-types";

export const ImageCard = ({id, title, url}) => {

    return (
        <div className="imageCard animate__animated animate__fadeIn" key={id}> 
            <img src={url} alt={title}/>
            <p> {title} </p>
        </div>
    )
}

ImageCard.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string
}
