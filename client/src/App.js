import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import VideoPage from './components/VideoPage';
import Feedback from './components/Feedback';
import SuccessPage from './components/SuccessPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/video/:order" element={<VideoPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}

export default App;

// don't use this Router Routes as small bug 😜
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Dashboard from './components/Dashboard';
// import VideoPage from './components/VideoPage';
// import Feedback from './components/Feedback';
// import SuccessPage from './components/SuccessPage';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/feedback" element={<Feedback />} />
//         <Route path="/video/:order" element={<VideoPage />} />
//         <Route path="/success" element={<SuccessPage />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         {/* Add other routes */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
