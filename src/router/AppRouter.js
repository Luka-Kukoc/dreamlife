import { BrowserRouter, Routes, Route } from "react-router-dom";
import Goals from "../pages/Goals";
import Login from "../Login";
import AddGoal from "../pages/AddGoals";
import ActiveGoals from "../pages/ActiveGoals";
import useLocalStorage from "../hooks/useLocalStorage";
import EditGoal from "../components/EditGoal";


const AppRouter = () => {
    const [goals, setGoals] = useLocalStorage("goals", [])
    
    return(
        <BrowserRouter>
        
            <Routes>
                <Route path="/dreamlife" element={<Login />} />
                <Route path="/goals" element={<Goals/>} />
                <Route path="/addgoals" element={<AddGoal goals={goals} setGoals={setGoals}/>} />
                <Route path="/activegoals" element={<ActiveGoals goals={goals} setGoals={setGoals}/>}/>
                <Route path="/edit/:name" element={<EditGoal goals={goals} setGoals={setGoals}/>}/>
            </Routes>
        
        </BrowserRouter>
        
    )
}
export default AppRouter