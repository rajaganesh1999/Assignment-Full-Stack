
// import React, { useEffect, useRef, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import videos from '../data/videos';  // Import your videos data
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import '../VideoPage.css';  // Ensure you have the necessary CSS

// function VideoPage() {
//   const { order } = useParams();
//   const navigate = useNavigate();
//   const videoRef = useRef(null);
//   const [progress, setProgress] = useState(0);
//   const [videoCompleted, setVideoCompleted] = useState(false);
//   const [displayCompletionText, setDisplayCompletionText] = useState(`0/${videos.length} completed`);

//   const instructionalTexts = {
  //   1: (
  //     <div>
  //       <p><strong>Module 1: Personal Protective Equipment (PPE)</strong></p>
  //       <p>Importance of PPE: Explain the significance of PPE in preventing injuries and illnesses in the workplace.</p>
  //       <p>Types of PPE: Introduce various types of PPE, such as hard hats, safety glasses, gloves, earplugs, respirators, and steel-toed boots.</p>
  //       <p>Proper Use and Maintenance: Demonstrate how to properly use and maintain PPE, including inspection procedures and storage guidelines.</p>
  //     </div>
  //   ),
  //   2: "Instructional text for video 2...",
  //   3: "Instructional text for video 3...",
  //   // Add more instructional texts for other modules
  // };

//   const video = videos.find((v) => v.order === parseInt(order));

//   useEffect(() => {
//     if (videoRef.current) {
//       setProgress(0);
//       setVideoCompleted(false);
//       setDisplayCompletionText(`${parseInt(order) - 1}/${videos.length} completed`);

//       const handleTimeUpdate = () => {
//         const percentage = (videoRef.current.currentTime / videoRef.current.duration) * 100;
//         setProgress(percentage);
//         if (percentage >= 99.9) {
//           setVideoCompleted(true);
//           setDisplayCompletionText(`${order}/${videos.length} completed`);
//         }
//       };

//       videoRef.current.addEventListener('timeupdate', handleTimeUpdate);

//       return () => {
//         if (videoRef.current) {
//           videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
//         }
//       };
//     }
//   }, [order]);

//   const handleNext = () => {
//     if (videoCompleted) {
//       const nextOrder = parseInt(order) + 1;
//       if (nextOrder <= videos.length) {
//         navigate(`/video/${nextOrder}`);
//       } else {
//         navigate('/feedback');
//       }
//     }
//   };

//   const handlePrevious = () => {
//     if (parseInt(order) > 1) {
//       navigate(`/video/${parseInt(order) - 1}`);
//     }
//   };

//   return (
//     <div id="background">
//      <div className="page-container">
//        <div className="instructional-text">
//          <p>{instructionalTexts[order]}</p>
//        </div>
//        <div className="video-container">
//          <h2>{video?.title}</h2>
//          <video ref={videoRef} src={video?.url} controls />
//          <div className="nav-buttons">
//            <button onClick={handlePrevious} disabled={parseInt(order) === 1}>Previous</button>
//            <button onClick={handleNext} disabled={!videoCompleted}>
//              {parseInt(order) === videos.length ? 'Submit Feedback' : 'Next'}
//            </button>
//          </div>
//        </div>
//        <div className="circular-progress">
//          <CircularProgressbar
//            value={progress}
//            text={`${Math.round(progress)}%`}
//            styles={buildStyles({
//              pathColor: '#4CAF50',
//              textColor: '#4CAF50',
//            })}
//          />
//          <div className="progress-completion">
//            {displayCompletionText}
//          </div>
//        </div>
//      </div>
//      <div className="bottom-background"></div>
//     </div>
//   );
// }

// export default VideoPage;


import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import videos from '../data/videos';  // Import your videos data
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // I Don't Have Money To Buy FontAwsome Pro
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import the arrow icon
import '../VideoPage.css';  // Ensure you have the necessary CSS

