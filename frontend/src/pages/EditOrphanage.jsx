import { FormRow, FormRowSelect } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useLoaderData } from 'react-router-dom';
import { Form, useNavigation, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/orphanage/${params.id }`)
      return data
  } catch (error) {
      toast.error(error?.response?.data?.msg)
      return redirect('/dashboard/all-orphanage')
  }
}

export const action = async ( {request, params}) => {
  console.log(request);
    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    try {
        await customFetch.patch(`/orphanage/${params.id }`, data )
        toast.success('Orphanage update successful')
        return redirect('/dashboard/all-orphanage')
    } catch (error ) {
        toast.error(error?.response?.data?.msg)
        return error
    }
}

const EditOrphanage = () => {
    const { orphanage } = useLoaderData()
    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting'

    return <Wrapper>
        <Form method='post' className='form'>
            <h4 className='form-title'>Edit Orphanage</h4>
            <div className='form-center'>
                <FormRow type='text' name='name' defaultValue={orphanage.name}/>
                <FormRow type='text' name='description' defaultValue={orphanage.description}/>
                <FormRow type='text' name='address' labelText='address' defaultValue={orphanage.address}/>
                <FormRow type='text' name='donor' labelText='donor' defaultValue={orphanage.donor}/>
                <FormRow type='text' name='location' labelText='location' defaultValue={orphanage.location}/>
                <button type='submit' className='btn btn-block form-btn' disabled={ isSubmitting}>
                    { isSubmitting ? 'editing...' : 'Edit'}
                </button>
            </div>
        </Form>
    </Wrapper>
}

export default EditOrphanage