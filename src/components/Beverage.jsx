import { Col, Card, Button } from 'react-bootstrap'
import useBeverage from '../hooks/useBeverage'

export default function Beverage({ beverage }) {
    const { handleModal, handleBeverageId } = useBeverage()

    return (
        <Col md={6} lg={3}>
            <Card className='mb-4'>
                <Card.Img
                    variant='top'
                    src={beverage.strDrinkThumb}
                    alt={beverage.strDrink}
                />

                <Card.Body>
                    <Card.Title>{beverage.strDrink}</Card.Title>
                    <Button
                        variant='warning'
                        className='w-100 text-uppercase mt-2'
                        onClick={() => {
                            handleModal()
                            handleBeverageId(beverage.idDrink)
                        }}
                    >
                        Ver Receta
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}
