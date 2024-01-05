export const GetVideoId = (videoUrl) => {
    const videoIdMatch = videoUrl.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    if (!videoIdMatch) {
        // Handle invalid URL
        console.error('Invalid YouTube URL:', videoUrl);
        return null;
    }

    const videoId = videoIdMatch[1];
    return videoId;
}