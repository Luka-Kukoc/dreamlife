import { BrowserRouter, Routes, Route } from "react-router-dom";
import Goals from "../pages/Goals";
import Login from "../Login";
import AddGoal from "../pages/AddGoals";
import ActiveGoals from "../pages/ActiveGoals";
import useLocalStorage from "../hooks/useLocalStorage";
import EditGoal from "../components/EditGoal";
import Homepage from "../pages/Home";

const AppRouter = () => {
    const [goals, setGoals] = useLocalStorage("goals", [])
    
    return(
        <BrowserRouter>
        
            <Routes>
                <Route path="/dreamlife" element={<Homepage/>} />
                <Route path="/dreamlife/home" element={<Homepage/>}/>
                <Route path="/dreamlife/goals" element={<Goals/>} />
                <Route path="/dreamlife/goals/addgoals" element={<AddGoal goals={goals} setGoals={setGoals}/>} />
                <Route path="/dreamlife/goals/activegoals" element={<ActiveGoals goals={goals} setGoals={setGoals}/>}/>
                <Route path="/dreamlife/edit/:name" element={<EditGoal goals={goals} setGoals={setGoals}/>}/>
            </Routes>
        
        </BrowserRouter>
        
    )
}
export default AppRouter