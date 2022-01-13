import GoalForm from "../components/GoalForm"
import { useNavigate } from "react-router-dom"
const AddGoal = ({history, goals, setGoals}) => {
    
    const navigate = useNavigate()
    const handleOnSubmit = (goal) => {
        setGoals([goal, ...goals])
        navigate("/dreamlife")
    }
    
    return (
        <>
        <GoalForm handleOnSubmit={handleOnSubmit}/>        
        </>
    )
}

export default AddGoal