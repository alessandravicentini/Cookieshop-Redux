import { Container, Content, Details, Title } from "./styles";
import { MdShoppingCart } from 'react-icons/md'

import { useDispatch } from "react-redux";
import { addToCart } from "../../store/modules/cart/actions";


const Product = ({ product, key }) => {

  const dispatch = useDispatch();

  const { name, price, details, img } = product;

  const priceFormat = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(price)

  return (
    <Container>
      <img src={img} alt={name} />
      <Title>{name}</Title>
      <Details>{details}</Details>
      <Content>
      <p>{priceFormat}</p>
        <MdShoppingCart onClick={() => dispatch(addToCart(product))} />
      </Content>
    </Container>
  );
};

export default Product;