// src/components/VoiceInput.jsx
import React, { useState, useEffect } from 'react';

export default function VoiceInput({ onResult }) {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Speech Recognition not supported in this browser.');
      return;
    }
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      const speech = event.results[0][0].transcript;
      setTranscript(speech);
      onResult(speech);
      setListening(false);
      recognition.stop();
    };

    recognition.onerror = () => {
      setListening(false);
      recognition.stop();
    };

    if (listening) recognition.start();
    else recognition.stop();

    return () => {
      recognition.abort();
    };
  }, [listening, onResult]);

  return (
    <div>
      <button
        className={`p-2 rounded ${listening ? 'bg-red-500' : 'bg-blue-500'}`}
        onClick={() => setListening((prev) => !prev)}
      >
        {listening ? 'Stop Listening' : 'Start Voice Input'}
      </button>
      <p className="mt-2">Transcript: {transcript}</p>
    </div>
  );
}
