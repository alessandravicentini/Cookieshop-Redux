import { Container } from './styles';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'

import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/modules/cart/actions'


export const CartProduct = ({ product }) => {

    const dispatch = useDispatch();

    const cart = useSelector(({ cart }) => cart);
    const productQtt = cart.filter((item) => item === product).length

    const priceFormat = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(product.price)

    return (
        <Container>
            <img src={product.img} alt={product.name}/>
            <p>{product.name}</p>
            <span>{priceFormat}</span>
            <div>
            <span>Qtd: {productQtt}</span>
                <AiOutlineMinusCircle size={20} onClick={() => dispatch(removeFromCart(product))}/>
                <AiOutlinePlusCircle size={20} onClick={() => dispatch(addToCart(product))}/>
            </div>
        </Container>
    )
}