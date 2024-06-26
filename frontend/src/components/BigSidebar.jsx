import Wrapper from "../assets/wrappers/BigSidebar"
import NavLinks from "./NavLinks"
import { useDashboardContext } from "../pages/DashboardLayout";

const BigSidebar = () => {
    const { showSidebar } = useDashboardContext()

    return (
        <Wrapper>
            <div className={ showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar' }>
                <div className='content'>
                    <header>
                        <h3>Orphanage App</h3>
                    </header>
                    <NavLinks  isBigSidebar />
                </div>
            </div>
        </Wrapper>
        )
}
export default BigSidebar