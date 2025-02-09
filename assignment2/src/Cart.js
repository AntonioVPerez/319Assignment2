import "./styles/Cart.css";
import { useDispatch, useSelector } from 'react-redux';
import { setView } from './reducers/viewSlice.js';
import CartProduct from './CartProduct.js';
import Payment from './Payment.js';

function Cart() {
  const dispatch = useDispatch();
  const data = useSelector((state) => (state.productData.value));
  let cartTotal = 0;
  data.map((product) => {
    cartTotal += (product.quantity * product.price);
  })
  
  return (
    <div>
        <div class="navbar myNav m-3">
            <button onClick={() => {dispatch(setView(0))}} type="button" class="btn btn-primary navButton shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="returnIcon bi bi-arrow-left-circle" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                </svg>
                Return
            </button>
        </div>

        <div>
            <div class="cartCont">
                {cartTotal !== 0 ? <div class="h2 fw-bold mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="m-3 mb-4 bi bi-cart-fill" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                    Your Cart
                </div> : <></>}
                {data.filter((element) => {
                    return element.quantity > 0;
                }).map((product) => {
                    cartTotal += (product.quantity * product.price);
                    return (
                        <div key={product.title}>
                            <CartProduct {...product}/>
                            <hr/>
                        </div>
                    );
                })}
                {cartTotal === 0 ? (
                    <div class="px-4 py-5 my-5 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-25 m-3 bi bi-cart-dash" viewBox="0 0 16 16">
                            <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"/>
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
                    <h1 class="display-5 fw-bold text-body-emphasis">You have no items in your cart...</h1>
                    </div>
                ) :
                <div>
                    <div class="totalInfo">
                        <div class="h6">
                            Sub-total: ${cartTotal.toFixed(2)} 
                        </div>
                        <div class="h6">
                            Tax: ${(cartTotal * 0.07).toFixed(2)} 
                        </div>
                        <div class="h2 fw-bold">
                            Total: ${(cartTotal += (cartTotal * 0.07)).toFixed(2)} 
                        </div>
                    </div>      
                    {console.log(cartTotal)}
                    <Payment total={cartTotal}/>
                </div>
                }
            </div>
        </div>
    </div>
  );
}

export default Cart;