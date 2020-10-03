import { useState, useEffect } from 'react';
import { getGifs } from '../getGifs';

export const useFetchGifs = (categoryName) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    
    useEffect(() => {
        getGifs(categoryName).then((data) => {
                setState({
                    data: data,
                    loading: false
                });
            } )
    }, [categoryName])

    return state;

}