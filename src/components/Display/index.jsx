
import cookies from '../../dataBase/db'

import Product from '../Product'
import { Container } from './styles'

export const Display = () => {

    return (
        <Container>
        {cookies.map((cookie, index) => <Product key={index} product={cookie}/>)}
        </Container>
    )
}