function VideoPage() {
  const { order } = useParams();
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [videoCompleted, setVideoCompleted] = useState(false);
  const [displayCompletionText, setDisplayCompletionText] = useState(`0/${videos.length} completed`);

  const instructionalTexts = {
    1: {
      title: "Module 1: Personal Protective Equipment (PPE)",
      description: (
        <div>
          <p><strong>Importance of PPE:</strong> Explain the significance of PPE in preventing injuries and illnesses in the workplace.</p>
          <p><strong>Types of PPE:</strong> Introduce various types of PPE, such as hard hats, safety glasses, gloves, earplugs, respirators, and steel-toed boots.</p>
          <p><strong>Proper Use and Maintenance:</strong> Demonstrate how to properly use and maintain PPE, including inspection procedures and storage guidelines.</p>
        </div>
      ),
    },
    2: {
      title: "Module 2: Fire Safety and Prevention",
      description: (
        <div>
          <p><strong>Fire Hazards:</strong> Identify potential fire hazards in the workplace, such as electrical equipment, open flames, and chemical reactions.</p>
          <p><strong>Fire Extinguisher Training:</strong> Train learners on how to use a fire extinguisher correctly, including the PASS method (Pull, Aim, Squeeze, Sweep).</p>
          <p><strong>Emergency Procedures:</strong> Explain emergency procedures in case of a fire, such as evacuation routes, assembly points, and fire alarm systems.</p>
        </div>
      ),
    },
    3: {
      title: "Module 3: Electrical Safety",
      description: (
        <div>
          <p><strong>Hazards:</strong> Identify potential hazards that can lead to electrical accidents, such as exposed wires, overloaded circuits, and lack of grounding.</p>
          <p><strong>Safety Measures:</strong> Discuss the importance of lockout/tagout procedures, proper use of electrical equipment, and regular inspections.</p>
        </div>
      ),
    },
    4: {
      title: "Module 4: Ergonomics",
      description: (
        <div>
          <p><strong>Ergonomic Hazards:</strong> Explain the risks of poor ergonomics, such as repetitive strain injuries and musculoskeletal disorders.</p>
          <p><strong>Preventive Measures:</strong> Demonstrate correct posture, proper lifting techniques, and the importance of ergonomic equipment.</p>
        </div>
      ),
    },
    // Add more modules as needed
  };

  const video = videos.find((v) => v.order === parseInt(order));

  useEffect(() => {
    if (videoRef.current) {
      setProgress(0);
      setVideoCompleted(false);
      setDisplayCompletionText(`${parseInt(order) - 1}/${videos.length} completed`);

      const handleTimeUpdate = () => {
        const percentage = (videoRef.current.currentTime / videoRef.current.duration) * 100;
        setProgress(percentage);
        if (percentage >= 99.9) {
          setVideoCompleted(true);
          setDisplayCompletionText(`${order}/${videos.length} completed`);
        }
      };

      videoRef.current.addEventListener('timeupdate', handleTimeUpdate);

      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        }
      };
    }
  }, [order]);

  const handleNext = () => {
    if (videoCompleted) {
      const nextOrder = parseInt(order) + 1;
      if (nextOrder <= videos.length) {
        navigate(`/video/${nextOrder}`);
      } else {
        navigate('/feedback');
      }
    }
  };

  const handlePrevious = () => {
    if (parseInt(order) > 1) {
      navigate(`/video/${parseInt(order) - 1}`);
    }
  };

  // Generate the next module title with an arrow icon
  const getNextModuleTitle = () => {
    const nextOrder = parseInt(order) + 1;
    return instructionalTexts[nextOrder] ? (            
      <>
      <div className="next-module-container">
       {instructionalTexts[nextOrder].title}
       <img 
          src="/right-arrow_5461373.png" 
          alt="Next Module Icon" 
          className="icon-arrow" 
        />
     </div>

    </>
    ) : 'Submit Feedback';
  };

  return (
    <div id="background">
      <div className="page-container">
        <div className="instructional-text">
          <div className="instructional-content">
            <h2>{instructionalTexts[order]?.title}</h2>
            <div>{instructionalTexts[order]?.description}</div>
          </div>
        </div>
        <div className="video-container">
          <h2>{video?.title}</h2>
          <video ref={videoRef} src={video?.url} controls />
          <div className="nav-buttons">
            <button onClick={handlePrevious} disabled={parseInt(order) === 1}>Previous</button>
            <button onClick={handleNext} disabled={!videoCompleted}>
              {parseInt(order) === videos.length ? 'Submit Feedback' : getNextModuleTitle()}
            </button>
          </div>
        </div>
        <div className="circular-progress">
          <CircularProgressbar
            value={progress}
            text={`${Math.round(progress)}%`}
            styles={buildStyles({
              pathColor: '#4CAF50',
              textColor: '#4CAF50',
            })}
          />
          <div className="progress-completion">
            {displayCompletionText}
          </div>
        </div>
      </div>
      <div className='displayline'>
        <div className="bottom-background"></div>
        <div className="bottom-background1"></div>
      </div>
    </div>
  );
}

export default VideoPage;