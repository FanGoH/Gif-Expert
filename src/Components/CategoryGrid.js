import React from 'react';
import PropTypes from "prop-types";
import { ImageCard } from './ImageCard';
import { useFetchGifs } from '../Functions/customHooks/useFetchGifs';


export const CategoryGrid = ({categoryName}) => {

    const {data, loading} = useFetchGifs(categoryName);

    return (
        <>
            <h4> {categoryName} </h4>

            { loading ? "Loading . . . " : (
                <div className="gifGrid">
                        {data.map((image) => {
                            return (<ImageCard 
                                        key={image.id} 
                                        { ...image } />)
                        })}
                </div>
            )}
        </>    
    )
}

CategoryGrid.propTypes = {
    categoryName: PropTypes.string.isRequired
}