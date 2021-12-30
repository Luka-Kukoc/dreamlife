import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/Home";
import Goals from "../pages/Goals";
import App from "../App";
import AddGoal from "../pages/AddGoals";
import ActiveGoals from "../pages/ActiveGoals";
const AppRouter = () => {
    return(
        <BrowserRouter>
        
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/goals" element={<Goals/>} />
                <Route path="/addgoals" element={<AddGoal/>} />
                <Route path="/activegoals" element={<ActiveGoals/>}/>
            </Routes>
        
        </BrowserRouter>
        
    )
}
export default AppRouter