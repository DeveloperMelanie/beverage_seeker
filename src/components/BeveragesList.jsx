import { Row } from 'react-bootstrap'
import useBeverage from '../hooks/useBeverage'
import Beverage from './Beverage'

export default function BeveragesList() {
    const { beverages } = useBeverage()

    return (
        <Row className='my-5'>
            {beverages.map(beverage => (
                <Beverage key={beverage.idDrink} beverage={beverage} />
            ))}
        </Row>
    )
}
