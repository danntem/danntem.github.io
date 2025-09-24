const wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: '#888',
  progressColor: '#1db954',
  barWidth: 2,
  height: 80,
  responsive: true
});

// Load your MP3 file
wavesurfer.load('Last.mp3');

// Play/pause button
const playPauseBtn = document.getElementById('playPause');
playPauseBtn.addEventListener('click', () => {
  wavesurfer.playPause();
});

// Update time
const currentTimeSpan = document.getElementById('currentTime');
const totalTimeSpan = document.getElementById('totalTime');

wavesurfer.on('ready', () => {
  totalTimeSpan.textContent = formatTime(wavesurfer.getDuration());
});

wavesurfer.on('audioprocess', () => {
  currentTimeSpan.textContent = formatTime(wavesurfer.getCurrentTime());
});

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' + secs : secs}`;
}
