import React from 'react'

function ProductsItem({data,addToCart}) {
    let {id,name,price,imagen} = data;

    return (
        <div class="container-fluid">
            <div class="row">

            <div class="col">
                    <div class="card1 h-100">
                        <img src={imagen} class="card1-img-top" alt="..." />
                        <div class="card1-body">
                        <h4>{name}</h4>
                        <h5>${price}.00</h5>
                        <button onClick={()=> addToCart(id)}>Add</button>
                        </div>
                        <div class="card1-footer">
                            <small class="text-muted">Last updated 4 hours ago</small>
                        </div>
                    </div>
                </div>


            </div>
           
            {/* <img  src={imagen} style={{width:"250px", height:"180px"}}/>
            <h4>{name}</h4>
            <h5>${price}.00</h5>
           <button onClick={()=> addToCart(id)}>Add</button> */}

           
            
        </div>

        

    );
}

export default ProductsItem;



// style = {{border: "thin solid gray", padding: "0rem", margin:"4px"}}