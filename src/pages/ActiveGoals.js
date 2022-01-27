import _ from 'lodash';
import Goal from '../components/Goal';
import './ActiveGoals.css';
import Header from '../components/Header';

function ActiveGoals({ goals, setGoals }) {
  const handleRemoveGoal = (name) => {
    setGoals(goals.filter((goal) => goal.name !== name));
  };

  return (
    <>
      <Header />
      <div className="goal-list">
        {
            !_.isEmpty(goals) ? (
              goals.map((goal) => (
                <Goal key={goal.name} {...goal} handleRemoveGoal={handleRemoveGoal} />
              ))
            ) : (
              <p className="message">No goals available. Please add some...</p>
            )
        }
      </div>
    </>
  );
}

export default ActiveGoals;
