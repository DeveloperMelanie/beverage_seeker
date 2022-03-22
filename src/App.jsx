import { Container } from 'react-bootstrap'
import { CategoriesProvider } from './context/CategoriesProvider'
import { BeverageProvider } from './context/BeverageProvider'

import Formulary from './components/Formulary'
import BeveragesList from './components/BeveragesList'
import BeverageModal from './components/BeverageModal'

export default function App() {
    return (
        <CategoriesProvider>
            <BeverageProvider>
                <header className='py-5'>
                    <h1>Buscador de Bebidas</h1>
                </header>

                <Container className='mt-5'>
                    <Formulary />
                    <BeveragesList />
                    <BeverageModal />
                </Container>
            </BeverageProvider>
        </CategoriesProvider>
    )
}
