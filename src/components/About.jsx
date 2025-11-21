// 1. Imports (if you need React hooks or components)

// No need to import Header/Footer here—they're handled in Layout/App.jsx

// 2. Component Definition
const About = () => {
  return (
    <main className="about-page" style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center", 
    }}>
      {/* Page-specific content */}
      <h1>About Chalah's Travels</h1>
      <p style={ {fontSize: "1.5rem",}}>
        We help travelers with dietary restrictions find safe, delicious dining options worldwide.
      </p>
      <section>
        <h2 style={{textAlign: "center"}}>Our Mission</h2>
        <p style={ {fontSize: "1.5rem",}}>
          To empower travelers by connecting them with restaurants that cater to kosher, halal, gluten-free, and other dietary needs.
        </p>
      </section>
    </main>
  );
};


export default About;