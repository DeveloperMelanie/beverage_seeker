import { useContext } from 'react'
import BeverageContext from '../context/BeverageProvider'

const useBeverage = () => {
    return useContext(BeverageContext)
}

export default useBeverage
