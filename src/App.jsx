import { Routes, Route } from 'react-router-dom';
import Header from './shared/Header';
import Footer from './shared/footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Layout from './shared/Layout';

function App () {
  return (
  
  <div className="App">
    <h1>Welcome to Chalah's Travels</h1>
    <Header />
    {/*<Home />
    <About />
    <Contact />
    <Login />
    <Privacy />
    <Search />
    <Signup />}*/}
    <Footer />
 </div>
)
}

export default App;