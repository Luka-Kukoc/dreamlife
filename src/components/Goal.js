import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import "./Goal.css"

const Goal = ({name, desc, startDate, endDate, handleRemoveGoal}) =>{
    
    const navigate = useNavigate()
    
    return (
        <div className="goal-container">
        <div className="goal-card">
            <div className="goal-title-container">
                <h1 className="goal-title">{name}</h1>
            </div>
            <div className="details">
                <div>Desctiption: {desc}</div>
                <div>Start date: {startDate}</div>
                <div>End date: {endDate}</div>
            </div>
            <button onClick={() => navigate(`/dreamlife/edit/${name}`)}>Edit</button>
            <button onClick={()=>handleRemoveGoal(name)}>Delete</button>
        </div>
        </div>
    )
}

export default Goal