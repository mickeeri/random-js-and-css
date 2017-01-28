const VideoUrlPicker = function() {
  const container = document.getElementById('video-container');

  function init() {
    listen();
  }

  function pickVideo(e) {
    e.preventDefault();

    if (e.target.className === 'pick-video') {
      const videoItem = e.target.parentElement;
      const iframe = videoItem.querySelector('iframe');
      const videoUrl = iframe.src;

      const inputElement = document.querySelector('#video_url');
      inputElement.value = videoUrl;
    }
  }

  function listen() {
    container.addEventListener('click', pickVideo);
  }
  init();
};

window.onload = VideoUrlPicker();

