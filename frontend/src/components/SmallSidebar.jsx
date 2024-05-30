import { useDashboardContext } from "../pages/DashboardLayout.jsx"
import Wrapper from "../assets/wrappers/SmallSidebar.js"
import {FaTimes} from "react-icons/fa"
// import {Logo} from "./";
import NavLinks from "./NavLinks.jsx";

const SmallSidebar = () => {
   const {showSidebar, toggleSidebar } = useDashboardContext()

    return (
        <Wrapper>
            <div className={
                showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
            }>
                <div className='content'>
                    <button type='button' className='close-btn' onClick={toggleSidebar}>
                        <FaTimes />
                    </button>
                     <header>
                        <h3>Orphanage app</h3>
                         {/* <Logo /> */}
                     </header>
                     <NavLinks />
                </div>
            </div>
        </Wrapper>
    )
}
export default SmallSidebar