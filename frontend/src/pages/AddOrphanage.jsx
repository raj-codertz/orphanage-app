import { FormRow  } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useOutletContext } from 'react-router-dom';
import { Form, useNavigation, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

export const action = async ({ request }) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    try {
        await customFetch.post('/orphanage', data)
        toast.success('Orphanage added successfully')
        return redirect('all-orphanage')
    } catch (error ) {
        toast.error(error?.response?.data?.msg)
        return error
    }
}

const AddOrphanage = () => {
    const { user } = useOutletContext()
    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting'

    return <Wrapper>
        <Form method='post' className='form'>
           <h4 className='form-title'>Add Orphanage</h4>
            <div className='form-center'>
                <FormRow type='text' name='name'/>
                <FormRow type='text' name='description'/>
                <FormRow type='text' name='address'/>
                <FormRow type='text' name='donor'/>
                <FormRow type='text' labelText='Location' name='location' defaultValue={ user.location }/>
                
                <button type='submit' className='btn btn-block form-btn' disabled={ isSubmitting }>
                    { isSubmitting ? 'Adding...' : 'Submit' }
                </button>
            </div>
        </Form>
    </Wrapper>
}
export default AddOrphanage