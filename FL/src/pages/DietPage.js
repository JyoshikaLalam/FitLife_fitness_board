// import React from 'react';

// const DietPage = () => (
//   <div>
//     <h2>Diet Page</h2>
//     <p>Fuel your fitness journey with balanced nutrition plans.</p>
//   </div>
// );

// export default DietPage;


import React from 'react';
import styled from 'styled-components';

const DietPage = () => {

  const dietInformation = [
    {
      name: 'Plant-based diet',
      description: `The plant-based diet focuses on consuming foods primarily from plants. This includes fruits, vegetables, nuts, seeds, oils, and whole grains, while minimizing or excluding animal products.`,
      image: '/images/plant-based-diet.jpeg'
    },
    {
      name: 'Mediterranean diet',
      description: `The Mediterranean diet is inspired by the traditional dietary patterns of countries bordering the Mediterranean Sea. It emphasizes fruits, vegetables, whole grains, fish, and healthy fats like olive oil.`,
      image: '/images/mediterranean-diet.jpeg'
    },
    {
      name: 'Paleo diet',
      description: `The Paleo diet mimics the diet of our ancestors from the Paleolithic era, focusing on whole foods such as lean meats, fish, fruits, vegetables, nuts, and seeds, while excluding processed foods, grains, and dairy.`,
      image: '/images/paleo-diet.jpg'
    },
    {
      name: 'Intermittent fasting',
      description: `Intermittent fasting involves cycling between periods of eating and fasting. It has various methods, but typically involves eating during a specific window of time each day or fasting for whole days intermittently.`,
      image: '/images/intermittent-fasting.jpeg'
    },
    {
      name: 'Low carb diet',
      description: `A low carb diet restricts carbohydrates, such as those found in sugary foods, pasta, and bread. It focuses on high-protein and high-fat foods like meat, fish, eggs, nuts, and healthy fats.`,
      image: '/images/low-carb-diet.jpeg'
    },
    {
      name: 'Atkins diet',
      description: `The Atkins diet is a low-carb diet that emphasizes protein and fats while restricting carbohydrates. It involves four phases, starting with very low carbohydrate intake and gradually increasing as you progress.`,
      image: '/images/atkins-diet.jpeg'
    },
    {
      name: 'Low-fat diet',
      description: `A low-fat diet focuses on reducing the intake of fat, especially saturated and trans fats. It encourages consuming foods that are naturally low in fat and limiting high-fat foods.`,
      image: '/images/low-fat-diet.jpeg'
    },
    {
      name: 'Keto diet',
      description: `The ketogenic (keto) diet is a low-carb, high-fat diet that involves drastically reducing carbohydrate intake and replacing it with fat. This reduction in carbs puts your body into a metabolic state called ketosis.`,
      image: '/images/keto-diet.jpeg'
    },
    {
      name: 'Clear liquid diet',
      description: `A clear liquid diet includes only liquids you can see through. It's used for a short time (often in medical contexts) to give your digestive system a rest. Examples include clear broth, clear fruit juices, and gelatin.`,
      image: '/images/clear-liquid-diet.jpeg'
    },
    {
      name: 'South Beach Diet',
      description: `The South Beach Diet is a commercial diet plan that emphasizes choosing the right carbs, unsaturated fats, and lean protein. It's designed to help control insulin levels and reduce cravings.`,
      image: '/images/south-beach-diet.jpeg'
    },
    {
      name: 'Carnivore diet',
      description: `The carnivore diet involves eating only animal products and excludes all other foods, including fruits, vegetables, grains, and nuts. It's based on the belief that animal foods are the optimal source of nutrition.`,
      image: '/images/carnivore-diet.jpeg'
    },
    {
      name: 'Dukan Diet',
      description: `The Dukan Diet is a high-protein, low-carb diet designed for weight loss. It consists of four phases: two weight loss phases and two maintenance phases, focusing on lean protein and avoiding carbs and fats.`,
      image: '/images/dukan-diet.jpeg'
    },
    {
      name: 'WW (Weight Watchers)',
      description: `WW (formerly Weight Watchers) is a popular weight loss program that assigns points to foods and encourages portion control and physical activity. It emphasizes a balanced diet and sustainable lifestyle changes.`,
      image: '/images/ww-diet.jpg'
    },
    {
      name: 'Fad diets',
      description: `Fad diets are trendy weight-loss diets that promise quick results through extreme and often unbalanced eating patterns. They may lack essential nutrients and are not sustainable for long-term health.`,
      image: '/images/fad-diets.jpeg'
    },
    {
      name: 'Raw food diet',
      description: `The raw food diet involves eating mostly raw, unprocessed foods. It emphasizes fruits, vegetables, nuts, seeds, and sprouted grains, often prepared at temperatures below 118°F (48°C) to preserve nutrients.`,
      image: '/images/raw-food-diet.jpeg'
    },
    {
      name: 'Cardiac diet',
      description: `A cardiac diet is designed to improve heart health and lower the risk of heart disease. It typically includes foods low in saturated fats, cholesterol, and sodium, and emphasizes fruits, vegetables, and lean proteins.`,
      image: '/images/cardiac-diet.jpeg'
    },
    {
      name: 'DASH diet',
      description: `The DASH (Dietary Approaches to Stop Hypertension) diet is designed to lower blood pressure and reduce the risk of heart disease. It emphasizes fruits, vegetables, whole grains, and lean proteins, and limits salt and sugar intake.`,
      image: '/images/dash-diet.jpg'
    },
    {
      name: 'Day Diet',
      description: `The Day Diet is a fad diet that involves eating specific foods on certain days of the week and restricting calories. It claims to boost metabolism and aid in weight loss, but its effectiveness and safety are debated.`,
      image: '/images/day-diet.jpeg'
    },
    {
      name: 'Exclusion diet',
      description: `An exclusion diet involves systematically removing specific foods or groups of foods from your diet to identify and manage food allergies, intolerances, or sensitivities.`,
      image: '/images/exclusion-diet.jpeg'
    },
    {
      name: 'Flexitarian diet',
      description: `The flexitarian diet is primarily plant-based but allows for occasional meat and animal products. It emphasizes plant foods and the benefits of vegetarianism while still including animal products in moderation.`,
      image: '/images/flexitarian-diet.jpeg'
    },
    {
      name: 'Grapefruit diet',
      description: `The grapefruit diet is a fad diet that involves eating grapefruit or grapefruit juice with each meal. It claims that grapefruit's enzymes help burn fat when combined with protein, but its effectiveness is not scientifically proven.`,
      image: '/images/grapefruit-diet.jpeg'
    },
    {
      name: 'Pescatarian diet',
      description: `A pescatarian diet is plant-based with the addition of seafood. It excludes meat and poultry but includes fish and other seafood, making it a flexible and health-conscious dietary choice.`,
      image: '/images/pescatarian-diet.png'
    },
    {
      name: 'Diabetic diet',
      description: `A diabetic diet is a balanced eating plan tailored to manage blood glucose levels for individuals with diabetes. It focuses on controlling carbohydrates, choosing healthy fats, and consuming fiber-rich foods.`,
      image: '/images/diabetic-diet.jpeg'
    },
    {
      name: 'Dubrow diet',
      description: `The Dubrow Diet is a combination of intermittent fasting and a low-carb diet. It involves cycles of eating and fasting windows, combined with specific food choices to promote weight loss and improve health.`,
      image: '/images/dubrow-diet.jpeg'
    },
  ];


  return (
    <Container>
      <h2>Diet Page</h2>
      <p>Fuel your fitness journey with balanced nutrition plans.</p>
      <DietList>
        {dietInformation.map((diet, index) => (
          <DietCard key={index}>
            <img src={diet.image} alt={diet.name} />
            <h3>{diet.name}</h3>
            <p>{diet.description}</p>
          </DietCard>
        ))}
      </DietList>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    color: #666;
  }
`;

const DietList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;

const DietCard = styled.div`
  width: 300px;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

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

export default DietPage;