import React, { useEffect, useRef, useCallback } from 'react';

const Drum = (props) => {
    const { keyTrigger, url, description, heatherchanger } = props;
    const audioRef = useRef(null);

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0; // Reset audio to start
            audioRef.current.play();
        }
    };

    const handleClick = () => {
        playSound();
        heatherchanger(description);
    };

    const keyClickHandler = useCallback((event) => {
        if (event.key.toUpperCase() === keyTrigger) {
            playSound();
            heatherchanger(description);
        }
    }, [keyTrigger, heatherchanger, description]);

    useEffect(() => {
        document.addEventListener('keydown', keyClickHandler);

        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener('keydown', keyClickHandler);
        };
    }, [keyClickHandler]);

    return (
        <>
            <button 
                className="drum-pad"
                id={`drum-${keyTrigger}`}
                onClick={handleClick}
            >
                <audio ref={audioRef} src={url} id={keyTrigger} className="clip"></audio>
                {keyTrigger}
            </button>
        </>
    );
};

export default Drum;