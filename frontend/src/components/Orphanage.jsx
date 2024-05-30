import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link, Form } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Orphanage';
import OrphanageInfo from './OrphanageInfo';


const Orphanage = ({
   _id,
   name,
   description,
   location,
   address,
   donor
}) => {
    return (
        <Wrapper>
            <header>
                <div className='main-icon'>{ name.charAt(0)}</div>
                <div className='info'>
                    <h5> { name }</h5>
                    <p>Donated by { donor }</p>
                </div>
            </header>
            <div className='content'>
                <div className='content-center'>
                    <OrphanageInfo icon={ <FaLocationArrow /> } text={location} />
                    <OrphanageInfo icon={ <FaCalendarAlt /> } text={description} />
                    <OrphanageInfo icon={ <FaBriefcase /> } text={address} />
                </div>
                <footer className='actions'>
                    <Link to={`../edit-orphanage/${_id}`} className='btn edit-btn'>Edit</Link>
                    <Form method='post' action= {`../delete-orphanage/${_id}`}>
                        <button type='submit' className='btn delete-btn'>
                            Delete
                        </button>
                    </Form>
                </footer>
            </div>
        </Wrapper>
    );
};
export default Orphanage;