import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/OrphanageContainer"
import { useAllExploreContext } from '../pages/Explore';
import Explore from './Explore';

const ExploreContainer = () => {
    const { data } = useAllExploreContext()
    const { orphanages } = data
    if ( orphanages.length === 0) {
        return (
            <Wrapper>
                <h2>No orphanage center to display</h2>
            </Wrapper>
        )
    }
    return (
        <Wrapper>
            <div className="explore">
            <h3>All Ophanage centers available for you</h3>
            <p>You want to add your ? <button className="btn"><Link to='/register'>Click here</Link></button></p>

            </div>
        <div className='orps page'>
            { orphanages.map( orphanage => {
                return <Explore key={orphanage._id} {...orphanage} />
            } )}
        </div>
        </Wrapper>
    );
};
export default ExploreContainer;