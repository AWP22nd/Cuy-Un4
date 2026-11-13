"use client"

import { MonitorPlayIcon, XCircleIcon } from "@phosphor-icons/react"
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

            <div className="fixed bottom-6 right-6">
                <button onClick={handleVideoPlayer}
                className="text-warna-primary float-right bg-warna-accent hover:bg-warna-secondary rounded-full transition-colors">
                    <XCircleIcon size={28} />
                </button>
                <YouTube videoId={youtubeId} onReady={(event) => event.target.pauseVideo()}
                opts={option}/>
            </div>
        )
    }

    const ButtonOpenPlayer = () => {
        return (
            <button className="fixed bottom-5 right-5 bg-warna-accent text-warna-primary hover:bg-warna-secondary transition-all rounded p-1 shadow-xl" 
            onClick={handleVideoPlayer}>
        <MonitorPlayIcon size={28} />
    </button>
        )
    }

    return isOpen ? <Player /> : <ButtonOpenPlayer /> 
}

export default VideoPlayer
