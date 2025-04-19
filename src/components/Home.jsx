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
    <div className="home">
      
      <h1 style={homeStyle()}>Welcome to Chalah's Travels</h1>

      <h2 style={{color:"#828220", fontSize: "2.0rem"}}>Discover restaurants that match your dietary needs.</h2>
      <p style={{color: "#304412", fontSize: "1.5rem"}}>We understand that finding the right place to eat can be challenging, especially when you have specific dietary requirements. Our platform is designed to help you discover restaurants that cater to your needs.</p>
    </div>
   
  );
};

export default Home;