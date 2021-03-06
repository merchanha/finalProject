import React, { useReducer } from 'react'
import { TYPES } from '../actions/shoppingActions';
import { shoppingInitialState, shoppingRedcucer } from '../reducers/shoppingReducer'
import CartItem from './CartItem';
import ProductsItem from './ProductsItem';
import "./producto.css"

function Producto() {
    const [state, dispatch] = useReducer(shoppingRedcucer, shoppingInitialState);
    
    const {products, cart} = state;
    
    const addToCart = (id) => { 
        console.log(id);
        dispatch({type: TYPES.ADD_TO_CART, payload:id})
    
    };
   
    const delFromCart = (id,all = false) => {
        console.log(id, all);
        if(all) {
            dispatch({type: TYPES.REMOVE_ALL_FROM_CART, payload:id});
        }else{
            dispatch({type: TYPES.REMOVE_ONE_FROM_CART, payload:id});
        }
    };


    const clearCart = () => {
        dispatch({type: TYPES.CLEAR_CART})
    };



    return (
        <div className="container-fluid">
            <h2 className="mt-5">Nuestra lista de Productos</h2>
            <h3 className="d-flex mt-3 mb-4 titulo-productos">Products</h3>

            <article className="box-article row">
                {products.map((product) => (
                    <ProductsItem key ={product.id} data={product} addToCart={addToCart}/>
                ))}
            </article>

           
            <h3>Tu seleccion de productos</h3>
            <article >
                <button onClick = {clearCart}> Clear Cart</button>
                {cart.map((item,index)=> (
                    <CartItem key= {index} data= {item} delFromCart={delFromCart}/>


                ))}
            </article>
        </div>
    );
}

export default Producto;
