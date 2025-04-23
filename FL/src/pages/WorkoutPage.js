import React from 'react';
import styled from 'styled-components';

const workouts = [
  {
    name: 'Aerobic Exercise',
    description: 'Aerobic exercise involves continuous, rhythmic physical activity that improves cardiovascular fitness and endurance. Examples include walking, jogging, swimming, and cycling. It is great for burning calories and enhancing overall cardiovascular health.',
    image: '/images/aerobic-exercise.jpg'
  },
  {
    name: 'Cycling',
    description: 'Cycling is a low-impact aerobic exercise that improves cardiovascular fitness, strengthens muscles, and enhances joint mobility. It can be done indoors on a stationary bike or outdoors on various terrains. It also helps improve balance and coordination.',
    image: '/images/cycling.jpg'
  },
  {
    name: 'Swimming',
    description: 'Swimming is a full-body workout that improves cardiovascular fitness, builds muscle strength, and enhances flexibility. It is a low-impact exercise suitable for all fitness levels. Swimming also helps in improving lung capacity and endurance.',
    image: '/images/swimming.jpg'
  },
  {
    name: 'Strength Training',
    description: 'Strength training involves using resistance to build muscle strength and endurance. It includes exercises like lifting weights, using resistance bands, and bodyweight exercises. This workout helps in improving bone density and metabolic rate.',
    image: '/images/strength-training.jpg'
  },
  {
    name: 'Yoga',
    description: 'Yoga combines physical postures, breathing exercises, and meditation to improve flexibility, strength, and mental well-being. It promotes relaxation, reduces stress, and enhances mental clarity. Yoga is also beneficial for improving balance and posture.',
    image: '/images/yoga.jpg'
  },
  {
    name: 'Dance',
    description: 'Dance is a fun and energetic way to improve cardiovascular fitness, coordination, and balance. Different styles of dance offer various physical and mental benefits. It is also a great way to socialize and reduce stress while burning calories.',
    image: '/images/dance.jpg'
  },
  {
    name: 'High-Intensity Interval Training (HIIT)',
    description: 'High-Intensity Interval Training (HIIT) alternates between short bursts of intense exercise and periods of rest. It boosts cardiovascular fitness, burns calories quickly, and improves muscle tone. HIIT is also effective for improving metabolic rate.',
    image: '/images/hiit.jpg'
  },
  {
    name: 'Pilates',
    description: 'Pilates focuses on core strength, flexibility, and overall body awareness. It involves controlled movements that improve posture and balance. Pilates is beneficial for enhancing muscle tone, reducing back pain, and increasing overall body strength.',
    image: '/images/pilates.jpg'
  },
  {
    name: 'Running',
    description: 'Running is a high-impact aerobic exercise that improves cardiovascular health, burns calories, and builds lower body strength. It can be done on various terrains and helps in enhancing stamina and endurance. Running also aids in weight management.',
    image: '/images/running.jpg'
  },
  {
    name: 'Stretching',
    description: 'Stretching improves flexibility, reduces muscle tension, and enhances overall physical performance. It is essential for injury prevention and muscle recovery. Regular stretching also helps in improving posture and reducing muscle stiffness.',
    image: '/images/stretching.jpg'
  },
  {
    name: 'Weightlifting',
    description: 'Weightlifting involves lifting heavy weights to build muscle strength and mass. It enhances bone density, boosts metabolism, and improves overall physical strength. Weightlifting also aids in muscle definition and endurance.',
    image: '/images/weightlifting.jpg'
  },
  {
    name: 'Flexibility Training',
    description: 'Flexibility training involves stretching exercises that improve the range of motion of muscles and joints. It enhances physical performance, reduces injury risk, and helps in maintaining overall body balance. It is crucial for overall fitness and wellness.',
    image: '/images/flexibility-training.jpg'
  },
  {
    name: 'Squat',
    description: 'Squats are a fundamental exercise for building lower body strength. They target the thighs, hips, and buttocks, and improve core stability. Squats also help in enhancing balance and flexibility, making them a vital exercise for overall fitness.',
    image: '/images/squat.jpg'
  },
  {
    name: 'Balance Exercises',
    description: 'Balance exercises improve stability and coordination, reducing the risk of falls and injuries. They are crucial for overall physical fitness and are especially beneficial for older adults. These exercises help in enhancing core strength and body awareness.',
    image: '/images/balance.jpg'
  },
  {
    name: 'Calisthenics',
    description: 'Calisthenics involves bodyweight exercises that improve strength, flexibility, and endurance. Examples include push-ups, pull-ups, and dips. These exercises enhance muscle tone, cardiovascular fitness, and overall body coordination.',
    image: '/images/calisthenics.jpg'
  },
  {
    name: 'Hiking',
    description: 'Hiking is a low-impact aerobic exercise that involves walking on natural trails. It improves cardiovascular fitness, muscle strength, and mental well-being. Hiking also helps in reducing stress and improving overall physical endurance.',
    image: '/images/hiking.jpg'
  },
  {
    name: 'Kickboxing',
    description: 'Kickboxing combines martial arts techniques with cardio. It improves cardiovascular fitness, strength, and coordination, and is a great stress reliever. Kickboxing also helps in improving balance, flexibility, and overall body strength.',
    image: '/images/kickboxing.jpg'
  },
  {
    name: 'Anaerobic Exercise',
    description: 'Anaerobic exercise involves short bursts of intense activity that improve muscle strength and power. Examples include sprinting and heavy weightlifting. These exercises are effective for building muscle mass and enhancing overall physical performance.',
    image: '/images/anaerobic-exercise.jpg'
  },
  {
    name: 'Bicep Curl',
    description: 'Bicep curls are an isolation exercise that targets the biceps muscles. They are performed with dumbbells or barbells to build arm strength. Bicep curls also help in improving muscle tone and enhancing overall upper body strength.',
    image: '/images/bicep-curl.jpg'
  },
  {
    name: 'Elliptical',
    description: 'Elliptical training is a low-impact aerobic exercise that mimics walking or running. It improves cardiovascular fitness and is gentle on the joints. Elliptical workouts are great for enhancing stamina and overall physical endurance.',
    image: '/images/elliptical.jpg'
  },
  {
    name: 'Walking',
    description: 'Walking is a simple and effective aerobic exercise that improves cardiovascular health, strengthens muscles, and aids in weight management. It can be done anywhere and is suitable for all fitness levels. Walking also helps in improving mental well-being.',
    image: '/images/walking.jpg'
  }
];

