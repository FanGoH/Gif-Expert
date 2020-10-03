import React, { useState } from 'react'
import { AddCategoryForm } from './Components/AddCategoryForm';
import { CategoryGrid } from './Components/CategoryGrid';

export const GifExpert = () => {

    const [categories, setCategories] = useState(["One Punch"]);

    const addCategory = (newCategory) => {
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h2> Gif Expert </h2>
            <AddCategoryForm onSubmision={addCategory}/>
            <hr />  

            { categories.map(category => (
                <CategoryGrid categoryName={category} key={category} />
            ))}
        </>
    )
}
