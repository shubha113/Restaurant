import React from 'react'
import HeroSection from "../components/HeroSection";
import Qualities from "../components/Quality";
import Menu from "../components/Menu";
import WhoAreWe from "../components/WhoAreWe";
import Team from "../components/Team";
import Footer from "../components/Footer";
import Reservation from "../components/Reservation";
import About from '../components/about';

const Home = () => {
  return (
    <>
    <HeroSection/>
    <About/>
    <Qualities/>
    <Menu/>
    <WhoAreWe/>
    <Team/>
    <Reservation/>
    <Footer/>
    </>
  )
}

export default Home;
