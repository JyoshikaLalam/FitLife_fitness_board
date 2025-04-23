// import React, { useState } from 'react';

// const KnowYourBodyPage = () => {
//   const [weight, setWeight] = useState('');
//   const [height, setHeight] = useState('');
//   const [bmi, setBmi] = useState(null);

//   const calculateBMI = () => {
//     if (weight && height) {
//       const heightInMeters = height / 100;
//       const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
//       setBmi(bmiValue);
//     }
//   };

//   return (
//     <div>
//       <h1>Know Your Body</h1>
//       <div>
//         <label>
//           Weight (kg):
//           <input
//             type="number"
//             value={weight}
//             onChange={(e) => setWeight(e.target.value)}
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Height (cm):
//           <input
//             type="number"
//             value={height}
//             onChange={(e) => setHeight(e.target.value)}
//           />
//         </label>
//       </div>
//       <button onClick={calculateBMI}>Calculate BMI</button>
//       {bmi && (
//         <div>
//           <h2>Your BMI: {bmi}</h2>
//           <p>{/* Explanation about BMI */}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default KnowYourBodyPage;


// import React from 'react';

// const KnowYourBodyPage = () => (
//   <div>
//     <h2>Know Your Body Page</h2>
//     <p>Understand your body better by tracking key metrics.</p>
//   </div>
// );

// export default KnowYourBodyPage;
import React, { useState } from 'react';
import './KnowYourBodyPage.css'; // Import CSS file for styling
// import bmiImage from ; // Placeholder image for BMI illustration

const KnowYourBodyPage = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');
  const [bmiDescription, setBmiDescription] = useState('');

  const calculateBMI = () => {
    if (weight && height && age) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      setBmiCategory(getBMICategory(bmiValue));
      setBmiDescription(getBMIDescription(bmiValue));
    }
  };

  const getBMICategory = (bmiValue) => {
    const bmiFloat = parseFloat(bmiValue);
    if (bmiFloat < 18.5) {
      return 'Underweight';
    } else if (bmiFloat >= 18.5 && bmiFloat < 24.9) {
      return 'Normal weight';
    } else if (bmiFloat >= 24.9 && bmiFloat < 29.9) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  };

  const getBMIDescription = (bmiValue) => {
    const bmiFloat = parseFloat(bmiValue);
    
    if (bmiFloat < 18.5) {
      return (
        <div>
          <h3>Underweight</h3>
          <p>
            You are underweight, which can increase the risk of complications like bone, teeth, and fertility problems. Some signs that someone might be underweight include:
          </p>
          <ul>
            <li>Refusing to attend social events</li>
            <li>Appearing fatigued</li>
            <li>Refusing to eat in front of others</li>
          </ul>
          <p>
            If you're underweight, you can try these tips to gain weight safely:
          </p>
          <ul>
            <li>Eat more frequently, such as 5–6 smaller meals throughout the day</li>
            <li>Choose foods that are nutritious and high in calories</li>
            <li>Snack on healthy, high-energy foods like nuts, cheese, dried fruit, and milk-based smoothies</li>
            <li>Use healthy fats like avocado or olive oil in your meals</li>
            <li>Add milk powder to soups, stews, and drinks</li>
            <li>Sprinkle grated cheese on cooked food</li>
            <li>Replace black tea or coffee with milky drinks</li>
            <li>Do some light exercise to increase your appetite</li>
          </ul>
          <p>
            You can also talk with a doctor or dietitian about how many calories to eat each day or in each meal.
          </p>
        </div>
      );
    } else if (bmiFloat >= 18.5 && bmiFloat < 24.9) {
      return (
        <div>
          <h3>Normal Weight</h3>
          <p>
            You are within the normal weight range, which is generally associated with lower health risks. Keep up a healthy lifestyle by:
          </p>
          <ul>
            <li>Eating a balanced diet with plenty of fruits, vegetables, lean proteins, and whole grains</li>
            <li>Engaging in regular physical activity, such as brisk walking, cycling, or swimming</li>
            <li>Getting enough sleep and managing stress levels</li>
          </ul>
          <p>
            This will help maintain your current weight and support overall health.
          </p>
        </div>
      );
    } else if (bmiFloat >= 24.9 && bmiFloat < 29.9) {
      return (
        <div>
          <h3>Overweight</h3>
          <p>
            You are overweight, which may increase your risk of developing various health problems such as heart disease, high blood pressure, and diabetes. Consider making lifestyle changes to improve your health:
          </p>
          <ul>
            <li>Aim to lose weight gradually by making sustainable changes to your diet and exercise routine</li>
            <li>Increase physical activity levels to promote weight loss and improve overall fitness</li>
            <li>Reduce intake of processed foods, sugary drinks, and high-fat snacks</li>
            <li>Consult with a healthcare professional or dietitian for personalized advice on weight management</li>
          </ul>
          <p>
            Making these changes can help reduce health risks associated with being overweight.
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <h3>Obese</h3>
          <p>
            You are obese, which significantly increases your risk of developing serious health conditions like heart disease, stroke, and certain cancers. It's crucial to take steps to manage your weight and improve your health:
          </p>
          <ul>
            <li>Seek support from healthcare professionals or weight management programs for guidance on achieving a healthy weight</li>
            <li>Focus on making sustainable lifestyle changes, including adopting a balanced diet and increasing physical activity</li>
            <li>Monitor your progress regularly and adjust your approach as needed to maintain long-term health</li>
          </ul>
          <p>
            Addressing obesity can help reduce the risk of chronic diseases and improve overall quality of life.
          </p>
        </div>
      );
    }
  };
  

  return (
    <div className="know-your-body-container">
      <h1 className="header-title">Know Your Body</h1>
      <img src={'./images/bmi.jpg'} alt="BMI Illustration" className="bmi-image" />
      <div className="input-section">
        <label className="input-label">
          Weight (kg):
          <input
            type="number"
            className="input-field"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
      </div>
      <div className="input-section">
        <label className="input-label">
          Height (cm):
          <input
            type="number"
            className="input-field"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
      </div>
      <div className="input-section">
        <label className="input-label">
          Age:
          <input
            type="number"
            className="input-field"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
      </div>
      <button className="calculate-button" onClick={calculateBMI}>
        Calculate BMI
      </button>
      {bmi && (
        <div className="bmi-result">
          <h2 className="result-title">Your BMI: {bmi}</h2>
          <p className="category-text">BMI Category: {bmiCategory}</p>
          <div className="bmi-meter">
            <div
              className="bmi-meter-fill"
              style={{ width: `${(bmi / 40) * 100}%`, backgroundColor: getBMIColor(bmi) }}
            />
          </div>
          <p className="description-text">{bmiDescription}</p>
        </div>
      )}
    </div>
  );
};

const getBMIColor = (bmiValue) => {
  const bmiFloat = parseFloat(bmiValue);
  if (bmiFloat < 18.5) {
    return '#f44336'; // Red for underweight
  } else if (bmiFloat >= 18.5 && bmiFloat < 24.9) {
    return '#4caf50'; // Green for normal weight
  } else if (bmiFloat >= 24.9 && bmiFloat < 29.9) {
    return '#ffeb3b'; // Yellow for overweight
  } else {
    return '#f44336'; // Red for obese
  }
};

export default KnowYourBodyPage;

