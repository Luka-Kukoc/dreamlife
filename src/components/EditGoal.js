import GoalForm from "./GoalForm";
import { useParams, useNavigate } from "react-router-dom";


const EditGoal = ({ goals, setGoals }) => {
    const navigate = useNavigate()
    const { name } = useParams()
    const goalToEdit = goals.find((goal) => goal.name === name)

    const handleOnSubmit = (goal) => {
        const filteredGoals = goals.filter((goal) => goal.name !== name)
        setGoals([goal, ...filteredGoals])
        navigate("/dreamlife/goals")
    }

    return(
        <div>
            <GoalForm goal={goalToEdit} handleOnSubmit={handleOnSubmit} />
        </div>
    )
}

export default EditGoal