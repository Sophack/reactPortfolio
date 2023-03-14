import React from 'react';

//import object from components folder 
import Header from "./components/Header";
import Navbar from './components/Navbar';
import Card from './components/Card';
import Footer from './components/Footer';

// App is main component that references other components 
function App() {
  return (
   //function from a component inside a div
  <div> 
   <Header />
   <Navbar />
   <Card />
   <Footer/>
   </div>
  );
}

export default App;