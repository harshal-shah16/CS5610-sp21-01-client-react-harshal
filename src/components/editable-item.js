import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to,
        item,
        updateItem,
        deleteItem,
        type,
        id,
        select,
        selectedId
    }) => {
    
    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(item)
    //onst [active, setActive] = useState(false);
    let activeProperty = (id === selectedId ? ' active': '');
    let handleActiveClick = () => {
        console.log("key is",id)
       select(id)
    }
    return(
        <>
            {
                !editing &&
                <>
                    <li className={`${type === 'module'? 'list-group-item' : 'nav-link'} 
                        ${activeProperty}
                    ml-1`} onClick={handleActiveClick}>
                    <Link to={to}>
                        {item.title}
                    </Link>
                    <i onClick={() => setEditing(true)} className="fas fa-edit ml-1"></i>
                    </li>
                </>
            }
            {
                editing &&
                
                <>                  

                    <li className={`${type === 'module'? 'list-group-item' : 'nav-link'} 
                    ml-1`} >
                    <input
                        onChange={(e) => setItemCache({...itemCache, title: e.target.value})}
                        value={itemCache.title}/>
                    <i onClick={() => {
                        setEditing(false)
                        updateItem(itemCache)
                    }} className="fas fa-check float-right m-1"></i>
                    <i onClick={() => {
                        setEditing(false)                         
                        deleteItem(item)}} className="fas fa-times float-right m-1"></i>
                   </li>
                </>
            }
        </>
    )
}

export default EditableItem