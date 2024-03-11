import React from 'react'
import "./index.css"

function CategoryItem(props) {
    const {category,updateActiveCategoryId,isActive,updateIsLoading}=props
  return (
    <li className='category-item'>
      <button type="button" className={isActive?'category-button active':'category-button'} onClick={()=>{
        updateIsLoading(true)
        updateIsLoading(false)
        updateActiveCategoryId(category)
    
      }}>{category.toUpperCase()}</button>

    </li>
  )
}

export default CategoryItem
