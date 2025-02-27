import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext/ProductState'

import { Divider, List} from 'antd';


const Cart = () => {

  const {cart} = useContext(ProductContext)

  cart.map(cartItem => cartItem.name)

  return (
    <div> 
      <Divider>Your Cart</Divider>

      <h2>Products selected</h2> 
      <List
          bordered
          dataSource={cart}
          renderItem={cartItem => (
              <List.Item>
                  {cartItem.name}
              </List.Item>
          )}
      />
      </div>
  )
}

export default Cart