const WorkoutPage = () => (
  <WorkoutPageContainer>
    <h2>Workout Page</h2>
    <p>Build muscle, increase strength, and improve flexibility with our diverse workouts.</p>
    <WorkoutGrid>
      {workouts.map((workout, index) => (
        <WorkoutCard key={index}>
          <img src={workout.image} alt={workout.name} />
          <h3>{workout.name}</h3>
          <p>{workout.description}</p>
        </WorkoutCard>
      ))}
    </WorkoutGrid>
  </WorkoutPageContainer>
);

const WorkoutPageContainer = styled.div`
  background-color: #e0f7fa; /* Light blue background */
  padding: 20px;
  min-height: 100vh;
`;

const WorkoutGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const WorkoutCard = styled.div`
  width: 300px;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 12px;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 12px;
  }

  h3 {
    margin-bottom: 8px;
  }

  p {
    color: #666;
  }
`;

export default WorkoutPage;


// import React from 'react';
// import styled from 'styled-components';

// const workouts = [
//   {
//     name: 'Aerobic Exercise',
//     description: 'Aerobic exercise involves continuous, rhythmic physical activity that improves cardiovascular fitness and endurance. Examples include walking, jogging, swimming, and cycling. It is great for burning calories and enhancing overall cardiovascular health.',
//     image: '/images/aerobic-exercise.jpg'
//   },
//   {
//     name: 'Cycling',
//     description: 'Cycling is a low-impact aerobic exercise that improves cardiovascular fitness, strengthens muscles, and enhances joint mobility. It can be done indoors on a stationary bike or outdoors on various terrains. It also helps improve balance and coordination.',
//     image: '/images/cycling.jpg'
//   },
//   {
//     name: 'Swimming',
//     description: 'Swimming is a full-body workout that improves cardiovascular fitness, builds muscle strength, and enhances flexibility. It is a low-impact exercise suitable for all fitness levels. Swimming also helps in improving lung capacity and endurance.',
//     image: '/images/swimming.jpg'
//   },
//   {
//     name: 'Strength Training',
//     description: 'Strength training involves using resistance to build muscle strength and endurance. It includes exercises like lifting weights, using resistance bands, and bodyweight exercises. This workout helps in improving bone density and metabolic rate.',
//     image: '/images/strength-training.jpg'
//   },
//   {
//     name: 'Yoga',
//     description: 'Yoga combines physical postures, breathing exercises, and meditation to improve flexibility, strength, and mental well-being. It promotes relaxation, reduces stress, and enhances mental clarity. Yoga is also beneficial for improving balance and posture.',
//     image: '/images/yoga.jpg'
//   },
//   {
//     name: 'Dance',
//     description: 'Dance is a fun and energetic way to improve cardiovascular fitness, coordination, and balance. Different styles of dance offer various physical and mental benefits. It is also a great way to socialize and reduce stress while burning calories.',
//     image: '/images/dance.jpg'
//   },
//   {
//     name: 'HIIT',
//     description: 'High-Intensity Interval Training (HIIT) alternates between short bursts of intense exercise and periods of rest. It boosts cardiovascular fitness, burns calories quickly, and improves muscle tone. HIIT is also effective for improving metabolic rate.',
//     image: '/images/hiit.jpg'
//   },
//   {
//     name: 'Pilates',
//     description: 'Pilates focuses on core strength, flexibility, and overall body awareness. It involves controlled movements that improve posture and balance. Pilates is beneficial for enhancing muscle tone, reducing back pain, and increasing overall body strength.',
//     image: '/images/pilates.jpg'
//   },
//   {
//     name: 'Running',
//     description: 'Running is a high-impact aerobic exercise that improves cardiovascular health, burns calories, and builds lower body strength. It can be done on various terrains and helps in enhancing stamina and endurance. Running also aids in weight management.',
//     image: '/images/running.jpg'
//   },
//   {
//     name: 'Stretching',
//     description: 'Stretching improves flexibility, reduces muscle tension, and enhances overall physical performance. It is essential for injury prevention and muscle recovery. Regular stretching also helps in improving posture and reducing muscle stiffness.',
//     image: '/images/stretching.jpg'
//   },
//   {
//     name: 'Weightlifting',
//     description: 'Weightlifting involves lifting heavy weights to build muscle strength and mass. It enhances bone density, boosts metabolism, and improves overall physical strength. Weightlifting also aids in muscle definition and endurance.',
//     image: '/images/weightlifting.jpg'
//   },
//   {
//     name: 'Flexibility Training',
//     description: 'Flexibility training involves stretching exercises that improve the range of motion of muscles and joints. It enhances physical performance, reduces injury risk, and helps in maintaining overall body balance. It is crucial for overall fitness and wellness.',
//     image: '/images/flexibility-training.jpg'
//   },
//   {
//     name: 'Squat',
//     description: 'Squats are a fundamental exercise for building lower body strength. They target the thighs, hips, and buttocks, and improve core stability. Squats also help in enhancing balance and flexibility, making them a vital exercise for overall fitness.',
//     image: '/images/squat.jpg'
//   },
//   {
//     name: 'Balance',
//     description: 'Balance exercises improve stability and coordination, reducing the risk of falls and injuries. They are crucial for overall physical fitness and are especially beneficial for older adults. These exercises help in enhancing core strength and body awareness.',
//     image: '/images/balance.jpg'
//   },
//   {
//     name: 'Calisthenics',
//     description: 'Calisthenics involves bodyweight exercises that improve strength, flexibility, and endurance. Examples include push-ups, pull-ups, and dips. These exercises enhance muscle tone, cardiovascular fitness, and overall body coordination.',
//     image: '/images/calisthenics.jpg'
//   },
//   {
//     name: 'Hiking',
//     description: 'Hiking is a low-impact aerobic exercise that involves walking on natural trails. It improves cardiovascular fitness, muscle strength, and mental well-being. Hiking also helps in reducing stress and improving overall physical endurance.',
//     image: '/images/hiking.jpg'
//   },
//   {
//     name: 'Kickboxing',
//     description: 'Kickboxing combines martial arts techniques with cardio. It improves cardiovascular fitness, strength, and coordination, and is a great stress reliever. Kickboxing also helps in improving balance, flexibility, and overall body strength.',
//     image: '/images/kickboxing.jpg'
//   },
//   {
//     name: 'Anaerobic Exercise',
//     description: 'Anaerobic exercise involves short bursts of intense activity that improve muscle strength and power. Examples include sprinting and heavy weightlifting. These exercises are effective for building muscle mass and enhancing overall physical performance.',
//     image: '/images/anaerobic-exercise.jpg'
//   },
//   {
//     name: 'Bicep Curl',
//     description: 'Bicep curls are an isolation exercise that targets the biceps muscles. They are performed with dumbbells or barbells to build arm strength. Bicep curls also help in improving muscle tone and enhancing overall upper body strength.',
//     image: '/images/bicep-curl.jpg'
//   },
//   {
//     name: 'Elliptical',
//     description: 'Elliptical training is a low-impact aerobic exercise that mimics walking or running. It improves cardiovascular fitness and is gentle on the joints. Elliptical workouts are great for enhancing stamina and overall physical endurance.',
//     image: '/images/elliptical.jpg'
//   },
//   {
//     name: 'Walking',
//     description: 'Walking is a simple and effective aerobic exercise that improves cardiovascular health, strengthens muscles, and aids in weight management. It can be done anywhere and is suitable for all fitness levels. Walking also helps in improving mental well-being.',
//     image: '/images/walking.jpg'
//   }
// ];

// const WorkoutPage = () => (
//   <div>
//     <h2>Workout Page</h2>
//     <p>Build muscle, increase strength, and improve flexibility with our diverse workouts.</p>
//     <WorkoutList>
//       {workouts.map((workout, index) => (
//         <WorkoutCard key={index}>
//           <img src={workout.image} alt={workout.name} />
//           <h3>{workout.name}</h3>
//           <p>{workout.description}</p>
//         </WorkoutCard>
//       ))}
//     </WorkoutList>
//   </div>
// );


// const WorkoutList = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 16px;
//   justify-content: space-around;
// `;

// const WorkoutCard = styled.div`
//   width: 300px;
//   padding: 16px;
//   border: 1px solid #ddd;
//   border-radius: 8px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   text-align: center;

//   img {
//     width: 100%;
//     border-radius: 8px;
//     margin-bottom: 12px;
//   }

//   h3 {
//     margin-bottom: 8px;
//   }

//   p {
//     color: #666;
//   }
// `;

// export default WorkoutPage;