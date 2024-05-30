import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/Orphanage';
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdOutlineMyLocation } from "react-icons/md";

import OrphanageInfo from './OrphanageInfo';


const Explore = ({
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
                    <OrphanageInfo icon={ <FaMapMarkedAlt /> } text={location} />
                    <OrphanageInfo icon={ <FaCalendarAlt /> } text={description} />
                    <OrphanageInfo icon={ <MdOutlineMyLocation /> } text={address} />
                </div>
            </div>
        </Wrapper>
    );
};
export default Explore;