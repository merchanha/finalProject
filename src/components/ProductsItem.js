import React from 'react'

function ProductsItem({data,addToCart}) {
    let {id,name,price,imagen} = data;

    return (
    <div className="col-sm-12 col-md-6 col-xl-4 col-xxl-4 mb-5">
                        <img className="img-product" src={imagen} alt="..." />
                        <div >
                        <h4>{name}</h4>
                        <h5>${price}.00</h5>
                        <button onClick={()=> addToCart(id)}>Add</button>
                        </div>
                        <div >
                            <small class="text-muted">Last updated 4 hours ago</small>
                        </div>
                    </div>
    );
};

export default ProductsItem;



