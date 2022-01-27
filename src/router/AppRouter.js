import { BrowserRouter as HashRouter, Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Goals from "../pages/Goals";
import AddGoal from "../pages/AddGoals";
import ActiveGoals from "../pages/ActiveGoals";
import useLocalStorage from "../hooks/useLocalStorage";
import EditGoal from "../components/EditGoal";
import Homepage from "../pages/Home";

const AppRouter = () => {
    const [goals, setGoals] = useLocalStorage("goals", [])

    return(
        <HashRouter>

            <Routes>
                <Route path="/dreamlife" element={<Homepage/>} />
                <Route path="/dreamlife/home" element={<Homepage/>}/>
                <Route path="/dreamlife/goals" element={<Goals/>} />
                <Route path="/dreamlife/addgoals" element={<AddGoal
                  goals={goals} setGoals={setGoals}/>} />
                <Route path="/dreamlife/activegoals" element={<ActiveGoals goals={goals}
                  setGoals={setGoals}/>}/>
                <Route path="/dreamlife/edit/:name" element={<EditGoal
                  goals={goals} setGoals={setGoals}/>}/>
            </Routes>

        </HashRouter>
    )
}
export default AppRouter
