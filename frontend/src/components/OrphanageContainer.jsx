import Orphanage from './Orphanage'
import Wrapper from "../assets/wrappers/OrphanageContainer"
import { useAllOrphanageContext } from '../pages/AllOrphanage';

const OrphanageContainer = () => {
    const { data } = useAllOrphanageContext()
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
        <div className='orps'>
            { orphanages.map( orphanage => {
                return <Orphanage key={orphanage._id} {...orphanage} />
            } )}
        </div>
        </Wrapper>
    );
};
export default OrphanageContainer;