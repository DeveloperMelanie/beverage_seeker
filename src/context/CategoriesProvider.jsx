import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const CategoriesContext = createContext()

const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategories = async () => {
            try {
                const { data } = await axios(
                    'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
                )
                setCategories(data.drinks)
            } catch (error) {
                console.log(error)
            }
        }
        getCategories()
    }, [])

    return (
        <CategoriesContext.Provider
            value={{
                categories,
            }}
        >
            {children}
        </CategoriesContext.Provider>
    )
}

export { CategoriesProvider }

export default CategoriesContext
