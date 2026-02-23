const video = document.getElementById('main-video');
const seekBar = document.getElementById('seek-bar');

function checkLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    // Set your private credentials here
    if(user === "Dharu" && pass === "poda lusu") {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('movie-section').classList.remove('hidden');
        // Simple applause alert
        alert("👏 APPLAUSE! Successfully Logged In 👏");
    } else {
        alert("Incorrect login!");
    }
}

function openPlayer() {
    document.getElementById('video-player-container').classList.remove('hidden');
}

function closePlayer() {
    video.pause();
    document.getElementById('video-player-container').classList.add('hidden');
}

// Play/Pause
document.getElementById('play-pause').addEventListener('click', () => {
    if (video.paused) { video.play(); } else { video.pause(); }
});

// Seek Bar Logic
video.addEventListener('loadedmetadata', () => {
    seekBar.max = video.duration;
    document.getElementById('duration-time').innerText = formatTime(video.duration);
});

video.addEventListener('timeupdate', () => {
    seekBar.value = video.currentTime;
    document.getElementById('current-time').innerText = formatTime(video.currentTime);
});

seekBar.addEventListener('input', () => {
    video.currentTime = seekBar.value;
});

// Forward/Backward Buttons
document.getElementById('forward-btn').addEventListener('click', () => video.currentTime += 10);
document.getElementById('back-btn').addEventListener('click', () => video.currentTime -= 10);

// Double Tap Logic
let lastTap = 0;
document.getElementById('tap-right').addEventListener('click', () => {
    let now = Date.now();
    if (now - lastTap < 300) { video.currentTime += 10; }
    lastTap = now;
});

document.getElementById('tap-left').addEventListener('click', () => {
    let now = Date.now();
    if (now - lastTap < 300) { video.currentTime -= 10; }
    lastTap = now;
});

// Fullscreen
document.getElementById('full-screen').addEventListener('click', () => {
    if (video.requestFullscreen) { video.requestFullscreen(); }
    else if (video.webkitRequestFullscreen) { video.webkitRequestFullscreen(); } // Safari/iOS
});

function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}
