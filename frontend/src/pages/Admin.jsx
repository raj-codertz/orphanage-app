import { FaHouseDamage } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { useLoaderData, redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import Wrapper from '../assets/wrappers/StatsContainer';
import { toast } from 'react-toastify';
import {StatItem} from "../components";

export const loader = async () => {
    try {
        const response = await customFetch.get('/user/admin/app-stats')
        return response.data
    } catch (error) {
        toast.error('You are not authorized to view this page')
        return redirect('/dashboard')
    }
}
const Admin = () => {
    const { user, orphanage } = useLoaderData()
    return <Wrapper>
       <StatItem
           title='total users'
           count={user}
           color='#e9b949'
           bcg='#fcefc'
           icon={<FaUsers />}
       />
        <StatItem
            title='total orphanage'
            count={orphanage}
            color='#647acb'
            bcg='#e0e8f9'
            icon={< FaHouseDamage />}
        />
    </Wrapper>
}
export default Admin