import Wrapper from "../assets/wrappers/OrphanageInfo.js";

const OrphanageInfo = ({ icon, text }) => {
    return <Wrapper>
        <span className='orp-icon'>{ icon }</span>
        <span className='orp-text'>{ text }</span>
    </Wrapper>
};

export default OrphanageInfo;