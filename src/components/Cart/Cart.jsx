import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../../context/ProductContext/ProductState';
import { Divider, List, Button } from 'antd';
import { OrderContext } from '../../context/OrderContext/OrderState';

const Cart = () => {
    const { cart, clearCart } = useContext(ProductContext); // Obtener el carrito
    const { createOrder } = useContext(OrderContext); // Obtener la función de crear orden

    // Función para crear una nueva orden
    const createNewOrder = () => {
        createOrder(cart); // Pasa todo el carrito
        clearCart(); // Limpiar el carrito
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    if (cart.length <= 0) {
        return <span>No tienes ningún producto añadido</span>;
    }

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
            <Button onClick={() => clearCart()} type="primary">Clear Cart</Button>
            <Button onClick={() => createNewOrder()} type="primary">Order</Button>
        </div>
    );
};

export default Cart;
