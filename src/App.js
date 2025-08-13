import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Home components
import Navbar from './components/Home/Navbar';
import Hero from './components/Home/Hero';
import Courses from './components/Home/courses';
import Education from './components/Home/education';
import Status from './components/Home/status';
import PopularCourses from './components/Home/popularcourses';
import Eightcards from './components/Home/eightcards';
import BannerSection from './components/Home/banner';
import InstructorCards from './components/Home/instructor';
import VideoSection from './components/Home/video';
import Studentreviews from './components/Home/Studentreviews';
import Lastcards from './components/Home/lastcards';
import Footer from './components/Home/footer';

// Course page component
import Course from './components/Course/course';
import Pages from './components/Pages/pages';


function App() {
  return (

    <Router>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Courses />
              <Education />
              <Status />
              <PopularCourses />
              <Eightcards />
              <BannerSection />
              <InstructorCards />
              <VideoSection />
              <Studentreviews />
              <Lastcards />
              <Footer />
            </>
          }
        />

        {/* Course Page */}
        <Route path="/courses" element={<Course />} />
        <Route path="/pages" element={<Pages />} />

      </Routes>
    </Router>
  );
}

export default App;
