import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GetVideoId } from '../../HelperFunctions/GetVideoID';

const VideoDetails = ({ videoUrl, changeVideo,currentId }) => {
    const [videoDetails, setVideoDetails] = useState(null);

    const videoId = GetVideoId(videoUrl)


    useEffect(() => {
        axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=AIzaSyApS65ArJbue9zECwob6WD-_VBAXsCj40c&part=snippet`)
            .then((res) => {
                setVideoDetails(res.data.items[0].snippet)
                console.log(res.data.items[0].snippet)
            })
            .catch((error) => console.log(error))

    }, [])



    return (
        <div className={currentId == videoId ? 'flex gap-6 items-center bg-white text-black px-5 py-2 rounded-2xl my-3 cursor-pointer border-4 border-blue-500' : 'flex gap-6 items-center bg-white text-black px-5 py-2 rounded-2xl my-3 cursor-pointer'} onClick={() => changeVideo(videoId)}>
            <img className='aspect-square rounded-full w-20' src={videoDetails?.thumbnails.default.url} alt={videoDetails?.categoryId} />
            <h1 className='truncate font-semibold'>{videoDetails?.title}</h1>

        </div>
    );
};

export default VideoDetails;
