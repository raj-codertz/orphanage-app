import {Link, redirect, Form, useNavigation} from "react-router-dom";
import Wrapper from '../assets/wrappers/RegisterAndLoginPage.js'
import {FormRow} from "../components/index.js"
import customFetch from "../utils/customFetch.js";
import { toast} from "react-toastify";

export const action = async ({ request }) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    try {
        await customFetch.post('auth/login', data)
        toast.success('Login successful')
        return redirect('/dashboard')
    } catch (error) {
        toast.error(error?.response?.data?.msg)
       return error
    }
}
const Login = () => {
    const navigation = useNavigation()
    const isLogging = navigation.state === 'submitting'

    return (
        <Wrapper>
            <Form method='post' className='form'>
                
                <h4>Login</h4>
                <FormRow type='email'
                         name='email'
                         defaultValue='arafa@gmail.com' />
            <FormRow type='password'
                     name='password'
                     defaultValue='secret@123' />
            <button type='submit' className='btn btn-block' disabled={ isLogging }>{ isLogging ? 'Logging....' : 'Login'}</button>
            <p>
               Not a member yet?
                <Link to='/register' className='member-btn'>
                   Register
               </Link>
            </p>
        </Form>
        </Wrapper>
    )
}
export default Login