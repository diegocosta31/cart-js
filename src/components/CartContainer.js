import React from 'react'
import CarItem from "./CarItem"
import {useGlobalContext} from '../reducer/context'

const CartContainer = () => {
    const {cart, total, clearCart} = useGlobalContext()

    if(cart.length === 0){
        return(
            <section className='cart'>
                <header>
                    <h2>Your Bag</h2>
                    <h4 className='empty-cart'>Is currently empty</h4>
                </header>
            </section>
        )
    }
  return (
    <section className="cart">
        <header>
            <h2>Your Bag</h2>
        </header>
        <div>
            {cart.map(item => {
                return <CarItem key={item.id} {...item}/>
            })}
        </div>
        <footer>
            <hr />
            <div className="cart-total">
                <h4>
                    Total <span>${total}</span>
                </h4>
            </div>
            <button className='btn clear-btn' onClick={clearCart}>Clear cart</button>
        </footer>
    </section>
    )
}

export default CartContainer