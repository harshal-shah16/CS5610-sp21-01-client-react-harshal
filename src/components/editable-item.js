import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to,
        item,
        updateItem,
        deleteItem,
        courseId
    }) => {
    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(item)
    useEffect(() => {
        
       
    })
    return(
        <>
            {
                !editing &&
                <>
                    <Link to={to}>
                        {item.title}
                    </Link>
                    <i onClick={() => setEditing(true)} className="fas fa-edit"></i>
                </>
            }
            {
                editing &&
                <>
                    <input
                        onChange={(e) => setItemCache({...itemCache, title: e.target.value})}
                        value={itemCache.title}/>
                    <i onClick={() => {
                        setEditing(false)
                        updateItem(itemCache)
                    }} className="fas fa-check"></i>
                    <Link to={`/courses/table/edit/${courseId}`}><i onClick={() => {
                        setEditing(false)                         
                        deleteItem(item)}} className="fas fa-times"></i>
                        </Link>
                </>
            }
        </>
    )
}

export default EditableItem