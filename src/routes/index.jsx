import { createBrowserRouter } from 'react-router-dom'

import App from '../App'
import Login from '../pages/Login'
import ForgotPassword from '../pages/ForgotPassword'
import Dashboard from '../pages/Dashboard'
import ResetCode from '../pages/ResetCode'
import NewPassword from '../pages/NewPassword'
import Success from '../pages/Success'
import Notifications from '../pages/Notifications'
import Profile from '../pages/Profile'
import Configurations from '../pages/Configurations'
import Condominiums from '../pages/Condominiums'
import Units from '../pages/Units'
import Residents from '../pages/Residents'
import Manager from '../pages/Manager'
import Trustees from '../pages/Trustees'
import Legal from '../pages/Legal'
import Charge from '../pages/Charge'
import Entries from '../pages/Entries'
import Outcomes from '../pages/Outcomes'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Login />
            },
            {
                path: "forgot",
                element: <ForgotPassword />
            },
            {
                path: "dashboard",
                element: <Dashboard />
            },
            {
                path: "reset-code",
                element: <ResetCode />
            },
            {
                path: "new-password",
                element: <NewPassword />
            },
            {
                path: "success",
                element: <Success />
            },
            {
                path: "notifications",
                element: <Notifications />
            },
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "configurations",
                element: <Configurations />
            },
            {
                path: "condominiums",
                element: <Condominiums />
            },
            {
                path: "units",
                element: <Units />
            },
            {
                path: "residents",
                element: <Residents />
            },
            {
                path: "manager",
                element: <Manager />
            },
            {
                path: "trustees",
                element: <Trustees />
            },
            {
                path: "legal",
                element: <Legal />
            },
            {
                path: "charge",
                element: <Charge />
            },
            {
                path: "entries",
                element: <Entries />
            },
            {
                path: "outcomes",
                element: <Outcomes />
            },
        ]
    }
])

export default router;
