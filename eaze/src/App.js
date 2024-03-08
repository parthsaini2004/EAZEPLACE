// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/navbar/navbar';
// import Homepage from './components/homepage/homepage';
// import Act from './components/initiatives/Act';
// import MockInterviews from './components/initiatives/Mock-interviews';
// import Rland from './components/initiatives/R-land';
// import Rainzo from './components/initiatives/Rainzo';
// import AluminiBigwigs from './components/initiatives/Alumini-bigwigs';
// import ClassSong from './components/initiatives/Class-Song';
// import LegacyThoughts from './components/initiatives/LegacyThoughts';
// import AluminiPodcasts from './components/initiatives/AluminiPodcast';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
// import { MeetTeam } from './components/MeetTeam/MeetTeam';
// import Contactus from './components/contactus/contactus';

// import Aboutus from './components/aboutus/aboutus';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        

        {/* <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/act' element={<Act />} />
          <Route path='/mock-interviews' element={<MockInterviews />} />
          <Route path='/class-song' element={<ClassSong />} />
          <Route path='/rainzo' element={<Rainzo />} />
          <Route path='/r-land' element={<Rland />} />
          <Route path='/alumini-bigwigs' element={<AluminiBigwigs />} />
          <Route path='/legacy-thoughts' element={<LegacyThoughts />} />
          <Route path='/alumini-podcasts' element={<AluminiPodcasts />} />
          <Route path='/team' element={<MeetTeam />} />
          <Route path='/aboutus' element={<Aboutus />} />

        </Routes>
        <Contactus /> */}
      </BrowserRouter>
    </>
  );
}

export default App;