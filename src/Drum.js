import React, { useRef } from 'react';

const Drum = (props) => {
    const audioRef = useRef(null);

    const playSound = () => {
        audioRef.current.play();
    };

    const handleClick = () => {
        playSound();
        props.heatherchanger(props.description);
    };

    return (
        <>
            <button 
                className="drum-pad"
                id={`drum-${props.keyTrigger}`}
                onClick={handleClick}
            >
                <audio ref={audioRef} src={props.url} id={props.keyTrigger} className="clip"></audio>
                {props.keyTrigger}
            </button>
        </>
    );
}

export default Drum;