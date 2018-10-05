navigator.getUserMedia = navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia;

window.URL = window.URL ||
  window.webkitURL ||
  window.mozURL ||
  window.msURL;

navigator.mediaDevices.getUserMedia({ video: true })
  .then((stream) => {
    const src = window.URL.createObjectURL(stream);
    const video = document.querySelector('video');
    video.src = src;
  })
  .catch((error) => {
    console.log(error);
  })

const cameraOff = () => {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
      const src = window.URL.revokeObjectURL(stream);
      const video = document.querySelector('video');
      video.src = src;
    })
    .catch((err) => {
      console.log(err);
    })
}

const btncapture = document.getElementById('capture-photo'),
  canvas = document.getElementById('canvas'),
  photo = document.getElementById('photo-replace'),
  ctx = canvas.getContext('2d');

btncapture.addEventListener('click', (e) => {
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  const data = canvas.toDataURL('image/png');
  photo.setAttribute('src', data);
  cameraOff();
});
