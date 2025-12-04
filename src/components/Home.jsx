import React from "react";
//styling for the home page


const homeStyle = () => {
  return {
    color: "#334d0c",
    textAlign: "center",
    fontSize: "2.5rem",
    fontWeight: "bold", 
  };
};



//home page content
const Home = () => {
  return (
    <div className="home" style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}>
     
      <h1 style={homeStyle()}>Welcome to Chalah's Travels 🌍</h1>

      <h2 style={{color:"#8B0000", fontSize: "2.0rem"}}>Discover restaurants that match your dietary needs.</h2>
      <p style={{color: "#304412", fontSize: "1.5rem", textAlign: "center"}}>We understand that finding the right place to eat can be challenging, especially when you have specific dietary requirements. Our platform is designed to help you discover restaurants that cater to your needs.
        Whether you're vegetarian, vegan, gluten-free, or have other dietary restrictions, we've got you covered. Simply enter your location and select your dietary preferences to find the perfect dining options near you.</p>
      <p style={{color: "#304412", fontSize: "1.5rem", textAlign: "center"}}>Join us on this culinary journey and explore a world of flavors that align with your lifestyle. Happy dining!</p>
    </div>
   
  );
};

export default Home;