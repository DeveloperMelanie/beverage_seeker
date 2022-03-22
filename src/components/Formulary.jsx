import { useState } from 'react'
import { Button, Form, Row, Col, Alert } from 'react-bootstrap'
import useCategories from '../hooks/useCategories'
import useBeverage from '../hooks/useBeverage'

export default function Formulary() {
    const [search, setSearch] = useState({
        name: '',
        category: '',
    })
    const [alert, setAlert] = useState('')
    const { categories } = useCategories()
    const { fetchBeverages } = useBeverage()

    const handleChange = ({ target }) => {
        setSearch({
            ...search,
            [target.name]: target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (Object.values(search).includes('')) {
            setAlert('Todos los campos son obligatorios')
            return
        }
        setAlert('')

        fetchBeverages(search)
    }

    return (
        <Form onSubmit={handleSubmit}>
            {alert && (
                <Alert variant='danger' className='text-center'>
                    {alert}
                </Alert>
            )}
            <Row>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='name'>Nombre Bebida</Form.Label>
                        <Form.Control
                            id='name'
                            name='name'
                            type='text'
                            placeholder='Ej: Tequila, Vodka, etc'
                            value={search.name}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='category'>
                            Categoría Bebida
                        </Form.Label>
                        <Form.Select
                            id='category'
                            name='category'
                            value={search.category}
                            onChange={handleChange}
                        >
                            <option>- Selecciona Categoría -</option>
                            {categories.map(category => (
                                <option
                                    key={category.strCategory}
                                    value={category.strCategory}
                                >
                                    {category.strCategory}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Row className='justify-content-end'>
                <Col md={3}>
                    <Button
                        variant='danger'
                        className='text-uppercase w-100'
                        type='submit'
                    >
                        Buscar Bebidas
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}
