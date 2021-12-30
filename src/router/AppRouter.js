import { BrowserRouter, Routes, Route } from "react-router-dom";
import Goals from "../pages/Goals";
import Login from "../Login";
import AddGoal from "../pages/AddGoals";
import ActiveGoals from "../pages/ActiveGoals";
import useLocalStorage from "../hooks/useLocalStorage";

const AppRouter = () => {
    const [goals, setGoals] = useLocalStorage("books", [])
    
    return(
        <BrowserRouter>
        
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/goals" element={<Goals/>} />
                <Route render={(props) => (
                    <AddGoal {...props} goals={goals} setGoals={setGoals}/>
                )} path="/addgoals"/>
                <Route path="/activegoals" element={<ActiveGoals/>}/>
            </Routes>
        
        </BrowserRouter>
        
    )
}
export default AppRouter