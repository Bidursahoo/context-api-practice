import React from 'react'

export default function PrintItems({item}) {
  return (
    <>
        {
            item.length === 0 ? <p>No items added</p> : item.map((tems)=>(
                <p>{tems}</p>
            ))
        }
    </>
  )
}
