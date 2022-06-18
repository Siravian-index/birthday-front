import {Route, Routes} from "react-router-dom";
import DashboardShell from "./pages/dashboard/DashboardShell";
import AddMatePage from "./pages/addMate/AddMatePage";
import UpdateMatePage from "./pages/updateMate/UpdateMatePage";
import ShowMatesPage from "./pages/showMates/ShowMatesPage";

function App() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<DashboardShell/>}>
                    <Route index element={<ShowMatesPage/>}/>
                    <Route path='form' element={<AddMatePage/>}/>
                    <Route path='update' element={<UpdateMatePage/>}/>
                </Route>
            </Routes>

        </div>
    )
}

export default App
