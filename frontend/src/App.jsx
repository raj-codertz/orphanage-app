import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {
    HomeLayout,
    Landing,
    Register,
    Login,
    DashboardLayout,
    Error,
    AddOrphanage,
    AllOrphanage,
    Profile,
    Stats,
    Admin,
    EditOrphanage,
    Explore
} from './pages'

import { action as registerAction} from './pages/Register.jsx'
import { action as loginAction } from "./pages/Login.jsx"
import { action as addOrphanageAction } from "./pages/AddOrphanage.jsx"
import { loader as dashboardLoader } from './pages/DashboardLayout.jsx'
import { loader as allOrphanageLoader } from './pages/AllOrphanage.jsx'
import { loader as adminLoader } from './pages/Admin.jsx'
import { action as profileAction } from './pages/Profile.jsx'
import { action as editAction } from './pages/EditOrphanage.jsx'
import { action as deleteAction } from './pages/DeleteOrphanage.jsx'
import { loader as editLoader } from './pages/EditOrphanage.jsx'
import { loader as exploreLoader } from './pages/Explore.jsx'



const checkDefaultTheme = () => {
    const isDarkTheme = localStorage.getItem('darkTheme') === 'true'
    document.body.classList.toggle('dark-theme', isDarkTheme)
    return isDarkTheme
}

const isDarkThemeEnabled = checkDefaultTheme()

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
              index: true,
              element: <Landing />
            },
            {
                path: "/register",
                element: <Register />,
                action: registerAction
            },
            {
                path: "/login",
                element: <Login />,
                action: loginAction
            },
            {
                path: "/explore",
                element: <Explore />,
                loader: exploreLoader
            },
            {
                path: "/dashboard",
                element: <DashboardLayout isDarkThemeEnabled={ isDarkThemeEnabled }/>,
                loader: dashboardLoader,
                children: [
                    {
                        index: true,
                        element: <AddOrphanage />,
                        action: addOrphanageAction
                        
                    },
                    { path: 'stats', element: <Stats /> },
                    {
                        path: 'all-orphanage',
                        element: <AllOrphanage />,
                        loader: allOrphanageLoader

                    },

                    {
                        path: 'profile',
                        element: <Profile />,
                        action: profileAction
                    },
                    {
                        path: 'admin',
                        element: <Admin />,
                        loader: adminLoader
                       
                    },
                    {
                        path: 'edit-orphanage/:id',
                        element: <EditOrphanage />,
                        action: editAction,
                        loader: editLoader
                      
                    },
                    {
                        path: 'delete-orphanage/:id',
                        action: deleteAction
                       
                    }
                ]
            }
        ]
    }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}
export default App