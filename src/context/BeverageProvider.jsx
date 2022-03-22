import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

const BeverageContext = createContext()

const BeverageProvider = ({ children }) => {
    const [beverages, setBeverages] = useState([])
    const [modal, setModal] = useState(false)
    const [beverageId, setBeverageId] = useState(null)
    const [prescription, setPrescription] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const getPrescription = async () => {
            if (!beverageId) return

            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${beverageId}`

                const { data } = await axios(url)
                setPrescription(data.drinks[0])
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        getPrescription()
    }, [beverageId])

    const fetchBeverages = async data => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${data.name}&c=${data.category}`

            const {
                data: { drinks },
            } = await axios(url)
            setBeverages(drinks)
        } catch (error) {
            console.log(error)
        }
    }

    const handleModal = () => {
        setModal(!modal)
    }

    const handleBeverageId = id => {
        setBeverageId(id)
    }

    return (
        <BeverageContext.Provider
            value={{
                fetchBeverages,
                beverages,
                modal,
                handleModal,
                beverageId,
                handleBeverageId,
                prescription,
                loading,
            }}
        >
            {children}
        </BeverageContext.Provider>
    )
}

export { BeverageProvider }

export default BeverageContext
