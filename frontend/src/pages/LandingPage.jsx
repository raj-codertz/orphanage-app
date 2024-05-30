import Wrapper from "../assets/wrappers/LandingPage"
import main from '../assets/images/main.svg'
import {Link} from "react-router-dom";
const Landing = () => {
    return (
        <Wrapper>
            <nav className="header">
               <h3>Orphanage App</h3>
               <Link to={'/explore'}>
                    <button type='button' className='btn'>Explore Orphanage Center</button>
               </Link>
            </nav>
            <div className='container page'>
                <div className='info'>
                    <h1>
                        Orphanage <span>needs</span> identifier
                    </h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit tenetur autem eligendi id quo sapiente rem aut, iure blanditiis? Ipsum doloremque perspiciatis doloribus perferendis accusantium ad nesciunt repudiandae est. Facilis quidem assumenda impedit molestias veritatis! Rem delectus cupiditate id corporis temporibus quo placeat reprehenderit minus!
                    </p>
                    <Link to='/register' className='btn register-link'>Register</Link>
                    <Link to='/login' className='btn'>Login</Link>
                </div>
                <img src={main} alt={'job hunt'} className='img main-img' />
            </div>
        </Wrapper>
    )
}

export default Landing