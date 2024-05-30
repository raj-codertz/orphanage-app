import { toast } from 'react-toastify';
import { ExploreContainer } from '../components';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';

export const loader = async () => {
    try {
        const { data } = await customFetch.get('/explore/orphanages')
        return { data }
    } catch (error) {
        toast.error(error?.response?.data?.msg)
        return error
    }
}
const AllExploreContext = createContext()

const Explore = () => {
    
    const { data } = useLoaderData()
    return <AllExploreContext.Provider value={ { data }}>
      <ExploreContainer />
    </AllExploreContext.Provider>
}
export const useAllExploreContext = () => useContext(AllExploreContext)
export default Explore