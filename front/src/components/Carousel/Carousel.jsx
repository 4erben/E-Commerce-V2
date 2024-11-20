import React from 'react'

export default function Carousel({items}) {
  return (
    <div>
        <div>
            {items.map((item)=>{
                return(
                    <img src={item.img} alt={img.title} className=""/>
                )
            })}
        </div>
    </div>
  )
}
