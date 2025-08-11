import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/courses';
import Education from'./components/education';
import Status from'./components/status';
import PopularCourses from './components/popularcourses';
import Eightcards from'./components/eightcards';
import BannerSection from './components/banner';
import InstructorCards from './components/instructor';
import VideoSection from './components/video';
import Studentreviews from './components/Studentreviews';
// import Logosection from './components/logosection';
import Lastcards from './components/lastcards';
import Footer from './components/footer';
function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Courses/>
      <Education/>
      <Status/>
      <PopularCourses/>
      <Eightcards/>
      <BannerSection/>
      <InstructorCards/>
      <VideoSection/>
      <Studentreviews/>
      {/* <Logosection/> */}
      <Lastcards/>
      <Footer/>
    </div>
  );
}

export default App;
