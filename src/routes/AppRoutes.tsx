import * as React from "react"
import {Route, Routes} from "react-router-dom";
import DashboardShell from "../pages/dashboard/DashboardShell";
import ShowMatesPage from "../pages/showMates/ShowMatesPage";
import AddMatePage from "../pages/addMate/AddMatePage";
import UpdateMatePage from "../pages/updateMate/UpdateMatePage";

interface IProps {}

const AppRoutes : React.FC<IProps> = () => {
    return <Routes>
        <Route path="/" element={<DashboardShell/>}>
            <Route index element={<ShowMatesPage/>}/>
            <Route path='form' element={<AddMatePage/>}/>
            <Route path='update' element={<UpdateMatePage/>}/>
        </Route>
    </Routes>
}

export default AppRoutes


