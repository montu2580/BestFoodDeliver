// import react from 'react'
import Navbar from './myComponents/Navbar'
import Hero from './myComponents/Hero'
import HeadlineCards from './myComponents/HeadlineCards'
import Food from './myComponents/Food'
import Category from './myComponents/Category'
import Footer from './myComponents/Footer'

function App() {
  return (
    <div className=" lg:mx-16 ">
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
      <Footer/>
    </div>
  );
}

export default App;
