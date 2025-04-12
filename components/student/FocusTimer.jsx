import React, { useState, useEffect, useRef } from 'react';
import 'D:/Path2Learn/Frontend/path2learn/src/styles/student.css';

const FocusTimer = () => {
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  const [isActive, setIsActive] = useState(false);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [warning, setWarning] = useState('');
  const webcamRef = useRef(null);
  const faceNotDetectedTimeout = useRef(null);

  useEffect(() => {
    let interval = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(interval);
      setIsActive(false);
      const audio = new Audio('/path-to-completion-sound.mp3'); // 🔁 replace path
      audio.play();
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const startTimer = () => {
    setIsActive(true);
    setIsMonitoring(true);
    setWarning('');
  };

  const pauseTimer = () => setIsActive(false);

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(30 * 60);
    setIsMonitoring(false);
    setWarning('');
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (!isMonitoring || !webcamRef.current) return;

    const FaceDetection = window.FaceDetection;
    const Camera = window.Camera;

    if (!FaceDetection || !Camera) {
      console.error("MediaPipe scripts not loaded. Make sure they are in public/index.html");
      return;
    }

    const video = webcamRef.current;

    const faceDetection = new FaceDetection({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection/${file}`,
    });

    faceDetection.setOptions({
      model: 'short',
      minDetectionConfidence: 0.5,
    });

    faceDetection.onResults((results) => {
      if (results.detections && results.detections.length > 0) {
        setWarning('');
        clearTimeout(faceNotDetectedTimeout.current);
        faceNotDetectedTimeout.current = null;
      } else {
        if (!faceNotDetectedTimeout.current) {
          faceNotDetectedTimeout.current = setTimeout(() => {
            setWarning('Please return to your study position!');
            const audio = new Audio('/path-to-warning-sound.mp3'); // 🔁 replace path
            audio.play();
          }, 3000); // 10 sec
        }
      }
    });

    const camera = new Camera(video, {
      onFrame: async () => {
        await faceDetection.send({ image: video });
      },
      width: 640,
      height: 480,
    });

    camera.start();

    return () => {
      camera.stop();
      clearTimeout(faceNotDetectedTimeout.current);
    };
  }, [isMonitoring]);

  return (
    <div className="focus-timer">
      <h3>Focus Timer</h3>
      <p className="timer-display">{formatTime(timeLeft)}</p>

      <div className="timer-controls">
        {!isActive ? (
          <button className="btn btn-primary" onClick={startTimer}>
            Start Study Session
          </button>
        ) : (
          <button className="btn btn-warning" onClick={pauseTimer}>
            Pause
          </button>
        )}
        <button className="btn btn-outline" onClick={resetTimer}>
          Reset
        </button>
      </div>

      <div className="monitoring-section">
        <h4>Study Monitoring</h4>
        <video
          ref={webcamRef}
          autoPlay
          playsInline
          muted
          width="320"
          height="240"
        />
        {warning && (
          <div className="warning-message">
            <i className="fas fa-exclamation-triangle"></i>
            <p>{warning}</p>
          </div>
        )}
      </div>

      <div className="study-tips">
        <h4>Study Tips</h4>
        <ul>
          <li>Find a quiet place with good lighting</li>
          <li>Keep your phone away to avoid distractions</li>
          <li>Take short breaks every 30-45 minutes</li>
          <li>Stay hydrated and maintain good posture</li>
        </ul>
      </div>
    </div>
  );
};

export default FocusTimer;
