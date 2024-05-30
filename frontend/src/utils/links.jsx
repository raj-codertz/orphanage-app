
import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { MdAddHomeWork } from "react-icons/md";
import { ImProfile } from 'react-icons/im';
import { MdAdminPanelSettings } from 'react-icons/md';
import { FaLaptopHouse } from "react-icons/fa";

const links = [
    {
        text: 'Add Orphanage',
        path: '.',
        icon: <MdAddHomeWork />
    },
    {
        text: 'All orphanage',
        path: 'all-orphanage ',
        icon: <FaLaptopHouse />
    },
    {
        text: 'Profile',
        path: 'profile',
        icon: <ImProfile />
    },
    {
        text: 'Admin',
        path: 'admin',
        icon: <MdAdminPanelSettings />
    }
]

export default links