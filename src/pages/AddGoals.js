import GoalForm from "../components/GoalForm"

const AddGoal = () => {
    const handleOnSubmit = (goal) => {
        console.log(goal)
    }
    
    return (
        <>
        <GoalForm handleOnSubmit={handleOnSubmit}/>        
        </>
    )
}

export default AddGoal