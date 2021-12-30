import GoalForm from "../components/GoalForm"

const AddGoal = ({history, goals, setGoals}) => {
    const handleOnSubmit = (goal) => {
        setGoals([goal, ...goals])
        history.push("/")
    }
    
    return (
        <>
        <GoalForm handleOnSubmit={handleOnSubmit}/>        
        </>
    )
}

export default AddGoal