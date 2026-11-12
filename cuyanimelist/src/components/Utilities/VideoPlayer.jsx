"use client"

import { XCircleIcon } from "@phosphor-icons/react"
import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {

    const [isOpen, setIsOpen] = useState(true)
    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "300",
        height: "250"
    }

    const Player = () => {
        return (

            <div className="fixed bottom-2 right-2">
            <button onClick={handleVideoPlayer}
            className="text-warna-primary float-right hover:text-warna-secondary hover:bg-warna-accent rounded-full transition-colors">
                <XCircleIcon size={24} />
            </button>
            <YouTube videoId={youtubeId} onReady={(event) => event.target.pauseVideo()}
                opts={option}/>
        </div>
        )
    }
    return isOpen ? <Player /> : <button className="fixed bottom-5 right-5 w-32 text-warna-primary hover:bg-warna-accent  hover:text-warna-secondary transition-colors rounded p-1" 
    onClick={handleVideoPlayer}>Open Video</button>
}

export default VideoPlayer
