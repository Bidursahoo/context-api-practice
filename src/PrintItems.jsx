import React, { useContext } from 'react'
import ItemsContext from './Store/items-store'

export default function PrintItems() {
  
    const item = useContext(ItemsContext);
    // console.log(item);
    return (
    <>
        {
          
            item.length === 0 ? <p>No items added</p> : item.item.map((tems)=>(
                <p key={tems}>{tems}</p>
            ))
        }
    </>
  )
}
