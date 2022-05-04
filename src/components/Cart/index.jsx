import { useSelector } from "react-redux";
import { useRef } from 'react'

import { Cards, Container, Content } from "./styles";
import { AiOutlineDownSquare, AiOutlineUpSquare } from 'react-icons/ai'

import { CartProduct } from "../CartProduct";

const Cart = () => {

  const cart = useSelector(({ cart }) => cart);

  const cartFiltered = [...new Set(cart)]
 
  const totalPrice = cart.reduce((acc, next) => acc + next.price, 0)
  const totalPriceFormat = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(totalPrice)

  const myRef = useRef(null)

  const scroll = (direction) => {
      myRef.current.scrollBy({top: direction === 'up' ? -200 : 200 , behavior: 'smooth'})
  }


  return (
      <Container>
        <Content>
        <h2>Sua seleção</h2>
        <AiOutlineUpSquare size={20} onClick={() => scroll('up')} />
        <AiOutlineDownSquare size={20} onClick={() => scroll('down')}/>
        </Content>
        <Cards ref={myRef}>
        {cartFiltered.map((product, index) => (
          <CartProduct product={product} key={index}/>
          ))}
        </Cards>
        <p>Total: {totalPriceFormat}</p>
        <button>Finalizar compra</button>
    </Container>
  );
};

export default Cart;