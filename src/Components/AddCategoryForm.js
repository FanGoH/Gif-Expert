import React, {useState} from 'react';
import PropTypes from "prop-types";

export const AddCategoryForm = ({onSubmision}) => {
    
    const [inputValue, setInputValue] = useState("Add Category");

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue === "")
            return;

        onSubmision(inputValue);
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={inputValue}
                onChange={ handleChange }
            />
        </form>
    )
}

AddCategoryForm.propTypes = {
    onSubmision: PropTypes.func.isRequired
}