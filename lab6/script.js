const tracks = [
    { name: "Teenage fever", artist: "Drake", url: "Drake.mp3", cover: "drake1.jpg" },
    { name: "Stronger", artist: "Kanye West", url: "znnkn.mp3", cover: "kanye3.jpg" },
  ];
  
  const audio = document.getElementById("audio");
  const playPauseButton = document.getElementById("play-pause");
  const nextButton = document.getElementById("next");
  const coverImage = document.getElementById("cover");
  const trackName = document.getElementById("track-name");
  const artistName = document.getElementById("artist-name");
  const trackListElement = document.getElementById("track-list");
  
  let currentTrackIndex = 0;
  
  function updateTrack(track) {
    audio.src = track.url;
    coverImage.src = track.cover;
    trackName.textContent = track.name;
    artistName.textContent = track.artist;
  }
  
  function playPause() {
    if (audio.paused) {
      audio.play();
      playPauseButton.textContent = "⏸️ Pause";
    } else {
      audio.pause();
      playPauseButton.textContent = "▶️ Play";
    }
  }
  
  function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    updateTrack(tracks[currentTrackIndex]);
    playPause();
  }
  
  playPauseButton.addEventListener("click", playPause);
  nextButton.addEventListener("click", nextTrack);
  
  tracks.forEach((track, index) => {
    const trackListItem = document.createElement("li");
    trackListItem.textContent = track.name;
    trackListItem.addEventListener("click", () => {
      currentTrackIndex = index;
      updateTrack(tracks[currentTrackIndex]);
      playPause();
    });
    trackListElement.appendChild(trackListItem);
  });
  
  updateTrack(tracks[currentTrackIndex]); // Load the first track on page load