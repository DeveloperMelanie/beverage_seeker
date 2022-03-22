import { Modal, Image } from 'react-bootstrap'
import useBeverage from '../hooks/useBeverage'

export default function BeverageModal() {
    const { modal, handleModal, prescription, loading } = useBeverage()

    const showIngredients = () => {
        const ingredients = []

        for (let i = 1; i <= 15; i++) {
            if (prescription[`strIngredient${i}`]) {
                ingredients.push(
                    <li key={i}>
                        {prescription[`strIngredient${i}`]}
                        {prescription[`strMeasure${i}`]
                            ? ` - ${prescription[`strMeasure${i}`]}`
                            : null}
                    </li>
                )
            }
        }

        return ingredients
    }

    return (
        !loading && (
            <Modal show={modal} onHide={handleModal}>
                <Image
                    src={prescription.strDrinkThumb}
                    alt={prescription.strDrink}
                />
                <Modal.Header>
                    <Modal.Title>{prescription.strDrink}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='p-3'>
                        <div className='pb-3'>
                            <h2>Instrucciones</h2>
                            {prescription.strInstructions}
                        </div>
                        <h2>Ingredientes y Cantidad</h2>
                        {showIngredients()}
                    </div>
                </Modal.Body>
            </Modal>
        )
    )
}
