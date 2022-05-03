import { useSelector } from "react-redux";
import { CartProduct } from "../CartProduct";

import { Cards, Container, Content } from "./styles";
import { AiOutlineDownSquare, AiOutlineUpSquare } from 'react-icons/ai'

const Cart = () => {

  const cart = useSelector(({ cart }) => cart);

  const totalPrice = cart.reduce((acc, next) => acc + next.price, 0)
  const totalPriceFormat = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(totalPrice)

    const myRef = useRef(null)

  return (
      <Container>
        <Content>
        <h2>Sua seleção</h2>
        <AiOutlineUpSquare size={20} onClick={() => window.scrollBy({top:20, behavior:'smooth'})} />
        <AiOutlineDownSquare size={20}/>
        </Content>
        <Cards>
        {cart.map((product, index) => (
          <CartProduct product={product} key={index}/>
        ))}
        </Cards>
        <p>Total: {totalPriceFormat}</p>
        <button>Finalizar compra</button>
    </Container>
  );
};

export default Cart;