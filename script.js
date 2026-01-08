const video = document.getElementById('videoPlayer');
const playBtn = document.getElementById('playPauseBtn');
const container = document.getElementById('video-container');

// Play/Pause
function togglePlay() {
    if (video.paused) {
        video.play();
        playBtn.innerText = "Pause";
    } else {
        video.pause();
        playBtn.innerText = "Play";
    }
}

// Rewind and Fast Forward
function changeTime(seconds) {
    video.currentTime += seconds;
}

// Full Screen Mode (Works for Phone and Laptop)
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        // This makes the whole container go fullscreen so buttons stay visible
        if (container.requestFullscreen) {
            container.requestFullscreen();
        } else if (container.webkitRequestFullscreen) { 
            container.webkitRequestFullscreen(); // Safari/iOS
        } else if (video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen(); // Older mobile browsers
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}