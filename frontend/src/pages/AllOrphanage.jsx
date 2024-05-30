import { toast } from 'react-toastify';
import { OrphanageContainer } from '../components';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';

export const loader = async () => {
    try {
        const { data } = await customFetch.get('/orphanage')
        return { data }
    } catch (error) {
        toast.error(error?.response?.data?.msg)
        return error
    }
}
const AllOrphanageContext = createContext()

const AllOrphanage = () => {
    
    const { data } = useLoaderData()
    return <AllOrphanageContext.Provider value={ { data }}>
      <OrphanageContainer />
    </AllOrphanageContext.Provider>
}
export const useAllOrphanageContext = () => useContext(AllOrphanageContext)
export default AllOrphanage