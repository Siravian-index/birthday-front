import * as React from "react"
import {Route, Routes} from "react-router-dom";
import DashboardShell from "../pages/dashboard/DashboardShell";
import ShowMatesPage from "../pages/showMates/ShowMatesPage";
import AddMatePage from "../pages/addMate/AddMatePage";
import UpdateMatePage from "../pages/updateMate/UpdateMatePage";
import PageNotFound from "../components/error/PageNotFound";

interface IProps {}

const AppRoutes : React.FC<IProps> = () => {
    return <Routes>
        <Route path="/" element={<DashboardShell/>}>
            <Route index element={<ShowMatesPage/>}/>
            <Route path='form' element={<AddMatePage/>}/>
        </Route>
        <Route path='*' element={<PageNotFound/>} />
    </Routes>
}

export default AppRoutes


