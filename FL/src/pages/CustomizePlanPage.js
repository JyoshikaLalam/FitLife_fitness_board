// // import React, { useState } from 'react';
// import React, { useState } from 'react';
// import './CustomizePlanPage.css'; // Importing CSS file

// const CustomizePlanPage = () => {
//   const [workoutPlan, setWorkoutPlan] = useState([]);
//   const [dietPlan, setDietPlan] = useState([]);

//   const handleAddWorkout = () => {
//     const goal = prompt('Enter your goal (e.g., weight gain, weight loss, muscle building):');
//     if (goal) {
//       const newWorkout = prompt(`Enter your workout plan for ${goal}:`);
//       if (newWorkout) {
//         setWorkoutPlan([...workoutPlan, `${goal}: ${newWorkout}`]);
//       }
//     }
//   };

//   const handleAddDiet = () => {
//     const goal = prompt('Enter your goal (e.g., weight gain, weight loss, muscle building):');
//     if (goal) {
//       const newDiet = prompt(`Enter your diet plan for ${goal}:`);
//       if (newDiet) {
//         setDietPlan([...dietPlan, `${goal}: ${newDiet}`]);
//       }
//     }
//   };

//   const handleRemoveWorkout = (index) => {
//     const updatedWorkoutPlan = [...workoutPlan];
//     updatedWorkoutPlan.splice(index, 1);
//     setWorkoutPlan(updatedWorkoutPlan);
//   };

//   const handleRemoveDiet = (index) => {
//     const updatedDietPlan = [...dietPlan];
//     updatedDietPlan.splice(index, 1);
//     setDietPlan(updatedDietPlan);
//   };

//   return (
//     <div className="customize-plan-container">
//       <h1>Customize Your Plan</h1>
//       <div className="plan-section">
//         <h2>Workout Plan</h2>
//         <button className="add-button" onClick={handleAddWorkout}>Add Workout</button>
//         <ul className="plan-list">
//           {workoutPlan.map((workout, index) => (
//             <li key={index}>
//               {workout}
//               <button className="remove-button" onClick={() => handleRemoveWorkout(index)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="plan-section">
//         <h2>Diet Plan</h2>
//         <button className="add-button" onClick={handleAddDiet}>Add Diet</button>
//         <ul className="plan-list">
//           {dietPlan.map((diet, index) => (
//             <li key={index}>
//               {diet}
//               <button className="remove-button" onClick={() => handleRemoveDiet(index)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default CustomizePlanPage;

// import React, { useState } from 'react';
import React, { useState } from 'react';
import './CustomizePlanPage.css'; // Importing CSS file

const CustomizePlanPage = () => {
  const [workoutPlan, setWorkoutPlan] = useState([]);
  const [dietPlan, setDietPlan] = useState([]);

  const predefinedPlans = {
    'weight gain': {
      workout: "Upper/Lower Split: Upper (Bench Press, Overhead Press, Rows, Pull-Ups, Bicep Curls, Tricep Extensions), Lower (Squats, Deadlifts, Leg Press, Lunges, Calf Raises)",
      diet: "Calorie Surplus: 500-700 calories/day, Protein: 1.0-1.2g/lb, Carbs: 2.5-3.0g/lb, Fats: 0.4-0.5g/lb"
    },
    'weight loss': {
      workout: "Full-Body Routine: Squats, Deadlifts, Bench Press, Rows, Push-Ups, Planks, HIIT: 3 days/week, Steady-State Cardio: 2 days/week",
      diet: "Calorie Deficit: 500-700 calories/day, Protein: 1.0-1.2g/lb, Carbs: 1.5-2.0g/lb, Fats: 0.3-0.4g/lb"
    },
    'muscle building': {
      workout: "Push/Pull/Legs Split: Push (Bench Press, Overhead Press, Tricep Extensions), Pull (Rows, Pull-Ups, Bicep Curls), Legs (Squats, Deadlifts, Leg Press, Calf Raises)",
      diet: "Calorie Surplus: 300-500 calories/day, Protein: 1.0-1.2g/lb, Carbs: 2.5-3.0g/lb, Fats: 0.4-0.5g/lb"
    }
  };

  const handleAddWorkout = () => {
    const goal = prompt('Enter your goal (e.g., weight gain, weight loss, muscle building):');
    if (goal && predefinedPlans[goal]) {
      setWorkoutPlan([...workoutPlan, `${goal}: ${predefinedPlans[goal].workout}`]);
    } else {
      const newWorkout = prompt(`Enter your workout plan for ${goal}:`);
      if (newWorkout) {
        setWorkoutPlan([...workoutPlan, `${goal}: ${newWorkout}`]);
      }
    }
  };

  const handleAddDiet = () => {
    const goal = prompt('Enter your goal (e.g., weight gain, weight loss, muscle building):');
    if (goal && predefinedPlans[goal]) {
      setDietPlan([...dietPlan, `${goal}: ${predefinedPlans[goal].diet}`]);
    } else {
      const newDiet = prompt(`Enter your diet plan for ${goal}:`);
      if (newDiet) {
        setDietPlan([...dietPlan, `${goal}: ${newDiet}`]);
      }
    }
  };

  const handleRemoveWorkout = (index) => {
    const updatedWorkoutPlan = [...workoutPlan];
    updatedWorkoutPlan.splice(index, 1);
    setWorkoutPlan(updatedWorkoutPlan);
  };

  const handleRemoveDiet = (index) => {
    const updatedDietPlan = [...dietPlan];
    updatedDietPlan.splice(index, 1);
    setDietPlan(updatedDietPlan);
  };

  return (
    <div className="customize-plan-container">
      <h1>Customize Your Plan</h1>
      <div className="plan-section">
        <h2>Workout Plan</h2>
        <button className="add-button" onClick={handleAddWorkout}>Add Workout</button>
        <ul className="plan-list">
          {workoutPlan.map((workout, index) => (
            <li key={index}>
              {workout}
              <button className="remove-button" onClick={() => handleRemoveWorkout(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="plan-section">
        <h2>Diet Plan</h2>
        <button className="add-button" onClick={handleAddDiet}>Add Diet</button>
        <ul className="plan-list">
          {dietPlan.map((diet, index) => (
            <li key={index}>
              {diet}
              <button className="remove-button" onClick={() => handleRemoveDiet(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomizePlanPage;
