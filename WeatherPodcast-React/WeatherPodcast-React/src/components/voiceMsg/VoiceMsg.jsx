// import React, { useState } from 'react';
// import { Play, Pause } from 'lucide-react'; // icons
// import './VoiceMsg.css';

// const VoiceMsg = ({ title, language }) => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   const togglePlay = () => {
//     setIsPlaying(!isPlaying);

//   };

//   return (
//     <div className="voiceMsgContainer">
//       <div className="voiceMsgLeft">
//         <h4 className="voiceMsgTitle">{title}</h4>
//         <p className="voiceMsgLang">{language}</p>
//       </div>
//       <button className="voiceMsgButton" onClick={togglePlay}>
//         {isPlaying ? <Pause size={20} /> : <Play size={20} />}
//       </button>
//     </div>
//   );
// };

// export default VoiceMsg;
import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import './VoiceMsg.css';

const VoiceMsg = ({ title, language, audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // sync state if user pauses from native controls
  const handleEnded = () => setIsPlaying(false);

  return (
    <div className="voiceMsgContainer">
      <div className="voiceMsgLeft">
        <h4 className="voiceMsgTitle">{title}</h4>
        <p className="voiceMsgLang">{language}</p>
      </div>

      <button className="voiceMsgButton" onClick={togglePlay}>
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={audioSrc}
        onEnded={handleEnded}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default VoiceMsg;
