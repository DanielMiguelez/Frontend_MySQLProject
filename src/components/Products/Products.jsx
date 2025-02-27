import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../../context/ProductContext/ProductState'
import './Products.css'
import { Card, Button} from 'antd';
import {DeleteFilled, PlusCircleFilled} from "@ant-design/icons";

const Products = () => {

  const {products, getProducts, deleteProduct, addCart, cart} = useContext(ProductContext)

  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])
  

  return (
    <div className='containerProducts'>
      {products.map((product)=>{
        return(
          
          <React.Fragment>
            <div className='products-container'>
            <Card title={product.name}  variant="borderless" style={{ width: 350 }}>
              <h2>
                ID : {product.id}
              </h2>
              <span>
                Precio : {product.price}
              </span>
              <br /><br />
              {/* <Button type="primary" onClick={()=> deleteProduct(product.id)}>Eliminar </Button> */}
              <Button type="primary" onClick={()=> addCart(product)}><PlusCircleFilled />  Añadir </Button>
              
              </Card>
            </div>
          </React.Fragment>
        )
      }
      )}
    </div>
  )
}

export default Products