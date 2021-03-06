import { TYPES } from "../actions/shoppingActions";
import producto1 from "../media/instalacion.jpg"

export const shoppingInitialState = {
    products:[
        {id:1, name: "Mueble de cocina",price:10.000, imagen: producto1},
        {id:2, name: "Rack para Tv",price:7.000, imagen:producto1},
        {id:3, name: "Comedor",price:15.000, imagen:producto1},
        {id:4, name: "Mueble para baño",price:5.000, imagen:producto1},
        {id:5, name: "Placard",price:9.000, imagen:producto1},
        {id:6, name: "Silla",price:45.000, imagen:producto1},
        
       
    ],
    cart: [],

}

export function shoppingRedcucer(state, action){
    switch(action.type){
        case TYPES.ADD_TO_CART:{
            let newItem = state.products.find(product => product.id === action.payload);
            //console.log(newItem);

            let itemCart = state.cart.find((item)=> item.id ===newItem.id);

            return itemCart 
            ?{
                ...state,
                cart:state.cart.map((item)=>
                item.id === newItem.id
                ?{...item, quantity: item.quantity + 1}
                :item
                ),

            }
            :{

                ...state,
                cart:[...state.cart, {...newItem, quantity: 1}],
            }

        }
        case TYPES.REMOVE_ONE_FROM_CART:{

            let itemToDelete = state.cart.find((item)=> item.id === action.payload);

            return itemToDelete.quantity > 1
            ?{
                ...state,
                cart:state.cart.map((item)=>
                item.id === action.payload
                ? {... item, quantity: item.quantity -1}
                :item
                ),
            }
            :{
                ... state,
                cart: state.cart.filter((item) => item.id !== action.payload)
            };

        }
        case TYPES.REMOVE_ALL_FROM_CART:{
            return{
     
            ... state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            

        };
    }
        case TYPES.CLEAR_CART:{
            return shoppingInitialState;

        }
        default:
            return state;
    }
}