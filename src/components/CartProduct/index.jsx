import { Container } from './styles';
import { FaTrash } from 'react-icons/fa'

import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/modules/cart/actions'


export const CartProduct = ({ product, index }) => {

    const dispatch = useDispatch();

    const priceFormat = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(product.price)

    return (
        <Container>
            <img src={product.img} alt={product.name}/>
            <p>{product.name}</p>
            <span>{priceFormat}</span>
            <FaTrash onClick={() => dispatch(removeFromCart(index))}/>
        </Container>
    )
}