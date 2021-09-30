import React from 'react'
import Category from './Category';

export default function Categories({categories, handleTouchEnd,  handleTouchDragStart, editCatTechVideo, handleDeleteCategory, handleEditCatTechNote, handleAddCatTechNote, techniques, handleDeleteCatTechnique, handleDeleteCatTechNote, handleDrop}) {
    return (
        <div id="categoriesCon">
            {categories.map(category => {
                return <Category handleTouchEnd={handleTouchEnd} handleTouchDragStart={handleTouchDragStart} editCatTechVideo={editCatTechVideo} handleDeleteCatTechNote={handleDeleteCatTechNote} handleAddCatTechNote={handleAddCatTechNote} handleDeleteCategory={handleDeleteCategory} handleEditCatTechNote={handleEditCatTechNote} handleDeleteCatTechnique={handleDeleteCatTechnique} handleDrop={handleDrop} techniques={techniques} key={category.id} category={category} />;
            })}
        </div>
    )
}
