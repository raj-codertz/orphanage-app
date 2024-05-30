import customFetch from "../utils/customFetch.js";
import {toast} from "react-toastify";
import {redirect} from "react-router-dom";

export const action = async ({ params }) => {
       try {
           await customFetch.delete((`/orphanage/${ params.id}`))
           toast.success('Orphanage deleted successful')
       } catch (error) {
           toast.error(error?.response?.data?.msg)
       }
       return redirect('/dashboard/all-orphanage')
}