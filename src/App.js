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
    </div>
  );
}

export default App;
