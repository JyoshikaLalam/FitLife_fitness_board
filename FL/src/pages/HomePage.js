import React from 'react';
import FeatureCard from '../components/FeatureCard';
import './HomePage.css';

const features = [
  {
    to: "/workout",
    imgSrc: "/images/workout.jpg",
    title: "Workout",
    description: "Build muscle, increase strength, and improve flexibility with our diverse workouts.",
    altText: "Workout illustration"
  },
  {
    to: "/diet",
    imgSrc: "/images/diet.jpg",
    title: "Diet",
    description: "Fuel your fitness journey with balanced nutrition plans.",
    altText: "Diet plan illustration"
  },
  {
    to: "/know-your-body",
    imgSrc: "/images/know-your-body.jpg",
    title: "Know your Body",
    description: "Understand your body better by tracking key metrics.",
    altText: "Body metrics illustration"
  },
  {
    to: "/customize-plan",
    imgSrc: "/images/customize-plan.jpg",
    title: "Customize your workout or Diet plan",
    description: "Get personalized workout and diet plans.",
    altText: "Customized plan illustration"
  }
];

const HomePage = () => (
  <div className="container">
    <header className="header">
      <div className="logo-container">
        <h1 className="title">Welcome to FitLife</h1>
      </div>
    </header>
    <section className="welcome-section">
      <div className="welcome-content">
        <h2 className="welcome-title">Your Journey to Fitness Starts Here</h2>
        <p className="welcome-description">Discover personalized workouts, balanced diet plans, and insightful body metrics to reach your fitness goals.</p>
      </div>
    </section>
    <section className="features-grid">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </section>
  </div>
);

export default HomePage;
