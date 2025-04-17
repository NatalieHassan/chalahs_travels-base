// 1. Imports (if you need React hooks or components)
import React from 'react'; // Only needed if using hooks like useState/useEffect
// No need to import Header/Footer here—they're handled in Layout/App.jsx

// 2. Component Definition
const About = () => {
  return (
    <div className="about-page">
      {/* Page-specific content */}
      <h1>About Chalah's Travels</h1>
      <p>
        We help travelers with dietary restrictions find safe, delicious dining options worldwide.
      </p>
      <section>
        <h2>Our Mission</h2>
        <p>
          To empower travelers by connecting them with restaurants that cater to kosher, halal, gluten-free, and other dietary needs.
        </p>
      </section>
    </div>
  );
};


export default About;