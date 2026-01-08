const video = document.getElementById('videoPlayer');
const playBtn = document.getElementById('playPauseBtn');
const container = document.getElementById('video-container');

// 1. Simple Security Method
function checkLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    // Change these to your own secret username/password
    if (user === "amma" && pass === "love123") {
        document.getElementById('login-screen').style.display = 'none';
        container.style.display = 'flex';
    } else {
        document.getElementById('error-msg').style.display = 'block';
    }
}

// 2. Play/Pause with Button Text Update
function togglePlay() {
    if (video.paused) {
        video.play();
        playBtn.innerText = "Pause";
    } else {
        video.pause();
        playBtn.innerText = "Play";
    }
}

// 3. Time Controls
function changeTime(seconds) {
    video.currentTime += seconds;
}

// 4. Fullscreen Support
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        if (container.requestFullscreen) {
            container.requestFullscreen();
        } else if (container.webkitRequestFullscreen) { 
            container.webkitRequestFullscreen(); // For Safari/iOS
        }
    } else {
        document.exitFullscreen();
    }
}
