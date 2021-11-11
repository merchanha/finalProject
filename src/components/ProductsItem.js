import React from 'react'

function ProductsItem({data,addToCart}) {
    let {id,name,price,imagen} = data;

    return (
        <div style = {{border: "thin solid gray", padding: "1rem"}}>
           
            <img  src={imagen} style={{width:"250px", height:"180px"}}/>
            <h4>{name}</h4>
            <h5>${price}.00</h5>
            <button onClick={()=> addToCart(id)}>Add</button>
        </div>
    );
}

export default ProductsItem;
